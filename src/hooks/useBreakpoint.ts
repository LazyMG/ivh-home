import { useMediaQuery } from "@mui/material";
import { mediaQueries } from "../types/theme";

export const useBreakpoint = () => {
  // Portrait (세로)
  // Landscape (가로)
  const isMobilePortrait = useMediaQuery(mediaQueries.mobilePortrait); // 0~480px
  const isMobileLandscape = useMediaQuery(mediaQueries.mobileLandscape); // 481~768px
  const isTablet = useMediaQuery(mediaQueries.tablet); // 769~1279px
  const isDesktop = useMediaQuery(mediaQueries.desktop); // 1280px~

  const isMobile = useMediaQuery(mediaQueries.mobile); // 0~768px

  // Orientation 조합
  const isPhonePortrait = useMediaQuery(mediaQueries.phonePortrait);
  const isPhoneLandscape = useMediaQuery(mediaQueries.phoneLandscape);
  const isTabletPortrait = useMediaQuery(mediaQueries.tabletPortrait);
  const isTabletLandscape = useMediaQuery(mediaQueries.tabletLandscape);

  return {
    // 기본 (화면 크기)
    isMobilePortrait, // 0~480px
    isMobileLandscape, // 481~768px
    isTablet, // 769~1279px
    isDesktop, // 1280px~

    // 편의
    isMobile, // 0~768px

    // Orientation 조합
    isPhonePortrait, // 작은 화면 + 세로
    isPhoneLandscape, // 작은 화면 + 가로
    isTabletPortrait, // 중간 화면 + 세로
    isTabletLandscape, // 큰 화면 + 가로
  } as const;
};
