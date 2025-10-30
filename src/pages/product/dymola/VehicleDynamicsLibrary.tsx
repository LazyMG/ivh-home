import { Box, Stack } from "@mui/material";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

import ProductTitle from "../../../components/product/ProductTitle";
import Feature from "../../../components/product/Feature";
import Outline from "../../../components/product/Outline";
import ProductTextImageBox from "../../../components/product/ProductTextImageBox";
import BreadScrum from "../../../common/BreadScrum";

import vehicle from "../../../data/product/vehicle.json";
import ScrollButton from "../../../common/ScrollButton";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../common/SEO";

const VehicleDynamicsLibrary = () => {
  const seoData = useSEO("product/dymola/vehicleDynamicsLibrary", vehicle);
  const { isMobile } = useBreakpoint();
  console.log("VehicleDynamicsLibrary : ", isMobile);

  const {
    vehicle_title,
    vehicle_subtitle,
    vehicle_outline,
    vehicle_color,
    vehicle_subColor,
    vehicle_featureColor,
    vehicle_data,
  } = vehicle;

  const THRESHOLD = 100;

  return (
    <>
      {/* SEO 메타 태그 */}
      <SEO {...seoData} />
      <Box
        component="main"
        sx={(theme) => ({
          px: 4,
          pt: "50px",
          [theme.breakpoints.up("tablet")]: {
            px: 10,
          },
          [theme.breakpoints.up("desktop")]: {
            px: 20,
          },
        })}
      >
        <ScrollButton
          color={vehicle_color}
          threshold={THRESHOLD}
          show={!isMobile}
        />
        <Box component="article">
          {/* breadcrumb section */}
          {isMobile ? null : <BreadScrum pageKey="vehicledynamicslibrary" />}
          {/** 그라데이션이 있는 제목 영역 */}
          {isMobile ? (
            <ProductTitle
              contentProps={{
                title: vehicle_title,
                subtitle: vehicle_subtitle,
                color: vehicle_color,
                subColor: vehicle_subColor,
              }}
              isMobile={isMobile}
              pageKey="vehicledynamicslibrary"
            />
          ) : (
            <ProductTitle
              contentProps={{
                title: vehicle_title,
                subtitle: vehicle_subtitle,
                color: vehicle_color,
                subColor: vehicle_subColor,
              }}
            />
          )}

          {/** 그라데이션 영역 바로 밑에 개요 영역 */}
          <Outline outline={vehicle_outline} />

          {/** Features 영역 */}
          <Box
            component="section"
            aria-label="features-heading"
            sx={(theme) => ({
              my: 12,
              [theme.breakpoints.up("tablet")]: {
                my: 22,
              },
            })}
          >
            <Feature color={vehicle_featureColor} />

            <Stack
              sx={(theme) => ({
                ...theme.customStyles.productStackComponent,
              })}
            >
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
      </Box>
    </>
  );
};

export default VehicleDynamicsLibrary;
