import { Box, Button, Typography } from "@mui/material";
import { FONTS } from "../../theme/theme";

interface NewsStatusMessageProps {
  message: string;
  onRetry?: () => void; // 있으면 "다시 시도" 버튼 표시 (에러 상태)
}

// Latest News 의 비어있음/에러 상태 안내 (가운데 정렬 메시지 + 선택적 재시도 버튼)
const NewsStatusMessage = ({ message, onRetry }: NewsStatusMessageProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        py: 12,
        color: "#737373",
      }}
    >
      <Typography
        sx={{ fontFamily: FONTS.freesentation.medium, fontSize: "16px" }}
      >
        {message}
      </Typography>
      {onRetry && (
        // 프로젝트 표준 액션 버튼 스타일 (남색 배경 / 살짝 라운드 / 흰 semiBold 텍스트)
        <Button
          onClick={onRetry}
          sx={{
            py: 1,
            px: 4,
            backgroundColor: "#03193F",
            minWidth: "fit-content",
            borderRadius: "4px",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "16px",
              fontFamily: FONTS.freesentation.semiBold,
              textAlign: "center",
            }}
          >
            다시 시도
          </Typography>
        </Button>
      )}
    </Box>
  );
};

export default NewsStatusMessage;
