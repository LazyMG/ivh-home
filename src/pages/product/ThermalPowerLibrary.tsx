import { Box, Stack, useMediaQuery } from "@mui/material";

import ProductTitle from "../../components/product/ProductTitle";
import Feature from "../../components/product/Feature";
import Outline from "../../components/product/Outline";
import ProductTextImageBox from "../../components/product/ProductTextImageBox";
import BreadScrum from "../../components/solution/BreadScrum";

import thermal from "../../data/product/thermal.json";

const ThermalPowerLibrary = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const {
    thermal_title,
    thermal_outline,
    thermal_subtitle,
    thermal_color,
    thermal_subColor,
    thermal_featureColor,
    thermal_data,
  } = thermal;

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
      {isMobile ? null : <BreadScrum title={thermal_title} />}
      {/** 그라데이션이 있는 제목 영역 */}
      {isMobile ? (
        <ProductTitle
          contentProps={{
            title: thermal_title,
            subtitle: thermal_subtitle,
            color: thermal_color,
            subColor: thermal_subColor,
          }}
          isMobile={isMobile}
        />
      ) : (
        <ProductTitle
          contentProps={{
            title: thermal_title,
            subtitle: thermal_subtitle,
            color: thermal_color,
            subColor: thermal_subColor,
          }}
        />
      )}

      {/** 그라데이션 영역 바로 밑에 개요 영역 */}
      <Outline outline={thermal_outline} />

      {/** Features 영역 */}
      <Box sx={{ mt: 22 }}>
        <Feature color={thermal_featureColor} />

        <Stack gap={12}>
          {thermal_data.map((data, index) => (
            <ProductTextImageBox
              key={`thermal-${index}`}
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

export default ThermalPowerLibrary;
