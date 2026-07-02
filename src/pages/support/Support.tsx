import { Box, Typography } from "@mui/material";
import support from "../../data/support/support.json";
import SEO from "../../common/SEO";
import { useSEO } from "../../hooks/useSEO";
import ScrollButton from "../../common/ScrollButton";
import { FONTS } from "../../theme/theme";
const Support = () => {
  // TODO: 실제 support_image.svg 파일이 준비되면 이 경로를 사용하세요
  // 현재는 임시로 빈 div를 사용합니다
  // const supportImageSrc = "/images/pages/support/support/support_page.svg";
  const seoData = useSEO("support/support", support);
  return (
    <>
      <SEO {...seoData} />
      <Box
        component="main"
        sx={{
          padding: {
            mobilePortrait: "0 32px",
            mobileLandscape: "0 48px",
            tablet: "0 80px",
            desktop: "0 240px",
          },
          marginTop: {
            mobilePortrait: "32px",
            mobileLandscape: "48px",
            tablet: "64px",
            desktop: "100px",
          },
          marginBottom: {
            mobilePortrait: "80px",
            mobileLandscape: "100px",
            tablet: "120px",
            desktop: "240px",
          },
        }}
      >
        <ScrollButton />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 9,
          }}
        >
          {/* 이미지 영역 */}
          <Box
            sx={(theme) => ({
              display: "flex",
              justifyContent: "center",
              mx: "auto",
              width: "100%",
              [theme.breakpoints.up("tablet")]: {
                alignSelf: "center",
              },
            })}
          >
            <Box sx={{ position: "relative", display: "inline-block" }}>
              <Box
                component="img"
                src={support.support_image}
                alt={support.support_image_alt}
                loading="lazy"
                onError={(e) => {
                  // 이미지 로드 실패 시 (support_image.svg가 없는 경우)
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
                sx={{ display: "block", position: "relative", zIndex: 1 }}
              />
              {/* 이미지 뒤 점선 (하단에서 살짝 위) */}
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  left: "-160px",
                  right: "-160px",
                  bottom: "18%",
                  borderTop: "1px dashed #C9C9C9",
                  zIndex: 0,
                }}
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
              sx={{
                lineHeight: 1.2,
                wordBreak: "keep-all",
                fontFamily: FONTS.freesentation.regular,
              }}
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
                {support.support_title_parts.gradient}
              </Box>
              {support.support_title_parts.normal}
            </Typography>

            <Typography
              variant="supportTextFont"
              component="p"
              sx={{
                wordBreak: "keep-all",
                color: support.support_text.color,
                fontSize: "18px",
                fontFamily: FONTS.freesentation.medium,
              }}
            >
              {support.support_text.text}
            </Typography>
          </Box>
          <Box
            sx={{
              px: 4,
              py: 1,
              backgroundColor: "#03193F",
              width: "fit-content",
              borderRadius: "6px",
              boxShadow: "3px 3px 5px 3px rgba(0,0,0,0.2)",
            }}
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
              <span>{support.support_link.text}</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Support;
