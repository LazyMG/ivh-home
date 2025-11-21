import { Box } from "@mui/material";

const BackgroundBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        // backgroundImage: 'url("your-background-image.jpg")', // 배경 이미지 URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // 화면 전체 높이 사용
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // 배경 위에 콘텐츠를 띄우기 위한 설정
        position: "relative",
        overflow: "hidden", // 슬라이드 넘치는 부분 숨김
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundBox;
