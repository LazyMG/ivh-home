import { Box, Stack } from "@mui/material";
import { useIsMobile } from "../../../hooks/useIsMobile";

import ProductTitle from "../../../components/product/ProductTitle";
import Feature from "../../../components/product/Feature";
import Outline from "../../../components/product/Outline";
import ProductTextImageBox from "../../../components/product/ProductTextImageBox";
import BreadScrum from "../../../common/BreadScrum";

import til from "../../../data/product/til.json";
import ScrollButton from "../../../common/ScrollButton";

const TIL = () => {
  const isMobile = useIsMobile();

  const {
    til_title,
    til_subtitle,
    til_outline,
    til_imgObj,
    til_subOutline,
    til_color,
    til_subColor,
    til_featureColor,
    til_data,
  } = til;

  const THRESHOLD = 100;

  return (
    <Box
      sx={(theme) => ({
        px: 4,
        pt: "50px",
        [theme.breakpoints.up("tablet")]: {
          px: 10,
        },
        [theme.breakpoints.up("laptop")]: {
          px: 20,
        },
      })}
    >
      <ScrollButton color={til_color} threshold={THRESHOLD} show={!isMobile} />
      {/* breadcrumb section */}
      {isMobile ? null : <BreadScrum pageKey="til" />}
      {/** 그라데이션이 있는 제목 영역 */}
      {isMobile ? (
        <ProductTitle
          contentProps={{
            title: til_title,
            subtitle: til_subtitle,
            color: til_color,
            subColor: til_subColor,
          }}
          isMobile={isMobile}
          pageKey="til"
        />
      ) : (
        <ProductTitle
          contentProps={{
            title: til_title,
            subtitle: til_subtitle,
            color: til_color,
            subColor: til_subColor,
          }}
        />
      )}

      {/** 그라데이션 영역 바로 밑에 개요 영역 */}
      <Outline outline={til_outline} imgObj={til_imgObj} />

      {/** 개요 하단에 이미지가 있는 텍스트 영역 - subOutline으로 구분 */}
      {/** TextImageBox title 제외하고 그대로 사용 */}
      <ProductTextImageBox
        contents={til_subOutline.contents}
        imgObj={til_subOutline.imgObj}
      />

      {/** Features 영역 */}
      <Box
        sx={(theme) => ({
          my: 12,
          [theme.breakpoints.up("tablet")]: {
            my: 22,
          },
        })}
      >
        <Feature color={til_featureColor} />

        <Stack
          sx={(theme) => ({
            ...theme.customStyles.productStackComponent,
          })}
        >
          {til_data.map((data, index) => (
            <ProductTextImageBox
              key={`til-${index}`}
              title={data.title}
              contents={data.contents}
              imgObj={data.imgObj}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default TIL;
