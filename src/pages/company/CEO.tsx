import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import resource from "../../data/company/ceo.json";
import ImageHeader from "../../components/company/ImageHeader";
import SEO from "../../common/SEO";
import ScrollButton from "../../common/ScrollButton";

const CEO = () => {
  const { t } = useTranslation("company/ceo");
  const ceoContents = t("ceo_contents", { returnObjects: true }) as string[];

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
        <Box
          sx={(theme) => ({
            px: "20px",
            pt: "20px",
            display: "none",
            [theme.breakpoints.up("tablet")]: {
              p: 0,
              display: "block",
            },
          })}
        >
          <ImageHeader
            imgUrl={resource.ceo_image}
            imgPosition={resource.ceo_image_position}
          />
        </Box>
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
              pt: "50px",
              px: 40,
            },
          })}
        >
          <Typography
            component="h1"
            sx={(theme) => ({
              whiteSpace: "pre-line",
              fontFamily: "Freesentation-6-SemiBold",
              wordBreak: "keep-all",
              color: resource.ceo_color,
              fontSize: "24px",
              [theme.breakpoints.up("tablet")]: {
                fontSize: "28px",
              },
              [theme.breakpoints.up("desktop")]: {
                fontSize: "40px",
              },
            })}
          >
            {t("ceo_title")}
          </Typography>
          <Stack gap={3}>
            {ceoContents.map((content, index) => (
              <Typography
                key={index}
                sx={{
                  whiteSpace: "pre-line",
                  fontSize: "18px",
                  color: "#2A2A2A",
                  fontFamily: "Freesentation-4-Regular",
                  wordBreak: "keep-all",
                }}
              >
                {content}
              </Typography>
            ))}
          </Stack>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "Freesentation-6-SemiBold",
              color: "#2A2A2A",
              whiteSpace: "pre-line",
            }}
          >
            {t("ceo_footer")}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CEO;
