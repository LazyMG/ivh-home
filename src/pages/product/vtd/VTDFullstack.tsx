import { Box, Stack } from "@mui/material";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import BreadScrum from "../../../common/BreadScrum";
import ProductTitle from "../../../components/product/ProductTitle";
import Outline from "../../../components/product/Outline";
import Feature from "../../../components/product/Feature";
import ProductTextImageBox from "../../../components/product/ProductTextImageBox";

import vtd_fullstack from "../../../data/product/vtd-fullstack.json";
import ScrollButton from "../../../common/ScrollButton";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../common/SEO";
import ProductBottom from "../../../components/product/ProductBottom";

const VTDFullstack = () => {
  const { isMobile } = useBreakpoint();
  const seoData = useSEO("product/vtd/vtdfullstack", vtd_fullstack);
  const {
    vtd_fullstack_title,
    vtd_fullstack_subtitle,
    vtd_fullstack_imgObj,
    vtd_fullstack_outline,
    vtd_fullstack_color,
    vtd_fullstack_featureColor,
    vtd_fullstack_subColor,
    vtd_fullstack_data,
  } = vtd_fullstack;

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
          color={vtd_fullstack_color}
          threshold={THRESHOLD}
          show={!isMobile}
        />
        <Box component="article">
          {/* breadcrumb section */}
          {isMobile ? null : <BreadScrum pageKey="vtdFullstack" />}
          {/** 그라데이션이 있는 제목 영역 */}
          {isMobile ? (
            <ProductTitle
              contentProps={{
                title: vtd_fullstack_title,
                subtitle: vtd_fullstack_subtitle,
                color: vtd_fullstack_color,
                subColor: vtd_fullstack_subColor,
              }}
              isMobile={isMobile}
              pageKey="vtdFullstack"
            />
          ) : (
            <ProductTitle
              contentProps={{
                title: vtd_fullstack_title,
                subtitle: vtd_fullstack_subtitle,
                color: vtd_fullstack_color,
                subColor: vtd_fullstack_subColor,
              }}
            />
          )}

          {/** 그라데이션 영역 바로 밑에 개요 영역 */}
          <Outline
            outline={vtd_fullstack_outline}
            imgObj={vtd_fullstack_imgObj}
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
            <Feature color={vtd_fullstack_featureColor} />

            <Stack
              sx={(theme) => ({
                ...theme.customStyles.productStackComponent,
              })}
            >
              {vtd_fullstack_data.map((data, index) => (
                <ProductTextImageBox
                  key={`vtd-fullstack-${index}`}
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
              <ProductBottom productName="VTD SIMULATE" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default VTDFullstack;
