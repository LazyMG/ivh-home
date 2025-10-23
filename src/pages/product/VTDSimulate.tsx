import { Box, Stack, useMediaQuery } from "@mui/material";
import BreadScrum from "../../components/solution/BreadScrum";
import ProductTitle from "../../components/product/ProductTitle";
import Outline from "../../components/product/Outline";
import Feature from "../../components/product/Feature";
import ProductTextImageBox from "../../components/product/ProductTextImageBox";

import vtd_simulate from "../../data/product/vtd-simulate.json";

const VTDSimulate = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const {
    vtd_simulate_title,
    vtd_simulate_subtitle,
    vtd_simulate_imgObj,
    vtd_simulate_outline,
    vtd_simulate_color,
    vtd_simulate_featureColor,
    vtd_simulate_subColor,
    vtd_simulate_data,
  } = vtd_simulate;
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
      {isMobile ? null : <BreadScrum title={vtd_simulate_title} />}
      {/** 그라데이션이 있는 제목 영역 */}
      {isMobile ? (
        <ProductTitle
          contentProps={{
            title: vtd_simulate_title,
            subtitle: vtd_simulate_subtitle,
            color: vtd_simulate_color,
            subColor: vtd_simulate_subColor,
          }}
          isMobile={isMobile}
        />
      ) : (
        <ProductTitle
          contentProps={{
            title: vtd_simulate_title,
            subtitle: vtd_simulate_subtitle,
            color: vtd_simulate_color,
            subColor: vtd_simulate_subColor,
          }}
        />
      )}

      {/** 그라데이션 영역 바로 밑에 개요 영역 */}
      <Outline outline={vtd_simulate_outline} imgObj={vtd_simulate_imgObj} />

      {/** Features 영역 */}
      <Box
        sx={(theme) => ({
          my: 12,
          [theme.breakpoints.up("tablet")]: {
            my: 22,
          },
        })}
      >
        <Feature color={vtd_simulate_featureColor} />

        <Stack
          sx={(theme) => ({
            ...theme.customStyles.productStackComponent,
          })}
        >
          {vtd_simulate_data.map((data, index) => (
            <ProductTextImageBox
              key={`vtd-simulate-${index}`}
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

export default VTDSimulate;
