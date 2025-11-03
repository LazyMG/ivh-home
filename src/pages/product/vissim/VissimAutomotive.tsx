import { Box, Stack } from "@mui/material";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import BreadScrum from "../../../common/BreadScrum";
import ProductTitle from "../../../components/product/ProductTitle";
import Outline from "../../../components/product/Outline";
import Feature from "../../../components/product/Feature";
import ProductTextImageBox from "../../../components/product/ProductTextImageBox";

import vissim_automotive from "../../../data/product/vissim-automotive.json";
import ScrollButton from "../../../common/ScrollButton";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../common/SEO";

const VissimAutomotive = () => {
  const seoData = useSEO("product/vissim/vissimautomotive", vissim_automotive);
  const { isMobile } = useBreakpoint();

  const {
    vissim_automotive_title,
    vissim_automotive_subtitle,
    vissim_automotive_outline,
    vissim_automotive_color,
    vissim_automotive_featureColor,
    vissim_automotive_subColor,
    vissim_automotive_data,
  } = vissim_automotive;

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
          color={vissim_automotive_color}
          threshold={THRESHOLD}
          show={!isMobile}
        />
        <Box component="article">
          {/* breadcrumb section */}
          {isMobile ? null : <BreadScrum pageKey="vissimAutomotive" />}
          {/** 그라데이션이 있는 제목 영역 */}
          {isMobile ? (
            <ProductTitle
              contentProps={{
                title: vissim_automotive_title,
                subtitle: vissim_automotive_subtitle,
                color: vissim_automotive_color,
                subColor: vissim_automotive_subColor,
              }}
              isMobile={isMobile}
              pageKey="vissimAutomotive"
            />
          ) : (
            <ProductTitle
              contentProps={{
                title: vissim_automotive_title,
                subtitle: vissim_automotive_subtitle,
                color: vissim_automotive_color,
                subColor: vissim_automotive_subColor,
              }}
            />
          )}

          {/** 그라데이션 영역 바로 밑에 개요 영역 */}
          <Outline outline={vissim_automotive_outline} />

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
            <Feature color={vissim_automotive_featureColor} />

            <Stack
              sx={(theme) => ({
                ...theme.customStyles.productStackComponent,
              })}
            >
              {vissim_automotive_data.map((data, index) => (
                <ProductTextImageBox
                  key={`vissim-automotive-${index}`}
                  title={data.title}
                  contents={data.contents}
                  imgObj={data.imgObj}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default VissimAutomotive;
