import { Box, Typography } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import resource from "../../data/product/iMOVA.json";
import TechSpecTable from "../../components/product/iMOVA/TechSpecTable";
import { useTranslation } from "react-i18next";

import ScrollButton from "../../common/ScrollButton";
import SEO from "../../common/SEO";
import type { IMOVATechnologySpec } from "../../types/product";
import SectionTitle from "../../components/common/SectionTitle";
import ProductHero from "../../components/product/ProductHero";
import IMOVAHeroMobile from "../../components/product/IMOVAHeroMobile";
import IMOVAProductionLine from "../../components/product/IMOVAProductionLine";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { FONTS } from "../../theme/theme";

const IMOVA = () => {
  const { t, i18n } = useTranslation("product/iMOVA");
  const { isMobile } = useBreakpoint();
  const THRESHOLD = 100;
  // 국문이면 라틴 전용 Galderglynn 대신 국문 지원 Freesentation으로 제목 폰트 전환
  const isKorean = i18n.language.startsWith("ko");

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
        keywords={t("keywords")}
        canonical={resource.seo.canonical}
      />
      <Box component="main">
        <ScrollButton threshold={THRESHOLD} />

        {isMobile ? (
          <IMOVAHeroMobile
            image={resource.mobile_main_image}
            imageAlt={t("main_image_alt")}
            titleImage={resource.title_image}
            titleImageAlt={t("title_image_alt")}
            badge="AMR"
            caption={t("page_name")}
            description={t("title")}
          />
        ) : (
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
              fontFamily: FONTS.freesentation.medium,
              maxWidth: "90%",
              [theme.breakpoints.up("tablet")]: {
                maxWidth: "88%",
              },
            })}
          />
        )}
        {/* 상단 동영상: 모바일(<846)에선 미표시 — 무거운 에셋 미로드 */}
        {!isMobile && (
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
              aria-label={t("top_video_alt")}
              src={resource.top_video}
              loop
              muted
              playsInline
              autoPlay
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: "104vh",
                objectFit: "cover",
                display: "block",
                backgroundColor: "#ffffff",
                clipPath: "inset(0 1px 0 0)",
              }}
            />
          </Box>
        )}

        <Box
          sx={(theme) => ({
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 14,
            px: 4,
            mt: 6,
            [theme.breakpoints.up("desktop")]: {
              px: 15,
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
                      // 모바일(1열): 로고(빈) 셀은 숨김 → 기능 5개만 나열
                      display: isLogoCell ? "none" : "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      // 로고 셀만 세로 중앙, 기능 셀은 위에서부터 정렬해 위치 통일
                      justifyContent: isLogoCell ? "center" : "flex-start",
                      textAlign: "center",
                      gap: 2,
                      px: 4,
                      py: 4,
                      boxSizing: "border-box",
                      position: "relative",
                      // 모바일(1열, <846): 마지막 셀 빼고 아래 점선. 셀은 full width,
                      // 구분선만 좌우 인셋(::after)이라 내용 폭은 안 줄어듦.
                      // ::after를 down(tablet)에만 정의 → 태블릿↑에선 pseudo 자체가 없어 누수 없음
                      [theme.breakpoints.down("tablet")]: {
                        "&::after":
                          index < 5
                            ? {
                                content: '""',
                                position: "absolute",
                                left: "24px",
                                right: "24px",
                                bottom: 0,
                                borderBottom: "1px dashed #424242",
                              }
                            : undefined,
                      },
                      [theme.breakpoints.up("tablet")]: {
                        px: 6,
                        py: 6,
                        // 태블릿↑: 로고 셀 복원 + 3열 그리드 점선(1·2열 오른쪽, 윗줄 아래)
                        display: "flex",
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
                            width: "100%",
                            mx: "auto",
                            minHeight: "2.4em",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Typography
                            sx={(theme) => ({
                              // 모바일: regular / 18px, 태블릿↑: book / 20px (색상 동일)
                              // 국문은 라틴 전용 폰트가 깨지므로 Freesentation으로 전환
                              fontFamily: isKorean
                                ? FONTS.freesentation.bold
                                : FONTS.galderglynn.regular,
                              color: "#03193F",
                              fontSize: "18px",
                              lineHeight: 1.2,
                              textTransform: "uppercase",
                              [theme.breakpoints.up("tablet")]: {
                                fontFamily: isKorean
                                  ? FONTS.freesentation.bold
                                  : FONTS.galderglynn.book,
                                fontSize: "20px",
                              },
                            })}
                          >
                            {func.function_title}
                          </Typography>
                        </Box>
                        <Box
                          sx={(theme) => ({
                            // 모바일: 중앙 정렬 / 태블릿↑: 좌측 정렬
                            textAlign: "center",
                            [theme.breakpoints.up("tablet")]: {
                              textAlign: "start",
                            },
                          })}
                        >
                          <Typography
                            sx={{
                              color: "#737373",
                              lineHeight: 1.6,
                              fontFamily: FONTS.freesentation.medium,
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
            <SectionTitle
              text={t("section_titles.control_system")}
              align="top"
            />
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                gap: 4,
                width: "100%",
                alignItems: "center",
                px: 0,
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
                    sx={(theme) => ({
                      width: "100%",
                      border: "1px solid #03193F",
                      boxShadow: "4px 4px 5px 3px rgba(0,0,0,0.25)",
                      borderRadius: "24px",
                      px: 2,
                      py: 4,
                      boxSizing: "border-box",
                      [theme.breakpoints.up("desktop")]: {
                        px: 8,
                      },
                    })}
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
                            // 국문은 라틴 전용 폰트가 깨지므로 Freesentation으로 전환
                            fontFamily: isKorean
                              ? FONTS.freesentation.bold
                              : FONTS.galderglynn.regular,
                            mb: 2,
                            textAlign: "center",
                            fontSize: "18px",
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
                            textAlign: "center",
                            lineHeight: 1.6,
                            fontSize: "16px",
                            fontFamily: FONTS.freesentation.medium,
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
          <IMOVAProductionLine />

          <Box
            sx={(theme) => ({
              mb: 12,
              [theme.breakpoints.up("desktop")]: {
                mb: 24,
              },
            })}
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
