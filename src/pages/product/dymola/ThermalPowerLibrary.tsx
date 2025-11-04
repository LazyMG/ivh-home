import { Box, Stack } from "@mui/material";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

import ProductTitle from "../../../components/product/ProductTitle";
import Feature from "../../../components/product/Feature";
import Outline from "../../../components/product/Outline";
import ProductTextImageBox from "../../../components/product/ProductTextImageBox";
import BreadScrum from "../../../common/BreadScrum";
import SEO from "../../../common/SEO";
import { useSEO } from "../../../hooks/useSEO";
import thermal from "../../../data/product/thermal.json";
import ScrollButton from "../../../common/ScrollButton";
import ProductForm from "../../../components/product/ProductForm";

const ThermalPowerLibrary = () => {
  const seoData = useSEO("product/dymola/thermalPowerLibrary", thermal);
  const { isMobile } = useBreakpoint();

  const {
    thermal_title,
    thermal_outline,
    thermal_subtitle,
    thermal_color,
    thermal_subColor,
    thermal_featureColor,
    thermal_data,
  } = thermal;

  const THRESHOLD = 100;

  return (
    <>
      {/* SEO 메타 태그 */}
      <SEO {...seoData} />
      <Box
        component="main"
        sx={(theme) => ({
          ...theme.customStyles.productPageContainer,
        })}
      >
        <ScrollButton
          color={thermal_color}
          threshold={THRESHOLD}
          show={!isMobile}
        />
        <Box component="article">
          {/* breadcrumb section */}
          {isMobile ? null : <BreadScrum pageKey="thermalPowerLibrary" />}
          {/** 그라데이션이 있는 제목 영역 */}
          {isMobile ? (
            <ProductTitle
              contentProps={{
                title: thermal_title,
                subtitle: thermal_subtitle,
                color: thermal_color,
                subColor: thermal_subColor,
              }}
              isMobile={isMobile}
              pageKey="thermalPowerLibrary"
            />
          ) : (
            <ProductTitle
              contentProps={{
                title: thermal_title,
                subtitle: thermal_subtitle,
                color: thermal_color,
                subColor: thermal_subColor,
              }}
            />
          )}

          {/** 그라데이션 영역 바로 밑에 개요 영역 */}
          <Outline outline={thermal_outline} />

          {/** Features 영역 */}
          <Box
            component="section"
            aria-label="features-heading"
            sx={(theme) => ({
              my: 12,
              [theme.breakpoints.up("tablet")]: {
                my: 22,
              },
            })}
          >
            <Feature color={thermal_featureColor} />

            <Stack
              sx={(theme) => ({
                ...theme.customStyles.productStackComponent,
              })}
            >
              {thermal_data.map((data, index) => (
                <ProductTextImageBox
                  key={`thermal-${index}`}
                  title={data.title}
                  contents={data.contents}
                  imgObj={data.imgObj}
                />
              ))}
            </Stack>

            {/** 하단 폼 영역 */}
            <Box
              component="section"
              aria-label="form-heading"
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                gap: 10,
                my: 12,
                [theme.breakpoints.up("tablet")]: {
                  my: 24,
                  gap: 22,
                },
                [theme.breakpoints.up("desktop")]: {
                  my: 30,
                },
              })}
            >
              <ProductForm productName="Thermal Power Library" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ThermalPowerLibrary;
