import { Fragment, useLayoutEffect, useRef, useState } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useBreakpoint } from "../../hooks/useBreakpoint";
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

// 슬라이더 화살표 — 중앙 슬라이드 가장자리에서 고정 px 간격을 유지해
// 화면이 좁아져도 이미지에 달라붙지 않는다. (%-기반 위치는 좁은 화면에서 이미지와 겹침)
const SliderArrow = ({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) => (
  <Box
    component="button"
    type="button"
    onClick={onClick}
    disabled={disabled}
    aria-label={direction === "prev" ? "이전 슬라이드" : "다음 슬라이드"}
    sx={{
      position: "absolute",
      zIndex: 10,
      top: "50%",
      transform: "translateY(-50%)",
      width: 40,
      height: 40,
      p: 0,
      border: "none",
      cursor: "pointer",
      backgroundColor: "transparent",
      backgroundImage: `url(/images/utils/${
        direction === "prev" ? "left" : "right"
      }_arrow.png)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain",
      transition: "all 0.3s ease",
      // 슬라이드 폭 50% → 가장자리는 25% 지점. 화살표 폭 40px + 간격 12px 바깥에 고정.
      [direction === "prev" ? "left" : "right"]: "calc(25% - 52px)",
      "&:hover:not(:disabled)": {
        opacity: 0.6,
        transform: "translateY(-50%) scale(1.1)",
      },
      // 첫/마지막 슬라이드에서 더 갈 수 없는 방향은 흐리게
      "&:disabled": {
        opacity: 0.3,
        cursor: "default",
      },
      "@media (max-width: 768px)": {
        width: 20,
        height: 20,
        // 슬라이드 폭 80% → 가장자리는 10% 지점. 화살표 폭 20px + 간격 8px 바깥.
        [direction === "prev" ? "left" : "right"]: "calc(10% - 28px)",
      },
    }}
  />
);

// 제품 이미지 슬라이더 — swiper.js 없이 네이티브 가로 스크롤 + CSS scroll-snap으로 구현.
// 활성(중앙) 슬라이드만 불투명하게, 나머지는 opacity 0.5.
const ProductSlider = ({ slides }: { slides: FeatureImage[] }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  // 가운데 슬라이드에서 시작 (기존 initialSlide와 동일)
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(slides.length / 2),
  );

  // index번 슬라이드의 중앙이 트랙 중앙에 오도록 스크롤
  const scrollToSlide = (index: number, behavior: ScrollBehavior) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;
    track.scrollTo({
      left:
        slide.offsetLeft -
        track.offsetLeft -
        (track.clientWidth - slide.clientWidth) / 2,
      behavior,
    });
  };

  // 최초 렌더 직후(페인트 전) 가운데 슬라이드로 이동
  useLayoutEffect(() => {
    scrollToSlide(Math.floor(slides.length / 2), "auto");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 스크롤 위치 기준으로 트랙 중앙에 가장 가까운 슬라이드를 활성으로 판정
  const syncActive = () => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let nearest = 0;
    let minDistance = Infinity;
    Array.from(track.children).forEach((child, index) => {
      const el = child as HTMLElement;
      const distance = Math.abs(
        el.offsetLeft - track.offsetLeft + el.clientWidth / 2 - center,
      );
      if (distance < minDistance) {
        minDistance = distance;
        nearest = index;
      }
    });
    setActiveIndex(nearest);
  };

  return (
    // Full Bleed 컨테이너 - 부모 컨테이너를 벗어나 화면 전체 폭 사용
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        py: "20px",
      }}
    >
      {/* 트랙 - 네이티브 가로 스크롤 + 중앙 스냅 */}
      <Box
        ref={trackRef}
        onScroll={syncActive}
        sx={{
          display: "flex",
          gap: "64px",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          overscrollBehaviorX: "contain",
          // 스크롤바 숨김
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {slides.map((img, index) => (
          // 슬라이드 - 모바일 80% / 데스크톱 50% 폭, 첫/마지막은 중앙 스냅용 여백
          // (트랙 padding 대신 margin을 써야 슬라이드 %폭 기준이 안 바뀜)
          <Box
            key={index}
            sx={{
              flex: "0 0 auto",
              scrollSnapAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              opacity: index === activeIndex ? 1 : 0.5,
              width: "80%",
              "&:first-of-type": { ml: "10%" },
              "&:last-of-type": { mr: "10%" },
              "@media (min-width: 769px)": {
                width: "50%",
                "&:first-of-type": { ml: "25%" },
                "&:last-of-type": { mr: "25%" },
              },
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
        ))}
      </Box>
      {slides.length > 1 && (
        <>
          <SliderArrow
            direction="prev"
            disabled={activeIndex === 0}
            onClick={() =>
              scrollToSlide(Math.max(activeIndex - 1, 0), "smooth")
            }
          />
          <SliderArrow
            direction="next"
            disabled={activeIndex === slides.length - 1}
            onClick={() =>
              scrollToSlide(
                Math.min(activeIndex + 1, slides.length - 1),
                "smooth",
              )
            }
          />
        </>
      )}
    </Box>
  );
};

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
          <ProductSlider slides={slideImages} />
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
