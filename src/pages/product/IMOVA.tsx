import { Box, Paper, Typography } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import resource from "../../data/product/iMOVA.json";
import TechSpecTable from "../../components/product/iMOVA/TechSpecTable";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Navigation } from "swiper/modules";

// Swiper CSS import
import "swiper/css";
import "swiper/css/pagination";
import "../../style/imova-slider.css";
import ScrollButton from "../../common/ScrollButton";
import SEO from "../../common/SEO";
import type { IMOVATechnologySpec } from "../../types/product";
import SectionTitle from "../../components/common/SectionTitle";
import ProductHero from "../../components/product/ProductHero";

const IMOVA = () => {
  const { t } = useTranslation("product/iMOVA");
  const THRESHOLD = 100;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- 동적 키 접근용
  const td = (key: string): string => t(key as any);

  // 배열 데이터: resource(이미지) + t()(텍스트) 병합
  const mainFunctionList = resource.main_function.map((item) => ({
    function_title: td(`main_function.${item.id}.function_title`),
    function_description: td(`main_function.${item.id}.function_description`),
    function_image_url: item.function_image_url,
    function_image_alt: td(`main_function.${item.id}.function_image_alt`),
  }));

  // TechSpecTable용 labels (locale에서 가져옴)
  const techSpecLabels = t("technology_spec.labels", {
    returnObjects: true,
  }) as IMOVATechnologySpec["labels"];

  // TechSpecTable용 products (resource + locale 병합)
  const technologySpecProducts =
    resource.technology_spec.technology_spec_products.map((p) => ({
      product: p.product,
      product_standard: p.product_standard,
      performance: p.performance,
      electrical: p.electrical,
      environment: p.environment,
      battery: {
        lifespan: td(
          `technology_spec.technology_spec_products.${p.id}.battery.lifespan`,
        ),
        charging_time: p.battery.charging_time,
      },
      environmental_monitoring: {
        temperature: p.environmental_monitoring.temperature,
        humidity: p.environmental_monitoring.humidity,
        dust: {
          particle_size: td(
            `technology_spec.technology_spec_products.${p.id}.environmental_monitoring.dust.particle_size`,
          ),
          concentration_range:
            p.environmental_monitoring.dust.concentration_range,
          accuracy: p.environmental_monitoring.dust.accuracy,
        },
        camera: p.environmental_monitoring.camera,
      },
    }));

  return (
    <>
      <SEO
        title={t("name")}
        description={t("title")}
        keywords="iMOVA, AMR, 자율주행로봇, 자율주행, 스마트팩토리, 무인운반, iVH"
        canonical="https://ivh.co.kr/product/imova"
      />
      <Box component="main">
        <ScrollButton threshold={THRESHOLD} />

        <ProductHero
          image={resource.main_image}
          imageAlt={t("main_image_alt")}
          badge="AMR"
          titleImage={resource.title_image}
          titleImageAlt={t("title_image_alt")}
          caption={t("page_name")}
          description={t("title")}
          underlineWidth="56%"
          breadcrumbKey="imova"
          descriptionSx={(theme: Theme) => ({
            color: "#2c2c2c",
            fontFamily: "Freesentation-5-Medium",
            maxWidth: "90%",
            [theme.breakpoints.up("tablet")]: {
              maxWidth: "80%",
            },
          })}
        />
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#03193F",
            p: 10,
            boxSizing: "border-box",
          }}
        >
          <Box
            component="video"
            aria-label="iVH 자동화 공정 소개 영상"
            src={resource.top_video}
            loop
            muted
            playsInline
            autoPlay
            sx={(theme) => ({
              width: "100%",
              height: "auto",
              maxHeight: "104vh",
              objectFit: "cover",
              display: "block",
              backgroundColor: "#ffffff",
              clipPath: "inset(0 1px 0 0)",
              [theme.breakpoints.down("tablet")]: {
                maxHeight: "50vh",
              },
            })}
          />
        </Box>

        <Box
          sx={(theme) => ({
            mt: 1,
            display: "block",
            px: "20px",
            [theme.breakpoints.up("desktop")]: {
              display: "none",
            },
          })}
        >
          <Typography
            sx={(theme) => ({
              color: "#2c2c2c",
              fontSize: "12px",
              wordBreak: "keep-all",
              fontFamily: "Freesentation-5-Medium",
              [theme.breakpoints.up("tablet")]: {
                fontSize: "18px",
              },
            })}
          >
            {t("title")}
          </Typography>
        </Box>

        <Box
          sx={(theme) => ({
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 14,
            px: "20px",
            mt: 6,
            [theme.breakpoints.up("desktop")]: {
              px: "120px",
            },
          })}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              gap: 5,
            }}
          >
            <SectionTitle text={t("section_titles.main_function")} />
            <Box
              sx={(theme) => ({
                display: "grid",
                width: "100%",
                // 모바일: 1열 / 태블릿 이상: 3열
                gridTemplateColumns: "1fr",
                [theme.breakpoints.up("tablet")]: {
                  gridTemplateColumns: "repeat(3, 1fr)",
                  width: "84%",
                  mx: "auto",
                },
              })}
            >
              {/*
                셀 배치 (태블릿 이상 3열 × 2행):
                [0] [1] [2]
                [3] [로고] [4]
                가운데 아래 칸(index 4)은 로고 자리입니다.
              */}
              {[
                mainFunctionList[0],
                mainFunctionList[1],
                mainFunctionList[2],
                mainFunctionList[3],
                null, // 로고 자리
                mainFunctionList[4],
              ].map((func, index) => {
                const isLogoCell = func === null;
                return (
                  <Box
                    key={index}
                    sx={(theme) => ({
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      // 로고 셀만 세로 중앙, 기능 셀은 위에서부터 정렬해 위치 통일
                      justifyContent: isLogoCell ? "center" : "flex-start",
                      textAlign: "center",
                      gap: 2,
                      px: 6,
                      py: 6,
                      boxSizing: "border-box",
                      // 모바일(1열): 마지막 셀 빼고 아래 점선
                      borderBottom: index < 5 ? "1px dashed #424242" : "none",
                      [theme.breakpoints.up("tablet")]: {
                        // 3열 그리드: 1·2번째 열은 오른쪽 점선, 윗줄은 아래 점선
                        borderRight:
                          index % 3 < 2 ? "1px dashed #424242" : "none",
                        borderBottom: index < 3 ? "1px dashed #424242" : "none",
                      },
                    })}
                  >
                    {isLogoCell ? (
                      <Box
                        component="img"
                        src={resource.logo_image}
                        alt="iMOVA"
                        sx={{ maxWidth: "180px", objectFit: "contain" }}
                      />
                    ) : (
                      <>
                        {/* 이미지: 고정 높이 박스 안에서 중앙 정렬 → 제목 시작 위치 통일 */}
                        <Box
                          sx={{
                            height: 100,
                            mb: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src={func.function_image_url}
                            alt={func.function_image_alt}
                            loading="lazy"
                            sx={{
                              maxHeight: "100%",
                              maxWidth: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </Box>
                        {/* 제목: 2줄 기준 최소 높이 확보 → 설명 시작 위치 통일 */}
                        <Box
                          sx={{
                            width: "88%",
                            mx: "auto",
                            minHeight: "2.4em",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Galderglynn-Titling-Book",
                              color: "#03193F",
                              fontSize: "20px",
                              lineHeight: 1.2,
                              textTransform: "uppercase",
                            }}
                          >
                            {func.function_title}
                          </Typography>
                        </Box>
                        <Box sx={{ textAlign: "start" }}>
                          <Typography
                            sx={{
                              color: "#737373",
                              lineHeight: 1.6,
                              fontFamily: "Freesentation-5-Medium",
                              fontSize: "16px",
                            }}
                          >
                            {func.function_description}
                          </Typography>
                        </Box>
                      </>
                    )}
                  </Box>
                );
              })}
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              gap: 5,
            }}
          >
            <SectionTitle text={t("section_titles.control_system")} />
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                gap: 4,
                width: "100%",
                alignItems: "center",
                [theme.breakpoints.up("desktop")]: {
                  gap: 6,
                  mt: 5,
                  px: 6,
                },
                boxSizing: "border-box",
              })}
            >
              {resource.control_system.map((system) => {
                return (
                  <Box
                    key={system.id}
                    sx={{
                      width: "100%",
                      border: "1px solid #03193F",
                      boxShadow: "4px 4px 5px 3px rgba(0,0,0,0.25)",
                      borderRadius: "24px",
                      px: 8,
                      py: 4,
                      boxSizing: "border-box",
                    }}
                  >
                    <Box
                      sx={(theme) => ({
                        display: "flex",
                        alignItems: "end",
                        gap: 2,
                        width: "100%",
                        justifyContent: "space-between",
                        flexDirection: "column",

                        [theme.breakpoints.up("desktop")]: {
                          flexDirection: "row",
                          gap: 2,
                        },
                      })}
                    >
                      <Box
                        sx={(theme) => ({
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "4px",
                          order: 0,
                          width: "100%",
                          [theme.breakpoints.up("desktop")]: {
                            width: "50%",
                          },
                        })}
                      >
                        <Box
                          component="img"
                          src={system.control_system_image_url}
                          alt={td(
                            `control_system.${system.id}.control_system_image_alt`,
                          )}
                          loading="lazy"
                          sx={{
                            height: "auto",
                            objectFit: "contain",
                            maxWidth: "100%",
                          }}
                        />
                      </Box>
                      <Box
                        sx={(theme) => ({
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                          order: 1,
                          boxSizing: "border-box",
                          [theme.breakpoints.up("tablet")]: {
                            p: 2,
                          },
                          [theme.breakpoints.up("desktop")]: {
                            maxWidth: "40%",
                            order: 0,
                            alignItems: "start",
                            mb: "2%",
                            gap: "2%",
                          },
                        })}
                      >
                        <Typography
                          sx={(theme) => ({
                            fontFamily: "Galderglynn-Titling-Regular",
                            mb: 2,
                            textAlign: "left",
                            [theme.breakpoints.up("desktop")]: {
                              textAlign: "left",
                              textTransform: "uppercase",
                              fontSize: "20px",
                              color: "#03193F",
                            },
                          })}
                        >
                          {td(
                            `control_system.${system.id}.control_system_topic`,
                          )}
                        </Typography>
                        <Typography
                          sx={(theme) => ({
                            wordBreak: "keep-all",
                            textAlign: "left",
                            lineHeight: 1.6,
                            fontSize: "16px",
                            fontFamily: "Freesentation-5-Medium",
                            color: "#737373",
                            [theme.breakpoints.up("desktop")]: {
                              textAlign: "left",
                            },
                          })}
                        >
                          {td(
                            `control_system.${system.id}.control_system_description`,
                          )}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              gap: 5,
              mb: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <SectionTitle text={t("section_titles.use_case")} />
              <Typography
                sx={{
                  fontFamily: "Galderglynn-Titling-Book",
                  fontSize: "18px",
                  color: "#737373",
                  textTransform: "uppercase",
                }}
              >
                {td("production_line.production_line_title")}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                width: "100%",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                }}
              >
                {/* 배경 이미지 = 박스들의 위치(%)·크기(cqw) 기준 컨테이너 */}
                <Box
                  sx={(theme) => ({
                    position: "relative",
                    // 박스 위치·크기를 모두 이미지 기준으로 묶어, 이미지와 한 덩어리로 스케일
                    containerType: "inline-size",
                    // 작은 화면일수록 이미지를 키워 박스가 올라갈 캔버스 확보 (노트북 넓게 → 큰 모니터 60%)
                    width: "82%",
                    backgroundImage: `url(${resource.production_line.production_line_image_url})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right center",
                    aspectRatio: "1398/991",
                    mx: "auto",
                    borderRadius: "24px",
                    border: "1px solid #03193f4b",
                    boxShadow: "4px 4px 5px 3px rgba(0,0,0,0.25)",
                    [theme.breakpoints.up(1536)]: {
                      width: "72%",
                    },

                    [theme.breakpoints.down("desktop")]: {
                      aspectRatio: "4/3",
                      width: "100%",
                    },
                  })}
                >
                  {/* 데스크톱: 텍스트 박스 (위치=이미지 % / 크기=이미지 폭 cqw) */}
                  {resource.production_line.production_line_list.map((item) => (
                    <Box
                      key={item.id}
                      sx={(theme) => ({
                        position: "absolute",
                        // 이미지 폭 기준(cqw) → 이미지가 줄면 박스도 같이 축소
                        width: "clamp(220px, 36cqw, 360px)",
                        border: `2px solid ${item.production_line_color}`,
                        display: "flex",
                        flexDirection: "column",
                        gap: "clamp(6px, 1.2cqw, 14px)",
                        px: "clamp(14px, 3.2cqw, 32px)",
                        py: "clamp(10px, 2cqw, 22px)",
                        boxSizing: "border-box",
                        ...item.position,
                        // 반투명 + blur 글래스 효과 (이미지와 겹친 부분이 흐려짐)
                        backgroundColor: "rgba(255, 255, 255, 0.4)",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        [theme.breakpoints.down("desktop")]: {
                          display: "none",
                        },
                      })}
                    >
                      <Typography
                        sx={{
                          textAlign: "center",
                          color: item.production_line_color,
                          fontFamily: "Galderglynn-Titling-Regular",
                          fontSize: "clamp(13px, 1.9cqw, 16px)",
                          wordBreak: "keep-all",
                          textTransform: "uppercase",
                          width: "80%",
                          mx: "auto",
                        }}
                      >
                        {td(
                          `production_line.production_line_list.${item.id}.production_line_topic`,
                        )}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "clamp(11px, 1.6cqw, 14px)",
                          fontFamily: "Freesentation-5-Medium",
                          color: "#737373",
                        }}
                      >
                        {td(
                          `production_line.production_line_list.${item.id}.production_line_description`,
                        )}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                {/** 컨테이너 크기 변경, 슬라이더 하나만 보이도록 */}
                <Box
                  sx={(theme) => ({
                    display: "none",
                    [theme.breakpoints.down("desktop")]: {
                      display: "block",
                      mt: 3,
                      position: "relative",
                      width: "100%",
                      px: "20px",
                      pt: 4,
                      boxSizing: "border-box",
                    },
                  })}
                >
                  {/* Prev 버튼 */}
                  <Box
                    className="imova-prev-btn"
                    sx={{
                      position: "absolute",
                      left: "4px",
                      top: "calc(50% - 14px)",
                      zIndex: 10,
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      backgroundColor: "#b0b0b0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      "&:hover": { backgroundColor: "#888" },
                    }}
                  >
                    <Box
                      sx={{
                        width: "8px",
                        height: "8px",
                        borderTop: "2px solid #fff",
                        borderRight: "2px solid #fff",
                        transform: "rotate(-135deg)",
                        ml: "2px",
                      }}
                    />
                  </Box>
                  {/* Next 버튼 */}
                  <Box
                    className="imova-next-btn"
                    sx={{
                      position: "absolute",
                      right: "4px",
                      top: "calc(50% - 14px)",
                      zIndex: 10,
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      backgroundColor: "#b0b0b0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      "&:hover": { backgroundColor: "#888" },
                    }}
                  >
                    <Box
                      sx={{
                        width: "8px",
                        height: "8px",
                        borderTop: "2px solid #fff",
                        borderRight: "2px solid #fff",
                        transform: "rotate(45deg)",
                        mr: "2px",
                      }}
                    />
                  </Box>
                  <Swiper
                    direction={"horizontal"}
                    slidesPerView={1}
                    spaceBetween={8}
                    mousewheel={false}
                    navigation={{
                      prevEl: ".imova-prev-btn",
                      nextEl: ".imova-next-btn",
                    }}
                    loop={true}
                    centeredSlides={true}
                    modules={[Mousewheel, Pagination, Navigation]}
                    style={{
                      width: "100%",
                      height: "100%",
                      paddingBottom: "60px",
                    }}
                  >
                    {resource.production_line.production_line_list.map(
                      (item) => (
                        <SwiperSlide key={item.id}>
                          <Paper
                            elevation={3}
                            sx={{
                              p: 2,
                              mx: 2,
                              borderTop: `3px solid ${item.production_line_color}`,
                              backgroundColor: "rgba(255, 255, 255, 0.95)",
                              display: "flex",
                              flexDirection: "column",
                              gap: 3,
                              minHeight: "80%",
                            }}
                          >
                            <Typography
                              sx={{
                                color: item.production_line_color,
                                fontFamily: "Freesentation-7-Bold",
                                fontSize: "18px",
                                wordBreak: "keep-all",
                                textAlign: "center",
                              }}
                            >
                              {td(
                                `production_line.production_line_list.${item.id}.production_line_topic`,
                              )}
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Freesentation-5-Medium",
                                fontSize: "16px",
                                lineHeight: 1.3,
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                              }}
                            >
                              {td(
                                `production_line.production_line_list.${item.id}.production_line_description`,
                              )}
                            </Typography>
                          </Paper>
                        </SwiperSlide>
                      ),
                    )}
                  </Swiper>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              mb: 36,
            }}
          >
            <TechSpecTable
              technology_spec_application={td(
                "technology_spec.technology_spec_application",
              )}
              technology_spec_products={technologySpecProducts}
              technology_spec_sub={resource.technology_spec.technology_spec_sub}
              technology_spec_title={td(
                "technology_spec.technology_spec_title",
              )}
              labels={techSpecLabels}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default IMOVA;
