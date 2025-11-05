import { Box } from "@mui/material";
import ImageBanner from "../../../components/product/ImageBanner";
import Outline from "../../../components/product/Outline";
import ProductCard from "../../../components/product/Card";

import vtd from "../../../data/product/vtd.json";
import ScrollButton from "../../../common/ScrollButton";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../common/SEO";
import ProductBottom from "../../../components/product/ProductBottom";

const VTD = () => {
  const seoData = useSEO("product/vtd", vtd);
  const { vtd_title, vtd_subtitle, vtd_mainImgUrl, vtd_outline, vtd_cards } =
    vtd;
  const THRESHOLD = 100;

  return (
    <>
      {/* SEO 메타 태그 */}
      <SEO {...seoData} />
      <Box component="main">
        <Box component="article">
          <ScrollButton threshold={THRESHOLD} />
          {/** 전체 패딩 영역(반응형 고려) 넣기 */}
          {/** 이미지 영역 */}
          <ImageBanner
            imgUrl={vtd_mainImgUrl}
            title={vtd_title}
            subtitle={vtd_subtitle}
          />

          {/** 개요 영역 */}
          <Box
            component="section"
            aria-label="outline-heading"
            sx={(theme) => ({
              ...theme.customStyles.productBranchPageOutline,
            })}
          >
            <Outline outline={vtd_outline} />
          </Box>

          {/** 카드 영역 */}
          <Box
            component="section"
            aria-label="cards-heading"
            sx={(theme) => ({
              display: "flex",
              justifyContent: "center",

              my: 12,
              px: 4,
              [theme.breakpoints.up("tablet")]: {
                my: 24,
                px: 10,
              },
              [theme.breakpoints.up("desktop")]: {
                my: 30,
                px: 20,
              },
            })}
          >
            <ProductCard cards={vtd_cards} />
          </Box>

          {/** 하단 폼 영역 */}
          <Box
            component="section"
            aria-label="form-heading"
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              gap: 12,
              my: 12,
              px: 4,
              [theme.breakpoints.up("tablet")]: {
                my: 24,
                px: 10,
                gap: 22,
              },
              [theme.breakpoints.up("desktop")]: {
                my: 30,
                px: 20,
              },
            })}
          >
            <ProductBottom productName="VTD" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default VTD;
