import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useBreakpoint } from "../../hooks/useBreakpoint";

const HomeContents = () => {
  const navigate = useNavigate();
  const { isMobile } = useBreakpoint();

  return (
    <>
      <Box
        component="dl"
        sx={{
          position: "absolute",
          top: isMobile ? "50%" : "35%",
          left: isMobile ? "50%" : "7rem",
          transform: isMobile ? "translate(-50%, -50%)" : "none",
          pl: "1.75rem",
          m: 0,
          width: isMobile ? "80%" : "auto",
        }}
      >
        <Typography
          component="dt"
          variant="h2"
          sx={{
            fontSize: isMobile ? "3.25rem" : "5rem",
            fontWeight: "700",
            lineHeight: 1,
            textAlign: isMobile ? "center" : "left",
            color: "#fff",
            mb: ".75rem",
          }}
        >
          iVH Suite
        </Typography>
        <Typography
          component="dd"
          sx={{
            fontSize: isMobile ? "16px" : "18px",
            lineHeight: "1.75rem",
            textAlign: isMobile ? "center" : "left",
            color: "#fff",
          }}
        >
          iVH Suite는 FMI, SSP, Open X 표준을 준수하는 성능 및 평가 도구입니다.
        </Typography>
        <Typography
          component="dd"
          sx={{
            fontSize: isMobile ? "16px" : "18px",
            lineHeight: "1.75rem",
            textAlign: isMobile ? "center" : "left",
            color: "#fff",
          }}
        >
          사용자 친화적이고 효육적인 설계를 지원합니다.
        </Typography>
        <Box
          component="dd"
          sx={{
            display: "flex",
            justifyContent: isMobile ? "center" : "flex-start",
            ml: 0,
            mt: "1rem",
          }}
        >
          <Button
            onClick={() => {
              navigate("/product");
            }}
            sx={{
              fontSize: "16px",
              border: "1px solid #fff",
              borderRadius: 0,
              px: "1.25rem",
              color: "#fff",

              "&:hover": {
                backgroundColor: "#fff",
                color: "#000",
              },
            }}
          >
            자세히 보기 →
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default HomeContents;
