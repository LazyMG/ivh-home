import { Box, Divider, Grid, Typography } from "@mui/material";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../../style/product-slider.css";

interface FeatureImageItem {
  url: string;
  alt: string;
}

interface FeatureImage {
  images?: FeatureImageItem[];
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

    // images가 있는 항목만 슬라이더에 포함
    const slideImages = imgObj.filter(
      (img) => img.images && img.images.length > 0,
    );
    // images 없고 텍스트만 있는 항목
    const textOnlyItems = imgObj.filter(
      (img) => (!img.images || img.images.length === 0) && img.imgText,
    );

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
                  {img.images &&
                    img.images.map((image) => (
                      <Box
                        key={image.url}
                        component="img"
                        src={image.url}
                        alt={image.alt}
                        loading="lazy"
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
                textTransform: "uppercase",
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

    // 이미지가 든 그룹 수 → 2개 이상이면 캡션 중앙, 1개면 왼쪽
    const imageCount = imgObj.filter(
      (img) => img.images && img.images.length > 0,
    ).length;
    const captionJustify = imageCount >= 2 ? "center" : "flex-start";

    return imgObj.map((img, index) => (
      <Grid
        key={index}
        size={isMobile ? 12 : img.col}
        sx={{ display: "flex", flexDirection: "column", gap: 1 }}
      >
        {img.images &&
          img.images.map((image) => (
            <Box
              sx={{ display: "flex", justifyContent: "center" }}
              key={image.url}
            >
              <Box
                component="img"
                src={image.url}
                alt={image.alt}
                loading="lazy"
                sx={{
                  objectFit: "contain",
                  width: img.imgSize === "small" ? "auto" : "100%",
                  maxWidth: "100%",
                }}
              />
            </Box>
          ))}
        {img.imgText && (
          <Box sx={{ display: "flex", justifyContent: captionJustify }}>
            <Typography
              sx={(theme) => ({
                fontSize: "12px",
                fontFamily: "Freesentation-5-Medium",
                color: "#979797",
                textTransform: "uppercase",
                [theme.breakpoints.up("tablet")]: {
                  color: "#737373",
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
          // 캡션이 있으면 본문을 이미지 기준 중앙에 맞춤(하단 정렬 시 캡션 높이만큼 어긋나는 문제 방지)
          alignItems: isImgTextExist ? "center" : "end",
          my: 3,
          [theme.breakpoints.up("tablet")]: {
            my: 3,
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
          }}
        >
          <Typography
            sx={(theme) => ({
              fontSize: "18px",
              fontFamily: "Freesentation-6-SemiBold",
              textTransform: "uppercase",
              [theme.breakpoints.up("tablet")]: {
                color: "#03193F",
                fontSize: "20px",
              },
            })}
          >
            {textObj.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: "Freesentation-5-Medium",
              whiteSpace: "pre-wrap",
              color: "#737373",
            }}
          >
            {textObj.text}
          </Typography>
        </Grid>
      </Grid>
      <Divider
        sx={(theme) => ({
          my: 12,
          display: "none",
          borderStyle: "dashed",
          borderWidth: "2px",
          [theme.breakpoints.up("tablet")]: { display: "block" },
        })}
      />
    </>
  );
};

export default ProductContent;
