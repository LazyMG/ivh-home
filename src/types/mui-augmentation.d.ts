import "@mui/material/styles";
import "@mui/material/Typography";
import type { SxProps, Theme as MuiTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    customStyles: {
      solutionMainContainer: React.CSSProperties;
      solutionMainImageContainer: React.CSSProperties;
      solutionMainImage: React.CSSProperties;
      solutionMainRowNav: SxProps<MuiTheme>;
      solutionMainRowNavContainer: SxProps<MuiTheme>;
      solutionMainRowNavItemContainer: SxProps<MuiTheme>;
      solutionMainRowNavItem: SxProps<MuiTheme>;

      productBranchPageOutline: React.CSSProperties;
      productStackComponent: React.CSSProperties;
    };
  }

  interface ThemeOptions {
    customStyles?: {
      solutionMainContainer?: React.CSSProperties;
      solutionMainImageContainer?: React.CSSProperties;
      solutionMainImage?: React.CSSProperties;
      solutionMainRowNav?: SxProps<MuiTheme>;
      solutionMainRowNavContainer?: SxProps<MuiTheme>;
      solutionMainRowNavItemContainer?: SxProps<MuiTheme>;
      solutionMainRowNavItem?: SxProps<MuiTheme>;

      productBranchPageOutline?: React.CSSProperties;
      productStackComponent?: React.CSSProperties;
    };
  }

  interface TypographyVariants {
    breadScrumFont: React.CSSProperties;

    solutionMainTitle: React.CSSProperties;
    solutionMainImage: React.CSSProperties;
    solutionMainNavFont: React.CSSProperties;
    solutionTitleFont: React.CSSProperties;
    solutionSubTitleFont: React.CSSProperties;
    solutionTextFont: React.CSSProperties;
    solutionTextTitleFont: React.CSSProperties;
    solutionBoxTitleFont: React.CSSProperties;
    productImageBannerTitleFont: React.CSSProperties;
    productImageBannerSubtitleFont: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    breadScrumFont?: React.CSSProperties;

    solutionMainTitle?: React.CSSProperties;
    solutionMainImage?: React.CSSProperties;
    solutionMainNavFont?: React.CSSProperties;
    solutionTitleFont?: React.CSSProperties;
    solutionSubTitleFont?: React.CSSProperties;
    solutionTextFont?: React.CSSProperties;
    solutionTextTitleFont?: React.CSSProperties;
    solutionBoxTitleFont?: React.CSSProperties;
    productImageBannerTitleFont?: React.CSSProperties;
    productImageBannerSubtitleFont?: React.CSSProperties;
  }

  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobilePortrait: true; // adds the `mobile` breakpoint
    mobileLandscape: true;
    tablet: true;
    desktop: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    breadScrumFont: true;
    solutionMainTitle: true;
    solutionMainImage: true;
    solutionMainNavFont: true;
    solutionTitleFont: true;
    solutionSubTitleFont: true;
    solutionTextFont: true;
    solutionTextTitleFont: true;
    solutionBoxTitleFont: true;
    productImageBannerTitleFont: true;
    productImageBannerSubtitleFont: true;
  }
}
