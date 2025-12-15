import { Box, CssBaseline } from "@mui/material";

import NewsletterList from "../components/common/NewsletterList";
import SEO from "../common/SEO";
import { useEffect } from "react";
import "../App.css";
import CardSlide from "../components/home/CardSlide";
import BackgroundBox from "../components/home/BackgroundBox";
import TempCardSlide from "../components/home/TempCardSlide";
// import FloatingButton from "../components/chatbot/FloatingButton";

const Home = () => {
  useEffect(() => {
    // 컴포넌트 마운트 시 body에 클래스 추가
    document.body.classList.add("hide-scrollbar");

    // 컴포넌트 언마운트 시 body에서 클래스 제거 (클린업 함수)
    return () => {
      document.body.classList.remove("hide-scrollbar");
    };
  }, []);

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
          // height: "100vh",
          // maxHeight: "100vh",
          maxWidth: "100vw",
          // overflow: "hidden",
          backgroundColor: "black",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        >
          {/* 콘텐츠 */}
          {/* <CardSlide /> */}
          <BackgroundBox>
            {/* <CardSlide /> */}
            <TempCardSlide />
          </BackgroundBox>
        </Box>
      </Box>
      {/* <FloatingButton /> */}

      {/* Newsletter 섹션 */}
      <Box
        component="section"
        sx={(theme) => ({
          ...theme.customStyles.homeNewsletterContainer,
        })}
      >
        <NewsletterList />
      </Box>
    </>
  );
};

export default Home;
