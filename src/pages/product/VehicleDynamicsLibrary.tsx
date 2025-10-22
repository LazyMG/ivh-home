import { Box, Stack } from "@mui/material";

import ProductTitle from "../../components/product/ProductTitle";
import Feature from "../../components/product/Feature";
import Outline from "../../components/product/Outline";
import ProductTextImageBox from "../../components/product/ProductTextImageBox";

import vehicle from "../../data/product/vehicle.json";

const VehicleDynamicsLibrary = () => {
  const {
    vehicle_title,
    vehicle_subtitle,
    vehicle_outline,
    vehicle_color,
    vehicle_subColor,
    vehicle_featureColor,
    vehicle_data,
  } = vehicle;

  return (
    <Box
      sx={(theme) => ({
        px: 4,
        [theme.breakpoints.up("tablet")]: {
          px: 10,
        },
        [theme.breakpoints.up("laptop")]: {
          px: 20,
        },
      })}
    >
      {/** 그라데이션이 있는 제목 영역 */}
      <ProductTitle
        title={vehicle_title}
        subtitle={vehicle_subtitle}
        color={vehicle_color}
        subColor={vehicle_subColor}
      />

      {/** 그라데이션 영역 바로 밑에 개요 영역 */}
      <Outline outline={vehicle_outline} />

      {/** Features 영역 */}
      <Box sx={{ mt: 22 }}>
        <Feature color={vehicle_featureColor} />

        <Stack gap={12}>
          {vehicle_data.map((data, index) => (
            <ProductTextImageBox
              key={`vehicle-${index}`}
              title={data.title}
              contents={data.contents}
              imgObj={data?.imgObj}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default VehicleDynamicsLibrary;
