import { Fragment } from "react";
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
  /** 캡션 정렬 override ("center" | "start"). 미지정 시 이미지 수 기준 기본값 */
  imgTextAlign?: "center" | "start";
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
  /** 하단 구분선 표시 여부 (기본 true) */
  showDivider?: boolean;
}

const ProductContent = ({
  textObj,
  imgObj,
  imageLayoutStyle,
  showDivider = true,
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
          <Box
            sx={{
              display: "flex",
              justifyContent:
                img.imgTextAlign === "center"
                  ? "center"
                  : img.imgTextAlign === "start"
                    ? "flex-start"
                    : captionJustify,
            }}
          >
            <Typography
              sx={(theme) => ({
                fontSize: "14px",
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

  // 스트립 렌더링: 등높이 이미지 가로 배치 + 사이 점선 구분선
  const renderStripImages = () => {
    if (!imgObj) return null;
    const strip = imgObj.filter((img) => img.images && img.images.length > 0);
    const captions = imgObj.filter(
      (img) => (!img.images || img.images.length === 0) && img.imgText,
    );
    if (strip.length === 0) return null;

    return (
      <Grid size={12}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "stretch",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {strip.map((img, index) => (
            <Fragment key={index}>
              {index > 0 && (
                <Box
                  sx={{
                    alignSelf: "stretch",
                    borderLeft: "2px dashed #c9c9c9",
                    mx: 4,
                  }}
                />
              )}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 1,
                }}
              >
                {img.images!.map((image) => (
                  <Box
                    key={image.url}
                    component="img"
                    src={image.url}
                    alt={image.alt}
                    loading="lazy"
                    sx={{
                      // 등높이: 높이 고정 + 너비 비율 유지
                      height: "250px",
                      width: "auto",
                      objectFit: "contain",
                    }}
                  />
                ))}
                {img.imgText && (
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: "Freesentation-5-Medium",
                      textAlign: "center",
                      color: "#737373",
                    }}
                  >
                    {img.imgText}
                  </Typography>
                )}
              </Box>
            </Fragment>
          ))}
        </Box>
        {captions.map((c, i) => (
          <Typography
            key={`strip-cap-${i}`}
            sx={{
              mt: 3,
              textAlign: "center",
              fontSize: "14px",
              fontFamily: "Freesentation-5-Medium",
              color: "#737373",
            }}
          >
            {c.imgText}
          </Typography>
        ))}
      </Grid>
    );
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
          : currentLayout === "strip"
            ? renderStripImages()
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
      {showDivider && (
        <Divider
          sx={(theme) => ({
            my: 12,
            display: "none",
            borderStyle: "dashed",
            borderWidth: "2px",
            [theme.breakpoints.up("tablet")]: { display: "block" },
          })}
        />
      )}
    </>
  );
};

export default ProductContent;
