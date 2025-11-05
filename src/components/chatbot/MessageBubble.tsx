import { useEffect, useState } from "react";
import type { Message } from "../../types/chatbot";
import { Box } from "@mui/material";
import { stripHtmlTags } from "../../utils/htmlUtils";
import logoBlack from "/images/header/ivh_logo_black.png";

// 메시지 말풍선 컴포넌트
const MessageBubble = ({ message }: { message: Message }) => {
  const isBot = message.type === "bot";
  // 화면에 실제로 표시되는 텍스트 (타이핑 효과 구현용)
  const [displayedText, setDisplayedText] = useState("");
  // 타이핑이 완료되었는지 추적하는 상태
  const [isTypingComplete, setIsTypingComplete] = useState(!message.isTyping);

  useEffect(() => {
    // HTML 태그를 제거한 순수 텍스트
    const cleanContent = stripHtmlTags(message.content);

    if (message.isTyping) {
      let index = 0;
      const interval = setInterval(() => {
        // 처음부터 현재 인덱스까지의 문자열을 추출
        if (index <= cleanContent.length) {
          setDisplayedText(cleanContent.slice(0, index));
          index++;
        } else {
          // 모든 문자가 표시되면 타이핑 완료 상태 설정
          setIsTypingComplete(true);
          clearInterval(interval);
        }
      }, 30);

      return () => clearInterval(interval);
    } else {
      setDisplayedText(cleanContent);
    }
  }, [message.content, message.isTyping]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isBot ? "flex-start" : "flex-end",
        marginBottom: "12px",
        animation: "fadeIn 0.3s ease-in",
        "@keyframes fadeIn": {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      {isBot && (
        <Box
          sx={{
            marginRight: "8px",
          }}
        >
          <img
            src={logoBlack}
            alt="logo"
            style={{ width: "36px", height: "18px" }}
          />
        </Box>
      )}
      <Box
        sx={{
          maxWidth: "70%",
          padding: "10px 14px",
          borderRadius: isBot ? "4px 16px 16px 16px" : "16px 4px 16px 16px",
          backgroundColor: "#ffffff",
          color: isBot ? "#333" : "#006699",
          border: isBot ? "none" : "1px solid #006699",
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
          wordBreak: "break-word",
          fontSize: "14px",
          lineHeight: "1.5",
        }}
      >
        {displayedText}
        {/* 타이핑 중이고 아직 완료되지 않았을 때 깜빡이는 커서(|) 표시 */}
        {message.isTyping && !isTypingComplete && (
          <Box
            component="span"
            sx={{
              marginLeft: "2px",
              animation: "blink 1s infinite",
              "@keyframes blink": {
                "0%, 100%": { opacity: 1 },
                "50%": { opacity: 0 },
              },
            }}
          >
            |
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MessageBubble;
