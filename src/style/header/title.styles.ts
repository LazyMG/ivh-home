import { styled, Typography } from "@mui/material";
import type { MenuTitleStyleProps } from "../../types/header";
import { getHeaderTheme, headerFonts } from "../../theme/headerTheme";

// 메인 메뉴 타이틀
export const MenuTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "$isHomePage",
})<MenuTitleStyleProps>(({ $isHomePage = false }) => {
  const theme = getHeaderTheme($isHomePage);

  return {
    color: theme.text,
    fontSize: "19px",
    fontWeight: "bold",
    fontFamily: headerFonts.bold,
    textAlign: "center",
    cursor: "pointer",
    position: "relative",
    paddingBottom: "8px",
  };
});

// 서브 메뉴 타이틀
export const SubMenuTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "$isHomePage",
})<MenuTitleStyleProps>(({ $isHomePage = false }) => {
  const theme = getHeaderTheme($isHomePage);

  return {
    color: theme.text,
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "12px",
    marginTop: "16px",
    fontFamily: headerFonts.semiBold,
    "&:first-of-type": {
      marginTop: 0,
    },
  };
});
