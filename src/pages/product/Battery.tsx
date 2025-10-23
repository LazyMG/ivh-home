import { Box, Stack, useMediaQuery } from "@mui/material";

import ProductTitle from "../../components/product/ProductTitle";
import Feature from "../../components/product/Feature";
import Outline from "../../components/product/Outline";
import ProductTextImageBox from "../../components/product/ProductTextImageBox";
import BreadScrum from "../../components/solution/BreadScrum";

import battery from "../../data/product/battery.json";

const Battery = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const {
    battery_title,
    battery_subtitle,
    battery_outline,
    battery_color,
    battery_subColor,
    battery_featureColor,
    battery_data,
  } = battery;

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
      {isMobile ? null : <BreadScrum title={battery_title} />}
      {/** 그라데이션이 있는 제목 영역 */}
      {isMobile ? (
        <ProductTitle
          contentProps={{
            title: battery_title,
            subtitle: battery_subtitle,
            color: battery_color,
            subColor: battery_subColor,
          }}
          isMobile={isMobile}
        />
      ) : (
        <ProductTitle
          contentProps={{
            title: battery_title,
            subtitle: battery_subtitle,
            color: battery_color,
            subColor: battery_subColor,
          }}
        />
      )}

      {/** 그라데이션 영역 바로 밑에 개요 영역 */}
      <Outline outline={battery_outline} />

      {/** Features 영역 */}
      <Box
        sx={(theme) => ({
          my: 12,
          [theme.breakpoints.up("tablet")]: {
            my: 22,
          },
        })}
      >
        <Feature color={battery_featureColor} />

        <Stack
          sx={(theme) => ({
            ...theme.customStyles.productStackComponent,
          })}
        >
          {battery_data.map((data, index) => (
            <ProductTextImageBox
              key={`battery-${index}`}
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

export default Battery;
