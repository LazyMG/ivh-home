import { Box, Typography, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import SEO from "../common/SEO";

const ComingSoon = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const seoPath = location.pathname.replace(/^\//, "");
  const seoData = useSEO(seoPath);

  return (
    <>
      <SEO {...seoData} />
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
          새로운 내용을 준비하고 있습니다.
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            fontFamily: "Freesentation-4-Regular",
            color: "#6B7280",
          }}
        >
          궁금한 점이 있으시면 문의를 남겨주세요.
        </Typography>
        <Button
          onClick={() => navigate("/company/contact")}
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
          문의하기
        </Button>
      </Box>
    </>
  );
};

export default ComingSoon;
