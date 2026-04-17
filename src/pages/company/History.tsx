import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import resource from "../../data/company/history.json";
import ImageHeader from "../../components/company/ImageHeader";
import SEO from "../../common/SEO";
import ScrollButton from "../../common/ScrollButton";

const History = () => {
  const { t } = useTranslation("company/history");

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
        canonical="https://ivh.co.kr/company/history"
      />
      <Box sx={{ display: "flex", flexDirection: "column", mb: 20 }}>
        <ScrollButton />
        <Box
          sx={(theme) => ({
            px: "20px",
            display: "none",
            [theme.breakpoints.up("tablet")]: {
              p: 0,
              display: "block",
            },
          })}
        >
          <ImageHeader
            imgUrl={resource.history_image}
            imgPosition={resource.history_image_position}
          />
        </Box>

        <Box
          component="main"
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            gap: 4,
            my: 10,
            px: "20px",
            pt: 0,
            [theme.breakpoints.up("tablet")]: {
              px: 10,
              gap: 6,
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
              textTransform: "uppercase",
              whiteSpace: "pre-line",
              fontFamily: "Freesentation-7-Bold",
              color: resource.history_color,
              fontSize: "24px",
              [theme.breakpoints.up("tablet")]: {
                fontSize: "28px",
              },
              [theme.breakpoints.up("desktop")]: {
                fontSize: "40px",
              },
            })}
          >
            {t("history_title")}
          </Typography>
          <Stack sx={{ gap: 8 }}>
            {resource.history_list.map((item) => {
              const contents = t(`history_list.${item.id}` as never, {
                returnObjects: true,
              }) as unknown as string[];
              return (
                <Box
                  key={item.id}
                  sx={(theme) => ({
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                    [theme.breakpoints.up("desktop")]: {
                      gap: 2,
                    },
                  })}
                >
                  <Typography
                    sx={{
                      fontSize: "30px",
                      fontFamily: "Freesentation-7-Bold",
                      color: resource.history_color,
                    }}
                  >
                    {item.year}
                  </Typography>
                  <Box>
                    {contents.map((content, idx) => (
                      <Typography
                        key={idx}
                        sx={{
                          color: "#2A2A2A",
                          fontFamily: "Freesentation-4-Regular",
                          whiteSpace: "pre-line",
                          fontSize: "18px",
                        }}
                      >
                        {content}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default History;
