import { Box, Typography, useMediaQuery } from "@mui/material";
import type { ReactNode } from "react";
import ProductContent from "./ProductContent";
import ScrollButton from "../../common/ScrollButton";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useLocalizedNavigate } from "../../i18n/useLocalizedNavigate";
import BreadScrum from "../../common/BreadScrum";
import SectionTitle from "../common/SectionTitle";
import { FONTS } from "../../theme/theme";

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
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: 3,
      m: 0,
      px: 1,
      minWidth: 0,
      boxSizing: "border-box",
      cursor: "pointer",
      border: "none",
      // 기본색: 모바일 #003B8D / 데스크톱 #03193F. 아이콘(currentColor)·텍스트(inherit)가
      // 이 색을 따르고, hover/press 시 함께 흰색으로 반전된다.
      color: "#003B8D",
      backgroundColor: "#ffffff",
      transition: "background-color 0.2s ease, color 0.2s ease",
      // 반전 효과: 데스크톱 hover + 모바일 press 모두 적용(모바일도 의도된 반전).
      // 구분선은 셀로 뺐으므로 반전 영역에 포함되지 않는다.
      "&:hover": {
        backgroundColor: "#073272",
        color: "#ffffff",
      },
      "&:active": {
        backgroundColor: "#073272",
        color: "#ffffff",
      },
      [theme.breakpoints.up("desktop")]: {
        flexDirection: "column",
        justifyContent: "center",
        gap: 2,
        height: "100%",
        color: "#03193F",
      },
    })}
  >
    {/* mask 기법: SVG를 마스크로, currentColor로 라인 색상 → 호버 시 반전 */}
    <Box
      role="img"
      aria-label={library.img_alt}
      sx={(theme) => ({
        width: "20%",
        aspectRatio: "1 / 1",
        // currentColor로 버튼 색을 따라감 → 기본색 표시 + hover/press 시 흰색 반전
        backgroundColor: "currentColor",
        WebkitMaskImage: `url("${library.imgUrl}")`,
        maskImage: `url("${library.imgUrl}")`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        maxWidth: "120px",
        [theme.breakpoints.up("desktop")]: {
          width: "44%",
        },
      })}
    />
    {/* 제목 영역: 3줄까지 들어갈 최소 높이 확보 → 셀마다 묶음 높이를 동일하게 만들어
        중앙 정렬을 유지하면서 아이콘 위치를 일치시키고, 3줄 제목도 잘리지 않게 함 */}
    <Box
      sx={(theme) => ({
        minHeight: "54px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        py: 1,
        width: "80%",
        [theme.breakpoints.up("desktop")]: {
          alignItems: "flex-start",
          minHeight: "63px",
          py: 0,
          justifyContent: "center",
          width: "100%",
        },
      })}
    >
      <Typography
        sx={(theme) => ({
          fontSize: "14px",
          lineHeight: 1.3,
          fontFamily: FONTS.galderglynn.book,
          wordBreak: "keep-all",
          // 버튼 색 상속 → hover/press 시 흰색 반전
          color: "inherit",
          textAlign: "left",
          [theme.breakpoints.up("desktop")]: {
            fontFamily: FONTS.freesentation.semiBold,
            fontSize: "16px",
            maxWidth: "75%",
            textAlign: "center",
          },
        })}
      >
        {library.text}
      </Typography>
    </Box>
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
  isLast = false,
  dashed,
  children,
}: {
  index: number;
  cols: number;
  totalRows: number;
  isEmpty: boolean;
  /** 모바일 스택 레이아웃에서 마지막 항목이면 하단 구분선 제거 */
  isLast?: boolean;
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
          [theme.breakpoints.up("desktop")]: {
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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        py: 1,
        [theme.breakpoints.up("desktop")]: {
          p: 1,
          borderRight: isLastCol ? "none" : dashed,
          borderBottom: isLastRow ? "none" : dashed,
          aspectRatio: "1 / 1",
        },
      })}
    >
      {children}
      {/* 모바일 구분선: 버튼과 동일한 flex 구조(아이콘 20% + gap + 텍스트 80%)를 미러링해
          선을 텍스트 열 아래에만 정확히 정렬. 버튼 밖 + mt로 띄워 셀 사이 간격 가운데에 위치
          → 반전(파란 배경)에 닿지 않는다. tablet↑ 숨김 */}
      {!isLast && (
        <Box
          aria-hidden
          sx={(theme) => ({
            display: "flex",
            flexDirection: "row",
            gap: 3,
            width: "100%",
            mt: 2,
            [theme.breakpoints.up("desktop")]: { display: "none" },
          })}
        >
          {/* 아이콘 자리(선 없음) — 아이콘과 동일한 width·maxWidth로 맞춰 선 시작점 정렬 */}
          <Box sx={{ width: "20%", maxWidth: "120px" }} />
          {/* 텍스트 영역 하단 선 */}
          <Box sx={{ width: "80%", borderBottom: "1px solid #B2B2B2" }} />
        </Box>
      )}
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
      [theme.breakpoints.up("desktop")]: {
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
  /** 모바일 전용 인트로 이미지 (미지정 시 image로 폴백) */
  mobileImage?: string;
  image_alt: string;
  title: string;
  subTitle?: string;
  textList: string[];
  features?: FeatureItem[];
  libraries: LibraryItem[];
  pageKey: string;
  featuresSectionTitle?: string;
  /** 인트로 텍스트 오버레이의 top 위치 (페이지별 조정용, 기본 "60%") */
  contentTop?: string;
  /**
   * 작은 데스크톱(1024~1364px) 인트로 하단 여백 (기본 12).
   * 오버레이가 absolute라 높이를 차지하지 않으므로, contentTop을 내려 오버레이가
   * 이미지 하단보다 내려가면 이 값을 키워 아래 섹션과의 겹침을 방지한다.
   * 화면이 좁을수록 이미지가 작아 오버레이가 더 삐져나오므로 이 밴드에서 값이 가장 크다.
   */
  introBottomSpace?: number | string;
  /**
   * 모바일(0~1023px) 인트로 하단 여백 (기본 4).
   * 모바일은 오버레이가 흐름에 있어 스스로 높이를 확보하므로, 여기서는 다음
   * 섹션과의 시각적 간격만 조정한다(데스크톱과 목적이 달라 값을 분리).
   */
  introBottomSpaceMobile?: number | string;
  /**
   * 넓은 모니터(1365px↑) 인트로 하단 여백 (기본 12).
   * 화면이 넓어 이미지가 커지면 오버레이가 이미지 안에 더 들어가 삐져나옴이 줄어드므로
   * introBottomSpace(1024밴드)보다 작은 값이 적당하다(단일 값으로는 두 구간을 못 맞춤).
   */
  introBottomSpaceWide?: number | string;
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
  mobileImage,
  image_alt,
  title,
  subTitle,
  textList,
  features,
  libraries,
  pageKey,
  contentTop = "60%",
  introBottomSpace = 48,
  introBottomSpaceMobile = 4,
  introBottomSpaceWide = 12,
  libraryLayout = "grid",
  breadcrumbColor = "#ffffff",
  featuresSectionTitle = "Features",
}: ProductPageTemplateProps) => {
  const isCenterLibrary = libraryLayout === "center";
  const { isDesktop } = useBreakpoint();
  // 인트로 히어로 전환 기준(1024). 명명 브레이크포인트가 아니라 원시 쿼리로 처리.
  // 오버레이 레이아웃·mb·이미지 전환을 모두 이 지점으로 일관시킨다.
  const isHeroMobile = useMediaQuery("(max-width:1023.98px)");
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
      sx={{
        display: "flex",
        boxSizing: "border-box",
        mt: 0,
        position: "relative",
        flexDirection: "column",
      }}
    >
      <ScrollButton />
      <Box
        sx={(theme) => ({
          flex: 1,
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          minWidth: 0,
          gap: 3,
          [theme.breakpoints.up("desktop")]: {
            gap: 10,
          },
        })}
      >
        <Box
          id="introduction"
          sx={() => ({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 5,
            position: "relative",
            mb: introBottomSpaceMobile,
            // 1024~1366: 작은 데스크톱(오버레이 삐져나옴 큼 → 큰 여백)
            "@media (min-width:1024px)": {
              mb: introBottomSpace,
            },
            // 1365↑: 넓은 모니터(삐져나옴 줄어듦 → 작은 여백). 1024 규칙 뒤에 와서 덮어씀.
            "@media (min-width:1365px)": {
              mb: introBottomSpaceWide,
            },
          })}
        >
          {/* 데스크톱 breadcrumb: hero 우측 상단 (모바일은 상단 별도 노출) */}
          <BreadScrum
            pageKey={pageKey}
            color={breadcrumbColor}
            sx={() => ({
              position: "absolute",
              top: 0,
              right: "8%",
              mt: 5,
              zIndex: 1,
              display: "none",
              "@media (min-width:1024px)": {
                display: "flex",
              },
            })}
          />
          <Box
            component="img"
            fetchPriority="high"
            src={isHeroMobile && mobileImage ? mobileImage : image}
            alt={image_alt}
            sx={{
              objectFit: "contain",
              width: "100%",
            }}
          />
          <Box
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              gap: 2,
              boxSizing: "border-box",
              px: "6%",
              zIndex: 1,
              // 모바일: 오버레이를 흐름에 두고 음수 마진으로 이미지 하단부에 겹친다.
              // 오버레이 높이가 #introduction에 반영돼 아래 섹션이 자동으로 밀리므로
              // 별도 mt 없이 겹침이 방지된다. (숫자를 키우면 더 위로 겹침)
              position: "relative",
              mt: "-20vw",
              width: "100%",
              "@media (min-width:1024px)": {
                // 1024↑: 이미지 위 절대배치 (데스크톱 히어로)
                position: "absolute",
                top: contentTop,
                mt: 0,
              },
              [theme.breakpoints.up("desktop")]: {
                px: "10%",
                width: "100%",
              },
            })}
          >
            <Box
              sx={() => ({
                display: "flex",
                flexDirection: "column",
                gap: 2,
                backgroundColor: "rgba(3, 25, 63, 0.9)",
                borderRadius: "16px",
                p: 4,
                "@media (min-width:1024px)": {
                  mt: 0,
                  gap: 2,
                  p: "4%",
                },
              })}
            >
              <Typography
                component="h1"
                sx={() => ({
                  fontFamily: FONTS.galderglynn.bold,
                  fontSize: "24px",
                  color: "#ffffff",
                  "@media (min-width:1024px)": {
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
                    fontFamily: FONTS.freesentation.semiBold,
                    fontSize: "20px",
                    wordBreak: "keep-all",
                    color: "#ffffff",
                    textShadow: "1px 1px 2px #000000",
                  }}
                >
                  {subTitle}
                </Typography>
              )}
              <Box
                sx={(theme) => ({
                  position: "relative",
                  width: "90%",
                  mx: "auto",
                  borderBottom: "1px solid #ffffff",
                  [theme.breakpoints.up("desktop")]: {
                    width: "60%",
                    mx: 0,
                  },
                })}
              >
                {/* 선 끝의 작은 원 (중심이 선 끝과 일치) */}
                <Box
                  sx={(theme) => ({
                    display: "none",
                    [theme.breakpoints.up("desktop")]: {
                      display: "block",
                      position: "absolute",
                      right: 0,
                      bottom: 0,
                      transform: "translate(50%, 50%)",
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      backgroundColor: "#ffffff",
                    },
                  })}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {textList.map((text, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontFamily: FONTS.freesentation.regular,
                      fontSize: "16px",
                      color: "#ffffff",
                      textShadow: "3px 3px 30px #000000",
                    }}
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
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 0,
              px: 4,
              [theme.breakpoints.up("desktop")]: {
                px: "calc(6% + 40px)",
                mt: 10,
                gap: 4,
              },
            })}
          >
            <SectionTitle text={featuresSectionTitle} />
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                px: 1,
                [theme.breakpoints.up("desktop")]: {
                  px: 10,
                },
              })}
            >
              {features.map((item, index) => (
                <ProductContent key={index} {...item} />
              ))}
            </Box>
          </Box>
        )}
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 0,
            px: 4,
            [theme.breakpoints.up("desktop")]: {
              px: "calc(6% + 40px)",
              mt: 10,
              gap: 4,
            },
          })}
        >
          <SectionTitle text="Library" />
          <Box
            id="libraries"
            sx={(theme) => ({
              boxSizing: "border-box",
              mb: 10,
              mt: 2,
              width: "100%",
              // 모바일: center/grid 무관하게 통일된 세로 리스트. 모드 분기는 tablet↑에서만.
              display: "flex",
              flexDirection: "column",
              [theme.breakpoints.up("desktop")]: {
                px: 3,
                mb: 20,
                mt: 10,
                ...(isCenterLibrary
                  ? {
                      // center: 중앙 정렬 flex-wrap (셀 사이 간격 넓게)
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      columnGap: 6,
                      rowGap: 6,
                    }
                  : {
                      display: "grid",
                      gridTemplateColumns: `repeat(${COLS}, 1fr)`,
                    }),
              },
            })}
          >
            {isCenterLibrary && isDesktop
              ? // 데스크톱(≥1280) center: 중앙 정렬 + 세로 구분선. CSS 전환점(desktop)과 일치시켜
                // 846~1279에서 셀은 center인데 컨테이너·버튼은 list인 하이브리드 깨짐을 방지.
                libraries.map((library, index) => (
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
              : // grid 모드(전 구간) + center 모드 모바일: 통일된 리스트.
                // 빈 셀은 데스크톱 grid의 마지막 행 채움용(모바일·center에선 숨김 처리됨).
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
                    isLast={index === libraries.length - 1}
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
