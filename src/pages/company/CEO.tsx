import { Box, Stack, Typography } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";

import resource from "../../data/company/ceo.json";
import CompanyPageHeader from "../../components/company/CompanyPageHeader";
import SEO from "../../common/SEO";
import ScrollButton from "../../common/ScrollButton";
import { FONTS } from "../../theme/theme";

const CEO = () => {
  const { t } = useTranslation("company/ceo");
  const ceoContents = t("contents", { returnObjects: true }) as string[];

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
        canonical="https://ivh.co.kr/company/ceo"
      />
      <Box sx={{ display: "flex", flexDirection: "column", mb: 20 }}>
        <ScrollButton />
        <CompanyPageHeader
          imgUrl={resource.image}
          imgPosition={resource.image_position}
          pageKey="ceo"
        />
        <Box
          component="main"
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            gap: 6,
            my: 10,
            px: "20px",
            pt: 0,
            [theme.breakpoints.up("tablet")]: {
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
            {ceoContents.map((content, index) => (
              <Typography
                key={index}
                sx={{
                  whiteSpace: "pre-line",
                  fontSize: "18px",
                  color: "#2A2A2A",
                  fontFamily: FONTS.freesentation.regular,
                  wordBreak: "keep-all",
                }}
              >
                {content}
              </Typography>
            ))}
          </Stack>
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: FONTS.freesentation.bold,
              color: "#2A2A2A",
              whiteSpace: "pre-line",
            }}
          >
            {t("footer")}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CEO;
