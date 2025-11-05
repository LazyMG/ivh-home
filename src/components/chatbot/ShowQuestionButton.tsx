import { Box, Button } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

// "다른 질문이 있으신가요?" 버튼 컴포넌트
const ShowQuestionButton = ({
  onClick,
  visible,
}: {
  onClick: () => void;
  visible: boolean;
}) => {
  if (visible) return null;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        marginBottom: "12px",
        animation: "fadeIn 0.3s ease-in",
        "@keyframes fadeIn": {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      <Button
        onClick={onClick}
        startIcon={<QuestionAnswerIcon />}
        sx={{
          padding: "10px 16px",
          borderRadius: "16px",
          backgroundColor: "#ffffff",
          color: "#4A90E2",
          border: "1px solid #4A90E2",
          textTransform: "none",
          fontSize: "14px",
          fontWeight: 500,
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            backgroundColor: "#f0f7ff",
            transform: "translateY(-2px)",
            transition: "all 0.2s",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
          },
        }}
      >
        다른 질문이 있으신가요?
      </Button>
    </Box>
  );
};

export default ShowQuestionButton;
