import { Box, CssBaseline } from "@mui/material";
import bgImg from "/images/home/home.jpg";
import HomeContents from "../components/home/HomeContents";

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Box
        component="main"
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          maxHeight: "100vh",
          maxWidth: "100vw",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={bgImg}
          alt="home background"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectPosition: "center",
            objectFit: "cover",
            zIndex: 0,
            userSelect: "none",
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        >
          {/* 콘텐츠 */}
          <HomeContents />
        </Box>
      </Box>
    </>
  );
};

export default Home;
