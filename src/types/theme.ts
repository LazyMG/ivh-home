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
    smSize: "12px",
    mdSize: "31.06px",
    lgSize: "24px",
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
      maxWidth: "100%",
      margin: "50px auto", // px 단위 변경하기
      [baseTheme.breakpoints.between("tablet", "laptop")]: {
        margin: "200px auto", // px 단위 변경하기
      },
      [baseTheme.breakpoints.up("laptop")]: {
        margin: "0 auto",
        maxWidth: "70%",
      },
    },
    // 솔루션 페이지 (/solution) 하단 네비게이션의 Box 컴포넌트 스타일
    solutionMainRowNavContainer: {
      position: "relative",
      bottom: "1rem",
      width: "100%",
      [baseTheme.breakpoints.up("laptop")]: {
        position: "absolute",
      },
    },
    // 솔루션 페이지 (/solution) 하단 네비게이션의 Toolbar 컴포넌트 스타일
    solutionMainRowNav: {
      justifyContent: "space-around",
      width: "100%",
      padding: "0 12px",
      boxSizing: "border-box",
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: "16px",
      [baseTheme.breakpoints.up("laptop")]: {
        display: "flex",
        gap: "0",
        padding: 0,
      },
    },
    solutionMainRowNavItem: {
      display: "flex",
      justifyContent: "center",
      [baseTheme.breakpoints.up("laptop")]: {
        display: "block",
      },
    },
  },
});

export default theme;
