import { Fragment } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../../style/product-slider.css";
import { FONTS } from "../../theme/theme";

interface FeatureImageItem {
  url: string;
  alt: string;
}

interface FeatureImage {
  images?: FeatureImageItem[];
  imgText?: string;
  col: number;
  /** 모바일 열 폭(1~12). 미지정 시 12(전폭 1열). container 레이아웃에서만 사용. */
  colMobile?: number;
  imgSize?: string;
  /** 이미지 최대 폭(예: "60%", "200px"). 미지정 시 "100%". 저해상도 이미지를 작게 캡할 때. */
  imgMaxWidth?: string;
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
  /** 하단 구분선 표시 여부 (기본 true) */
  showDivider?: boolean;
  /** 이미지 그리드 열 간격 (MUI spacing, 기본 4). 좁은 썸네일 그리드에서 줄일 때 사용. */
  columnSpacing?: number;
}

// 이미지가 실제로 들어있는 그룹인지 판별 (빈 배열·미지정 모두 false)
const hasImages = (img: FeatureImage) => !!img.images?.length;

// 슬라이드/텍스트전용 항목의 캡션 (두 위치에서 동일 스타일 사용)
const SlideCaption = ({ text }: { text: string }) => (
  <Typography
    sx={(theme) => ({
      fontSize: "14px",
      fontFamily: FONTS.galderglynn.regular,
      textAlign: "center",
      color: "#979797",
      [theme.breakpoints.up("tablet")]: {
        color: "#000",
      },
    })}
  >
    {text}
  </Typography>
);

const ProductContent = ({
  textObj,
  imgObj,
  imageLayoutStyle,
  showDivider = true,
  columnSpacing = 4,
}: ProductContentProps) => {
  const isImgTextExist = imgObj && imgObj.some((img) => img.imgText);
  const { isMobile } = useBreakpoint();

  // 현재 레이아웃 스타일 결정
  const currentLayout = isMobile
    ? (imageLayoutStyle?.small ?? "container")
    : (imageLayoutStyle?.large ?? "container");

  // 컨테이너 레이아웃에서 이미지 2장 이상이면 셀 높이를 통일해 캡션을 정렬
  const containerImageCount = imgObj?.filter(hasImages).length ?? 0;
  const equalizeRow =
    currentLayout !== "slide" &&
    currentLayout !== "strip" &&
    containerImageCount >= 2;

  // 슬라이드 렌더링
  const renderSlideImages = () => {
    if (!imgObj || imgObj.length === 0) return null;

    // images가 있는 항목만 슬라이더에 포함
    const slideImages = imgObj.filter(hasImages);
    // images 없고 텍스트만 있는 항목
    const textOnlyItems = imgObj.filter(
      (img) => !hasImages(img) && img.imgText,
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
                  {img.imgText && <SlideCaption text={img.imgText} />}
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
        {textOnlyItems.map((item, index) => (
          <Grid key={`text-only-${index}`} size={12}>
            <SlideCaption text={item.imgText!} />
          </Grid>
        ))}
      </>
    );
  };

  // 컨테이너(기본) 렌더링
  const renderContainerImages = () => {
    if (!imgObj) return null;

    // 이미지가 든 그룹 수(containerImageCount) → 2개 이상이면 캡션 중앙, 1개면 왼쪽
    const captionJustify = containerImageCount >= 2 ? "center" : "flex-start";

    return imgObj.map((img, index) => (
      <Grid
        key={index}
        size={isMobile ? (img.colMobile ?? 12) : img.col}
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          gap: 0,
          [theme.breakpoints.up("desktop")]: { gap: 1 },
        })}
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
                  maxWidth: img.imgMaxWidth ?? "100%",
                }}
              />
            </Box>
          ))}
        {img.imgText && (
          <Box
            sx={(theme) => ({
              display: "flex",
              // 모바일도 imgTextAlign="center"를 존중(미지정 시 flex-start 유지 → 타 페이지 영향 없음)
              justifyContent:
                img.imgTextAlign === "center" ? "center" : "flex-start",
              [theme.breakpoints.up("desktop")]: {
                justifyContent:
                  img.imgTextAlign === "center"
                    ? "center"
                    : img.imgTextAlign === "start"
                      ? "flex-start"
                      : captionJustify,
              },
            })}
          >
            <Typography
              sx={(theme) => ({
                fontSize: "14px",
                fontFamily: FONTS.freesentation.medium,
                color: "#b2b2b2",
                // 여러 줄로 wrap되는 캡션은 justifyContent(블록 정렬)만으론 가운데가 안 되므로
                // textAlign으로 줄 자체를 정렬한다. imgTextAlign="center"면 가운데.
                textAlign: img.imgTextAlign === "center" ? "center" : "left",
                [theme.breakpoints.up("tablet")]: {
                  color: "#737373",
                  fontFamily: FONTS.galderglynn.regular,
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
    const strip = imgObj.filter(hasImages);
    const captions = imgObj.filter((img) => !hasImages(img) && img.imgText);
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
                    // 구분선 여백을 줄여 이미지에 더 많은 가로 폭 할애
                    mx: 2,
                  }}
                />
              )}
              <Box
                sx={{
                  flex: 1,
                  minWidth: 0,
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
                      // 큰 화면: 최대 높이 / 좁은 화면: 컬럼 폭에 맞춰 축소
                      maxHeight: "300px",
                      maxWidth: "100%",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                ))}
                {img.imgText && (
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: FONTS.galderglynn.regular,
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
            sx={(theme) => ({
              mt: 3,
              fontSize: "14px",
              fontFamily: FONTS.freesentation.medium,
              textAlign: "center",
              color: "#b2b2b2",
              [theme.breakpoints.up("desktop")]: {
                fontFamily: FONTS.galderglynn.regular,
                color: "#737373",
              },
            })}
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
        // spacing은 행·열을 함께 묶으므로 분리: 데스크톱 가로 간격은 columnSpacing으로
        // 고정하고, 모바일에서 세로로 쌓일 때의 이미지↔텍스트 거리는 rowSpacing으로 조절.
        columnSpacing={columnSpacing}
        rowSpacing={{ mobilePortrait: 1, tablet: 4 }}
        sx={(theme) => ({
          display: "flex",
          // 이미지 2장 이상이면 셀을 하단 정렬해 캡션을 한 줄로 맞춤(이미지는 자연 크기 유지)
          alignItems: equalizeRow
            ? "flex-end"
            : isImgTextExist
              ? "center"
              : "flex-end",
          mb: 8,
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
              fontFamily: FONTS.galderglynn.regular,
              color: "#03193F",
              [theme.breakpoints.up("desktop")]: {
                fontSize: "20px",
              },
            })}
          >
            {textObj.title}
          </Typography>
          <Box
            sx={(theme) => ({
              borderBottom: "1px solid #00235F",
              [theme.breakpoints.up("desktop")]: { display: "none" },
            })}
          />
          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: FONTS.freesentation.medium,
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
