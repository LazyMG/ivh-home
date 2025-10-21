import { Box, CssBaseline } from "@mui/material";
import bgImg from "/images/home/home.jpg";
import { useMediaQuery } from "@mui/material";

const Home = () => {
  // const isMobile = useMediaQuery("(max-width: 1024px)");
  const isPortrait = useMediaQuery("(orientation: portrait)");

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          // width: "100vw",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#000",
          isolation: "isolate",
        }}
      >
        <Box
          component="img"
          src={bgImg}
          alt="home background"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: isPortrait ? "contain" : "cover",
            objectPosition: "center",
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
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            zIndex: 1,
          }}
        >
          {/* 콘텐츠 */}
        </Box>
      </Box>
    </>
  );
};

export default Home;
