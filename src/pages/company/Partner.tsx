import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import resource from "../../data/company/partner.json";
import CompanyPageHeader from "../../components/company/CompanyPageHeader";
import CustomerContainer from "../../components/company/CustomerContainer";
import SEO from "../../common/SEO";
import ScrollButton from "../../common/ScrollButton";
import { FONTS } from "../../theme/theme";

interface CustomerListObj {
  src: string;
  maxWidth: string;
  alt: string;
}

const Partner = () => {
  const { t } = useTranslation("company/partner");
  const td = (key: string): string => t(key as never);

  const { customer_company, customer_institution, customer_education } =
    resource.customerList;

  // 작은 화면용: 3개씩 chunk로 나누기
  const chunkArray = (arr: CustomerListObj[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    // 마지막 행에 1개만 남으면 직전 행과 나눠 2개씩 배치 (외톨이 방지)
    const n = result.length;
    if (n >= 2 && result[n - 1].length === 1) {
      const orphan = result[n - 1][0];
      const prev = result[n - 2];
      result[n - 2] = prev.slice(0, size - 1);
      result[n - 1] = [prev[size - 1], orphan];
    }
    return result;
  };

  // 모바일: 세 그룹(company·institution·education)을 하나의 연속 그리드로 합쳐 정렬
  const allMobileChunks = chunkArray(
    [customer_company, customer_institution, customer_education].flatMap(
      (group) => group.flatMap((c) => c.list),
    ),
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
          pageKey="partner"
        />

        <Box
          component="main"
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            my: 5,
            px: 3,
            [theme.breakpoints.up("tablet")]: {
              gap: 24,
              my: 10,
              px: 10,
              pt: "20px",
            },
            [theme.breakpoints.up("desktop")]: {
              pt: 2,
              px: 30,
            },
          })}
        >
          <Stack gap={3}>
            <Box
              sx={{ display: "flex", alignItems: "baseline", gap: 2, pl: 2 }}
            >
              <Typography
                component="h1"
                sx={(theme) => ({
                  whiteSpace: "pre-line",
                  fontFamily: FONTS.freesentation.bold,
                  fontSize: "24px",
                  color: "#003B8D",
                  [theme.breakpoints.up("tablet")]: {
                    color: "#000000",
                    fontSize: "28px",
                  },
                  [theme.breakpoints.up("desktop")]: {
                    fontSize: "30px",
                  },
                })}
              >
                {t("partner")}
              </Typography>
              {t("partner_subtitle") && (
                <Typography
                  sx={(theme) => ({
                    fontFamily: FONTS.freesentation.medium,
                    color: "#000000",
                    fontSize: "16px",
                    [theme.breakpoints.up("desktop")]: {
                      fontSize: "20px",
                    },
                  })}
                >
                  {t("partner_subtitle")}
                </Typography>
              )}
            </Box>
            <Box
              component="ul"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                rowGap: 10,
                pl: 0,
              }}
            >
              {resource.partnerList.map((partnerImg) => (
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
          {/* partner ↔ customer 구분선 (고객사 3열 그리드와 동일하게 1180px까지 노출) */}
          <Box
            sx={{
              borderTop: "1px dashed #656565",
              width: "100%",
              my: 5,
              "@media (min-width:1181px)": { display: "none" },
            }}
          />
          <Stack gap={3}>
            <Box
              sx={{ display: "flex", alignItems: "baseline", gap: 2, pl: 2 }}
            >
              <Typography
                component="h2"
                sx={(theme) => ({
                  whiteSpace: "pre-line",
                  fontFamily: FONTS.freesentation.bold,
                  fontSize: "24px",
                  color: "#003B8D",
                  [theme.breakpoints.up("tablet")]: {
                    color: "#000000",
                    fontSize: "28px",
                  },
                  [theme.breakpoints.up("desktop")]: {
                    fontSize: "30px",
                  },
                })}
              >
                {t("customer")}
              </Typography>
              {t("customer_subtitle") && (
                <Typography
                  sx={(theme) => ({
                    fontFamily: FONTS.freesentation.medium,
                    color: "#000000",
                    fontSize: "16px",
                    [theme.breakpoints.up("desktop")]: {
                      fontSize: "20px",
                    },
                  })}
                >
                  {t("customer_subtitle")}
                </Typography>
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
              }}
            >
              {/* 모바일: 전체 로고를 하나의 그리드로 */}
              <CustomerContainer
                chunkList={allMobileChunks}
                customerList={[]}
              />
              {/* 데스크탑: 카테고리별 그룹 */}
              <CustomerContainer
                chunkList={[]}
                customerList={customer_company}
              />
              <CustomerContainer
                chunkList={[]}
                customerList={customer_institution}
              />
              <CustomerContainer
                chunkList={[]}
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
