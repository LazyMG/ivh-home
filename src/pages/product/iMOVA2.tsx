import { Box, Divider, Paper, Typography } from "@mui/material";
import iMOVA from "../../data/product/iMOVA.json";
import TechSpecTable from "../../components/product/iMOVA/TechSpecTable";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Navigation } from "swiper/modules";

// Swiper CSS import
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../style/home-slider.css";
import MainFunction from "../../components/product/iMOVA/MainFunction";

const IMOVA2 = () => {
  const {
    title,
    name,
    main_function,
    main_image2,
    title_image2,
    control_system,
    production_line,
    production_line_image_url2,
    technology_spec,
  } = iMOVA;

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={main_image2}
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
            src={title_image2}
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
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              gap: 10,
              width: "100%",
              alignItems: "center",
            })}
          >
            {control_system.map((system, index) => (
              <Box
                key={index}
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
                  },
                })}
              >
                {/* 왼쪽 이미지 (홀수 인덱스) */}
                {index % 2 !== 0 && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid rgba(0, 0, 0, 0.06)",
                      borderRadius: "4px",
                    }}
                  >
                    {system.control_system_image_url && (
                      <Box
                        component="img"
                        src={system.control_system_image_url}
                        sx={{
                          width: "100%",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    )}
                  </Box>
                )}

                {/* 텍스트 박스 */}
                <Paper
                  elevation={3}
                  sx={(theme) => ({
                    display: "flex",
                    flexDirection: "column",

                    p: 2,
                    maxWidth: "100%",
                    [theme.breakpoints.up("desktop")]: {
                      maxWidth: "40%",
                      p: 6,
                      alignItems:
                        index === 0
                          ? "center"
                          : index % 2 === 0
                          ? "end"
                          : "start",
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
                        textAlign:
                          index === 0
                            ? "center"
                            : index % 2 === 0
                            ? "right"
                            : "left",
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
                        textAlign:
                          index === 0
                            ? "center"
                            : index % 2 === 0
                            ? "right"
                            : "left",
                      },
                    })}
                  >
                    {system.control_system_description}
                  </Typography>
                </Paper>

                {/* 오른쪽 이미지 (짝수 인덱스) */}
                {index % 2 === 0 && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: system.control_system_image_url
                        ? "1px solid rgba(0, 0, 0, 0.06)"
                        : "",
                      borderRadius: "4px",
                    }}
                  >
                    {system.control_system_image_url && (
                      <Box
                        component="img"
                        src={system.control_system_image_url}
                        sx={{
                          width: "100%",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    )}
                  </Box>
                )}
              </Box>
            ))}
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
          <Box>
            <Typography
              variant="h5"
              sx={{ fontFamily: "Freesentation-7-Bold" }}
            >
              활용 사례
            </Typography>
            <Typography>{production_line.production_line_title}</Typography>
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
                // marginRight: "-120px",
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
                    opacity: 0.9,
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

              {/* 모바일/태블릿: 3x2 그리드 */}
              {/* <Box
                sx={(theme) => ({
                  display: "none",
                  [theme.breakpoints.down("desktop")]: {
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridTemplateRows: "repeat(2, auto)",
                    gap: 2,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "95%",
                    padding: 2,
                  },
                  [theme.breakpoints.down("tablet")]: {
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gridTemplateRows: "repeat(3, auto)",
                  },
                })}
              >
                {production_line.production_line_list.map((item, index) => (
                  <Paper
                    key={index}
                    elevation={3}
                    sx={{
                      p: 1.5,
                      borderTop: `3px solid ${item.production_line_color}`,
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        color: item.production_line_color,
                        fontWeight: "bold",
                        fontSize: "11px",
                        wordBreak: "keep-all",
                        textAlign: "center",
                      }}
                    >
                      {item.production_line_topic}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "9px",
                        lineHeight: 1.3,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {item.production_line_description}
                    </Typography>
                  </Paper>
                ))}
              </Box> */}
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
                    alignItems: "center",
                  },
                })}
              >
                <Swiper
                  className="custom-swiper"
                  direction={"horizontal"}
                  slidesPerView={1}
                  spaceBetween={8}
                  mousewheel={false} // 마우스 휠 지원
                  // pagination={{
                  //   type: "fraction", // 점 대신 "1 / 8" 형식으로 변경
                  //   clickable: true,
                  // }}
                  loop={true}
                  // navigation={true} // 화살표 버튼 추가
                  modules={[Mousewheel, Pagination, Navigation]}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    color: "white",
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
                            fontWeight: "bold",
                            fontSize: "16px",
                            wordBreak: "keep-all",
                            textAlign: "center",
                          }}
                        >
                          {item.production_line_topic}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
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
                {/* {production_line.production_line_list
                  .slice(0, 1)
                  .map((item, index) => (
                    <Paper
                      key={index}
                      elevation={3}
                      sx={{
                        p: 2,
                        borderTop: `3px solid ${item.production_line_color}`,
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          color: item.production_line_color,
                          fontWeight: "bold",
                          fontSize: "16px",
                          wordBreak: "keep-all",
                          textAlign: "center",
                        }}
                      >
                        {item.production_line_topic}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          lineHeight: 1.3,
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {item.production_line_description}
                      </Typography>
                    </Paper>
                  ))} */}
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
        <TechSpecTable
          technology_spec_example={technology_spec.technology_spec_example}
          technology_spec_products={technology_spec.technology_spec_products}
          technology_spec_sub={technology_spec.technology_spec_sub}
          technology_spec_title={technology_spec.technology_spec_title}
        />
      </Box>
    </Box>
  );
};

export default IMOVA2;
