import { Box, Divider, Paper, Typography } from "@mui/material";
import iMOVA from "../../data/product/iMOVA.json";
import TechSpecTable from "../../components/product/iMOVA/TechSpecTable";
import WirelessChargingTable from "../../components/product/iMOVA/WirelessChargingTable";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Navigation } from "swiper/modules";

// Swiper CSS import
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../style/home-slider.css";
import MainFunction from "../../components/product/iMOVA/MainFunction";
import { useEffect, useRef, useState } from "react";
import ScrollButton from "../../common/ScrollButton";

const IMOVA = () => {
  const {
    title,
    name,
    main_function,
    main_image,
    title_image,
    control_system,
    production_line,
    technology_spec,
    wireless_charging,
  } = iMOVA;
  const THRESHOLD = 100;
  const [visibleBoxes, setVisibleBoxes] = useState<number[]>([]);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const controlSystemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollProgress, setScrollProgress] = useState<number[]>([]);

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
      { threshold: 0.1 }
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

  useEffect(() => {
    const handleScroll = () => {
      const newProgress: number[] = [];

      controlSystemRefs.current.forEach((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // 요소가 화면 아래에서 위로 올라올 때의 진행도 계산
          // 화면 아래: 0, 화면 중앙: 1
          const elementCenter = rect.top + rect.height / 2;
          const progress = Math.max(
            0,
            Math.min(1, (windowHeight - elementCenter) / (windowHeight / 2))
          );

          newProgress.push(progress);
        } else {
          newProgress.push(0);
        }
      });

      setScrollProgress(newProgress);
    };

    handleScroll(); // 초기 실행
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <Box>
      <ScrollButton threshold={THRESHOLD} />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={main_image}
          sx={(theme) => ({
            width: "100%",
            height: "auto",
            objectFit: "contain",
            display: "block",
            clipPath: "inset(10% 0 0 0)",
            marginTop: "-10%",
            marginBottom: "0",
            [theme.breakpoints.up("desktop")]: {
              clipPath: "inset(20% 0 22% 0)",
              marginTop: "-20%",
              marginBottom: "-22%",
            },
          })}
        />
        <Box
          sx={(theme) => ({
            position: "absolute",
            bottom: "4%",
            left: "5%",
            [theme.breakpoints.up("tablet")]: {
              bottom: "5%",
              left: "5%",
            },
          })}
        >
          <Box
            component="img"
            src={title_image}
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
          <Box
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              gap: 2,
              [theme.breakpoints.up("tablet")]: {
                gap: 4,
              },
            })}
          >
            <Typography
              sx={(theme) => ({
                color: "white",
                fontSize: "14px",
                fontWeight: "bold",
                fontFamily: "Freesentation-7-Bold",
                [theme.breakpoints.up("tablet")]: {
                  fontSize: "24px",
                },
              })}
            >
              {name}
            </Typography>
            <Typography
              sx={(theme) => ({
                color: "white",
                maxWidth: "90%",
                fontSize: "12px",
                wordBreak: "keep-all",
                fontFamily: "Freesentation-5-Medium",
                [theme.breakpoints.up("tablet")]: {
                  fontSize: "18px",
                  maxWidth: "60%",
                },
              })}
            >
              {title}
            </Typography>
          </Box>
        </Box>
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
            주요 기능
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
            <MainFunction function_list={main_function.slice(0, 3)} />
            <MainFunction function_list={main_function.slice(3, 5)} />
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
            지능형 관제 시스템
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              width: "100%",
              alignItems: "center",
            }}
          >
            {control_system.map((system, index) => {
              const progress = scrollProgress[index] || 0;
              const scale = 0.85 + progress * 0.15; // 0.85 ~ 1
              const opacity = 0.6 + progress * 0.4; // 0.6 ~ 1

              return (
                <Box
                  key={index}
                  ref={(el: HTMLDivElement | null) => {
                    controlSystemRefs.current[index] = el;
                  }}
                  sx={(theme) => ({
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    width: "100%",
                    justifyContent: "center",
                    flexDirection: "column",

                    [theme.breakpoints.up("desktop")]: {
                      flexDirection: "row",
                      gap: 8,
                      transform: `scale(${scale})`,
                      opacity: opacity,
                      transition:
                        "transform 0.3s ease-out, opacity 0.3s ease-out",
                    },
                  })}
                >
                  {/* 왼쪽 이미지 (홀수 인덱스) */}
                  {index % 2 !== 0 && system.control_system_image_url && (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "1px solid rgba(0, 0, 0, 0.06)",
                        borderRadius: "4px",
                        order: 0,
                      }}
                    >
                      <Box
                        component="img"
                        src={system.control_system_image_url}
                        sx={{
                          width: "100%",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  )}

                  {/* 텍스트 박스 */}
                  <Paper
                    elevation={3}
                    sx={(theme) => ({
                      display: "flex",
                      flexDirection: "column",
                      p: 2,
                      width: "100%",
                      order: 1,
                      boxSizing: "border-box",
                      [theme.breakpoints.up("desktop")]: {
                        maxWidth: "40%",
                        p: 6,
                        order: 0,
                        alignItems: index % 2 === 0 ? "end" : "start",
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
                          textAlign: index % 2 === 0 ? "right" : "left",
                        },
                      })}
                    >
                      {system.control_system_topic}
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        wordBreak: "keep-all",
                        textAlign: "left",
                        lineHeight: 1.6,
                        fontSize: "16px",
                        fontFamily: "Freesentation-5-Medium",
                        [theme.breakpoints.up("desktop")]: {
                          textAlign: index % 2 === 0 ? "right" : "left",
                        },
                      })}
                    >
                      {system.control_system_description}
                    </Typography>
                  </Paper>

                  {/* 오른쪽 이미지 (짝수 인덱스) */}
                  {index % 2 === 0 && system.control_system_image_url && (
                    <Box
                      sx={(theme) => ({
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "1px solid rgba(0, 0, 0, 0.06)",
                        borderRadius: "4px",
                        order: 0,
                        minWidth: "100%",
                        [theme.breakpoints.up("desktop")]: {
                          minWidth: "680px",
                        },
                      })}
                    >
                      <Box
                        component="img"
                        src={system.control_system_image_url}
                        sx={{
                          width: "100%",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
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
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Typography
              sx={{ fontFamily: "Freesentation-5-Medium", fontSize: "18px" }}
            >
              활용 사례
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "24px" }}
            >
              {production_line.production_line_title}
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
                  backgroundImage: `url(${production_line.production_line_image_url})`,
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
              {production_line.production_line_list.map((item, index) => (
                <Box
                  key={index}
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
                    {item.production_line_topic}
                  </Typography>
                  <Divider />
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: "Freesentation-5-Medium",
                    }}
                  >
                    {item.production_line_description}
                  </Typography>
                </Box>
              ))}
              <Box
                sx={(theme) => ({
                  display: "none",
                  [theme.breakpoints.down("desktop")]: {
                    display: "flex",
                    gap: 2,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "95%",
                    padding: 2,
                    paddingBottom: 1,
                    alignItems: "center",
                    maxWidth: "400px",
                  },
                })}
              >
                <Swiper
                  className="custom-swiper"
                  direction={"horizontal"}
                  slidesPerView={1}
                  spaceBetween={8}
                  mousewheel={false}
                  navigation={true}
                  loop={true}
                  modules={[Mousewheel, Pagination, Navigation]}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    color: "white",
                    paddingBottom: "50px",
                  }}
                >
                  {production_line.production_line_list.map((item, index) => (
                    <SwiperSlide key={index}>
                      <Paper
                        elevation={3}
                        sx={{
                          p: 2,
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
                          {item.production_line_topic}
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
                          {item.production_line_description}
                        </Typography>
                      </Paper>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Box>
          </Box>
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              width: "100%",
              alignItems: "flex-end",
            }}
          >
            <Box
              sx={{
                width: "100%",
                backgroundImage: `url(${production_line.production_line_image_url2})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right center",
                position: "relative",
                aspectRatio: "1398/991",
              }}
            />
          </Box> */}
        </Box>
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.up("desktop")]: { gap: 12 },
          })}
        >
          <TechSpecTable
            technology_spec_application={
              technology_spec.technology_spec_application
            }
            technology_spec_products={technology_spec.technology_spec_products}
            technology_spec_sub={technology_spec.technology_spec_sub}
            technology_spec_title={technology_spec.technology_spec_title}
          />
          <WirelessChargingTable wireless_charging={wireless_charging} />
        </Box>
      </Box>
    </Box>
  );
};

export default IMOVA;
