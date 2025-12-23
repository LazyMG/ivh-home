import { Box, Typography } from "@mui/material";
import StickySideMenu from "../../../common/StickySideMenu";
import ContentBox from "../../../components/product/ContentBox";

import dymola from "../../../data/product/new-dymola.json";
import battery from "../../../data/product/new-battery.json";
import til from "../../../data/product/new-til.json";
import thermal from "../../../data/product/new-thermal.json";
import vehicle from "../../../data/product/new-vehicle.json";
import SubSection from "../../../components/product/SubSection";
import ScrollButton from "../../../common/ScrollButton";

const NewDymola = () => {
  const {
    dymola_mainImg,
    dymola_title,
    dymola_subTitle,
    dymola_text,
    dymola_color,
    dymola_menu,
    dymola_features,
  } = dymola;

  const {
    battery_title,
    battery_subTitle,
    battery_introduction,
    battery_features,
  } = battery;

  const { til_title, til_subTitle, til_introduction, til_features } = til;

  const {
    thermal_title,
    thermal_subTitle,
    thermal_introduction,
    thermal_features,
  } = thermal;

  const {
    vehicle_title,
    vehicle_subTitle,
    vehicle_introduction,
    vehicle_feature,
  } = vehicle;

  return (
    <Box
      component="main"
      sx={(theme) => ({
        ...theme.customStyles.productPageContainer,
        display: "flex",
        gap: 8,
        boxSizing: "border-box",
      })}
    >
      <ScrollButton threshold={120} />
      <StickySideMenu menuList={dymola_menu} />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          position: "relative",
          minWidth: 0,
          mr: "4%",
          gap: 20,
          my: "8%",
        }}
      >
        <Box
          id="introduction"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 9,
          }}
        >
          <Box
            component="img"
            src={dymola_mainImg}
            sx={{ objectFit: "contain", width: "100%" }}
          />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography
              sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "36px" }}
            >
              {dymola_title}
            </Typography>
            <Typography
              sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "24px" }}
            >
              {dymola_subTitle}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {dymola_text.map((text, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontFamily: "Freesentation-4-Regular",
                    fontSize: "18px",
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
        <Box
          id="feature"
          sx={{ display: "flex", flexDirection: "column", gap: 4 }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Freesentation-6-SemiBold",
              fontSize: "24px",
              mb: 4,
            }}
          >
            특징
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {dymola_features.map((item, index) => (
              <ContentBox key={index} {...item} />
            ))}
          </Box>
        </Box>
        <SubSection
          id="battery"
          title={battery_title}
          subTitle={battery_subTitle}
          introduction={battery_introduction}
          features={battery_features}
          color={dymola_color}
        />
        <SubSection
          id="til"
          title={til_title}
          subTitle={til_subTitle}
          introduction={til_introduction}
          features={til_features}
          color={dymola_color}
        />
        <SubSection
          id="thermal_power_liabrary"
          title={thermal_title}
          subTitle={thermal_subTitle}
          introduction={thermal_introduction}
          features={thermal_features}
          color={dymola_color}
        />
        <SubSection
          id="vechle_dynamics_library"
          title={vehicle_title}
          subTitle={vehicle_subTitle}
          introduction={vehicle_introduction}
          features={vehicle_feature}
          color={dymola_color}
        />
      </Box>
    </Box>
  );
};

export default NewDymola;
