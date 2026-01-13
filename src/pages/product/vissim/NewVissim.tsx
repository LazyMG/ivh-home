import { Box, Typography } from "@mui/material";
import StickySideMenu from "../../../common/StickySideMenu";

import vissim from "../../../data/product/new-vissim.json";
import vissim_automotive from "../../../data/product/new-vissim-automotive.json";
import viswalk from "../../../data/product/new-viswalk.json";

import SubSection from "../../../components/product/SubSection";
import ScrollButton from "../../../common/ScrollButton";
import ProductInquiry from "../../../components/product/ProductInquiry";
import ProductSectionTitle from "../../../components/product/ProductSectionTitle";
import ContentBox from "../../../components/product/ContentBox";

const NewVissim = () => {
  const {
    vissim_mainImg,
    vissim_title,
    vissim_subTitle,
    vissim_text,
    vissim_color,
    vissim_menu,
    vissim_features,
  } = vissim;

  const {
    vissim_automotive_title,
    vissim_automotive_subTitle,
    vissim_automotive_introduction,
    vissim_automotive_features,
  } = vissim_automotive;

  const {
    viswalk_title,
    viswalk_subTitle,
    viswalk_introduction,
    viswalk_features,
  } = viswalk;

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
        <StickySideMenu menuList={vissim_menu} />
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
              src={vissim_mainImg}
              sx={{ objectFit: "contain", width: "100%" }}
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography
                sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "36px" }}
              >
                {vissim_title}
              </Typography>
              <Typography
                sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "24px" }}
              >
                {vissim_subTitle}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {vissim_text.map((text, index) => (
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
            <ProductSectionTitle titleText="특징" />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {vissim_features.map((item, index) => (
                <ContentBox key={index} {...item} />
              ))}
            </Box>
          </Box>

          <SubSection
            id="vissim_automotive"
            title={vissim_automotive_title}
            subTitle={vissim_automotive_subTitle}
            introduction={vissim_automotive_introduction}
            features={vissim_automotive_features}
            color={vissim_color}
          />

          <SubSection
            id="viswalk"
            title={viswalk_title}
            subTitle={viswalk_subTitle}
            introduction={viswalk_introduction}
            features={viswalk_features}
            color={vissim_color}
          />
        </Box>
        <ProductInquiry />
      </Box>
    </>
  );
};

export default NewVissim;
