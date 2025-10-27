import { Box, Stack } from "@mui/material";
import { useIsMobile } from "../../../hooks/useIsMobile";
import BreadScrum from "../../../common/BreadScrum";
import ProductTitle from "../../../components/product/ProductTitle";
import Outline from "../../../components/product/Outline";
import Feature from "../../../components/product/Feature";
import ProductTextImageBox from "../../../components/product/ProductTextImageBox";

import vtd_create from "../../../data/product/vtd-create.json";
import ScrollButton from "../../../common/ScrollButton";

const VTDCreate = () => {
  const isMobile = useIsMobile();

  const {
    vtd_create_title,
    vtd_create_subtitle,
    vtd_create_imgObj,
    vtd_create_outline,
    vtd_create_color,
    vtd_create_featureColor,
    vtd_create_subColor,
    vtd_create_data,
  } = vtd_create;

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
        color={vtd_create_color}
        threshold={THRESHOLD}
        show={!isMobile}
      />
      {/* breadcrumb section */}
      {isMobile ? null : <BreadScrum pageKey="vtdCreate" />}
      {/** 그라데이션이 있는 제목 영역 */}
      {isMobile ? (
        <ProductTitle
          contentProps={{
            title: vtd_create_title,
            subtitle: vtd_create_subtitle,
            color: vtd_create_color,
            subColor: vtd_create_subColor,
          }}
          isMobile={isMobile}
          pageKey="vtdCreate"
        />
      ) : (
        <ProductTitle
          contentProps={{
            title: vtd_create_title,
            subtitle: vtd_create_subtitle,
            color: vtd_create_color,
            subColor: vtd_create_subColor,
          }}
        />
      )}

      {/** 그라데이션 영역 바로 밑에 개요 영역 */}
      <Outline outline={vtd_create_outline} imgObj={vtd_create_imgObj} />

      {/** Features 영역 */}
      <Box
        sx={(theme) => ({
          my: 12,
          [theme.breakpoints.up("tablet")]: {
            my: 22,
          },
        })}
      >
        <Feature color={vtd_create_featureColor} />

        <Stack
          sx={(theme) => ({
            ...theme.customStyles.productStackComponent,
          })}
        >
          {vtd_create_data.map((data, index) => (
            <ProductTextImageBox
              key={`vtd-create-${index}`}
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

export default VTDCreate;
