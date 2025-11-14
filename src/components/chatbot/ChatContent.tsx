import { useState, useEffect, useRef } from "react";
import { Box, CircularProgress } from "@mui/material";
import type { ChatMessage, Message } from "../../types/chatbot";
import api from "../../service/api";
import ShowQuestionButton from "./ShowQuestionButton";
import MessageBubble from "./MessageBubble";
import QuestionList from "./QuestionList";
import { stripHtmlTags } from "../../utils/htmlUtils";

const ChatContent = () => {
  // 현재 채팅방에 출력된 메시지 리스트 상태
  const [messages, setMessages] = useState<Message[]>([]);
  // 질문/대답 데이터 리스트 상태 (루트 질문 목록)
  const [chatDataList, setChatDataList] = useState<ChatMessage[]>([]);
  // 로딩 상태
  const [isLoading, setIsLoading] = useState(true);
  // 답변 생성 중 여부 (중복 질문 클릭 방지)
  const [isAnswering, setIsAnswering] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // 컴포넌트 최초 로드 시 질문 목록 요청
  useEffect(() => {
    fetchQuestions();
  }, []);

  // 1레벨 질문 목록 및 초기 메시지 세팅
  const fetchQuestions = async () => {
    setIsLoading(true);
    try {
      const response = await api.get("/chats");
      const data = response.data as ChatMessage[];
      setChatDataList(data);

      // 환영 메시지 + 첫 질문 목록 메시지 구성
      const welcomeMessage: Message = {
        id: "welcome",
        type: "bot",
        content: "안녕하세요 iVH입니다.\n무엇을 도와드릴까요?",
      };

      const initialQuestionMessage: Message = {
        id: `question-options-${Date.now()}`,
        type: "questionOptions",
        content: "",
        options: data,
      };

      setMessages([welcomeMessage, initialQuestionMessage]);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 새로운 메시지가 추가될 때마다 채팅 하단으로 스크롤 이동
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 메시지 배열에서 질문 목록 / 질문 버튼 메시지를 제거
  const removeInteractiveMessages = (messageList: Message[]) =>
    messageList.filter(
      (msg) =>
        msg.type !== "questionOptions" && msg.type !== "showQuestionButton"
    );

  // 질문 선택 필드를 메시지 형태로 추가
  const appendQuestionOptions = (options: ChatMessage[]) => {
    if (!options || options.length === 0) return;
    setMessages((prev) => {
      const base = removeInteractiveMessages(prev);
      return [
        ...base,
        {
          id: `question-options-${Date.now()}`,
          type: "questionOptions",
          content: "",
          options,
        },
      ];
    });
  };

  // 더 이상 하위 질문이 없을 때 “다른 질문” 버튼 추가
  const appendShowQuestionButton = () => {
    setMessages((prev) => {
      const base = prev.filter((msg) => msg.type !== "showQuestionButton");
      return [
        ...base,
        {
          id: `show-question-btn-${Date.now()}`,
          type: "showQuestionButton",
          content: "",
        },
      ];
    });
  };

  // 단일 질문 상세 (답변 + 하위 질문) 조회
  const fetchQuestionDetail = async (
    id: number
  ): Promise<ChatMessage | null> => {
    try {
      const response = await api.get(`/chats/${id}`);
      return response.data as ChatMessage;
    } catch (error) {
      console.error(`Failed to fetch question detail for id ${id}:`, error);
      return null;
    }
  };

  // 질문 클릭 시 사용자 메시지 추가 → 답변 → 하위 질문 순으로 진행
  const handleQuestionClick = async (chatData: ChatMessage) => {
    if (isAnswering) return;

    setIsAnswering(true);

    // 사용자가 질문한 것으로 처리
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      type: "user",
      content: chatData.question,
    };

    setMessages((prev) => {
      const base = removeInteractiveMessages(prev);
      return [...base, userMessage];
    });

    // 상세 정보를 추가 요청 (답변/하위 질문 최신화)
    const detailedChatData = await fetchQuestionDetail(chatData.id);
    const answerText = detailedChatData?.answer ?? chatData.answer;
    const childQuestions =
      detailedChatData?.children ?? chatData.children ?? [];
    const isAnswerEmpty = stripHtmlTags(answerText).trim().length === 0;

    if (isAnswerEmpty) {
      // 답변이 비어있는 경우: 사용자 메시지 제거 후 하위 질문만 노출
      setMessages((prev) => prev.filter((msg) => msg.id !== userMessage.id));
      setIsAnswering(false);

      if (childQuestions.length > 0) {
        appendQuestionOptions(childQuestions);
      } else {
        appendShowQuestionButton();
      }
      return;
    }

    // 봇 타이핑 연출 및 답변 출력
    setTimeout(() => {
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        type: "bot",
        content: answerText,
        isTyping: true,
      };

      setMessages((prev) => [...prev, botMessage]);

      const typingDuration = Math.min(
        Math.max(answerText.length * 30, 1000),
        3000
      );

      setTimeout(() => {
        // 타이핑 종료 처리
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botMessage.id ? { ...msg, isTyping: false } : msg
          )
        );

        setIsAnswering(false);

        // 하위 질문 여부에 따라 다음 액션 분기
        const followUpQuestions = childQuestions;
        if (followUpQuestions.length > 0) {
          setTimeout(() => appendQuestionOptions(followUpQuestions), 400);
        } else {
          setTimeout(() => appendShowQuestionButton(), 400);
        }
      }, typingDuration);
    }, 800);
  };

  // “다른 질문이 있으신가요?” 버튼 클릭 시 루트 질문 재노출
  const handleShowQuestionsClick = () => {
    appendQuestionOptions(chatDataList);
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",

        borderRadius: {
          mobilePortrait: 0,
          mobileLandscape: 0,
          tablet: "16px",
          desktop: "16px",
        },
      }}
    >
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
          backgroundColor: "#f8f9fa",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: "3px",
          },
        }}
      >
        {messages.map((message) => {
          if (message.type === "showQuestionButton") {
            return (
              <ShowQuestionButton
                key={message.id}
                onClick={handleShowQuestionsClick}
              />
            );
          }

          if (message.type === "questionOptions") {
            return (
              <QuestionList
                key={message.id}
                chatDataList={message.options ?? []}
                onQuestionClick={handleQuestionClick}
                disabled={isAnswering}
              />
            );
          }

          return <MessageBubble key={message.id} message={message} />;
        })}

        <div ref={chatEndRef} />
      </Box>
    </Box>
  );
};

export default ChatContent;
