import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SEO from "../common/SEO";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="404 - 페이지를 찾을 수 없습니다"
        description="요청하신 페이지를 찾을 수 없습니다."
        robots="noindex, nofollow"
      />
      <Box
      component="main"
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "70vh",
        [theme.breakpoints.up("tablet")]: {
          height: "40vh",
        },
        [theme.breakpoints.up("desktop")]: {
          height: "60vh",
        },
      })}
    >
      <Typography
        sx={(theme) => ({
          fontSize: "32px",
          fontFamily: "Freesentation-7-Bold",
          color: "#374151",
          [theme.breakpoints.down("tablet")]: {
            fontSize: "24px",
          },
        })}
      >
        요청하신 페이지를 찾을 수 없습니다.
      </Typography>
      <Typography
        sx={{
          fontSize: "24px",
          fontFamily: "Freesentation-4-Regular",
          color: "#6B7280",
        }}
      >
        주소가 변경되었거나 잘못된 경로입니다.
      </Typography>
      <Button
        onClick={() => navigate("/")}
        sx={{
          mt: 3,
          padding: "10px 32px",
          fontSize: "16px",
          fontFamily: "Freesentation-6-SemiBold",
          color: "#fff",
          backgroundColor: "#1755C2",
          "&:hover": {
            backgroundColor: "#124a9e",
          },
        }}
      >
        홈으로 돌아가기
      </Button>
    </Box>
    </>
  );
};

export default NotFound;
