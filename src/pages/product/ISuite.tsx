import { Box, Typography } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import resource from "../../data/product/iSuite/iSuite.json";
import { useTranslation } from "react-i18next";

import ScrollButton from "../../common/ScrollButton";
import SEO from "../../common/SEO";
import NumberedSectionTitle from "../../components/common/NumberedSectionTitle";
import ProductHero from "../../components/product/ProductHero";
import IMOVAHeroMobile from "../../components/product/IMOVAHeroMobile";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { FONTS } from "../../theme/theme";

const ISuite = () => {
  const { t } = useTranslation("product/iSuite");
  const { isMobile } = useBreakpoint();
  const THRESHOLD = 100;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- 동적 키 접근용
  const td = (key: string): string => t(key as any);

  return (
    <>
      <SEO
        title={t("name")}
        description={t("seo_description")}
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
            badge="Software"
            badgeColor="#0058D0"
            caption={t("page_name")}
            description={t("title")}
          />
        ) : (
          <ProductHero
            image={resource.main_image}
            imageAlt={t("main_image_alt")}
            badge="Software"
            titleImage={resource.title_image}
            titleImageAlt={t("title_image_alt")}
            caption={t("page_name")}
            description={t("title")}
            underlineWidth="100%"
            breadcrumbKey="isuite"
            captionColor="#00235F"
            badgeColor="#0058D0"
            descriptionSx={(theme: Theme) => ({
              color: "#2c2c2c",
              fontFamily: FONTS.freesentation.medium,
              maxWidth: "90%",
              [theme.breakpoints.up("tablet")]: {
                maxWidth: "100%",
              },
            })}
          />
        )}

        <Box
          sx={{
            width: "100%",
            height: "28px",
            background: "linear-gradient(to right, #0058D0 0%, #00235F 100%)",
          }}
        />

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
            mb: 16,
            [theme.breakpoints.up("desktop")]: {
              px: 15,
            },
          })}
        >
          {resource.sections.map((section, index) => (
            <Box
              key={section.id}
              component="section"
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 2,
                [theme.breakpoints.up("desktop")]: {
                  gap: 4,
                },
              })}
            >
              <NumberedSectionTitle
                number={index + 1}
                text={td(`sections.${section.id}.title`)}
              />

              {/* 섹션 개요 */}
              <Typography
                sx={(theme) => ({
                  wordBreak: "keep-all",
                  lineHeight: 1.6,
                  color: "#202020",
                  fontFamily: FONTS.freesentation.medium,
                  fontSize: "16px",
                  px: 2,
                  [theme.breakpoints.up("desktop")]: {
                    fontSize: "20px",
                    px: 4,
                  },
                })}
              >
                {td(`sections.${section.id}.introduction`)}
              </Typography>

              {/* bullet 2개: 모바일 1열 / 태블릿↑ 2열(등폭) */}
              <Box
                sx={(theme) => ({
                  width: "100%",
                  mt: 0,
                  px: 3,
                  py: 3,
                  boxSizing: "border-box",
                  display: "grid",
                  // 모바일 1열 / 태블릿↑ 2열. minmax(0,1fr)로 컨텐츠와 무관하게 정확히 반반
                  gridTemplateColumns: "1fr",
                  alignItems: "start",
                  gap: 3,
                  border: "1px solid #03193F",
                  borderRadius: "22px",
                  boxShadow: "4px 4px 5px 3px rgba(0,0,0,0.25)",
                  [theme.breakpoints.up("tablet")]: {
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    px: 8,
                    py: 6,
                    gap: 6,
                    mt: 2,
                  },
                })}
              >
                {section.bullets.map((bullet) => {
                  const base = `sections.${section.id}.bullets.${bullet.id}`;
                  return (
                    <Box
                      key={bullet.id}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                      }}
                    >
                      {/* 이미지: 등폭 grid 컬럼(minmax(0,1fr)) 기준으로 폭이 같고
                          원본 크기가 동일하므로 표시 높이도 자동으로 일치 */}
                      <Box
                        component="img"
                        src={bullet.image}
                        alt={td(`${base}.image_alt`)}
                        loading="lazy"
                        sx={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                        }}
                      />
                      {/* 제목·설명 블록: 불릿은 왼쪽 gutter에 걸치고(hanging),
                          제목 텍스트와 설명 텍스트의 왼쪽 시작선은 동일.
                          pl로 블록 전체를 이미지 왼쪽선보다 살짝 안쪽으로 들여씀 */}
                      <Box
                        sx={(theme) => ({
                          mt: 1,
                          pl: 2,
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1.5,
                          [theme.breakpoints.up("desktop")]: {
                            pl: 3,
                          },
                        })}
                      >
                        {/* 불릿: 제목과 같은 색 · 제목 첫 줄 높이에 맞춰 세로 중앙 정렬 */}
                        <Box
                          sx={(theme) => ({
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center",
                            // 높이를 제목 line-height(1.3em)와 맞춰 첫 줄 중앙에 위치
                            height: "1.3em",
                            fontSize: "18px",
                            [theme.breakpoints.up("desktop")]: {
                              fontSize: "22px",
                            },
                          })}
                        >
                          <Box
                            sx={{
                              width: "4px",
                              height: "4px",
                              borderRadius: "50%",
                              backgroundColor: "#0058D0",
                            }}
                          />
                        </Box>

                        {/* 텍스트 컬럼: 제목/설명이 같은 왼쪽 시작선 공유 */}
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                          }}
                        >
                          {/* 제목 */}
                          <Typography
                            sx={(theme) => ({
                              fontFamily: FONTS.freesentation.bold,
                              color: "#0058D0",
                              fontSize: "18px",
                              lineHeight: 1.3,
                              [theme.breakpoints.up("desktop")]: {
                                fontSize: "22px",
                              },
                            })}
                          >
                            {td(`${base}.title`)}
                          </Typography>
                          {/* 설명 */}
                          <Typography
                            sx={(theme) => ({
                              wordBreak: "keep-all",
                              lineHeight: 1.6,
                              color: "#565656",
                              fontFamily: FONTS.freesentation.medium,
                              fontSize: "16px",
                              [theme.breakpoints.up("desktop")]: {
                                fontSize: "20px",
                              },
                            })}
                          >
                            {td(`${base}.description`)}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ISuite;
