import {
  Box,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import resource from "../../data/product/iMOVA.json";
import TechSpecTable from "../../components/product/iMOVA/TechSpecTable";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Navigation } from "swiper/modules";

// Swiper CSS import
import "swiper/css";
import "swiper/css/pagination";
import "../../style/imova-slider.css";
import MainFunction from "../../components/product/iMOVA/MainFunction";
import React, { useEffect, useRef, useState } from "react";
import ScrollButton from "../../common/ScrollButton";
import SEO from "../../common/SEO";
import type { IMOVATechnologySpec } from "../../types/product";

const IMOVA = () => {
  const { t } = useTranslation("product/iMOVA");
  const THRESHOLD = 100;
  const [visibleBoxes, setVisibleBoxes] = useState<number[]>([]);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const controlSystemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleBoxes((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    boxRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      boxRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

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
  const techSpecLabels = t("technology_spec.labels", { returnObjects: true }) as IMOVATechnologySpec["labels"];

  // TechSpecTable용 products (resource + locale 병합)
  const technologySpecProducts = resource.technology_spec.technology_spec_products.map((p) => ({
    product: p.product,
    product_standard: p.product_standard,
    performance: p.performance,
    electrical: p.electrical,
    environment: p.environment,
    battery: {
      lifespan: td(`technology_spec.technology_spec_products.${p.id}.battery.lifespan`),
      charging_time: p.battery.charging_time,
    },
    environmental_monitoring: {
      temperature: p.environmental_monitoring.temperature,
      humidity: p.environmental_monitoring.humidity,
      dust: {
        particle_size: td(`technology_spec.technology_spec_products.${p.id}.environmental_monitoring.dust.particle_size`),
        concentration_range: p.environmental_monitoring.dust.concentration_range,
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
        <Box
          sx={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={resource.main_image}
            alt={t("main_image_alt")}
            sx={(theme) => ({
              width: "100%",
              height: "auto",
              objectFit: "contain",
              display: "block",
              clipPath: "inset(0% 0 -8% 0)",
              marginTop: "-0%",
              marginBottom: "0%",
              [theme.breakpoints.up("desktop")]: {
                clipPath: "inset(10% 0 4% 0)",
                marginTop: "-10%",
                marginBottom: "-2%",
              },
            })}
          />
          <Box
            sx={(theme) => ({
              position: "absolute",
              bottom: "2%",
              left: "5%",
              [theme.breakpoints.up("tablet")]: {
                bottom: "3%",
                left: "2%",
              },
              [theme.breakpoints.up("desktop")]: {
                left: "5%",
              },
            })}
          >
            <Box sx={{ display: "flex", alignItems: "end", gap: 1 }}>
              <Box
                component="img"
                src={resource.title_image}
                alt={t("title_image_alt")}
                sx={(theme) => ({
                  width: "200px",
                  [theme.breakpoints.down("tablet")]: {
                    width: "100px",
                  },
                  [theme.breakpoints.down("mobilePortrait")]: {
                    width: "100px",
                  },
                })}
              />
              <Typography
                sx={(theme) => ({
                  color: "#2c2c2c",
                  fontSize: "14px",
                  fontWeight: "bold",
                  fontFamily: "Freesentation-7-Bold",
                  [theme.breakpoints.up("tablet")]: {
                    fontSize: "24px",
                  },
                })}
              >
                {t("page_name")}
              </Typography>
            </Box>
            <Typography
              component="h1"
              sx={(theme) => ({
                color: "#2c2c2c",
                maxWidth: "90%",
                fontSize: "12px",
                wordBreak: "keep-all",
                fontFamily: "Freesentation-5-Medium",
                display: "none",
                [theme.breakpoints.up("tablet")]: {
                  fontSize: "18px",
                  maxWidth: "60%",
                },
                [theme.breakpoints.up("desktop")]: {
                  display: "block",
                  mt: 2,
                },
              })}
            >
              {t("title")}
            </Typography>
          </Box>
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
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                fontFamily: "Freesentation-7-Bold",
              }}
            >
              {t("section_titles.main_function")}
            </Typography>
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                gap: 6,
                width: "100%",
                alignItems: "center",
                [theme.breakpoints.up("tablet")]: {
                  gap: 8,
                },
                [theme.breakpoints.up("desktop")]: {
                  gap: 10,
                },
              })}
            >
              <MainFunction function_list={mainFunctionList.slice(0, 3)} />
              <MainFunction function_list={mainFunctionList.slice(3, 5)} />
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
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", fontFamily: "Freesentation-7-Bold" }}
            >
              {t("section_titles.control_system")}
            </Typography>
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                gap: 4,
                width: "100%",
                alignItems: "center",
                [theme.breakpoints.up("desktop")]: {
                  gap: 10,
                },
              })}
            >
              {resource.control_system.map((system, index) => {
                return (
                  <React.Fragment key={system.id}>
                    <Box
                      ref={(el: HTMLDivElement | null) => {
                        controlSystemRefs.current[index] = el;
                      }}
                      sx={(theme) => ({
                        display: "flex",
                        alignItems: "end",
                        gap: 2,
                        width: "100%",
                        justifyContent: "center",
                        flexDirection: "column",

                        [theme.breakpoints.up("desktop")]: {
                          flexDirection: "row",
                          gap: 2,
                        },
                      })}
                    >
                      {system.control_system_image_url && (
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
                            alt={td(`control_system.${system.id}.control_system_image_alt`)}
                            loading="lazy"
                            sx={(theme) => ({
                              height: "auto",
                              objectFit: "contain",
                              maxWidth: "100%",
                              [theme.breakpoints.up("desktop")]: {
                                maxWidth: "90%",
                              },
                            })}
                          />
                        </Box>
                      )}
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
                          },
                        })}
                      >
                        <Typography
                          variant="h6"
                          sx={(theme) => ({
                            fontFamily: "Freesentation-7-Bold",
                            mb: 2,
                            textAlign: "left",
                            [theme.breakpoints.up("desktop")]: {
                              textAlign: "left",
                            },
                          })}
                        >
                          {td(`control_system.${system.id}.control_system_topic`)}
                        </Typography>
                        <Typography
                          sx={(theme) => ({
                            wordBreak: "keep-all",
                            textAlign: "left",
                            lineHeight: 1.6,
                            fontSize: "16px",
                            fontFamily: "Freesentation-5-Medium",
                            [theme.breakpoints.up("desktop")]: {
                              textAlign: "left",
                            },
                          })}
                        >
                          {td(`control_system.${system.id}.control_system_description`)}
                        </Typography>
                      </Box>
                    </Box>
                    <Divider
                      sx={(theme) => ({
                        borderColor: "#2c2c2c",
                        height: "2px",
                        width: "100%",
                        [theme.breakpoints.up("tablet")]: {
                          width: "95%",
                        },
                      })}
                    />
                  </React.Fragment>
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
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Typography
                variant="h5"
                sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "24px" }}
              >
                {t("section_titles.use_case")}
              </Typography>
              <Typography
                sx={{ fontFamily: "Freesentation-5-Medium", fontSize: "18px" }}
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
                alignItems: "flex-end",
              }}
            >
              <Box
                sx={(theme) => ({
                  width: "100%",
                  position: "relative",
                  [theme.breakpoints.down("desktop")]: {
                    width: "100%",
                    marginRight: 0,
                  },
                })}
              >
                {/* 배경 이미지 */}
                <Box
                  sx={(theme) => ({
                    width: "100%",
                    backgroundImage: `url(${resource.production_line.production_line_image_url})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right center",
                    aspectRatio: "1398/991",
                    [theme.breakpoints.down("desktop")]: {
                      aspectRatio: "4/3",
                    },
                  })}
                />

                {/* 데스크톱: 텍스트 박스 */}
                {resource.production_line.production_line_list.map((item, index) => (
                  <Box
                    key={item.id}
                    ref={(el: HTMLDivElement | null) => {
                      boxRefs.current[index] = el;
                    }}
                    data-index={index}
                    sx={(theme) => ({
                      position: "absolute",
                      width: "224px",
                      border: `2px solid ${item.production_line_color}`,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      px: 2,
                      py: 3,
                      ...item.position,
                      backgroundColor: "#ffffff",
                      opacity: visibleBoxes.includes(index) ? 0.9 : 0,
                      transform: visibleBoxes.includes(index)
                        ? "translateY(0)"
                        : "translateY(40px)",
                      transition: `opacity 0.4s ease ${
                        index * 0.15
                      }s, transform 0.4s ease ${index * 0.15}s`,
                      [theme.breakpoints.down("desktop")]: {
                        display: "none",
                      },
                    })}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: item.production_line_color,
                        fontFamily: "Freesentation-7-Bold",
                        fontSize: "18px",
                        wordBreak: "keep-all",
                      }}
                    >
                      {td(`production_line.production_line_list.${item.id}.production_line_topic`)}
                    </Typography>
                    <Divider />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: "Freesentation-5-Medium",
                      }}
                    >
                      {td(`production_line.production_line_list.${item.id}.production_line_description`)}
                    </Typography>
                  </Box>
                ))}
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
                      pb: 0,
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
                    {resource.production_line.production_line_list.map((item) => (
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
                            {td(`production_line.production_line_list.${item.id}.production_line_topic`)}
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
                            {td(`production_line.production_line_list.${item.id}.production_line_description`)}
                          </Typography>
                        </Paper>
                      </SwiperSlide>
                    ))}
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
              technology_spec_application={td("technology_spec.technology_spec_application")}
              technology_spec_products={technologySpecProducts}
              technology_spec_sub={resource.technology_spec.technology_spec_sub}
              technology_spec_title={td("technology_spec.technology_spec_title")}
              labels={techSpecLabels}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default IMOVA;
