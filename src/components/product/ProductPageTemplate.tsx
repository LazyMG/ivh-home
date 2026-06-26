import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";
import ProductContent from "./ProductContent";
import ScrollButton from "../../common/ScrollButton";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useLocalizedNavigate } from "../../i18n/useLocalizedNavigate";
import BreadScrum from "../../common/BreadScrum";
import SectionTitle from "../common/SectionTitle";

interface LibraryItem {
  imgUrl: string;
  text: string;
  url: string;
  img_alt: string;
}

/** 라이브러리 버튼: mask 아이콘 + 라벨. 호버 시 배경·라인·텍스트 반전 */
const LibraryButton = ({
  library,
  onClick,
}: {
  library: LibraryItem;
  onClick: () => void;
}) => (
  <Box
    component="button"
    onClick={onClick}
    sx={(theme) => ({
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 1,
      m: 0,
      p: 0,
      minWidth: 0,
      boxSizing: "border-box",
      cursor: "pointer",
      border: "none",
      color: "#03193F",
      backgroundColor: "#ffffff",
      transition: "background-color 0.2s ease, color 0.2s ease",
      "&:hover": {
        backgroundColor: "#073272",
        color: "#ffffff",
      },
      [theme.breakpoints.up("tablet")]: { gap: 2 },
    })}
  >
    {/* mask 기법: SVG를 마스크로, currentColor로 라인 색상 → 호버 시 반전 */}
    <Box
      role="img"
      aria-label={library.img_alt}
      sx={(theme) => ({
        width: "40%",
        aspectRatio: "1 / 1",
        backgroundColor: "currentColor",
        WebkitMaskImage: `url("${library.imgUrl}")`,
        maskImage: `url("${library.imgUrl}")`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        [theme.breakpoints.up("tablet")]: { width: "44%" },
      })}
    />
    <Typography
      sx={(theme) => ({
        fontSize: "14px",
        fontFamily: "Freesentation-6-SemiBold",
        textAlign: "center",
        color: "inherit",
        wordBreak: "keep-all",
        maxWidth: "75%",
        [theme.breakpoints.up("tablet")]: { fontSize: "16px" },
      })}
    >
      {library.text}
    </Typography>
  </Box>
);

/**
 * grid 모드 셀(정사각형). 내부 dashed 구분선(마지막 열/행 제거).
 * isEmpty면 버튼 없는 빈 셀(구분선만, 모바일 숨김)로 렌더.
 */
const LibraryGridCell = ({
  index,
  cols,
  totalRows,
  isEmpty,
  dashed,
  children,
}: {
  index: number;
  cols: number;
  totalRows: number;
  isEmpty: boolean;
  dashed: string;
  children?: ReactNode;
}) => {
  const isLastCol = index % cols === cols - 1;
  const isLastRow = Math.floor(index / cols) === totalRows - 1;

  if (isEmpty) {
    return (
      <Box
        aria-hidden
        sx={(theme) => ({
          display: "none",
          aspectRatio: "1 / 1",
          boxSizing: "border-box",
          [theme.breakpoints.up("tablet")]: {
            display: "block",
            // 빈 셀은 항상 마지막 행 → 하단 선 없음
            borderRight: isLastCol ? "none" : dashed,
          },
        })}
      />
    );
  }

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: "1 / 1",
        boxSizing: "border-box",
        p: 0.75,
        [theme.breakpoints.up("tablet")]: {
          p: 1,
          borderRight: isLastCol ? "none" : dashed,
          borderBottom: isLastRow ? "none" : dashed,
        },
      })}
    >
      {children}
    </Box>
  );
};

/**
 * center 모드 셀(정사각형). 항목 사이 세로 구분선만 —
 * border 대신 간격 한가운데에 ::after로 띄워 콘텐츠 중앙 정렬을 유지한다.
 */
const LibraryCenterCell = ({
  cols,
  isLast,
  dashed,
  children,
}: {
  cols: number;
  isLast: boolean;
  dashed: string;
  children?: ReactNode;
}) => (
  <Box
    sx={(theme) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      aspectRatio: "1 / 1",
      boxSizing: "border-box",
      position: "relative",
      p: 0.75,
      width: "45%",
      [theme.breakpoints.up("tablet")]: {
        p: 1,
        width: `${100 / cols}%`,
        ...(isLast
          ? {}
          : {
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                bottom: 0,
                right: "-24px", // columnGap(48px)의 절반
                borderLeft: dashed,
              },
            }),
      },
    })}
  >
    {children}
  </Box>
);

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
  image_alt: string;
  title: string;
  subTitle?: string;
  textList: string[];
  features?: FeatureItem[];
  libraries: LibraryItem[];
  name: string;
  pageKey: string;
  featuresSectionTitle?: string;
  /** 인트로 텍스트 오버레이의 top 위치 (페이지별 조정용, 기본 "60%") */
  contentTop?: string;
  /**
   * 인트로 영역 하단 여백 (기본 12).
   * 오버레이는 absolute라 높이를 차지하지 않으므로, contentTop을 내려 오버레이가
   * 이미지 하단보다 내려가면 이 값을 키워 아래 섹션과의 겹침을 방지한다.
   */
  introBottomSpace?: number | string;
  /**
   * 라이브러리 영역 레이아웃.
   * "grid"(기본): 6열 그리드 + 내부 dashed 구분선 + 빈 셀 채움.
   * "center": 항목 적을 때 중앙 정렬 + 항목 사이 세로 구분선만(빈 셀 없음).
   */
  libraryLayout?: "grid" | "center";
  /** 데스크톱 hero breadcrumb 텍스트·화살표 색상 (기본 "#ffffff") */
  breadcrumbColor?: string;
}

