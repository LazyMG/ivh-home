import { Box, Stack } from "@mui/material";

import Feature from "../../../components/product/Feature";
import ImageBanner from "../../../components/product/ImageBanner";
import Outline from "../../../components/product/Outline";
import ProductTextImageBox from "../../../components/product/ProductTextImageBox";
import ProductCard from "../../../components/product/Card";

import vissim from "../../../data/product/vissim.json";
import ScrollButton from "../../../common/ScrollButton";
import { useIsMobile } from "../../../hooks/useIsMobile";

const Vissim = () => {
  const {
    vissim_title,
    vissim_subtitle,
    vissim_outline,
    vissim_mainImgUrl,
    vissim_imgObj,
    vissim_data,
    vissim_cards,
  } = vissim;

  const THRESHOLD = 100;
  const isMobile = useIsMobile();

  return (
    <>
      <ScrollButton color="#000000" threshold={THRESHOLD} show={!isMobile} />
      {/** 전체 패딩 영역(반응형 고려) 넣기 */}
      {/** 이미지 영역 */}
      <ImageBanner
        imgUrl={vissim_mainImgUrl}
        title={vissim_title}
        subtitle={vissim_subtitle}
      />

      {/** 개요 영역 */}
      <Box
        sx={(theme) => ({
          ...theme.customStyles.productBranchPageOutline,
        })}
      >
        <Outline outline={vissim_outline} imgObj={vissim_imgObj} />
      </Box>

      {/** Features 영역*/}
      <Box
        sx={(theme) => ({
          mt: 16,
          px: 4,
          [theme.breakpoints.up("tablet")]: {
            mt: 24,
            px: 10,
          },
          [theme.breakpoints.up("laptop")]: {
            mt: 36,
            px: 20,
          },
        })}
      >
        <Feature color="#000000" />

        <Stack
          sx={(theme) => ({
            ...theme.customStyles.productStackComponent,
          })}
        >
          {vissim_data.map((data, index) => (
            <ProductTextImageBox
              key={`vissim-${index}`}
              title={data.title}
              contents={data.contents}
              imgObj={data.imgObj}
            />
          ))}
        </Stack>
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
        <ProductCard cards={vissim_cards} />
      </Box>
    </>
  );
};

export default Vissim;
