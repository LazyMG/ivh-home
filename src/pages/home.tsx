import { Box, CssBaseline } from "@mui/material";
import bgImg from "/images/home/home.jpg";

const Home = () => {
  return (
    <>
      <>
        <CssBaseline />
        <Box
          sx={{
            width: "100dvw",
            height: "100dvh",
            background: `url(${bgImg}) no-repeat top center
    fixed`,
            backgroundSize: "cover",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            position: "relative",
            isolation: "isolate",
          }}
        ></Box>
      </>
    </>
  );
};

export default Home;
