import { styled, Typography } from "@mui/material";
import type { MenuItemStyleProps } from "../../types/header";
import { headerFonts } from "../../theme/headerTheme";
import { getMenuItemColor } from "../../utils/headerStyleHelpers";

// 서브 메뉴 아이템
export const SubMenuItem = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== "$isHomePage" && prop !== "$deps" && prop !== "disabled",
})<MenuItemStyleProps>(
  ({ disabled = false, $isHomePage = false, $deps = 0 }) => ({
    color: getMenuItemColor(disabled, $isHomePage),
    fontSize: "14px",
    marginLeft: $deps === 2 ? "4px" : 0,
    marginBottom: "8px",
    cursor: "pointer",
    fontFamily: headerFonts.regular,
    transition: "opacity 0.2s ease",
    "&:hover": {
      opacity: 0.7,
      transform: "translateX(2px)",
      transition: "transform 0.2s ease",
    },
  })
);
