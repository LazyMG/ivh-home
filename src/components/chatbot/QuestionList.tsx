import { Box, Button } from "@mui/material";
import type { ChatMessage } from "../../types/chatbot";
import { stripHtmlTags } from "../../utils/htmlUtils";

// 질문 리스트 컴포넌트
const QuestionList = ({
  chatDataList,
  onQuestionClick,
  disabled,
}: {
  chatDataList: ChatMessage[];
  onQuestionClick: (question: ChatMessage) => void;
  disabled: boolean;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "flex-end",
        marginTop: "12px",
        animation: "slideInRight 0.4s ease-out",
        "@keyframes slideInRight": {
          from: { opacity: 0, transform: "translateX(20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      }}
    >
      {chatDataList.map((chatData, index) => (
        <Button
          key={chatData.id}
          onClick={() => onQuestionClick(chatData)}
          disabled={disabled}
          sx={{
            maxWidth: "70%",
            padding: "10px 14px",
            borderRadius: "16px 4px 16px 16px",
            backgroundColor: "#fff",
            color: "#006699",
            border: "1px solid #006699",
            textTransform: "none",
            fontSize: "14px",
            fontWeight: 500,
            textAlign: "left",
            lineHeight: "1.5",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            animation: `fadeInUp 0.3s ease-out ${index * 0.1}s backwards`,
            "@keyframes fadeInUp": {
              from: { opacity: 0, transform: "translateY(10px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
            "&:hover:not(:disabled)": {
              backgroundColor: "#f0f7ff",
              transform: "translateY(-2px)",
              transition: "all 0.2s",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
            },
            "&:disabled": {
              backgroundColor: "#f5f5f5",
              color: "#999",
              borderColor: "#ddd",
              cursor: "not-allowed",
            },
          }}
        >
          {stripHtmlTags(chatData.question)}
        </Button>
      ))}
    </Box>
  );
};

export default QuestionList;
