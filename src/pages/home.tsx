import { Box, CssBaseline, Typography } from "@mui/material";

import SEO from "../common/SEO";
import { Fragment, useEffect } from "react";

import ContactTrainingInfoSection from "../components/home/ContactTrainingInfoSection";
import SectionTitle from "../components/common/SectionTitle";
import MainProductCard from "../components/home/MainProductCard";
import ProvisionCard from "../components/home/ProvisionCard";
import LatestNewsSection from "../components/home/LatestNewsSection";
import { useBreakpoint } from "../hooks/useBreakpoint";

import "../App.css";
import ScrollButton from "../common/ScrollButton";

import homeData from "../data/home/home.json";
import { useTranslation } from "react-i18next";
import { useLocalizedNavigate } from "../i18n/useLocalizedNavigate";
import { FONTS } from "../theme/theme";

const Home = () => {
  const { isMobile } = useBreakpoint();
  const { t } = useTranslation("home");

  const { iMOVA, main_products, provisions } = homeData;

  // 배열 텍스트: locale에서 통째로 가져와 index로 병합
  const mainProductsT = t("main_products", { returnObjects: true });
  const provisionsT = t("provisions", { returnObjects: true });

  const navigate = useLocalizedNavigate();

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
            mt: 7,
            position: "relative",
            width: "100%",
            height: "100%",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 7,
            [theme.breakpoints.up("tablet")]: {
              gap: 12,
            },
          })}
        >
          {/* 콘텐츠 */}
          <Box sx={{ width: "100%", position: "relative" }}>
            <Box
              component="img"
              src={isMobile ? iMOVA.mobile_imageUrl : iMOVA.imageUrl}
              alt={isMobile ? t("iMOVA.mobile_image_alt") : t("iMOVA.image_alt")}
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
                top: "10%",
                left: "8%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 2,
                [theme.breakpoints.up("tablet")]: {
                  right: "auto",
                  gap: 4,
                },
                [theme.breakpoints.up("desktop")]: {
                  top: "18%",
                  gap: 10,
                },
              })}
            >
              <Typography
                component="h1"
                sx={(theme) => ({
                  fontFamily: FONTS.galderglynn.bold,
                  fontSize: "26px",
                  color: "#FFFFFF",
                  textShadow: "0px 3px 4px  rgba(0,0,0,0.9)",
                  whiteSpace: "pre-line", // 공백 기준 줄바꿈 반영
                  lineHeight: 1.4,
                  [theme.breakpoints.up("tablet")]: {
                    fontSize: "48px",
                  },
                  [theme.breakpoints.up("desktop")]: {
                    fontSize: "60px",
                  },
                })}
              >
                {/* 띄어쓰기마다 줄바꿈 (원문은 JSON에 한 줄로 유지) */}
                {t("iMOVA.mainText").replaceAll(" ", "\n")}
              </Typography>
              <Typography
                sx={(theme) => ({
                  color: "#FFFFFF",
                  fontFamily: FONTS.freesentation.medium,
                  fontSize: "16px",
                  textShadow: "0px 3px 4px  rgba(0,0,0,0.9)",
                  [theme.breakpoints.up("tablet")]: {
                    fontSize: "20px",
                  },
                  [theme.breakpoints.up("desktop")]: {
                    fontSize: "24px",
                  },
                })}
              >
                {t("iMOVA.subText")}
              </Typography>
            </Box>
          </Box>
          {/* 본문 섹션 공통 좌우 여백 (Hero는 풀블리드라 제외). 8% ≈ 402px에서 32px */}
          <Box
            sx={(theme) => ({
              px: "8%",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              [theme.breakpoints.up("desktop")]: {
                gap: 24,
              },
            })}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <SectionTitle text="Main Product" />
              {/* 모바일 1열 세로 / tablet+ 가로 2열. 이중 렌더(스와이퍼) 제거 */}
              <Box
                sx={(theme) => ({
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                  [theme.breakpoints.up("tablet")]: {
                    flexDirection: "row",
                    gap: 8,
                    px: 6,
                    mt: 10,
                    // 두 카드를 동일 폭으로 강제 → 이미지 폭(=카드 폭)이 같아져 높이도 일치
                    // (설명 텍스트 길이에 따라 카드 폭이 달라지던 문제 해결)
                    "& > *": { flex: "1 1 0", minWidth: 0 },
                  },
                })}
              >
                {main_products.map((item, i) => (
                  <MainProductCard
                    key={item.title_image}
                    image={item.image}
                    onClick={() => navigate(item.path)}
                    category={item.category}
                    title={item.title_image}
                    description={mainProductsT[i]?.description ?? ""}
                  />
                ))}
              </Box>
            </Box>
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                gap: 5,
                [theme.breakpoints.up("desktop")]: {
                  gap: 8,
                },
              })}
            >
              <SectionTitle text="Provision" />
              {/* 모바일 1열 세로 / tablet+ 가로 3열 */}
              <Box
                sx={(theme) => ({
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                  [theme.breakpoints.up("tablet")]: { flexDirection: "row" },
                })}
              >
                {provisions.map((item, i) => (
                  <Fragment key={item.title}>
                    {/* 카드 사이 점선 구분선 — 모바일 가로 / tablet+ 세로 */}
                    {i > 0 && (
                      <Box
                        sx={(theme) => ({
                          my: 6,
                          borderTop: "2px dashed #424242",
                          [theme.breakpoints.up("tablet")]: {
                            my: 0,
                            borderTop: "none",
                            alignSelf: "stretch",
                            borderLeft: "2px dashed #424242",
                          },
                        })}
                      />
                    )}
                    <ProvisionCard
                      icon={item.icon}
                      title={item.title}
                      description={provisionsT[i]?.description ?? ""}
                      onMore={() => navigate(item.path)}
                    />
                  </Fragment>
                ))}
              </Box>
            </Box>
            <LatestNewsSection />
          </Box>
          <ContactTrainingInfoSection />
        </Box>
      </Box>
    </>
  );
};

export default Home;
