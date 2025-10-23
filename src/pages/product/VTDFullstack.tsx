import { Box, Stack, useMediaQuery } from "@mui/material";
import BreadScrum from "../../components/solution/BreadScrum";
import ProductTitle from "../../components/product/ProductTitle";
import Outline from "../../components/product/Outline";
import Feature from "../../components/product/Feature";
import ProductTextImageBox from "../../components/product/ProductTextImageBox";

import vtd_fullstack from "../../data/product/vtd-fullstack.json";

const VTDFullstack = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

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
      {/* breadcrumb section */}
      {isMobile ? null : <BreadScrum title={vtd_fullstack_title} />}
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
      <Outline outline={vtd_fullstack_outline} imgObj={vtd_fullstack_imgObj} />

      {/** Features 영역 */}
      <Box sx={{ mt: 22 }}>
        <Feature color={vtd_fullstack_featureColor} />

        <Stack gap={12}>
          {vtd_fullstack_data.map((data, index) => (
            <ProductTextImageBox
              key={`vtd-fullstack-${index}`}
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

export default VTDFullstack;
