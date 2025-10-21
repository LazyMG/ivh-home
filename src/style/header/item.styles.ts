import { styled, Typography } from "@mui/material";
import type { MenuItemStyleProps } from "../../types/header";
import { headerFonts } from "../../theme/headerTheme";
import { getMenuItemColor } from "../../utils/headerStyleHelpers";

// 서브 메뉴 아이템
export const SubMenuItem = styled(Typography)<MenuItemStyleProps>(
  ({ disabled = false, $isHomePage = false }) => ({
    color: getMenuItemColor(disabled, $isHomePage),
    fontSize: "14px",
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
