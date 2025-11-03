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

      // Contact 페이지 스타일
      contactMainContainer: SxProps<MuiTheme>;
      contactTopContainer: SxProps<MuiTheme>;
      contactTitleContainer: SxProps<MuiTheme>;
      contactProductsLink: SxProps<MuiTheme>;
      contactFormContainer: SxProps<MuiTheme>;
      contactFormGrid: SxProps<MuiTheme>;
      contactFormField: React.CSSProperties;
      contactFormFullWidthField: SxProps<MuiTheme>;
      contactCheckboxContainer: SxProps<MuiTheme>;
      contactButton: SxProps<MuiTheme>;
      contactformControlLabel: React.CSSProperties;
      contactMapContainer: SxProps<MuiTheme>;
      productPageContainer: React.CSSProperties;

      supportContainer: SxProps<MuiTheme>;
      supportTextContainer: SxProps<MuiTheme>;
      supportImageContainer: SxProps<MuiTheme>;
      supportLink: SxProps<MuiTheme>;

      // Newsletter 리스트 스타일
      newsletterListContainer: SxProps<MuiTheme>;
      newsletterItem: SxProps<MuiTheme>;
      newsletterItemImage: SxProps<MuiTheme>;
      newsletterItemContent: SxProps<MuiTheme>;
      homeNewsletterContainer: SxProps<MuiTheme>;
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

      // Contact 페이지 스타일
      contactMainContainer?: SxProps<MuiTheme>;
      contactTopContainer?: SxProps<MuiTheme>;
      contactTitleContainer?: SxProps<MuiTheme>;
      contactProductsLink?: SxProps<MuiTheme>;
      contactFormContainer?: SxProps<MuiTheme>;
      contactFormGrid?: SxProps<MuiTheme>;
      contactFormField?: React.CSSProperties;
      contactFormFullWidthField?: SxProps<MuiTheme>;
      contactCheckboxContainer?: SxProps<MuiTheme>;
      contactButton?: SxProps<MuiTheme>;
      contactformControlLabel?: React.CSSProperties;
      contactMapContainer?: SxProps<MuiTheme>;
      productPageContainer?: React.CSSProperties;

      supportContainer?: SxProps<MuiTheme>;
      supportTextContainer?: SxProps<MuiTheme>;
      supportImageContainer?: SxProps<MuiTheme>;
      supportLink?: SxProps<MuiTheme>;

      // Newsletter 리스트 스타일
      newsletterListContainer?: SxProps<MuiTheme>;
      newsletterItem?: SxProps<MuiTheme>;
      newsletterItemImage?: SxProps<MuiTheme>;
      newsletterItemContent?: SxProps<MuiTheme>;
      homeNewsletterContainer?: SxProps<MuiTheme>;
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
    contactTitleFont: React.CSSProperties;
    contactProductsLinkFont: React.CSSProperties;
    supportTitleFont: React.CSSProperties;
    supportTextFont: React.CSSProperties;
    newsletterItemTitleFont: React.CSSProperties;
    newsletterItemContentFont: React.CSSProperties;
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
    contactTitleFont?: React.CSSProperties;
    contactProductsLinkFont?: React.CSSProperties;
    supportTitleFont?: React.CSSProperties;
    supportTextFont?: React.CSSProperties;
    newsletterItemTitleFont?: React.CSSProperties;
    newsletterItemContentFont?: React.CSSProperties;
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
    contactTitleFont: true;
    contactProductsLinkFont: true;
    supportTitleFont: true;
    supportTextFont: true;
    newsletterItemTitleFont: true;
    newsletterItemContentFont: true;
  }
}
