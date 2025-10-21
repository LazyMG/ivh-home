import { styled, Box } from "@mui/material";
import type { ColumnStyleProps } from "../../types/header";
import { getHeaderTheme, headerLayout } from "../../theme/headerTheme";
import { getColumnWidth, getColumnFlex } from "../../utils/headerStyleHelpers";

// 메인 메뉴 컬럼
export const MenuColumn = styled(Box)<ColumnStyleProps>(
  ({ $isProductPage, $isLogoColumn, $isHomePage = false }) => {
    const theme = getHeaderTheme($isHomePage);
    const { min, max } = getColumnWidth($isLogoColumn, $isProductPage);

    return {
      color: theme.text,
      padding: headerLayout.padding,
      flex: getColumnFlex($isLogoColumn),
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      minWidth: min,
      maxWidth: max,
      position: "relative",

      "&::after": {
        content: '""',
        position: "absolute",
        bottom: "0px",
        left: 0,
        right: 0,
        height: headerLayout.hoverLineHeight,
        backgroundColor: "transparent",
        transition: "background-color 0.3s ease",
        zIndex: 1,
      },

      "&:hover::after": {
        backgroundColor: $isLogoColumn ? "transparent" : theme.hoverLine,
      },
    };
  }
);

// 서브 메뉴 컬럼
export const SubMenuColumn = styled(Box)<ColumnStyleProps>(
  ({ $isProductPage, $isLogoColumn }) => {
    const { min, max } = getColumnWidth($isLogoColumn, $isProductPage);

    return {
      padding: headerLayout.padding,
      flex: getColumnFlex($isLogoColumn),
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      minWidth: min,
      maxWidth: max,
    };
  }
);
