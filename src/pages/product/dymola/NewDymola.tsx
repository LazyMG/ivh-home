import { Box, Typography } from "@mui/material";
import ContentBox from "../../../components/product/ContentBox";

import dymola from "../../../data/product/new-dymola.json";
import ScrollButton from "../../../common/ScrollButton";
import ProductSectionTitle from "../../../components/product/ProductSectionTitle";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../common/SEO";
import ProductBottom from "../../../components/product/ProductBottom";
import { useNavigate } from "react-router-dom";

const NewDymola = () => {
  const seoData = useSEO("product/dymola", dymola);
  const {
    dymola_mainImg,
    dymola_title,
    dymola_subTitle,
    dymola_text,
    dymola_features,
    dymola_libraries,
  } = dymola;

  const navigate = useNavigate();

  return (
    <>
      <SEO {...seoData} />
      <Box
        component="main"
        sx={{
          display: "flex",
          gap: 8,
          boxSizing: "border-box",
          mt: 0,
          mx: 24,
        }}
      >
        <ScrollButton />
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            minWidth: 0,
            gap: 20,
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
                sx={{ fontFamily: "Freesentation-7-Bold", fontSize: "32px" }}
              >
                {dymola_title}
              </Typography>
              <Typography
                sx={{ fontFamily: "Freesentation-5-Medium", fontSize: "16px" }}
              >
                {dymola_subTitle}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {dymola_text.map((text, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontFamily: "Freesentation-5-Medium",
                      fontSize: "16px",
                      color: "#5B5B5B",
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
              {dymola_features.map((item, index) => (
                <ContentBox key={index} {...item} />
              ))}
            </Box>
          </Box>
          <Box
            id="libraries"
            sx={{
              boxSizing: "border-box",
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              columnGap: 10,
              rowGap: 6,
              mb: 16,
              width: "100%",
            }}
          >
            {dymola_libraries.map((library) => (
              <Box
                key={library.text}
                sx={{
                  border: "1.5px solid #179EBD",
                  width: "100%",
                  aspectRatio: "1/1",
                  boxShadow: "2px 4px 7px rgba(0,0,0,0.5)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  boxSizing: "border-box",
                  px: 2,
                  gap: 3,
                  cursor: "pointer",
                  minWidth: 0,
                  transition: "all 0.3s ease",
                  ":hover": {
                    background:
                      "linear-gradient(to right bottom, #31B386 5%, #266DEA 100%)",
                    "& img": {
                      filter: "invert(1) brightness(2)",
                    },
                    "& .MuiTypography-root": {
                      color: "white",
                    },
                  },
                }}
                onClick={() => navigate(library.url)}
              >
                <Box component="img" src={library.imgUrl} />
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "Freesentation-6-SemiBold",
                    textAlign: "center",
                  }}
                >
                  {library.text}
                </Typography>
              </Box>
            ))}
          </Box>
          <ProductBottom productName="Vehicle Dynamics Library" />
        </Box>
      </Box>
    </>
  );
};

export default NewDymola;
