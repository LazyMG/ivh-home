import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import support from "../../data/support/support.json";
import SEO from "../../common/SEO";
import ScrollButton from "../../common/ScrollButton";
import { FONTS } from "../../theme/theme";
const Support = () => {
  // TODO: 실제 support_image.svg 파일이 준비되면 이 경로를 사용하세요
  // 현재는 임시로 빈 div를 사용합니다
  // const supportImageSrc = "/images/pages/support/support/support_page.svg";
  const { t } = useTranslation("support/support");
  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
        ogImage="https://ivh.co.kr/images/support/support/support_page.png"
        canonical="https://ivh.co.kr/support/support"
      />
      <Box
        component="main"
        sx={(theme) => ({
          px: 4,
          mt: 4,
          mb: 10,
          [theme.breakpoints.up("tablet")]: {
            px: 10,
            mt: 8,
            mb: 15,
          },
          [theme.breakpoints.up("desktop")]: {
            px: 30,
            mt: "100px",
            mb: 30,
          },
        })}
      >
        <ScrollButton />
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            [theme.breakpoints.up("desktop")]: {
              gap: 9,
            },
          })}
        >
          {/* 이미지 영역 */}
          <Box
            sx={(theme) => ({
              display: "flex",
              justifyContent: "center",
              mx: "auto",
              width: "100%",
              [theme.breakpoints.up("desktop")]: {
                alignSelf: "center",
              },
            })}
          >
            <Box sx={{ position: "relative", display: "inline-block" }}>
              <Box
                component="img"
                src={support.support_image}
                alt={t("support_image_alt")}
                loading="lazy"
                onError={(e) => {
                  // 이미지 로드 실패 시 (support_image.svg가 없는 경우)
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
                sx={{
                  display: "block",
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                }}
              />
              {/* 이미지 뒤 점선 (하단에서 살짝 위) */}
              <Box
                aria-hidden
                sx={(theme) => ({
                  position: "absolute",
                  left: "-32px",
                  right: "-32px",
                  bottom: "18%",
                  borderTop: "1px dashed #000000",
                  zIndex: 0,
                  [theme.breakpoints.up("desktop")]: {
                    left: "-160px",
                    right: "-160px",
                    borderTop: "1px dashed #000000",
                  },
                })}
              />
            </Box>
          </Box>
          {/* 텍스트 영역 */}
          <Box
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              [theme.breakpoints.up("tablet")]: {
                pt: 2,
              },
            })}
          >
            <Typography
              variant="supportTitleFont"
              sx={(theme) => ({
                lineHeight: 1.2,
                wordBreak: "keep-all",
                fontFamily: FONTS.freesentation.regular,
                textAlign: "center",
                fontSize: "22px",
                width: "90%",
                [theme.breakpoints.up("desktop")]: {
                  width: "100%",
                },
              })}
            >
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(90deg, #003B8D 0%, #66BAFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: FONTS.freesentation.semiBold,
                }}
              >
                {t("support_title_parts.gradient")}
              </Box>
              {t("support_title_parts.normal")}
            </Typography>

            <Typography
              variant="supportTextFont"
              component="p"
              sx={(theme) => ({
                wordBreak: "keep-all",
                color: "#656565",
                fontSize: "16px",
                fontFamily: FONTS.freesentation.medium,
                textAlign: "center",
                width: "90%",
                [theme.breakpoints.up("desktop")]: {
                  fontSize: "18px",
                  width: "100%",
                },
              })}
            >
              {t("support_text")}
            </Typography>
          </Box>
          <Box
            sx={(theme) => ({
              px: 4,
              py: 1,
              backgroundColor: "#03193F",
              width: "fit-content",
              borderRadius: "6px",
              [theme.breakpoints.up("desktop")]: {
                boxShadow: "3px 3px 5px 3px rgba(0,0,0,0.2)",
              },
            })}
          >
            <Box
              component="a"
              href={support.support_link.url}
              target="_blank"
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "18px",
                fontFamily: FONTS.freesentation.semiBold,
                color: "#fff", // blue-700
                width: "fit-content",
                cursor: "pointer",
                textDecoration: "none", // a 태그 기본 밑줄 제거
                py: 0.5,
              }}
            >
              <span>{t("support_link_text")}</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Support;
