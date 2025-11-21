import { styled, Box } from "@mui/material";
import type { ColumnStyleProps } from "../../types/header";
import { getHeaderTheme, headerLayout } from "../../theme/headerTheme";
import { getColumnWidth, getColumnFlex } from "../../utils/headerStyleHelpers";

// 메인 메뉴 컬럼
export const MenuColumn = styled(Box, {
  // 스타일 요소의 속성 중 $isLogoColumn, $isProductPage, $isHomePage 제외하고 DOM에 전달
  shouldForwardProp: (prop) =>
    prop !== "$isLogoColumn" &&
    prop !== "$isProductPage" &&
    prop !== "$isHomePage" &&
    prop !== "$isActive",
})<ColumnStyleProps>(
  ({
    $isProductPage,
    $isLogoColumn,
    $isHomePage = false,
    $isActive = false,
  }) => {
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

      // 삼각형 화살표
      "&::before": {
        content: '""',
        position: "absolute",
        bottom: headerLayout.hoverLineHeight,
        left: "50%",
        transform: "translateX(-50%)",
        width: 0,
        height: 0,
        borderLeft: "8px solid transparent",
        borderRight: "8px solid transparent",
        borderBottom: `8px solid ${theme.hoverLine}`,
        opacity: $isActive && !$isLogoColumn ? 1 : 0,
        transition: "opacity 0.3s ease",
        zIndex: 2,
      },

      "&:hover::before": {
        opacity: $isLogoColumn ? 0 : 1,
      },

      "&::after": {
        content: '""',
        position: "absolute",
        bottom: "0px",
        left: 0,
        right: 0,
        height: headerLayout.hoverLineHeight,
        backgroundColor:
          $isActive && !$isLogoColumn
            ? theme.hoverLine // 클릭된 상태에도 밑줄 유지
            : "transparent",
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
export const SubMenuColumn = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "$isProductPage" && prop !== "$isLogoColumn",
})<ColumnStyleProps>(({ $isLogoColumn }) => {
  return {
    padding: headerLayout.padding,
    flex: getColumnFlex($isLogoColumn),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  };
});
