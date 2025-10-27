import { Box, Stack } from "@mui/material";
import { useIsMobile } from "../../../hooks/useIsMobile";
import BreadScrum from "../../../common/BreadScrum";
import ProductTitle from "../../../components/product/ProductTitle";
import Outline from "../../../components/product/Outline";
import Feature from "../../../components/product/Feature";
import ProductTextImageBox from "../../../components/product/ProductTextImageBox";

import vissim_automotive from "../../../data/product/vissim-automotive.json";
import ScrollButton from "../../../common/ScrollButton";

const VissimAutomotive = () => {
  const isMobile = useIsMobile();

  const {
    vissim_automotive_title,
    vissim_automotive_subtitle,
    vissim_automotive_outline,
    vissim_automotive_color,
    vissim_automotive_featureColor,
    vissim_automotive_subColor,
    vissim_automotive_data,
  } = vissim_automotive;

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
      <ScrollButton
        color={vissim_automotive_color}
        threshold={THRESHOLD}
        show={!isMobile}
      />
      {/* breadcrumb section */}
      {isMobile ? null : <BreadScrum pageKey="vissimAutomotive" />}
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
          pageKey="vissimAutomotive"
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
      <Box
        sx={(theme) => ({
          my: 12,
          [theme.breakpoints.up("tablet")]: {
            my: 22,
          },
        })}
      >
        <Feature color={vissim_automotive_featureColor} />

        <Stack
          sx={(theme) => ({
            ...theme.customStyles.productStackComponent,
          })}
        >
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
