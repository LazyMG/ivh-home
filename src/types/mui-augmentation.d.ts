import "@mui/material/styles";
import "@mui/material/Typography";

declare module "@mui/material/styles" {
  interface Theme {
    customStyles: {
      solutionMainImage: React.CSSProperties;
      solutionMainRowNav: React.CSSProperties;
      solutionMainRowNavContainer: React.CSSProperties;
      solutionMainRowNavItem: React.CSSProperties;
    };
  }

  interface ThemeOptions {
    customStyles?: {
      solutionMainImage?: React.CSSProperties;
      solutionMainRowNav?: React.CSSProperties;
      solutionMainRowNavContainer?: React.CSSProperties;
      solutionMainRowNavItem?: React.CSSProperties;
    };
  }

  interface TypographyVariants {
    solutionMainTitle: React.CSSProperties;
    solutionMainImage: React.CSSProperties;
    solutionMainNavFont: React.CSSProperties;
    solutionTitleFont: React.CSSProperties;
    solutionSubTitleFont: React.CSSProperties;
    solutionTextFont: React.CSSProperties;
    solutionTextTitleFont: React.CSSProperties;
    solutionBoxTitleFont: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    solutionMainTitle?: React.CSSProperties;
    solutionMainImage?: React.CSSProperties;
    solutionMainNavFont?: React.CSSProperties;
    solutionTitleFont?: React.CSSProperties;
    solutionSubTitleFont?: React.CSSProperties;
    solutionTextFont?: React.CSSProperties;
    solutionTextTitleFont?: React.CSSProperties;
    solutionBoxTitleFont?: React.CSSProperties;
  }

  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    solutionMainTitle: true;
    solutionMainImage: true;
    solutionMainNavFont: true;
    solutionTitleFont: true;
    solutionSubTitleFont: true;
    solutionTextFont: true;
    solutionTextTitleFont: true;
    solutionBoxTitleFont: true;
  }
}
