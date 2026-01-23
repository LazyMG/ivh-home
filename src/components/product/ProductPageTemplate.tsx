import { Box, Typography } from "@mui/material";
import ProductSectionTitle from "./ProductSectionTitle";
import ProductContent from "./ProductContent";
import ScrollButton from "../../common/ScrollButton";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useNavigate } from "react-router-dom";
import BreadScrum from "../../common/BreadScrum";
import ProductBottom from "./ProductBottom";

interface FeatureImgObj {
  imgUrl?: string[];
  imgText?: string;
  imgSize?: string;
  col: number;
}

interface FeatureTextObj {
  title: string;
  text: string;
  col: number;
}

interface FeatureItem {
  imgObj?: FeatureImgObj[];
  textObj: FeatureTextObj;
}

interface ProductPageTemplateProps {
  image: string;
  title: string;
  subTitle?: string;
  textList: string[];
  features?: FeatureItem[];
  libraries: {
    imgUrl: string;
    text: string;
    url: string;
  }[];
  name: string;
  pageKey: string;
}

const ProductPageTemplate = ({
  image,
  title,
  subTitle,
  textList,
  features,
  libraries,
  name,
  pageKey,
}: ProductPageTemplateProps) => {
  const { isMobile } = useBreakpoint();
  const navigate = useNavigate();
  return (
    <Box
      component="main"
      sx={(theme) => ({
        display: "flex",
        boxSizing: "border-box",
        mt: 0,
        px: 4,
        position: "relative",
        flexDirection: "column",
        [theme.breakpoints.up("tablet")]: {
          px: "8%",
        },
      })}
    >
      <ScrollButton />
      {isMobile && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            mt: 1,
          }}
        >
          <BreadScrum pageKey={pageKey} />
        </Box>
      )}
      <Box
        sx={(theme) => ({
          flex: 1,
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          minWidth: 0,
          gap: 10,
          [theme.breakpoints.up("tablet")]: {
            gap: 20,
          },
        })}
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
            src={image}
            sx={(theme) => ({
              objectFit: "contain",
              width: "100%",
              position: "absolute",
              top: 48,
              left: 0,
              right: 0,
              [theme.breakpoints.up("tablet")]: {
                position: "relative",
                top: 0,
              },
            })}
          />
          <Box
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 20,
              [theme.breakpoints.up("tablet")]: {
                mt: 0,
              },
            })}
          >
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                gap: 0,
                [theme.breakpoints.up("tablet")]: {
                  mt: 2,
                },
              })}
            >
              <Typography
                sx={(theme) => ({
                  fontFamily: "Freesentation-7-Bold",
                  fontSize: "20px",
                  [theme.breakpoints.up("tablet")]: {
                    fontSize: "32px",
                  },
                })}
              >
                {title}
              </Typography>
              {subTitle && (
                <Typography
                  sx={{
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "16px",
                  }}
                >
                  {subTitle}
                </Typography>
              )}
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {textList.map((text, index) => (
                <Typography
                  key={index}
                  sx={(theme) => ({
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "16px",
                    color: "#737373",
                    [theme.breakpoints.up("tablet")]: {
                      color: "#5B5B5B",
                    },
                  })}
                >
                  {text}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
        {features && (
          <Box
            id="feature"
            sx={{ display: "flex", flexDirection: "column", gap: 4 }}
          >
            <ProductSectionTitle titleText="특징" />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {features.map((item, index) => (
                <ProductContent key={index} {...item} isColor={false} />
              ))}
            </Box>
          </Box>
        )}
        <Box
          id="libraries"
          sx={(theme) => ({
            boxSizing: "border-box",
            display: isMobile
              ? "grid"
              : libraries.length >= 4
                ? "grid"
                : "flex",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: 3,
            mb: 16,
            width: "100%",
            [theme.breakpoints.up("tablet")]: {
              gridTemplateColumns: "repeat(4, 1fr)",
              columnGap: 10,
              rowGap: 6,
              justifyContent: "space-between",
            },
          })}
        >
          {libraries.map((library) => {
            const width = isMobile
              ? "100%"
              : libraries.length >= 4
                ? "100%"
                : "calc((100% - 240px) / 4)";
            return (
              <Box
                key={library.text}
                sx={(theme) => ({
                  border: "1.5px solid #179EBD",
                  width: width,
                  aspectRatio: "1/1",
                  boxShadow: "2px 4px 7px 0 rgba(0,0,0,0.5)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  boxSizing: "border-box",
                  px: 1,
                  gap: 1,
                  cursor: "pointer",
                  minWidth: 0,
                  transition: "all 0.3s ease",
                  [theme.breakpoints.up("tablet")]: {
                    gap: 3,
                    px: 2,
                  },
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
                  ":focus": {
                    background:
                      "linear-gradient(to right bottom, #31B386 5%, #266DEA 100%)",
                    "& img": {
                      filter: "invert(1) brightness(2)",
                    },
                    "& .MuiTypography-root": {
                      color: "white",
                    },
                  },
                })}
                onClick={() => navigate(library.url)}
              >
                <Box
                  component="img"
                  src={library.imgUrl}
                  sx={(theme) => ({
                    width: "40%",
                    maxWidth: "80%",
                    [theme.breakpoints.up("tablet")]: { maxWidth: "100%" },
                  })}
                />
                <Typography
                  sx={(theme) => ({
                    fontSize: "14px",
                    fontFamily: "Freesentation-6-SemiBold",
                    textAlign: "center",
                    [theme.breakpoints.up("tablet")]: {
                      fontSize: "18px",
                    },
                  })}
                >
                  {library.text}
                </Typography>
              </Box>
            );
          })}
        </Box>
        {!isMobile && <ProductBottom productName={name} />}
      </Box>
    </Box>
  );
};
export default ProductPageTemplate;
