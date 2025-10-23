import { Box, Stack } from "@mui/material";

import Feature from "../../components/product/Feature";
import ImageBanner from "../../components/product/ImageBanner";
import Outline from "../../components/product/Outline";
import ProductTextImageBox from "../../components/product/ProductTextImageBox";
import ProductCard from "../../components/product/Card";

import vissim from "../../data/product/vissim.json";

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

  return (
    <>
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
          mt: 18,
          px: 4,
          [theme.breakpoints.up("tablet")]: {
            px: 10,
          },
          [theme.breakpoints.up("laptop")]: {
            px: 20,
          },
        })}
      >
        <Outline outline={vissim_outline} imgObj={vissim_imgObj} />
      </Box>

      {/** Features 영역*/}
      <Box
        sx={(theme) => ({
          mt: 22,
          px: 4,
          [theme.breakpoints.up("tablet")]: {
            px: 10,
          },
          [theme.breakpoints.up("laptop")]: {
            px: 20,
          },
        })}
      >
        <Feature color="#000000" />

        <Stack
          sx={(theme) => ({
            gap: 2,
            [theme.breakpoints.up("tablet")]: {
              gap: 8,
            },
            [theme.breakpoints.up("laptop")]: {
              gap: 12,
            },
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
      <Box sx={{ my: 30, px: 20, display: "flex", justifyContent: "center" }}>
        <ProductCard cards={vissim_cards} />
      </Box>
    </>
  );
};

export default Vissim;
