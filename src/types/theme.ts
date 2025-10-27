import { createTheme } from "@mui/material/styles";
import "./mui-augmentation.d.ts";

const BREAKPOINTS = {
  mobilePortrait: 0, // 0~480px (스마트폰 세로)
  mobileLandscape: 481, // 481~768px (스마트폰 가로, 태블릿 세로)
  tablet: 845, // 769~1279px (태블릿 가로, 노트북)
  desktop: 1280, // 1280px~ (데스크탑)
} as const;

const baseTheme = createTheme({
  breakpoints: {
    values: BREAKPOINTS,
  },
});

export const mediaQueries = {
  // === 기본 범위 (화면 크기만) ===
  mobilePortrait: baseTheme.breakpoints.between(
    "mobilePortrait",
    "mobileLandscape"
  ), // 0~480px
  mobileLandscape: baseTheme.breakpoints.between("mobileLandscape", "tablet"), // 481~768px
  tablet: baseTheme.breakpoints.between("tablet", "desktop"), // 769~1279px
  desktop: baseTheme.breakpoints.up("desktop"), // 1280px~

  // === 모바일 전체 ===
  mobile: baseTheme.breakpoints.down("tablet"), // 0~768px

  // === Orientation 조합 ===
  // 스마트폰 세로 (0~480px + portrait)
  phonePortrait: `${baseTheme.breakpoints.down(
    "mobileLandscape"
  )} and (orientation: portrait)`,

  // 스마트폰 가로 (0~768px + landscape)
  phoneLandscape: `${baseTheme.breakpoints.down(
    "tablet"
  )} and (orientation: landscape)`,

  // 태블릿 세로 (481~768px + portrait)
  tabletPortrait: `${baseTheme.breakpoints.between(
    "mobileLandscape",
    "tablet"
  )} and (orientation: portrait)`,

  // 태블릿 가로 (769~1279px + landscape)
  tabletLandscape: `${baseTheme.breakpoints.between(
    "tablet",
    "desktop"
  )} and (orientation: landscape)`,

  // 일반 landscape/portrait
  landscape: "(orientation: landscape)",
  portrait: "(orientation: portrait)",
} as const;

const fontConfig = {
  medium: "Freesentation-5-Medium",
  semiBold: "Freesentation-6-SemiBold",
  bold: "Freesentation-7-Bold",
  extraBold: "Freesentation-8-ExtraBold",
};

const responsiveFonts = {
  breadScrumFont: {
    font: fontConfig["bold"],
    mobilePortrait: "13.5px",
    mobileLandscape: "22.2px",
    tablet: "20.8px",
    desktop: "20.8px",
  },
  // 솔루션 페이지 (/solution) 상단 문구 'SOLUTION'
  solutionMainTitle: {
    font: fontConfig["extraBold"],
    mobilePortrait: "24px", // 0~480px
    mobileLandscape: "32px", // 481~768px
    tablet: "40px", // 769~1279px
    desktop: "48px", // 1280px~
  },
  // 솔루션 페이지 (/solution) 하단 네비게이션 버튼 문구 'Energy BEMS ...'
  solutionMainNavFont: {
    font: fontConfig["semiBold"],
    mobilePortrait: "16px",
    mobileLandscape: "24px",
    tablet: "31.06px",
    desktop: "29.2px",
  },
  // 솔루션의 각 페이지 (/solution/...) 상단 페이지 제목 'Energy', 'BEMS', ...
  solutionTitleFont: {
    font: fontConfig["extraBold"],
    mobilePortrait: "23px",
    mobileLandscape: "34.5px",
    tablet: "37.73px",
    desktop: "35.4px",
  },
  // 솔루션의 각 페이지 (/solution/...) 상단 페이지 부제목 '원자력 - ...', ...
  solutionSubTitleFont: {
    font: fontConfig["semiBold"],
    mobilePortrait: "18.8px",
    mobileLandscape: "28.2px",
    tablet: "31.6px",
    desktop: "31.3px",
  },
  // 솔루션의 각 페이지 (/solution/...) 본문 부제목 '개요', '기술적 배경', ...
  solutionTextTitleFont: {
    font: fontConfig["bold"],
    mobilePortrait: "16.2px",
    mobileLandscape: "24.3px",
    tablet: "26.6px",
    desktop: "25px",
  },
  // 솔루션의 각 페이지 (/solution/...) 본문 내용 및 박스 본문 내용 '기존의 전력 시스템은 ...', ...
  solutionTextFont: {
    font: fontConfig["medium"],
    mobilePortrait: "13.5px",
    mobileLandscape: "20.25px",
    tablet: "22.2px",
    desktop: "20.8px",
  },
  // 솔루션의 각 페이지 (/solution/...) 박스 부제목 '핵심 기술', '제공 서비스', ...
  solutionBoxTitleFont: {
    font: fontConfig["bold"],
    mobilePortrait: "20.2px",
    mobileLandscape: "30.3px",
    tablet: "33.3px",
    desktop: "31.3px",
  },
};

