import { Box } from "@mui/material";
import ImageBanner from "../../components/product/ImageBanner";
import Outline from "../../components/product/Outline";
import ProductCard from "../../components/product/Card";

import vtd from "../../data/product/vtd.json";

const VTD = () => {
  const { vtd_title, vtd_subtitle, vtd_mainImgUrl, vtd_outline, vtd_cards } =
    vtd;
  return (
    <>
      {/** 전체 패딩 영역(반응형 고려) 넣기 */}
      {/** 이미지 영역 */}
      <ImageBanner
        imgUrl={vtd_mainImgUrl}
        title={vtd_title}
        subtitle={vtd_subtitle}
      />

      {/** 개요 영역 */}
      <Box
        sx={(theme) => ({
          ...theme.customStyles.productBranchPageOutline,
        })}
      >
        <Outline outline={vtd_outline} />
      </Box>

      {/** 카드 영역 */}
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "center",

          my: 12,
          px: 4,
          [theme.breakpoints.up("tablet")]: {
            my: 24,
            px: 10,
          },
          [theme.breakpoints.up("laptop")]: {
            my: 30,
            px: 20,
          },
        })}
      >
        <ProductCard cards={vtd_cards} />
      </Box>
    </>
  );
};

export default VTD;
