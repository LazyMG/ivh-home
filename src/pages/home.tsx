import { Box, CssBaseline, Skeleton, Typography } from "@mui/material";

import SEO from "../common/SEO";
import { Fragment, lazy, Suspense, useEffect, useState } from "react";
import dayjs from "dayjs";
import { newsService } from "../service/newsService";
import type { NewsResponse } from "../service/newsService";

import ContactTrainingInfoSection from "../components/home/ContactTrainingInfoSection";
import SectionTitle from "../components/common/SectionTitle";
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

  // Latest News 카드 (DB 응답 형식 그대로 보관 — 상위 4개만 표시)
  const [newsItems, setNewsItems] = useState<NewsResponse[]>([]);
  // 뉴스 로딩 상태: 로딩 중 / 에러 / 완료
  const [newsStatus, setNewsStatus] = useState<"loading" | "error" | "success">(
    "loading",
  );

  // 표시용 임시 데이터 (DB 응답 형식과 동일한 형태로 작성)
  const TEMP_NEWS_ITEMS: NewsResponse[] = [
    {
      id: -1,
      title: "Post-Hannover Messe 2026: iMOVA's Journey to the Global Stage",
      content: "",
      image: "/images/home/temp_news_1.png",
      contentsUrl:
        "https://www.linkedin.com/posts/ivhkr_ivh-imova-isuite34-activity-7454488189186080768-nd_K?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFMhy2oB56RN_cDECvQ0b9Acno1kl23GWFA",
      author: "iVH",
      status: "PUBLISHED",
      tags: [],
      viewCount: 0,
      publishedAt: "2026-04-30T00:00:00.000Z",
      createdAt: "2026-04-30T00:00:00.000Z",
      updatedAt: "2026-04-30T00:00:00.000Z",
    },
    {
      id: -2,
      title: "울릉도 전력망의 미래, 가상 공간에서 먼저 검증하다",
      content: "",
      image: "/images/home/temp_news_2.png",
      contentsUrl:
        "https://www.linkedin.com/pulse/%EC%9A%B8%EB%A6%89%EB%8F%84-%EC%A0%84%EB%A0%A5%EB%A7%9D%EC%9D%98-%EB%AF%B8%EB%9E%98-%EA%B0%80%EC%83%81-%EA%B3%B5%EA%B0%84%EC%97%90%EC%84%9C-%EB%A8%BC%EC%A0%80-%EA%B2%80%EC%A6%9D%ED%95%98%EB%8B%A4-ivhkr-foicc/?trackingId=hEuvF3kWincppATk8eFZCQ%3D%3D",
      author: "iVH",
      status: "PUBLISHED",
      tags: [],
      viewCount: 0,
      publishedAt: "2026-03-31T00:00:00.000Z",
      createdAt: "2026-03-31T00:00:00.000Z",
      updatedAt: "2026-03-31T00:00:00.000Z",
    },
    {
      id: -3,
      title: "URDF의 한계 - Modelica로 완성하는 로봇 디지털 트윈",
      content: "",
      image: "/images/home/temp_news_3.png",
      contentsUrl:
        "https://www.linkedin.com/pulse/urdf%EC%9D%98-%ED%95%9C%EA%B3%84-modelica%EB%A1%9C-%EC%99%84%EC%84%B1%ED%95%98%EB%8A%94-%EB%A1%9C%EB%B4%87-%EB%94%94%EC%A7%80%ED%84%B8-%ED%8A%B8%EC%9C%88-ivhkr-yhxoc/?trackingId=euqAs%2FdY6BxyLqEsQ%2BBhoQ%3D%3D",
      author: "iVH",
      status: "PUBLISHED",
      tags: [],
      viewCount: 0,
      publishedAt: "2026-02-20T00:00:00.000Z",
      createdAt: "2026-02-20T00:00:00.000Z",
      updatedAt: "2026-02-20T00:00:00.000Z",
    },
    {
      id: -4,
      title:
        "Modelica 기반 생산라인 디지털 트윈 사례 연구 - Part 2: 로봇 설계 최적화와 AI 기반 제어기 자동 생성",
      content: "",
      image: "/images/home/temp_news_4.png",
      contentsUrl:
        "https://www.linkedin.com/pulse/modelica-%EA%B8%B0%EB%B0%98-%EC%83%9D%EC%82%B0%EB%9D%BC%EC%9D%B8-%EB%94%94%EC%A7%80%ED%84%B8-%ED%8A%B8%EC%9C%88-%EC%82%AC%EB%A1%80-%EC%97%B0%EA%B5%AC-part-2-%EB%A1%9C%EB%B4%87-%EC%84%A4%EA%B3%84-%EC%B5%9C%EC%A0%81%ED%99%94%EC%99%80-ai-%EC%A0%9C%EC%96%B4%EA%B8%B0-%EC%9E%90%EB%8F%99-%EC%83%9D%EC%84%B1-x9gzc/?trackingId=gPcHjzzW8cuIZp0Xik7%2FhQ%3D%3D",
      author: "iVH",
      status: "PUBLISHED",
      tags: [],
      viewCount: 0,
      publishedAt: "2026-01-21T00:00:00.000Z",
      createdAt: "2026-01-21T00:00:00.000Z",
      updatedAt: "2026-01-21T00:00:00.000Z",
    },
  ];

  const fetchNews = async () => {
    setNewsStatus("loading");
    try {
      const response = await newsService.getNews();
      // 임시 데이터를 DB 데이터 앞에 끼운 뒤, 앞에서 4개만 잘라서 표시
      setNewsItems([...TEMP_NEWS_ITEMS, ...response].slice(0, 4));
      // setNewsItems([...response].slice(0, 4));
      setNewsStatus("success");
    } catch {
      setNewsItems([]);
      setNewsStatus("error");
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

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
                  fontFamily: "Galderglynn-Titling-Bold",
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
              <SectionTitle text="Main Product" />
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
              <SectionTitle text="Provision" />
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
              <SectionTitle text="Latest News" />
              <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {newsStatus === "error" ? (
                  // 데이터 조회 실패
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 3,
                      py: 12,
                      color: "#737373",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "16px",
                      }}
                    >
                      뉴스를 불러오지 못했습니다.
                    </Typography>
                    <Box
                      component="button"
                      onClick={() => fetchNews()}
                      sx={{
                        background: "none",
                        border: "1px solid #C9C9C9",
                        borderRadius: "8px",
                        px: 4,
                        py: 2,
                        cursor: "pointer",
                        color: "#424242",
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "14px",
                      }}
                    >
                      다시 시도
                    </Box>
                  </Box>
                ) : newsStatus === "success" && newsItems.length === 0 ? (
                  // 조회는 성공했으나 표시할 뉴스가 없는 경우
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      py: 12,
                      color: "#737373",
                      fontFamily: "Freesentation-5-Medium",
                      fontSize: "16px",
                    }}
                  >
                    등록된 뉴스가 없습니다.
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(4,1fr)",
                      gap: 3,
                    }}
                  >
                    {newsStatus === "loading"
                      ? // 로딩 중 — 스켈레톤 카드 4개 표시
                        Array.from({ length: 4 }).map((_, i) => (
                          <Box
                            key={i}
                            sx={{
                              border: "1px solid #E5E5E5",
                              borderRadius: "16px",
                              p: 2,
                            }}
                          >
                            {/* aspect-ratio 박스로 감싸 실제 카드 이미지와 동일한 높이 보장 */}
                            <Box
                              sx={{
                                width: "100%",
                                aspectRatio: "18 / 11",
                                borderRadius: "12px",
                                overflow: "hidden",
                              }}
                            >
                              <Skeleton
                                variant="rectangular"
                                width="100%"
                                height="100%"
                              />
                            </Box>
                            <Box
                              sx={{ my: 4, borderTop: "1px dashed #C9C9C9" }}
                            />
                            {/* 실제 NewsCard 텍스트 영역과 동일한 폰트 크기·간격으로 맞춰 높이 일치 */}
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 3,
                                pb: 2,
                                px: 3,
                              }}
                            >
                              {/* 제목 2줄 (18px, lineHeight 1.4) */}
                              <Box>
                                <Skeleton
                                  variant="text"
                                  width="100%"
                                  sx={{ fontSize: "18px", lineHeight: 1.4 }}
                                />
                                <Skeleton
                                  variant="text"
                                  width="70%"
                                  sx={{ fontSize: "18px", lineHeight: 1.4 }}
                                />
                              </Box>
                              {/* 날짜 (14px) */}
                              <Skeleton
                                variant="text"
                                width="40%"
                                sx={{ fontSize: "14px" }}
                              />
                            </Box>
                          </Box>
                        ))
                      : newsItems.map((item) => (
                          <NewsCard
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            date={dayjs(item.publishedAt).format(
                              "YYYY. MM. DD",
                            )}
                            onClick={
                              item.contentsUrl
                                ? () =>
                                    window.open(
                                      item.contentsUrl,
                                      "_blank",
                                      "noopener,noreferrer",
                                    )
                                : undefined
                            }
                          />
                        ))}
                  </Box>
                )}
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
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                      background: "none",
                      border: "none",
                      p: 0,
                      cursor: "pointer",
                      color: "#424242",
                      fontFamily: "Freesentation-5-Medium",
                      fontSize: "16px",
                    }}
                    onClick={() =>
                      window.open(
                        "https://kr.linkedin.com/company/ivhkr?trk=public_post_feed-actor-image",
                      )
                    }
                  >
                    뉴스 모두 보기
                    {/* 화살표 — mask로 텍스트 색상(currentColor)을 따라가고 폰트 크기에 맞춤 */}
                    <Box
                      component="span"
                      sx={{
                        width: "1em",
                        height: "1em",
                        backgroundColor: "currentColor",
                        WebkitMaskImage: "url(/images/utils/right_arrow.png)",
                        maskImage: "url(/images/utils/right_arrow.png)",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                      }}
                    />
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
