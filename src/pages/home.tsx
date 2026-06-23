import { Box, CssBaseline, Typography } from "@mui/material";

import SEO from "../common/SEO";
import { Fragment, lazy, Suspense, useEffect } from "react";

import ContactTrainingInfoSection from "../components/home/ContactTrainingInfoSection";
import HomeSectionTitle from "../components/home/HomeSectionTitle";
import MainProductCard from "../components/home/MainProductCard";
import ProvisionCard from "../components/home/ProvisionCard";
import NewsCard from "../components/home/NewsCard";
import { useBreakpoint } from "../hooks/useBreakpoint";

import "../App.css";
import ScrollButton from "../common/ScrollButton";

const MobileProductSwiper = lazy(
  () => import("../components/home/MobileProductSwiper"),
);

import homeData from "../data/home/home.json";
import { useLocalizedNavigate } from "../i18n/useLocalizedNavigate";

const Home = () => {
  const { isMobile } = useBreakpoint();

  const { iMOVA, products } = homeData;

  const navigate = useLocalizedNavigate();

  // Latest News 카드 (임시 데이터 — 이미지/제목/날짜/링크는 추후 교체)
  const newsItems = [
    {
      image: "/images/home/temp_news.png",
      title: "Post-Hannover Messe 2026: iMOVA's Journey to the Global Stage",
      date: "2026. 04. 30",
      path: "/news/1",
    },
    {
      image: "/images/home/temp_news.png",
      title: "Post-Hannover Messe 2026: iMOVA's Journey to the Global Stage",
      date: "2026. 04. 30",
      path: "/news/2",
    },
    {
      image: "/images/home/temp_news.png",
      title: "Post-Hannover Messe 2026: iMOVA's Journey to the Global Stage",
      date: "2026. 04. 30",
      path: "/news/3",
    },
    {
      image: "/images/home/temp_news.png",
      title: "Post-Hannover Messe 2026: iMOVA's Journey to the Global Stage",
      date: "2026. 04. 30",
      path: "/news/4",
    },
  ];

  // Provision 섹션 카드 (임시 데이터 — 아이콘/문구/링크는 추후 교체)
  const provisionItems = [
    {
      icon: "/images/home/solution_icon.png",
      title: "Solution",
      description:
        "iMOVA 시리즈는 스마트 제조 환경을 실현하기 위해 개발된 고중량 자율주행 로봇 플랫폼입니다.",
      path: "/solution",
    },
    {
      icon: "/images/home/support_icon.png",
      title: "Support",
      description:
        "iVH 기술지원 서비스는 고객 요청에 정확하고 빠르게 답변합니다.",
      path: "/support",
    },
    {
      icon: "/images/home/training_icon.png",
      title: "Training",
      description:
        "iVH는 개별 고객의 요구를 충족시키기 위해 표준화된 과정과 맞춤형 교육을 모두 제공합니다.",
      path: "/support/training",
    },
  ];

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
        title="iVH - 시뮬레이션 및 모빌리티 솔루션"
        description="iVH는 다이몰라(Dymola), 모델리카(Modelica), VTD, Vissim 등 최첨단 시뮬레이션 도구와 에너지, 모빌리티, 스마트팩토리 솔루션을 제공하는 전문 기업입니다."
        keywords="iVH, 시뮬레이션, 다이몰라, Dymola, 모델리카, Modelica, VTD, Vissim, 모빌리티, 배터리, 자율주행, BEMS, 스마트팩토리, 에너지 시뮬레이션"
        ogImage="https://ivh.co.kr/images/opengraph.png"
        canonical="https://ivh.co.kr"
      />
      <CssBaseline />
      <ScrollButton threshold={100} />
      <Box
        component="main"
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "100vw",
          backgroundColor: "#ffffff",
          display: "flex",
        }}
      >
        <Box
          sx={(theme) => ({
            mt: 9,
            position: "relative",
            width: "100%",
            height: "100%",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            [theme.breakpoints.up("tablet")]: {
              gap: 12,
            },
          })}
        >
          {/* 콘텐츠 */}
          <Box sx={{ width: "100%", position: "relative" }}>
            <Box
              component="img"
              src={
                isMobile
                  ? iMOVA.mobile_imageUrl
                  : "/images/home/iMOVA_pc_main_image.png"
              }
              alt={isMobile ? iMOVA.mobile_image_alt : iMOVA.image_alt}
              fetchPriority="high"
              sx={{
                width: "100%",
                display: "block",
              }}
            />
            {/* 이미지 위 그라데이션 마스크 (위 어둡게 → 아래 투명) */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(75deg, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0) 100%)",
                pointerEvents: "none",
              }}
            />
            <Box
              sx={(theme) => ({
                position: "absolute",
                top: "4%",
                right: 0,
                left: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                [theme.breakpoints.up("tablet")]: {
                  alignItems: "flex-start",
                  top: "18%",
                  left: "8%",
                  right: "auto",
                  gap: 10,
                },
              })}
            >
              <Typography
                component="h1"
                sx={(theme) => ({
                  fontFamily: "Freesentation-7-Bold",
                  fontSize: "20px",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  textShadow: "3px 5px 6px rgba(0,0,0,0.6)",
                  whiteSpace: "pre-line", // 공백 기준 줄바꿈 반영
                  [theme.breakpoints.up("tablet")]: {
                    fontSize: "60px",
                  },
                })}
              >
                {/* 띄어쓰기마다 줄바꿈 (원문은 JSON에 한 줄로 유지) */}
                {iMOVA.mainText.replaceAll(" ", "\n")}
              </Typography>
              <Typography
                sx={(theme) => ({
                  color: "#FFFFFF",
                  fontFamily: "Freesentation-5-Medium",
                  fontSize: "16px",
                  textShadow: "3px 2px 5px rgba(0,0,0,0.6)",
                  [theme.breakpoints.up("tablet")]: {
                    fontSize: "24px",
                  },
                })}
              >
                {iMOVA.subText}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Box
              sx={(theme) => ({
                px: 2,
                display: "flex",
                flexDirection: "column",
                gap: 3,
                [theme.breakpoints.up("tablet")]: {
                  px: "8%",
                },
              })}
            >
              <HomeSectionTitle text="Main Product" />
              <Box
                sx={{
                  display: "flex",
                  gap: 8,
                  px: 6,
                  justifyContent: "space-between",
                  mt: 10,
                }}
              >
                <MainProductCard
                  image="/images/home/iMOVA_home_product.png"
                  onClick={() => navigate("/product/imova")}
                  title="/images/home/logo_imova.png"
                />
                <MainProductCard
                  image="/images/home/home_porduct_software.png"
                  onClick={() => navigate("/product/imova")}
                  category="software"
                  title="/images/home/logo_isuite.png"
                  description="iSuite 시리즈는 다수의 AMR을 통합 제어하여 안전하고 효율적인 공장 물류 흐름을 실현하는 스마트 관제 플랫폼입니다."
                />
              </Box>
              {isMobile ? (
                <Suspense
                  fallback={<Box sx={{ width: "100%", aspectRatio: "4/3" }} />}
                >
                  <MobileProductSwiper products={products} />
                </Suspense>
              ) : null}
            </Box>
            <Box
              sx={(theme) => ({
                px: 2,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                [theme.breakpoints.up("tablet")]: {
                  px: "8%",
                },
              })}
            >
              <HomeSectionTitle text="Provision" />
              <Box sx={{ display: "flex", alignItems: "stretch" }}>
                {provisionItems.map((item, i) => (
                  <Fragment key={item.title}>
                    {/* 카드 사이 점선 세로 구분선 */}
                    {i > 0 && (
                      <Box
                        sx={{
                          alignSelf: "stretch",
                          borderLeft: "1px dashed #C9C9C9",
                        }}
                      />
                    )}
                    <ProvisionCard
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      onMore={() => navigate(item.path)}
                    />
                  </Fragment>
                ))}
              </Box>
            </Box>
            <Box
              sx={(theme) => ({
                px: 2,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                [theme.breakpoints.up("tablet")]: {
                  px: "8%",
                },
              })}
            >
              <HomeSectionTitle text="Latest News" />
              <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                    gap: 3,
                  }}
                >
                  {newsItems.map((item, i) => (
                    <NewsCard
                      key={i}
                      image={item.image}
                      title={item.title}
                      date={item.date}
                      onClick={() => navigate(item.path)}
                    />
                  ))}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "flex-end",
                  }}
                >
                  <Box
                    component="button"
                    sx={{
                      background: "none",
                      border: "none",
                      p: 0,
                      cursor: "pointer",
                      color: "#424242",
                      fontFamily: "Freesentation-5-Medium",
                      fontSize: "16px",
                    }}
                  >
                    뉴스 모두 보기
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <ContactTrainingInfoSection />
        </Box>
      </Box>
    </>
  );
};

export default Home;
