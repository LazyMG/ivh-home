import { Box, Stack, Typography } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";

import resource from "../../data/company/ceo.json";
import CompanyPageHeader from "../../components/company/CompanyPageHeader";
import SEO from "../../common/SEO";
import ScrollButton from "../../common/ScrollButton";
import { FONTS } from "../../theme/theme";
import { useBreakpoint } from "../../hooks/useBreakpoint";

const CEO = () => {
  const { t } = useTranslation("company/ceo");
  const ceoContents = t("contents", { returnObjects: true }) as string[];
  const { isMobile } = useBreakpoint();

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
        canonical="https://ivh.co.kr/company/ceo"
      />
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          mb: 6,
          [theme.breakpoints.up("desktop")]: { mb: 12 },
        })}
      >
        <ScrollButton />
        <CompanyPageHeader
          imgUrl={resource.image}
          mobileImgUrl={resource.mobile_image}
          imgPosition={resource.image_position}
          pageKey="ceo"
        />
        <Box
          component="main"
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            gap: 4,
            my: 5,
            px: "6%",
            pt: 0,
            [theme.breakpoints.up("tablet")]: {
              gap: 6,
              my: 10,
              px: 10,
              pt: "20px",
            },
            [theme.breakpoints.up("desktop")]: {
              pt: 3,
              px: 28,
            },
          })}
        >
          <Typography
            component="h1"
            sx={(theme) => ({
              whiteSpace: "pre-line",
              fontFamily: FONTS.freesentation.semiBold,
              wordBreak: "keep-all",
              color: "#000000",
              fontSize: "24px",
              [theme.breakpoints.up("tablet")]: {
                fontSize: "28px",
              },
              [theme.breakpoints.up("desktop")]: {
                fontSize: "44px",
              },
            })}
          >
            <Trans
              t={t}
              i18nKey="title"
              components={{
                grad: (
                  <Box
                    component="span"
                    sx={{
                      background:
                        "linear-gradient(90deg, #003B8D 0%, #66BAFF 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      color: "transparent",
                    }}
                  />
                ),
              }}
            />
          </Typography>
          <Stack gap={3}>
            {ceoContents.map((content, index) => {
              // 모바일: "첫째/둘째/셋째" 목표 블록은 라벨(파란 굵게) + 점선 구분선으로 표시
              const isGoalsBlock = content.startsWith("첫째");
              if (isMobile && isGoalsBlock) {
                return (
                  <Box
                    key={index}
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                  >
                    {content.split("\n").map((goal, i) => {
                      const commaIdx = goal.indexOf(",");
                      const label = goal.slice(0, commaIdx + 1);
                      const rest = goal.slice(commaIdx + 1);
                      return (
                        <Box
                          key={i}
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                          }}
                        >
                          {i > 0 && (
                            <Box sx={{ borderTop: "1px dashed #C9C9C9" }} />
                          )}
                          <Typography
                            sx={{
                              fontSize: "18px",
                              color: "#424242",
                              fontFamily: FONTS.freesentation.regular,
                              wordBreak: "keep-all",
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                color: "#003B8D",
                                fontFamily: FONTS.freesentation.bold,
                              }}
                            >
                              {label}
                            </Box>
                            {rest}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>
                );
              }
              // 모바일: 마무리 문단은 "감사합니다"를 앞 문장과 간격 두고 표시
              if (isMobile && content.includes("감사합니다")) {
                return (
                  <Box
                    key={index}
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                  >
                    {content.split("\n").map((line, i) => (
                      <Typography
                        key={i}
                        sx={{
                          fontSize: "18px",
                          color: "#424242",
                          fontFamily: FONTS.freesentation.regular,
                          wordBreak: "keep-all",
                        }}
                      >
                        {line}
                      </Typography>
                    ))}
                  </Box>
                );
              }
              return (
                <Typography
                  key={index}
                  sx={{
                    whiteSpace: "pre-line",
                    fontSize: "18px",
                    color: "#424242",
                    fontFamily: FONTS.freesentation.regular,
                    wordBreak: "keep-all",
                  }}
                >
                  {content}
                </Typography>
              );
            })}
          </Stack>
          <Typography
            sx={(theme) => ({
              fontSize: "20px",
              fontFamily: FONTS.freesentation.semiBold,
              color: "#003B8D",
              whiteSpace: "pre-line",
              [theme.breakpoints.up("desktop")]: {
                color: "#03193F",
              },
            })}
          >
            {t("footer")}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CEO;
