import { Box, Stack } from "@mui/material";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import BreadScrum from "../../../common/BreadScrum";
import ProductTitle from "../../../components/product/ProductTitle";
import Outline from "../../../components/product/Outline";
import Feature from "../../../components/product/Feature";
import ProductTextImageBox from "../../../components/product/ProductTextImageBox";

import viswalk from "../../../data/product/viswalk.json";
import ScrollButton from "../../../common/ScrollButton";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../common/SEO";

const Viswalk = () => {
  const seoData = useSEO("product/viswalk", viswalk);
  const { isMobile } = useBreakpoint();

  const {
    viswalk_title,
    viswalk_subtitle,
    viswalk_outline,
    viswalk_color,
    viswalk_featureColor,
    viswalk_subColor,
    viswalk_data,
  } = viswalk;

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
          color={viswalk_color}
          threshold={THRESHOLD}
          show={!isMobile}
        />
        <Box component="article">
          {/* breadcrumb section */}
          {isMobile ? null : <BreadScrum pageKey="viswalk" />}
          {/** 그라데이션이 있는 제목 영역 */}
          {isMobile ? (
            <ProductTitle
              contentProps={{
                title: viswalk_title,
                subtitle: viswalk_subtitle,
                color: viswalk_color,
                subColor: viswalk_subColor,
              }}
              isMobile={isMobile}
              pageKey="viswalk"
            />
          ) : (
            <ProductTitle
              contentProps={{
                title: viswalk_title,
                subtitle: viswalk_subtitle,
                color: viswalk_color,
                subColor: viswalk_subColor,
              }}
            />
          )}

          {/** 그라데이션 영역 바로 밑에 개요 영역 */}
          <Outline outline={viswalk_outline} />

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
            <Feature color={viswalk_featureColor} />

            <Stack
              sx={(theme) => ({
                ...theme.customStyles.productStackComponent,
              })}
            >
              {viswalk_data.map((data, index) => (
                <ProductTextImageBox
                  key={`viswalk-${index}`}
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

export default Viswalk;
