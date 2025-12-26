import { alpha, Box, Typography } from "@mui/material";
import ScrollButton from "../../../common/ScrollButton";
import ProductSectionTitle from "../../../components/product/ProductSectionTitle";

import dymola from "../../../data/product/temp-dymola.json";
import battery from "../../../data/product/new-battery.json";

import StickySideMenu2 from "../../../common/StickySideMenu2";
import ProductCard from "../../../components/product/Card";
import old_dymola from "../../../data/product/dymola.json";
import ImageBanner2 from "../../../components/product/ImageBanner2";

interface TempImageSectionProps {
  imgObj: {
    imgUrl: string[];
    imgText?: string;
  };
}

const TempImageSection = ({ imgObj }: TempImageSectionProps) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <>
        {imgObj.imgUrl.map((img, imgIndex) => (
          <Box
            key={imgIndex}
            component="img"
            src={img}
            sx={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        ))}
        {imgObj.imgText && (
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "16px",
              fontFamily: "Freesentation-6-SemiBold",
            }}
          >
            {imgObj.imgText}
          </Typography>
        )}
      </>
    </Box>
  );
};

const TempDymola = () => {
  const {
    dymola_mainImg,
    dymola_title,
    dymola_subTitle,
    dymola_text,
    dymola_color,
    dymola_menu,
    dymola_features,
  } = dymola;

  const { dymola_cards } = old_dymola;

  const {
    battery_title,
    battery_subTitle,
    battery_introduction,
    battery_features,
  } = battery;

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        gap: 8,
        boxSizing: "border-box",
        // position: "relative",
        flexDirection: "column",
      }}
    >
      <ScrollButton />
      {/* <StickySideMenu2 menuList={dymola_menu} /> */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          position: "relative",
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
            // mx: 48,
          }}
        >
          {/* <Box
            component="img"
            src={dymola_mainImg}
            sx={{ objectFit: "contain", width: "100%" }}
          /> */}
          <ImageBanner2
            imgUrl={dymola_mainImg}
            title={dymola_title}
            subtitle={dymola_subTitle}
          />
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2, mx: "20%" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {dymola_text.map((text, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontFamily: "Freesentation-4-Regular",
                    fontSize: "20px",
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
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Box
            sx={{
              px: "20%",
              boxSizing: "border-box",
              width: "fit-content",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Freesentation-6-SemiBold",
                fontSize: "32px",
                letterSpacing: "4px",
              }}
            >
              특징
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "4px",
                backgroundColor: dymola_color,
              }}
            />
          </Box>
          <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
            {dymola_features.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  py: 16,
                  px: "20%",
                  boxSizing: "border-box",
                  backgroundColor:
                    index % 2 === 0 ? "#fff" : `${alpha(dymola_color, 0.05)}`,
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: feature.imgObj
                      ? "repeat(2,1fr)"
                      : "repeat(1,1fr)",
                    gap: 9,
                    alignItems: "center",
                  }}
                >
                  {index % 2 === 0 && feature.imgObj && (
                    <TempImageSection imgObj={feature.imgObj} />
                  )}
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 4 }}
                  >
                    <Typography
                      sx={{
                        fontSize: "32px",
                        lineHeight: "48px",
                        fontFamily: "Freesentation-5-Medium",
                        wordBreak: "keep-all",
                      }}
                    >
                      {feature.textObj.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        lineHeight: "28px",
                        fontFamily: "Freesentation-4-Regular",
                        wordBreak: "keep-all",
                      }}
                    >
                      {feature.textObj.text}
                    </Typography>
                  </Box>
                  {index % 2 === 1 && feature.imgObj && (
                    <TempImageSection imgObj={feature.imgObj} />
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          px: "20%",
          boxSizing: "border-box",
          width: "fit-content",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Freesentation-6-SemiBold",
            fontSize: "32px",
            letterSpacing: "4px",
          }}
        >
          라이브러리
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "4px",
            backgroundColor: dymola_color,
          }}
        />
      </Box>
      <Box
        component="section"
        aria-label="cards-heading"
        sx={(theme) => ({
          display: "flex",
          justifyContent: "center",

          my: 12,
          px: 4,
          [theme.breakpoints.up("tablet")]: {
            my: 24,
            px: 10,
          },
          [theme.breakpoints.up("desktop")]: {
            mt: 0,
            mb: 16,
            px: 20,
          },
        })}
      >
        <ProductCard cards={dymola_cards} />
      </Box>
    </Box>
  );
};

export default TempDymola;
