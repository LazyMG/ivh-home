import { Box, Stack, useMediaQuery } from "@mui/material";
import BreadScrum from "../../components/solution/BreadScrum";
import ProductTitle from "../../components/product/ProductTitle";
import Outline from "../../components/product/Outline";
import Feature from "../../components/product/Feature";
import ProductTextImageBox from "../../components/product/ProductTextImageBox";

import vissim_automotive from "../../data/product/vissim-automotive.json";

const VissimAutomotive = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const {
    vissim_automotive_title,
    vissim_automotive_subtitle,
    vissim_automotive_outline,
    vissim_automotive_color,
    vissim_automotive_featureColor,
    vissim_automotive_subColor,
    vissim_automotive_data,
  } = vissim_automotive;
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
      {isMobile ? null : <BreadScrum title={vissim_automotive_title} />}
      {/** 그라데이션이 있는 제목 영역 */}
      {isMobile ? (
        <ProductTitle
          contentProps={{
            title: vissim_automotive_title,
            subtitle: vissim_automotive_subtitle,
            color: vissim_automotive_color,
            subColor: vissim_automotive_subColor,
          }}
          isMobile={isMobile}
        />
      ) : (
        <ProductTitle
          contentProps={{
            title: vissim_automotive_title,
            subtitle: vissim_automotive_subtitle,
            color: vissim_automotive_color,
            subColor: vissim_automotive_subColor,
          }}
        />
      )}

      {/** 그라데이션 영역 바로 밑에 개요 영역 */}
      <Outline outline={vissim_automotive_outline} />

      {/** Features 영역 */}
      <Box sx={{ mt: 22 }}>
        <Feature color={vissim_automotive_featureColor} />

        <Stack gap={12}>
          {vissim_automotive_data.map((data, index) => (
            <ProductTextImageBox
              key={`vissim-automotive-${index}`}
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

export default VissimAutomotive;
