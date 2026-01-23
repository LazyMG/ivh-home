import { Box, Divider, Grid, Typography } from "@mui/material";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../../style/product-slider.css";

interface FeatureImage {
  imgUrl?: string[];
  imgText?: string;
  col: number;
  imgSize?: string;
}
interface FeatureText {
  title?: string;
  text?: string;
  col: number;
}

export interface ProductContentProps {
  imgObj?: FeatureImage[];
  textObj: FeatureText;
  imageLayoutStyle?: {
    large: string;
    small: string;
  };
  isColor?: boolean;
}

const ProductContent = ({
  textObj,
  imgObj,
  imageLayoutStyle,
  isColor = true,
}: ProductContentProps) => {
  const isImgTextExist = imgObj && imgObj.some((img) => img.imgText);
  const { isMobile } = useBreakpoint();

  // 현재 레이아웃 스타일 결정
  const currentLayout = isMobile
    ? (imageLayoutStyle?.small ?? "container")
    : (imageLayoutStyle?.large ?? "container");

  // 슬라이드 렌더링
  const renderSlideImages = () => {
    if (!imgObj || imgObj.length === 0) return null;

    // imgUrl이 있는 항목만 슬라이더에 포함
    const slideImages = imgObj.filter((img) => img.imgUrl && img.imgUrl.length > 0);
    // imgUrl 없고 텍스트만 있는 항목
    const textOnlyItems = imgObj.filter((img) => (!img.imgUrl || img.imgUrl.length === 0) && img.imgText);

    if (slideImages.length === 0) return null;

    return (
      <>
        <Grid size={12}>
          <Swiper
            className="product-swiper"
            slidesPerView="auto"
            centeredSlides={true}
            initialSlide={Math.floor(slideImages.length / 2)}
            navigation={true}
            spaceBetween={64}
            modules={[Navigation]}
          >
            {slideImages.map((img, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  {img.imgUrl &&
                    img.imgUrl.map((url) => (
                      <Box
                        key={url}
                        component="img"
                        src={url}
                        sx={{
                          objectFit: "contain",
                          // width: img.imgSize === "small" ? "auto" : "100%",
                          width: "100%",
                          maxWidth: "100%",
                        }}
                      />
                    ))}
                  {img.imgText && (
                    <Typography
                      sx={(theme) => ({
                        fontSize: "14px",
                        fontFamily: "Freesentation-5-Medium",
                        textAlign: "center",
                        color: "#979797",
                        [theme.breakpoints.up("tablet")]: {
                          color: "#000",
                        },
                      })}
                    >
                      {img.imgText}
                    </Typography>
                  )}
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
        {textOnlyItems.map((item, index) => (
          <Grid key={`text-only-${index}`} size={12}>
            <Typography
              sx={(theme) => ({
                fontSize: "14px",
                fontFamily: "Freesentation-5-Medium",
                textAlign: "center",
                color: "#979797",
                [theme.breakpoints.up("tablet")]: {
                  color: "#000",
                },
              })}
            >
              {item.imgText}
            </Typography>
          </Grid>
        ))}
      </>
    );
  };

  // 컨테이너(기본) 렌더링
  const renderContainerImages = () => {
    if (!imgObj) return null;

    return imgObj.map((img, index) => (
      <Grid
        key={index}
        size={isMobile ? 12 : img.col}
        sx={{ display: "flex", flexDirection: "column", gap: 1 }}
      >
        {img.imgUrl &&
          img.imgUrl.map((url) => (
            <Box sx={{ display: "flex", justifyContent: "center" }} key={url}>
              <Box
                component="img"
                src={url}
                sx={{
                  objectFit: "contain",
                  width: img.imgSize === "small" ? "auto" : "100%",
                  maxWidth: "100%",
                }}
              />
            </Box>
          ))}
        {img.imgText && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              sx={(theme) => ({
                fontSize: "14px",
                fontFamily: "Freesentation-5-Medium",
                textAlign: "center",
                color: "#979797",
                [theme.breakpoints.up("tablet")]: {
                  color: "#000",
                },
              })}
            >
              {img.imgText}
            </Typography>
          </Box>
        )}
      </Grid>
    ));
  };

  return (
    <>
      <Grid
        container
        spacing={4}
        sx={(theme) => ({
          display: "flex",
          alignItems: "end",
          my: 3,
          [theme.breakpoints.up("tablet")]: {
            my: 0,
          },
        })}
      >
        {currentLayout === "slide"
          ? renderSlideImages()
          : renderContainerImages()}
        <Grid
          size={isMobile ? 12 : textObj.col}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            pb: isImgTextExist ? 1 : 0,
          }}
        >
          <Typography
            sx={(theme) => ({
              fontSize: "18px",
              fontFamily: "Freesentation-6-SemiBold",
              color: "#00758F",
              [theme.breakpoints.up("tablet")]: {
                color: isColor ? "#00758F" : "#000000",
                fontSize: "24px",
              },
            })}
          >
            {textObj.title}
          </Typography>
          <Typography
            sx={(theme) => ({
              fontSize: "16px",
              fontFamily: "Freesentation-5-Medium",
              whiteSpace: "pre-wrap",
              color: "#737373",
              [theme.breakpoints.up("tablet")]: {
                color: "#424242",
              },
            })}
          >
            {textObj.text}
          </Typography>
        </Grid>
      </Grid>
      <Divider
        sx={(theme) => ({
          my: 12,
          display: "none",
          [theme.breakpoints.up("tablet")]: { display: "block" },
        })}
      />
    </>
  );
};

export default ProductContent;