const ProductPageTemplate = ({
  image,
  image_alt,
  title,
  subTitle,
  textList,
  features,
  libraries,
  pageKey,
  contentTop = "60%",
  introBottomSpace = 12,
  libraryLayout = "grid",
  breadcrumbColor = "#ffffff",
}: ProductPageTemplateProps) => {
  const isCenterLibrary = libraryLayout === "center";
  const { isMobile } = useBreakpoint();
  const navigate = useLocalizedNavigate();
  // 라이브러리 그리드 데스크톱 열 수 (dashed 구분선 계산 기준)
  const COLS = 6;
  // 마지막 행을 채우는 빈 셀 수 + 전체 행 수 (내부 구분선 계산용)
  const emptyCount = (COLS - (libraries.length % COLS)) % COLS;
  const totalRows = (libraries.length + emptyCount) / COLS;
  const dashed = "2px dashed #424242";
  return (
    <Box
      component="main"
      sx={(theme) => ({
        display: "flex",
        boxSizing: "border-box",
        mt: 0,
        // px: 4,
        position: "relative",
        flexDirection: "column",
        [theme.breakpoints.up("tablet")]: {
          // px: "12%",
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
            gap: 10,
          },
        })}
      >
        <Box
          id="introduction"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 5,
            position: "relative",
            mb: introBottomSpace,
          }}
        >
          {/* 데스크톱 breadcrumb: hero 우측 상단 (모바일은 상단 별도 노출) */}
          <BreadScrum
            pageKey={pageKey}
            color={breadcrumbColor}
            sx={(theme) => ({
              position: "absolute",
              top: 0,
              right: "8%",
              mt: 5,
              zIndex: 1,
              display: "none",
              [theme.breakpoints.up("tablet")]: {
                display: "flex",
              },
            })}
          />
          <Box
            component="img"
            fetchPriority="high"
            src={image}
            alt={image_alt}
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
              position: "absolute",
              top: contentTop,
              boxSizing: "border-box",
              [theme.breakpoints.up("tablet")]: {
                mt: 0,
                px: 20,
                width: "100%",
              },
            })}
          >
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                gap: 0,
                backgroundColor: "rgba(3, 25, 63, 0.9)",
                borderRadius: "16px",
                [theme.breakpoints.up("tablet")]: {
                  mt: 0,
                  gap: 2,
                  p: 8,
                },
              })}
            >
              <Typography
                component="h1"
                sx={(theme) => ({
                  fontFamily: "Freesentation-7-Bold",
                  fontSize: "28px",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  [theme.breakpoints.up("tablet")]: {
                    fontSize: "48px",
                  },
                })}
              >
                {title}
              </Typography>
              {subTitle && (
                <Typography
                  component="h4"
                  sx={{
                    fontFamily: "Freesentation-6-SemiBold",
                    fontSize: "20px",
                    wordBreak: "keep-all",
                    color: "#ffffff",
                  }}
                >
                  {subTitle}
                </Typography>
              )}
              <Box
                sx={{
                  position: "relative",
                  width: "60%",
                  borderBottom: "1px solid #ffffff",
                }}
              >
                {/* 선 끝의 작은 원 (중심이 선 끝과 일치) */}
                <Box
                  sx={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    transform: "translate(50%, 50%)",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    backgroundColor: "#ffffff",
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {textList.map((text, index) => (
                  <Typography
                    key={index}
                    sx={(theme) => ({
                      fontFamily: "Freesentation-4-Regular",
                      fontSize: "16px",
                      color: "#737373",
                      [theme.breakpoints.up("tablet")]: {
                        color: "#ffffff",
                      },
                    })}
                  >
                    {text}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        {features && (
          <Box
            id="feature"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              px: "calc(8% + 40px)",
              mt: 10,
            }}
          >
            <SectionTitle text="Features" />
            <Box sx={{ display: "flex", flexDirection: "column", px: 10 }}>
              {features.map((item, index) => (
                <ProductContent key={index} {...item} isColor={false} />
              ))}
            </Box>
          </Box>
        )}
        <Box sx={{ px: "10%" }}>
          <SectionTitle text="Library" />
          <Box
            id="libraries"
            sx={(theme) => ({
              boxSizing: "border-box",
              mb: 20,
              mt: 10,
              width: "100%",
              ...(isCenterLibrary
                ? {
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    // center 모드: 셀 크기는 그대로, 항목 사이 간격만 넓게
                    columnGap: 6,
                    rowGap: 6,
                  }
                : {
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                  }),
              [theme.breakpoints.up("tablet")]: {
                px: 5,
                ...(isCenterLibrary
                  ? {}
                  : { gridTemplateColumns: `repeat(${COLS}, 1fr)` }),
              },
            })}
          >
            {isCenterLibrary
              ? libraries.map((library, index) => (
                  <LibraryCenterCell
                    key={library.text}
                    cols={COLS}
                    isLast={index === libraries.length - 1}
                    dashed={dashed}
                  >
                    <LibraryButton
                      library={library}
                      onClick={() => navigate(library.url)}
                    />
                  </LibraryCenterCell>
                ))
              : // grid: 실제 항목 + 마지막 행을 채우는 빈 셀(null)
                [
                  ...libraries,
                  ...Array.from({ length: emptyCount }, () => null),
                ].map((library, index) => (
                  <LibraryGridCell
                    key={library ? library.text : `empty-${index}`}
                    index={index}
                    cols={COLS}
                    totalRows={totalRows}
                    isEmpty={!library}
                    dashed={dashed}
                  >
                    {library && (
                      <LibraryButton
                        library={library}
                        onClick={() => navigate(library.url)}
                      />
                    )}
                  </LibraryGridCell>
                ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ProductPageTemplate;
