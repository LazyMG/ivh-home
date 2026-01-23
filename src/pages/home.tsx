import { Box, CssBaseline, Typography } from "@mui/material";

import NewsletterList from "../components/common/NewsletterList";
import SEO from "../common/SEO";
import { useEffect } from "react";

import ContactTrainingInfoSection from "../components/home/ContactTrainingInfoSection";
import MainGradientText from "../components/common/MainGradientText";
import HomeSectionTitle from "../components/home/HomeSectionTitle";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { Swiper, SwiperSlide } from "swiper/react";

import "../App.css";
import "swiper/css";

import homeData from "../data/home/home.json";
import home_partner from "../data/company/partner.json";

const Home = () => {
  const { isMobile } = useBreakpoint();

  const { iMOVA, products, video } = homeData;
  const { partner_partnerList } = home_partner;

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
          maxWidth: "100vw",
          backgroundColor: "#ffffff",
          display: "flex",
        }}
      >
        <Box
          sx={(theme) => ({
            mt: 10,
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
              src={isMobile ? iMOVA.mobile_imageUrl : iMOVA.imageUrl}
              sx={(theme) => ({
                width: "100%",
                mt: -2,
                [theme.breakpoints.up("desktop")]: { mt: -20 },
              })}
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
                  alignItems: "flex-end",
                  top: "8%",
                  right: "8%",
                },
              })}
            >
              <MainGradientText
                sx={(theme) => ({
                  fontFamily: "Freesentation-7-Bold",
                  fontSize: "20px",
                  [theme.breakpoints.up("tablet")]: {
                    fontSize: "40px",
                  },
                })}
              >
                {iMOVA.mainText}
              </MainGradientText>
              <Typography
                sx={(theme) => ({
                  color: "#5E5E5E",
                  fontFamily: "Freesentation-5-Medium",
                  fontSize: "16px",
                  [theme.breakpoints.up("tablet")]: {
                    fontSize: "24px",
                  },
                })}
              >
                {iMOVA.subText}
              </Typography>
            </Box>
            <Box
              component="img"
              src={isMobile ? iMOVA.mobile_effect : iMOVA.pc_effect}
              sx={(theme) => ({
                position: "absolute",
                bottom: "-20%",
                left: 0,
                right: 0,
                clipPath: "inset(0 0 25% 0)",
                width: "100%",
                [theme.breakpoints.up("tablet")]: {
                  bottom: "-25%",
                  left: 0,
                  right: 0,
                  clipPath: "inset(0 0 40% 0)",
                  width: "100%",
                },
              })}
            />
          </Box>
          {/* Newsletter 섹션 */}
          <Box
            component="section"
            sx={(theme) => ({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 999,
              px: 2,
              [theme.breakpoints.up("desktop")]: {
                position: "absolute",
                top: "4%",
                left: "8%",
                maxWidth: "380px",
                border: "1px solid rgba(0, 0, 0, 0.35) ",
                borderRadius: "12px",
                boxShadow: "3px 3px 1px rgba(0,0,0,0.15)",
                px: 0,
              },
            })}
          >
            <NewsletterList />
          </Box>
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
            <HomeSectionTitle text="Main Products" />
            {isMobile ? (
              <Swiper
                className="custom-swiper"
                direction={"horizontal"}
                slidesPerView={1}
                spaceBetween={24}
                centeredSlides={true}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 2px",
                }}
              >
                {products.map((product, index) => (
                  <SwiperSlide key={index}>
                    <Box
                      sx={{
                        borderRadius: "20px",
                        width: "100%",
                        aspectRatio: "4/3",
                        background:
                          "linear-gradient(white, white) padding-box, linear-gradient(to right, #339070, #1755C2) border-box",
                        border: "2px solid transparent",
                        boxSizing: "border-box",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        component="img"
                        src={product.mobile_image}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "18px",
                        }}
                      />
                      <Box
                        component="img"
                        src={product.title_image}
                        sx={{
                          position: "absolute",
                          top: 0,
                          bottom: 0,
                          left: 0,
                          right: 0,
                          m: "auto",
                        }}
                      />
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",
                  gap: 3,
                  boxSizing: "border-box",
                }}
              >
                {products.map((product) => (
                  <Box
                    key={product.name}
                    sx={{
                      borderRadius: "20px",
                      width: "100%",
                      background:
                        "linear-gradient(white, white) padding-box, linear-gradient(to right, #339070, #1755C2) border-box",
                      border: "2px solid transparent",
                      boxSizing: "border-box",
                      position: "relative",
                      overflow: "hidden",
                      "&:hover .product-bg-image": {
                        filter: "brightness(1)",
                      },
                    }}
                  >
                    <Box
                      className="product-bg-image"
                      component="img"
                      src={product.pc_image}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "18px",
                        filter: "brightness(0.7)",
                        transition: "filter 0.3s ease",
                      }}
                    />
                    <Box
                      component="img"
                      src={product.title_image}
                      sx={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        m: "auto",
                      }}
                    />
                  </Box>
                ))}
              </Box>
            )}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Box
              sx={(theme) => ({
                px: 2,
                [theme.breakpoints.up("tablet")]: {
                  px: "8%",
                },
              })}
            >
              <HomeSectionTitle text="Automatic Process" />
            </Box>
            <Box
              component="video"
              src={video}
              loop
              autoPlay
              muted
              playsInline
              preload="metadata"
              sx={(theme) => ({
                width: "100%",
                height: "auto",
                maxHeight: "72vh",
                objectFit: "cover",
                [theme.breakpoints.down("tablet")]: {
                  maxHeight: "50vh",
                },
              })}
            />
          </Box>
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
            <HomeSectionTitle text="Partners" />
            <Box
              component="ul"
              sx={(theme) => ({
                display: "flex",
                justifyContent: "between",
                alignItems: "center",
                flexWrap: "wrap",
                pl: 0,
                rowGap: 6,
                [theme.breakpoints.up("tablet")]: {
                  rowGap: 10,
                },
              })}
            >
              {partner_partnerList.map((partnerImg, index) => (
                <Box
                  key={index}
                  sx={(theme) => ({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: index < 6 ? "33.33%" : "50%",
                    [theme.breakpoints.up("tablet")]: {
                      width: "25%",
                    },
                  })}
                >
                  <Box
                    component="img"
                    src={partnerImg}
                    sx={(theme) => ({
                      minWidth: index < 6 ? "50%" : "34%",
                      maxWidth: index < 6 ? "70%" : "48%",
                      [theme.breakpoints.up("tablet")]: {
                        minWidth: "40%",
                        maxWidth: "50%",
                      },
                    })}
                  />
                </Box>
              ))}
            </Box>
          </Box>
          <ContactTrainingInfoSection />
        </Box>
      </Box>
    </>
  );
};

export default Home;
