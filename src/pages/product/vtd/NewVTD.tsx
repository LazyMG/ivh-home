import { Box, Typography } from "@mui/material";
import StickySideMenu from "../../../common/StickySideMenu";

import vtd from "../../../data/product/new-vtd.json";
import vtd_create from "../../../data/product/new-vtd-create.json";
import vtd_simulate from "../../../data/product/new-vtd-simulate.json";

import vtd_fullstack from "../../../data/product/new-vtd-fullstack.json";

import SubSection from "../../../components/product/SubSection";
import ScrollButton from "../../../common/ScrollButton";
import ProductInquiry from "../../../components/product/ProductInquiry";

const NewVTD = () => {
  const {
    vtd_mainImg,
    vtd_title,
    vtd_subTitle,
    vtd_text,
    vtd_color,
    vtd_menu,
  } = vtd;

  const {
    vtd_create_title,
    vtd_create_subTitle,
    vtd_create_introduction,
    vtd_create_features,
  } = vtd_create;

  const {
    vtd_fullstack_title,
    vtd_fullstack_subTitle,
    vtd_fullstack_introduction,
    vtd_fullstack_features,
  } = vtd_fullstack;

  const {
    vtd_simulate_title,
    vtd_simulate_subTitle,
    vtd_simulate_introduction,
    vtd_simulate_features,
  } = vtd_simulate;

  return (
    <>
      <Box
        component="main"
        sx={(theme) => ({
          ...theme.customStyles.productPageContainer,
          display: "flex",
          gap: 8,
          boxSizing: "border-box",
        })}
      >
        <ScrollButton />
        <StickySideMenu menuList={vtd_menu} />
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            position: "relative",
            minWidth: 0,
            // ml: 8,
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
              src={vtd_mainImg}
              sx={{ objectFit: "contain", width: "100%" }}
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography
                sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "36px" }}
              >
                {vtd_title}
              </Typography>
              <Typography
                sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "24px" }}
              >
                {vtd_subTitle}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {vtd_text.map((text, index) => (
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

          <SubSection
            id="vtd_create"
            title={vtd_create_title}
            subTitle={vtd_create_subTitle}
            introduction={vtd_create_introduction}
            features={vtd_create_features}
            color={vtd_color}
          />

          <SubSection
            id="vtd_simulate"
            title={vtd_simulate_title}
            subTitle={vtd_simulate_subTitle}
            introduction={vtd_simulate_introduction}
            features={vtd_simulate_features}
            color={vtd_color}
          />
          <SubSection
            id="vtd_fullstack"
            title={vtd_fullstack_title}
            subTitle={vtd_fullstack_subTitle}
            introduction={vtd_fullstack_introduction}
            features={vtd_fullstack_features}
            color={vtd_color}
          />
        </Box>
        <ProductInquiry />
      </Box>
    </>
  );
};

export default NewVTD;
