export const headerColors = {
  home: {
    background: "#000",
    text: "#ffffff",
    border: "#312f2f",
    hoverLine: "#ffffff",
    logo: "white",
    submenu: {
      active: "#fff",
      disabled: "#6b7280",
    },
    preview: {
      background: "#2a2a2af2",
      text: "#ffffff",
      border: "#ffffff1a",
      color: "#ffffff",
      borderColor: "#ffffff1a",
    },
  },
  default: {
    background: "#ffffff",
    text: "#000000",
    border: "#e0e0e0",
    hoverLine: "#179EBD",
    logo: "black",
    submenu: {
      active: "#343538",
      disabled: "#9ca3af",
    },
    preview: {
      background: "#fffffff2",
      text: "#000000",
      border: "#0000001a",
      color: "#000000",
      borderColor: "#0000001a",
    },
  },
} as const;

// 테마 가져오기
export const getHeaderTheme = (isHomePage: boolean) =>
  isHomePage ? headerColors.home : headerColors.default;

// 폰트
export const headerFonts = {
  regular: "Freesentation-4-Regular",
  semiBold: "Freesentation-6-SemiBold",
  bold: "Freesentation-7-Bold",
} as const;

// 레이아웃 상수
export const headerLayout = {
  padding: "24px",
  logoFlex: 0,
  menuFlex: 4,
  logoMinWidth: "150px",
  menuMinWidth: "160px",
  productMinWidth: "240px",
  productMaxWidth: "400px",
  menuMaxWidth: "250px",
  hoverLineHeight: "3px",
} as const;