const getResponsiveFontStyle = (style: {
  font: string;
  mobilePortrait: string;
  mobileLandscape: string;
  tablet: string;
  desktop: string;
}) => {
  return {
    fontFamily: style.font,
    fontSize: style.mobilePortrait,
    [baseTheme.breakpoints.up("mobileLandscape")]: {
      fontSize: style.mobileLandscape, // 481~768px
    },

    [baseTheme.breakpoints.up("tablet")]: {
      fontSize: style.tablet, // 769~1279px
    },

    [baseTheme.breakpoints.up("desktop")]: {
      fontSize: style.desktop, // 1280px~
    },
    lineHeight: 1.5,
  };
};

const theme = createTheme({
  breakpoints: baseTheme.breakpoints,
  typography: {
    breadScrumFont: getResponsiveFontStyle(responsiveFonts["breadScrumFont"]),
    solutionMainTitle: getResponsiveFontStyle(
      responsiveFonts["solutionMainTitle"]
    ),
    solutionMainNavFont: getResponsiveFontStyle(
      responsiveFonts["solutionMainNavFont"]
    ),
    solutionTitleFont: getResponsiveFontStyle(
      responsiveFonts["solutionTitleFont"]
    ),
    solutionSubTitleFont: getResponsiveFontStyle(
      responsiveFonts["solutionSubTitleFont"]
    ),
    solutionTextTitleFont: getResponsiveFontStyle(
      responsiveFonts["solutionTextTitleFont"]
    ),
    solutionTextFont: getResponsiveFontStyle(
      responsiveFonts["solutionTextFont"]
    ),
    solutionBoxTitleFont: getResponsiveFontStyle(
      responsiveFonts["solutionBoxTitleFont"]
    ),
  },
  customStyles: {
    // 솔루션 페이지 (/solution) 중앙 이미지 스타일
    solutionMainImage: {
      position: "absolute",
      alignSelf: "center",
      top: 0,
      bottom: 0,

      maxWidth: "90%",
      width: "100%",

      [baseTheme.breakpoints.up("mobileLandscape")]: {
        width: "50%",
      },

      [baseTheme.breakpoints.up("tablet")]: {
        width: "60%",
      },

      [baseTheme.breakpoints.up("desktop")]: {
        width: "60%",
        maxWidth: "100%",
        top: "80px",
      },
    },
    // 솔루션 페이지 (/solution) 하단 네비게이션의 Box 컴포넌트 스타일
    solutionMainRowNavContainer: {
      position: "absolute",
      width: "100%",

      bottom: "2rem",

      [baseTheme.breakpoints.up("tablet")]: {
        bottom: "2rem",
      },
      [baseTheme.breakpoints.up("desktop")]: {
        bottom: "1rem",
      },
    },
    // 솔루션 페이지 (/solution) 하단 네비게이션의 Toolbar 컴포넌트 스타일
    solutionMainRowNav: {
      boxSizing: "border-box",

      display: "flex",
      flexDirection: "column",
      gap: "24px",
      padding: "0 36px",
      width: "100%",

      [baseTheme.breakpoints.up("desktop")]: {
        display: "flex",
        flexDirection: "row",
        gap: "0",
        padding: 0,
        width: "100%",

        justifyContent: "space-around",
      },
    },
    // 솔루션 페이지 (/solution) 하단 네비게이션의 Toolbar 자식 컴포넌트 Box
    // 메뉴를 3개씩 묶어 가지는 컴포넌트
    solutionMainRowNavItemContainer: {
      width: "100%",
      display: "flex",

      justifyContent: "space-between",

      [baseTheme.breakpoints.up("desktop")]: {
        justifyContent: "space-around",
      },
      // [baseTheme.breakpoints.up("mobileLandscape")]: {
      //   justifyContent: "space-between",
      // },
    },
    // 메뉴 1개에 해당하는 컴포넌트
    solutionMainRowNavItem: {
      justifyContent: "center",

      display: "flex",

      [baseTheme.breakpoints.up("desktop")]: {
        display: "block",

        width: "fit-content",
      },
    },
    // 프로덕트 페이지 중 중간 페이지(/product/dymola, /product/vtd 등)의 Outline 영역 스타일
    productBranchPageOutline: {
      marginTop: "32px",
      padding: "0 32px",
      [baseTheme.breakpoints.up("tablet")]: {
        marginTop: "64px",
        padding: "0 80px",
      },
      [baseTheme.breakpoints.up("desktop")]: {
        marginTop: "144px",
        padding: "0 160px",
      },
    },
    productStackComponent: {
      gap: "48px",
      [baseTheme.breakpoints.up("tablet")]: {
        gap: "64px",
      },
      [baseTheme.breakpoints.up("desktop")]: {
        gap: "96px",
      },
    },
  },
});

export default theme;
