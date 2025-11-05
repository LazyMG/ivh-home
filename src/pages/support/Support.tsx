import { Box, Typography } from "@mui/material";
import support from "../../data/support/support.json";
import SEO from "../../common/SEO";
import { useSEO } from "../../hooks/useSEO";
const Support = () => {
  // TODO: 실제 support_image.svg 파일이 준비되면 이 경로를 사용하세요
  // 현재는 임시로 빈 div를 사용합니다
  const supportImageSrc = "/images/pages/support/support/support_page.svg";
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
            desktop: "0 160px",
          },
          marginTop: {
            mobilePortrait: "32px",
            mobileLandscape: "48px",
            tablet: "64px",
            desktop: "80px",
          },
          marginBottom: {
            mobilePortrait: "80px",
            mobileLandscape: "100px",
            tablet: "120px",
            desktop: "160px",
          },
        }}
      >
        <Box
          sx={(theme) => ({
            ...theme.customStyles.supportContainer,
          })}
        >
          {/* 텍스트 영역 */}
          <Box
            sx={(theme) => ({
              ...theme.customStyles.supportTextContainer,
            })}
          >
            <Typography
              variant="supportTitleFont"
              component="h1"
              sx={{
                marginBottom: "32px",
                lineHeight: 1.3,
                wordBreak: "keep-all",
              }}
            >
              {support.support_title}
            </Typography>
            <Typography
              variant="supportTextFont"
              component="p"
              sx={{
                wordBreak: "keep-all",
                color: support.support_text.color,
              }}
            >
              {support.support_text.text}
            </Typography>
            <Box
              component="a"
              href={support.support_link.url}
              target="_blank"
              sx={(theme) => ({
                ...theme.customStyles.supportLink,
              })}
            >
              <span>{support.support_link.text}</span>
              <span style={{ fontSize: "18px" }}>→</span>
            </Box>
          </Box>

          {/* 이미지 영역 */}
          <Box
            sx={(theme) => ({
              ...theme.customStyles.supportImageContainer,
            })}
          >
            <Box
              component="img"
              src={supportImageSrc}
              alt="iVH 기술지원 서비스"
              onError={(e) => {
                // 이미지 로드 실패 시 (support_image.svg가 없는 경우)
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
              sx={{
                width: "450px",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Support;
