import { useState, useEffect, useRef } from "react";
import { Box, CircularProgress } from "@mui/material";
import type { ChatMessage, Message } from "../../types/chatbot";
import api from "../../service/api";
import ShowQuestionButton from "./ShowQuestionButton";
import MessageBubble from "./MessageBubble";
import QuestionList from "./QuestionList";

const ChatContent = () => {
  // 현재 채팅방에 출력된 메시지 리스트 상태
  const [messages, setMessages] = useState<Message[]>([]);
  // 질문/대답 데이터 리스트 상태
  const [chatDataList, setChatDataList] = useState<ChatMessage[]>([]);
  // 로딩 상태
  const [isLoading, setIsLoading] = useState(true);
  // 대답중인지에 대한 상태
  const [isAnswering, setIsAnswering] = useState(false);
  // 질문 리스트 보여주는 t/f 상태
  const [showQuestionList, setShowQuestionList] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // 질문/답변 목록 fetching
  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    setIsLoading(true);
    try {
      const response = await api.get("/chats");
      const data = response.data;
      setChatDataList(data as ChatMessage[]);

      // 초기 인사 메시지
      setMessages([
        {
          id: "welcome",
          type: "bot",
          content: "안녕하세요 iVH입니다.\n무엇을 도와드릴까요?",
        },
      ]);

      // 질문 리스트 표시
      setTimeout(() => {
        setShowQuestionList(true);
      }, 500);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * 자동 스크롤
   * scrollIntoView()는 해당 요소가 화면에 보이도록 스크롤하는 메서드
   * chatEndRef의 div 요소가 제일 하단에 있으므로 제일 하단으로 자동 스크롤
   */
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, showQuestionList]);

  // 질문 클릭 핸들러
  const handleQuestionClick = async (chatData: ChatMessage) => {
    // 대답중인 경우 질문 클릭 무시
    if (isAnswering) return;

    // 대답중인 상태로 변경
    setIsAnswering(true);
    // 질문 리스트 숨기기
    setShowQuestionList(false);

    // 사용자가 질문을 보낸 것처럼 표시 (오른쪽)
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      type: "user",
      content: chatData.question,
    };

    // 기존 "다른 질문" 버튼을 제거하고 새 질문 추가
    setMessages((prev) => {
      // prev = 현재 messages 배열
      // 예: [환영메시지, 질문1, 답변1, "다른질문?" 버튼]
      const filteredMessages = prev.filter(
        (msg) => msg.type !== "showQuestionButton"
      );
      // filter는 조건에 맞는 것만 남김
      // 결과: [환영메시지, 질문1, 답변1]  (다른 질문 있냐는 버튼은 제거됨!)

      return [...filteredMessages, userMessage];
      // 결과: [환영메시지, 질문1, 답변1, 새질문2]
    });

    // 잠시 대기 후 0.8초 뒤 답변 표시
    setTimeout(() => {
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        type: "bot",
        content: chatData.answer,
        isTyping: true, // 타이핑 상태 true
      };
      // 기존 messages 배열에 사용자가 질문한 질문에 대한 새 답변 메시지 추가
      setMessages((prev) => [...prev, botMessage]);

      // 타이핑 효과 시간 계산 (최소 1초, 최대 3초)
      const typingDuration = Math.min(
        Math.max(chatData.answer.length * 30, 1000),
        3000
      );

      // 타이핑 효과 완료 후
      setTimeout(() => {
        setMessages((prev) =>
          prev.map((msg) =>
            // botMessage.id와 같은 id를 가진 메시지의 isTyping 상태를 false로 변경
            msg.id === botMessage.id ? { ...msg, isTyping: false } : msg
          )
        );
        // 이제 다른 질문 클릭 가능
        setIsAnswering(false);

        // 답변 완료 후 "다른 질문" 버튼 표시
        setTimeout(() => {
          setMessages((prev) => {
            // // 혹시 모를 중복 버튼 제거
            const filteredMessages = prev.filter(
              (msg) => msg.type !== "showQuestionButton"
            );

            // 다른 질문 버튼 추가
            return [
              ...filteredMessages,
              {
                id: `show-question-btn-${Date.now()}`,
                type: "showQuestionButton",
                content: "",
              },
            ];
          });
        }, 500);
      }, typingDuration);
    }, 800);
  };

  // 다른 질문 버튼 클릭 핸들러
  const handleShowQuestionsClick = () => {
    setShowQuestionList(true);
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
      }}
    >
      {/* 채팅 메시지 영역 */}
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
          // 다른 질문 타입이면 버튼 표시
          if (message.type === "showQuestionButton") {
            return (
              <ShowQuestionButton
                key={message.id}
                onClick={handleShowQuestionsClick}
                visible={showQuestionList}
              />
            );
          }
          // 다른 질문 타입이 아니면 일반 메시지 표시
          return <MessageBubble key={message.id} message={message} />;
        })}

        {/* 질문 리스트 영역 */}
        {/* 질문 리스트 보여주는 상태이면 질문 리스트 표시 */}
        {showQuestionList && (
          <QuestionList
            chatDataList={chatDataList}
            onQuestionClick={handleQuestionClick}
            disabled={isAnswering}
          />
        )}

        <div ref={chatEndRef} />
      </Box>
    </Box>
  );
};

export default ChatContent;
