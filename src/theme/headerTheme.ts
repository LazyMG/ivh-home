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
  },
  default: {
    background: "#ffffff",
    text: "#000000",
    border: "#e0e0e0",
    hoverLine: "#000000",
    logo: "black",
    submenu: {
      active: "#343538",
      disabled: "#9ca3af",
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
  logoFlex: 1,
  menuFlex: 4,
  logoMinWidth: "150px",
  menuMinWidth: "160px",
  productMinWidth: "240px",
  productMaxWidth: "400px",
  menuMaxWidth: "250px",
  hoverLineHeight: "3px",
} as const;
