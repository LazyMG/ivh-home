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
    <Box
      component="div"
      sx={{
        position: "absolute",
        top: isMobile ? "50%" : "40%",
        left: "0%",
        m: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        transform: isMobile ? "translate(-50%, -50%)" : "none",
        alignItems: isMobile ? "center" : "flex-end",
        justifyContent: "center",
      }}
    >
      <Box component="div" sx={{ width: "42%", marginRight: "8%" }}>
        <Box component="div" sx={{ width: "100%" }}>
          <Typography
            component="p"
            variant="h2"
            sx={{
              fontSize: isMobile ? "3.25rem" : "5rem",
              fontWeight: "700",
              lineHeight: 1,
              color: "#fff",
              mb: ".75rem",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box component="div" sx={{ width: "100%" }}>
          <Typography
            component="p"
            sx={{
              fontSize: isMobile ? "16px" : "18px",
              lineHeight: "1.75rem",
              color: "#fff",
              whiteSpace: "pre-line",
            }}
          >
            {description}
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: isMobile ? "16px" : "18px",
              lineHeight: "1.75rem",
              color: "#fff",
              whiteSpace: "pre-line",
            }}
          >
            {description_sub}
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            width: "100%",
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
    </Box>
  );
};

export default HomeContents;
