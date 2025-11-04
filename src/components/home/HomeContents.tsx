import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useBreakpoint } from "../../hooks/useBreakpoint";

interface HomeContentsProps {
  title: string;
  description: string;
  description_sub?: string;
  navigate_url: string;
}

const HomeContents = ({
  title,
  description,
  description_sub,
  navigate_url,
}: HomeContentsProps) => {
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
          textAlign: isMobile ? "center" : "left",
          m: 0,
          width: isMobile ? "90%" : "100%",
          pl: isMobile ? "0" : "1.75rem",
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
          {title}
        </Typography>
        <Typography
          component="dd"
          sx={{
            width: isMobile ? "100%" : "40%",
            fontSize: isMobile ? "16px" : "18px",
            lineHeight: "1.75rem",
            textAlign: isMobile ? "center" : "left",
            color: "#fff",
            whiteSpace: "pre-line",
            fontFamily: "Freesentation-5-Medium",
            wordBreak: "keep-all",
          }}
        >
          {description}
        </Typography>
        <Typography
          component="dd"
          sx={{
            width: isMobile ? "100%" : "40%",
            fontSize: isMobile ? "16px" : "18px",
            lineHeight: "1.75rem",
            textAlign: isMobile ? "center" : "left",
            color: "#fff",
            whiteSpace: "pre-line",
            fontFamily: "Freesentation-5-Medium",
            wordBreak: "keep-all",
          }}
        >
          {description_sub}
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
              navigate(navigate_url);
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
