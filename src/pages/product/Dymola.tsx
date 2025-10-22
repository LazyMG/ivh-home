import { Box, Stack } from "@mui/material";

import Feature from "../../components/product/Feature";
import ImageBanner from "../../components/product/ImageBanner";
import Outline from "../../components/product/Outline";
import ProductTextImageBox from "../../components/product/ProductTextImageBox";

import dymola from "../../data/product/dymola.json";

const Dymola = () => {
  const {
    dymola_title,
    dymola_subtitle,
    dymola_outline,
    dymola_mainImgUrl,
    dymola_data,
  } = dymola;

  return (
    <>
      {/** 전체 패딩 영역(반응형 고려) 넣기 */}
      {/** 이미지 영역 */}
      <ImageBanner
        imgUrl={dymola_mainImgUrl}
        title={dymola_title}
        subtitle={dymola_subtitle}
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
        <Outline outline={dymola_outline} />
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
          {dymola_data.map((data, index) => (
            <ProductTextImageBox
              key={`dymola-${index}`}
              title={data.title}
              contents={data.contents}
              imgObj={data.imgObj}
            />
          ))}
        </Stack>
      </Box>

      {/** 카드 영역 */}
    </>
  );
};

export default Dymola;
