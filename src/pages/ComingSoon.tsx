import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import SEO from "../common/SEO";

const ComingSoon = () => {
  const location = useLocation();
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
      </Box>
    </>
  );
};

export default ComingSoon;
