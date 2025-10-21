import { headerLayout, headerColors } from "../theme/headerTheme";

export const getColumnWidth = (
  isLogoColumn?: boolean,
  isProductPage?: boolean
) => ({
  min: isLogoColumn
    ? headerLayout.logoMinWidth
    : isProductPage
    ? headerLayout.productMinWidth
    : headerLayout.menuMinWidth,
  max: isProductPage ? headerLayout.productMaxWidth : headerLayout.menuMaxWidth,
});

export const getColumnFlex = (isLogoColumn?: boolean) =>
  isLogoColumn ? headerLayout.logoFlex : headerLayout.menuFlex;

export const getMenuItemColor = (disabled: boolean, isHomePage: boolean) => {
  const theme = isHomePage ? headerColors.home : headerColors.default;
  return disabled ? theme.submenu.disabled : theme.submenu.active;
};
