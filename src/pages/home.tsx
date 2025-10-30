import { Box, CssBaseline } from "@mui/material";
import bgImg from "/images/home/home.jpg";
import HomeContents from "../components/home/HomeContents";
import SEO from "../common/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="IVH - 시뮬레이션 및 모빌리티 솔루션"
        description="IVH는 Dymola, VTD, Vissim 등 최첨단 시뮬레이션 도구와 에너지, 모빌리티, 스마트팩토리 솔루션을 제공하는 전문 기업입니다."
        keywords="IVH, 시뮬레이션, Dymola, VTD, Vissim, 모빌리티, 배터리, 자율주행, BEMS, 스마트팩토리, 에너지 시뮬레이션"
        ogImage="https://ivh.co.kr/images/ivh_logo_black.png"
        canonical="https://ivh.co.kr"
      />
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
