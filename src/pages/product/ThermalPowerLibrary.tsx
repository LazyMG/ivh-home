import { Box, Stack } from "@mui/material";
import { useIsMobile } from "../../hooks/useIsMobile";

import ProductTitle from "../../components/product/ProductTitle";
import Feature from "../../components/product/Feature";
import Outline from "../../components/product/Outline";
import ProductTextImageBox from "../../components/product/ProductTextImageBox";
import BreadScrum from "../../common/BreadScrum";

import thermal from "../../data/product/thermal.json";

const ThermalPowerLibrary = () => {
  const isMobile = useIsMobile();

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
      {isMobile ? null : <BreadScrum pageKey="thermalPowerLibrary" />}
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
          pageKey="thermalPowerLibrary"
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
      <Box
        sx={(theme) => ({
          my: 12,
          [theme.breakpoints.up("tablet")]: {
            my: 22,
          },
        })}
      >
        <Feature color={thermal_featureColor} />

        <Stack
          sx={(theme) => ({
            ...theme.customStyles.productStackComponent,
          })}
        >
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
