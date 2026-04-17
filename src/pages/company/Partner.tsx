import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import resource from "../../data/company/partner.json";
import ImageHeader from "../../components/company/ImageHeader";
import CustomerContainer from "../../components/company/CustomerContainer";
import SEO from "../../common/SEO";
import ScrollButton from "../../common/ScrollButton";

interface CustomerListObj {
  src: string;
  maxWidth: string;
  alt: string;
}

const Partner = () => {
  const { t } = useTranslation("company/partner");
  const td = (key: string): string => t(key as never);

  const { customer_company, customer_institution, customer_education } =
    resource.partner_customerList;

  // 작은 화면용: 3개씩 chunk로 나누기
  const chunkArray = (arr: CustomerListObj[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const companyMobileChunks = chunkArray(
    customer_company.flatMap((c) => c.list),
    3,
  );

  const institutionMobileChunks = chunkArray(
    customer_institution.flatMap((c) => c.list),
    3,
  );

  const educationMobileChunks = chunkArray(
    customer_education.flatMap((c) => c.list),
    3,
  );

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
        canonical="https://ivh.co.kr/company/partner"
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
            imgUrl={resource.partner_image}
            imgPosition={resource.partner_image_position}
          />
        </Box>

        <Box
          component="main"
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            gap: 24,
            my: 10,
            px: "16px",
            [theme.breakpoints.up("tablet")]: {
              px: 10,
              pt: "20px",
            },
            [theme.breakpoints.up("desktop")]: {
              pt: "50px",
              px: 30,
            },
          })}
        >
          <Stack gap={3}>
            <Typography
              component="h1"
              sx={(theme) => ({
                textTransform: "uppercase",
                whiteSpace: "pre-line",
                fontFamily: "Freesentation-7-Bold",
                letterSpacing: "4px",
                color: resource.partner_color,
                fontSize: "24px",
                [theme.breakpoints.up("tablet")]: {
                  fontSize: "28px",
                },
                [theme.breakpoints.up("desktop")]: {
                  fontSize: "30px",
                },
              })}
            >
              {t("partner_partner")}
            </Typography>
            <Box
              component="ul"
              sx={{
                display: "flex",
                justifyContent: "between",
                alignItems: "center",
                flexWrap: "wrap",
                rowGap: 10,
                pl: 0,
              }}
            >
              {resource.partner_partnerList.map((partnerImg) => (
                <Box
                  key={partnerImg.id}
                  component="li"
                  sx={(theme) => ({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50%",
                    [theme.breakpoints.up("desktop")]: {
                      width: "25%",
                    },
                  })}
                >
                  <img
                    src={partnerImg.src}
                    alt={td(`partner_partnerList.${partnerImg.id}`)}
                    style={{ width: "70%", maxWidth: "128px" }}
                  />
                </Box>
              ))}
            </Box>
          </Stack>
          <Stack gap={3}>
            <Typography
              component="h2"
              sx={(theme) => ({
                textTransform: "uppercase",
                whiteSpace: "pre-line",
                fontFamily: "Freesentation-7-Bold",
                letterSpacing: "4px",
                color: resource.partner_color,
                fontSize: "24px",
                [theme.breakpoints.up("tablet")]: {
                  fontSize: "28px",
                },
                [theme.breakpoints.up("desktop")]: {
                  fontSize: "30px",
                },
              })}
            >
              {t("partner_customer")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <CustomerContainer
                chunkList={companyMobileChunks}
                customerList={customer_company}
              />
              <CustomerContainer
                chunkList={institutionMobileChunks}
                customerList={customer_institution}
              />
              <CustomerContainer
                chunkList={educationMobileChunks}
                customerList={customer_education}
              />
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Partner;
