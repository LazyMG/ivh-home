import { createTheme } from "@mui/material/styles";
import "./mui-augmentation.d.ts";

const baseTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      tablet: 640,
      laptop: 1200,
      desktop: 1920,
    },
  },
});

const fontConfig = {
  medium: "Freesentation-5-Medium",
  semiBold: "Freesentation-6-SemiBold",
  bold: "Freesentation-7-Bold",
  extraBold: "Freesentation-8-ExtraBold",
};

const responsiveFonts = {
  breadScrumFont: {
    font: fontConfig["bold"],
    smSize: "13.5px",
    mdSize: "22.2px",
    lgSize: "20.8px",
  },
  // 솔루션 페이지 (/solution) 상단 문구 'SOLUTION'
  solutionMainTitle: {
    font: fontConfig["extraBold"],
    smSize: "24px",
    mdSize: "66.56px",
    lgSize: "48px",
  },
  // 솔루션 페이지 (/solution) 하단 네비게이션 버튼 문구 'Energy BEMS ...'
  solutionMainNavFont: {
    font: fontConfig["semiBold"],
    smSize: "16px",
    mdSize: "31.06px",
    lgSize: "29.2px",
  },
  // 솔루션의 각 페이지 (/solution/...) 상단 페이지 제목 'Energy', 'BEMS', ...
  solutionTitleFont: {
    font: fontConfig["extraBold"],
    smSize: "23px",
    mdSize: "37.73px",
    lgSize: "35.4px",
  },
  // 솔루션의 각 페이지 (/solution/...) 상단 페이지 부제목 '원자력 - ...', ...
  solutionSubTitleFont: {
    font: fontConfig["semiBold"],
    smSize: "18.8px",
    mdSize: "31.6px",
    lgSize: "29.2px",
  },
  // 솔루션의 각 페이지 (/solution/...) 본문 부제목 '개요', '기술적 배경', ...
  solutionTextTitleFont: {
    font: fontConfig["bold"],
    smSize: "16.2px",
    mdSize: "26.6px",
    lgSize: "25px",
  },
  // 솔루션의 각 페이지 (/solution/...) 본문 내용 및 박스 본문 내용 '기존의 전력 시스템은 ...', ...
  solutionTextFont: {
    font: fontConfig["medium"],
    smSize: "13.5px",
    mdSize: "22.2px",
    lgSize: "20.8px",
  },
  // 솔루션의 각 페이지 (/solution/...) 박스 부제목 '핵심 기술', '제공 서비스', ...
  solutionBoxTitleFont: {
    font: fontConfig["bold"],
    smSize: "20.2px",
    mdSize: "33.3px",
    lgSize: "31.3px",
  },
};

const getResponsiveFontStyle = (style: {
  font: string;
  smSize: string;
  mdSize: string;
  lgSize: string;
}) => {
  return {
    fontFamily: style.font,
    fontSize: style.smSize,
    [baseTheme.breakpoints.up("tablet")]: {
      fontSize: style.mdSize,
    },
    [baseTheme.breakpoints.up("laptop")]: {
      fontSize: style.lgSize,
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

      maxWidth: "100%",

      [baseTheme.breakpoints.up("laptop")]: {
        maxWidth: "70%",
      },
    },
    // 솔루션 페이지 (/solution) 하단 네비게이션의 Box 컴포넌트 스타일
    solutionMainRowNavContainer: {
      position: "absolute",
      width: "100%",

      bottom: "5rem",

      [baseTheme.breakpoints.up("tablet")]: {
        bottom: "2rem",
      },
      [baseTheme.breakpoints.up("laptop")]: {
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

      [baseTheme.breakpoints.up("laptop")]: {
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

      [baseTheme.breakpoints.up("laptop")]: {
        justifyContent: "space-around",
      },
    },
    // 메뉴 1개에 해당하는 컴포넌트
    solutionMainRowNavItem: {
      justifyContent: "center",

      display: "flex",

      [baseTheme.breakpoints.up("laptop")]: {
        display: "block",

        width: "fit-content",
      },
    },
    productPagePadding: {
      padding: "0 32px",
      [baseTheme.breakpoints.up("tablet")]: {
        padding: "0 80px",
      },
      [baseTheme.breakpoints.up("laptop")]: {
        padding: "0 160px",
      },
    },
  },
});

export default theme;
