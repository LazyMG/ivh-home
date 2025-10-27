import { Box, Stack } from "@mui/material";

import Feature from "../../../components/product/Feature";
import ImageBanner from "../../../components/product/ImageBanner";
import Outline from "../../../components/product/Outline";
import ProductTextImageBox from "../../../components/product/ProductTextImageBox";

import dymola from "../../../data/product/dymola.json";
import ProductCard from "../../../components/product/Card";
import ScrollButton from "../../../common/ScrollButton";
import { useIsMobile } from "../../../hooks/useIsMobile";

const Dymola = () => {
  const {
    dymola_title,
    dymola_subtitle,
    dymola_outline,
    dymola_mainImgUrl,
    dymola_data,
    dymola_cards,
  } = dymola;

  const THRESHOLD = 100;
  const isMobile = useIsMobile();

  return (
    <>
      <ScrollButton threshold={THRESHOLD} show={!isMobile} />
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
          ...theme.customStyles.productBranchPageOutline,
        })}
      >
        <Outline outline={dymola_outline} />
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
        <ProductCard cards={dymola_cards} />
      </Box>
    </>
  );
};

export default Dymola;
