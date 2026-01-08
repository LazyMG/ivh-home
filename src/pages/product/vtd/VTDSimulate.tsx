import { Box, Stack } from "@mui/material";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import BreadScrum from "../../../common/BreadScrum";
import ProductTitle from "../../../components/product/ProductTitle";
import Outline from "../../../components/product/Outline";
import Feature from "../../../components/product/Feature";
import ProductTextImageBox from "../../../components/product/ProductTextImageBox";

import vtd_simulate from "../../../data/product/vtd-simulate.json";
import ScrollButton from "../../../common/ScrollButton";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../common/SEO";
import ProductBottom from "../../../components/product/ProductBottom";

const VTDSimulate = () => {
  const { isMobile } = useBreakpoint();
  const seoData = useSEO("product/vtd/vtdsimulate", vtd_simulate);
  const {
    vtd_simulate_title,
    vtd_simulate_subtitle,
    vtd_simulate_imgObj,
    vtd_simulate_outline,
    vtd_simulate_color,
    vtd_simulate_featureColor,
    vtd_simulate_subColor,
    vtd_simulate_data,
  } = vtd_simulate;

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
          color={vtd_simulate_color}
          threshold={THRESHOLD}
          show={!isMobile}
        />
        <Box component="article">
          {/* breadcrumb section */}
          {isMobile ? null : <BreadScrum pageKey="vtdSimulate" />}
          {/** 그라데이션이 있는 제목 영역 */}
          {isMobile ? (
            <ProductTitle
              contentProps={{
                title: vtd_simulate_title,
                subtitle: vtd_simulate_subtitle,
                color: vtd_simulate_color,
                subColor: vtd_simulate_subColor,
              }}
              isMobile={isMobile}
              pageKey="vtdSimulate"
            />
          ) : (
            <ProductTitle
              contentProps={{
                title: vtd_simulate_title,
                subtitle: vtd_simulate_subtitle,
                color: vtd_simulate_color,
                subColor: vtd_simulate_subColor,
              }}
            />
          )}

          {/** 그라데이션 영역 바로 밑에 개요 영역 */}
          <Outline
            outline={vtd_simulate_outline}
            imgObj={vtd_simulate_imgObj}
          />

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
            <Feature color={vtd_simulate_featureColor} />

            <Stack
              sx={(theme) => ({
                ...theme.customStyles.productStackComponent,
              })}
            >
              {vtd_simulate_data.map((data, index) => (
                <ProductTextImageBox
                  key={`vtd-simulate-${index}`}
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
                  mb: 36,
                },
              })}
            >
              <ProductBottom productName="VTD FULLSTACK" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default VTDSimulate;
