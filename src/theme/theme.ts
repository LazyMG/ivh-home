import { createTheme } from "@mui/material/styles";
import "../types/mui-augmentation.d.ts";

const BREAKPOINTS = {
  mobilePortrait: 0, // 0~480px (스마트폰 세로)
  mobileLandscape: 481, // 481~845px (스마트폰 가로, 태블릿 세로)
  tablet: 846, // 846~1279px (태블릿 가로, 노트북)
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
  mobileLandscape: baseTheme.breakpoints.between("mobileLandscape", "tablet"), // 481~845px
  tablet: baseTheme.breakpoints.between("tablet", "desktop"), // 846~1279px
  desktop: baseTheme.breakpoints.up("desktop"), // 1280px~

  // === 모바일 전체 ===
  mobile: baseTheme.breakpoints.down("tablet"), // 0~845

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
  regular: "Freesentation-4-Regular",
  medium: "Freesentation-5-Medium",
  semiBold: "Freesentation-6-SemiBold",
  bold: "Freesentation-7-Bold",
  extraBold: "Freesentation-8-ExtraBold",
};

const responsiveFonts = {
  breadScrumFont: {
    font: fontConfig["bold"],
    mobilePortrait: "11px",
    mobileLandscape: "13px",
    tablet: "16px",
    desktop: "20px",
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
    mobileLandscape: "20px",
    tablet: "30px",
    desktop: "32px",
  },
  // 솔루션의 각 페이지 (/solution/...) 상단 페이지 제목 'Energy', 'BEMS', ...
  solutionTitleFont: {
    font: fontConfig["extraBold"],
    mobilePortrait: "22px",
    mobileLandscape: "24px",
    tablet: "30px",
    desktop: "32px",
  },
  // 솔루션의 각 페이지 (/solution/...) 상단 페이지 부제목 '원자력 - ...', ...
  solutionSubTitleFont: {
    font: fontConfig["semiBold"],
    mobilePortrait: "18px",
    mobileLandscape: "22px",
    tablet: "25px",
    desktop: "26px",
  },
  // 솔루션의 각 페이지 (/solution/...) 본문 부제목 '개요', '기술적 배경', ...
  solutionTextTitleFont: {
    font: fontConfig["bold"],
    mobilePortrait: "16px",
    mobileLandscape: "20px",
    tablet: "22px",
    desktop: "25px",
  },
  // 솔루션의 각 페이지 (/solution/...) 본문 내용 및 박스 본문 내용 '기존의 전력 시스템은 ...', ...
  solutionTextFont: {
    font: fontConfig["medium"],
    mobilePortrait: "13px", // 본문 내용들 모바일 세로 사이즈
    mobileLandscape: "16px", // 본문 내용들 모바일 가로, 태블릿 세로 사이즈
    tablet: "16px", // 본문 내용들 태블릿 세로 사이즈
    desktop: "22px", // 본문 내용들 데스크탑 사이즈
  },
  // 솔루션의 각 페이지 (/solution/...) 박스 부제목 '핵심 기술', '제공 서비스', ...
  solutionBoxTitleFont: {
    font: fontConfig["bold"],
    mobilePortrait: "16px",
    mobileLandscape: "20px",
    tablet: "22px",
    desktop: "31px",
  },
  productImageBannerTitleFont: {
    font: fontConfig["extraBold"],
    mobilePortrait: "32px",
    mobileLandscape: "36px",
    tablet: "56px",
    desktop: "80px",
  },
  productImageBannerSubtitleFont: {
    font: fontConfig["semiBold"],
    mobilePortrait: "14px",
    mobileLandscape: "18px",
    tablet: "28px",
    desktop: "40px",
  },
  contactTitleFont: {
    font: fontConfig["semiBold"],
    mobilePortrait: "24px",
    mobileLandscape: "24px",
    tablet: "30px",
    desktop: "30px",
  },
  contactProductsLinkFont: {
    font: fontConfig["semiBold"],
    mobilePortrait: "14px",
    mobileLandscape: "14px",
    tablet: "14px",
    desktop: "14px",
  },
  // Support 페이지 제목 'iVH 기술지원 서비스는 고객 요청에 정확하고 빠르게 답변합니다.'
  supportTitleFont: {
    font: fontConfig["semiBold"],
    mobilePortrait: "24px",
    mobileLandscape: "24px",
    tablet: "40px",
    desktop: "40px",
  },
  // Support 페이지 본문 '긴급 핫라인을 통한 빠른 답변부터...'
  supportTextFont: {
    font: fontConfig["regular"],
    mobilePortrait: "16px",
    mobileLandscape: "16px",
    tablet: "16px",
    desktop: "16px",
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

// 공통 스타일 정의 (재사용을 위해)
const solutionMainImageStyle = {
  position: "absolute" as const,
  alignSelf: "center" as const,
  top: 0,
  bottom: 0,
  maxWidth: "90%",
  width: "100%",

  [baseTheme.breakpoints.up("mobileLandscape")]: {
    width: "30%",
  },

  [baseTheme.breakpoints.up("tablet")]: {
    width: "60%",
  },

  [baseTheme.breakpoints.up("desktop")]: {
    width: "100%",
    maxWidth: "100%",
  },
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
    productImageBannerTitleFont: getResponsiveFontStyle(
      responsiveFonts["productImageBannerTitleFont"]
    ),
    productImageBannerSubtitleFont: getResponsiveFontStyle(
      responsiveFonts["productImageBannerSubtitleFont"]
    ),
    contactTitleFont: getResponsiveFontStyle(
      responsiveFonts["contactTitleFont"]
    ),
    contactProductsLinkFont: getResponsiveFontStyle(
      responsiveFonts["contactProductsLinkFont"]
    ),
    supportTitleFont: getResponsiveFontStyle(
      responsiveFonts["supportTitleFont"]
    ),
    supportTextFont: getResponsiveFontStyle(responsiveFonts["supportTextFont"]),
  },
  customStyles: {
    // 솔루션 페이지 (/solution) 메인 컨테이너 스타일
    solutionMainContainer: {
      display: "flex",
      flexDirection: "column",
      [baseTheme.breakpoints.up("mobilePortrait")]: {
        mt: 0,
      },
      // 스마트폰 가로만: 481~768px + landscape
      [`${baseTheme.breakpoints.between(
        "mobileLandscape",
        "tablet"
      )} and (orientation: landscape) and (max-height: 500px)`]: {
        flexDirection: "row",
        alignItems: "center",
        padding: "0 2rem",
        gap: "2rem",
      },

      // 태블릿 이상: 기존 레이아웃 (중앙 이미지, 하단 네비)
      [baseTheme.breakpoints.up("tablet")]: {
        flexDirection: "column",
        padding: 0,
      },
    },
    // 솔루션 페이지 (/solution) 메인 이미지 컨테이너 스타일
    solutionMainImageContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      // 모바일 세로
      [baseTheme.breakpoints.up("mobilePortrait")]: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        mx: "auto",
        my: "0",
        maxWidth: "90%",
        width: "100%",
      },

      // 스마트폰 가로만: 왼쪽 배치
      [`${baseTheme.breakpoints.between(
        "mobileLandscape",
        "tablet"
      )} and (orientation: landscape) and (max-height: 500px)`]: {
        position: "relative",
        flex: "0 0 50%",
        maxWidth: "50%",
        width: "50%",
      },

      // 태블릿 이상: 기존 중앙 배치
      [baseTheme.breakpoints.up("tablet")]: {
        ...solutionMainImageStyle,
      },
    },
    // 솔루션 페이지 (/solution) 중앙 이미지 스타일
    solutionMainImage: solutionMainImageStyle,
    // 솔루션 페이지 (/solution) 하단 네비게이션의 Box 컴포넌트 스타일
    solutionMainRowNavContainer: {
      position: "absolute",
      width: "100%",
      bottom: "2rem",

      // 스마트폰 가로만: 오른쪽 배치
      [`${baseTheme.breakpoints.between(
        "mobileLandscape",
        "tablet"
      )} and (orientation: landscape) and (max-height: 500px)`]: {
        position: "relative",
        flex: "0 0 50%",
        maxWidth: "50%",
        width: "50%",
        bottom: "auto",
      },

      // 태블릿 이상: 기존 하단 배치
      [baseTheme.breakpoints.up("tablet")]: {
        position: "absolute",
        width: "100%",
        bottom: "2rem",
        flex: "none",
        maxWidth: "none",
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

      // 스마트폰 가로만: 2×3 그리드
      [`${baseTheme.breakpoints.between(
        "mobileLandscape",
        "tablet"
      )} and (orientation: landscape) and (max-height: 500px)`]: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr 1fr",
        rowGap: "56px",
        columnGap: "16px",
        padding: 0,
      },

      // 태블릿 이상: 기존 레이아웃 (2행 3열)
      [baseTheme.breakpoints.up("tablet")]: {
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        padding: "0 36px",
      },

      [baseTheme.breakpoints.up("desktop")]: {
        flexDirection: "row",
        gap: "0",
        padding: 0,
        justifyContent: "space-around",
      },
    },
    // 솔루션 페이지 (/solution) 하단 네비게이션의 Toolbar 자식 컴포넌트 Box
    // 메뉴를 3개씩 묶어 가지는 컴포넌트
    solutionMainRowNavItemContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",

      // 스마트폰 가로만: grid 적용
      [`${baseTheme.breakpoints.between(
        "mobileLandscape",
        "tablet"
      )} and (orientation: landscape) and (max-height: 500px)`]: {
        display: "contents",
      },

      // 태블릿 이상: 기존 flex 레이아웃
      [baseTheme.breakpoints.up("tablet")]: {
        display: "flex",
        justifyContent: "space-between",
      },

      [baseTheme.breakpoints.up("desktop")]: {
        justifyContent: "space-around",
      },
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
    // Contact 페이지 (/company/contact) 메인 컨테이너 스타일
    contactMainContainer: {
      padding: {
        mobilePortrait: "0 32px",
        mobileLandscape: "0 48px",
        tablet: "0 80px",
        desktop: "0 160px",
      },
      marginTop: {
        mobilePortrait: "32px",
        mobileLandscape: "48px",
        tablet: "64px",
        desktop: "80px",
      },
      marginBottom: {
        mobilePortrait: "32px",
        mobileLandscape: "48px",
        tablet: "64px",
        desktop: "80px",
      },
      display: "flex",
      flexDirection: "column",
      gap: "48px",
    },
    // Contact 페이지 상단 영역 (제목 + 폼) 컨테이너 스타일
    contactTopContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "48px",
      [baseTheme.breakpoints.up("tablet")]: {
        flexDirection: "row",
      },
    },
    // Contact 페이지 지도 영역 컨테이너 스타일
    contactMapContainer: {
      width: "100%",
      height: {
        mobilePortrait: "300px",
        mobileLandscape: "400px",
        tablet: "450px",
        desktop: "450px",
      },
      borderRadius: "8px",
      overflow: "hidden",
      border: "1px solid #e5e7eb",
    },
    // Contact 페이지 제목 영역 컨테이너 스타일
    contactTitleContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      flex: 1,
      [baseTheme.breakpoints.up("tablet")]: {
        paddingRight: "100px",
      },
    },
    // Contact 페이지 제품 둘러보기 링크 스타일
    contactProductsLink: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      fontSize: "14px",
      fontFamily: fontConfig["semiBold"],
      lineHeight: 1.5,
      color: "#374151", // gray-900
      width: "fit-content",
      cursor: "pointer",
      transition: "all 0.3s",
      textDecoration: "none",
      "&:hover": {
        color: "#1d4ed8", // blue-700
        gap: "8px",
      },
    },

    contactFormContainer: {
      flex: 1,
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "24px",
      [baseTheme.breakpoints.up("tablet")]: {
        gridTemplateColumns: "1fr 1fr",
        columnGap: "24px",
      },
    },
    // Contact 페이지 폼 필드 기본 스타일
    contactFormField: {
      position: "relative",
    },
    // Contact 페이지 전체 너비 필드 (문의내용, 체크박스, 버튼) 스타일
    contactFormFullWidthField: {
      position: "relative",
      [baseTheme.breakpoints.up("tablet")]: {
        gridColumn: "span 2",
      },
    },
    // Contact 페이지 체크박스 컨테이너 스타일
    contactCheckboxContainer: {
      position: "relative",
      [baseTheme.breakpoints.up("tablet")]: {
        gridColumn: "span 2",
      },
    },
    contactformControlLabel: {
      height: "32px",
      color: "#6366f1", // indigo-600
    },
    // Contact 페이지 문의하기 버튼 스타일
    contactButton: {
      padding: "12px 32px",
      fontSize: "14px",

      fontFamily: fontConfig["semiBold"],
      color: "white",
      backgroundColor: "#1d4ed8", // blue-700
      "&:hover": {
        backgroundColor: "#1e40af", // blue-600
      },
      "&.Mui-disabled": {
        backgroundColor: "#cccccc",
        color: "#888888",
      },
    },
    productPageContainer: {
      padding: "0 20px",
      paddingTop: "20px",
      [baseTheme.breakpoints.up("tablet")]: {
        px: 10,
      },
      [baseTheme.breakpoints.up("desktop")]: {
        pt: "50px",
        px: "120px",
      },
    },
    // Support 페이지 (/support) 메인 컨테이너 스타일
    supportContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "80px",
      [baseTheme.breakpoints.up("tablet")]: {
        flexDirection: "row",
      },
    },
    // Support 페이지 텍스트 영역 컨테이너 스타일
    supportTextContainer: {
      [baseTheme.breakpoints.up("tablet")]: {
        width: "50%",
      },
    },
    // Support 페이지 이미지 영역 컨테이너 스타일
    supportImageContainer: {
      display: "flex",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
      width: "100%",
      [baseTheme.breakpoints.up("tablet")]: {
        justifyContent: "flex-end",
        width: "50%",
      },
    },
    // Support 페이지 링크 스타일 (기술지원 서비스로 연결)
    supportLink: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      marginTop: "20px",
      paddingBottom: "4px",
      fontSize: "16px",
      fontFamily: fontConfig["semiBold"],
      lineHeight: 1,
      color: "#1d4ed8", // blue-700
      borderBottom: "1px solid #1d4ed8", // border-b-blue-700
      width: "fit-content",
      cursor: "pointer",
      transition: "all 0.3s",
      textDecoration: "none", // a 태그 기본 밑줄 제거
      "&:hover": {
        gap: "8px",
      },
    },
  },
});

export default theme;
