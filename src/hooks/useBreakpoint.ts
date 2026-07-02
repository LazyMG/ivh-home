import { useMediaQuery } from "@mui/material";
import { useMemo } from "react";
import { mediaQueries } from "../theme/theme";

export const useBreakpoint = () => {
  // 실제 matchMedia 구독은 4개만 (크기 경계 3 + 방향 1).
  // 나머지 값은 아래에서 파생 — 구독 추가 없음.
  const upMobileLandscape = useMediaQuery(mediaQueries.upMobileLandscape); // >=481px
  const upTablet = useMediaQuery(mediaQueries.upTablet); // >=846px
  const upDesktop = useMediaQuery(mediaQueries.upDesktop); // >=1280px
  const isPortrait = useMediaQuery(mediaQueries.portrait);

  return useMemo(() => {
    // 기본 (화면 크기) — between(a,b)는 up(a) && max-width(b-0.05)와 동일 범위
    const isMobilePortrait = !upMobileLandscape; // 0~480px
    const isMobileLandscape = upMobileLandscape && !upTablet; // 481~845px
    const isTablet = upTablet && !upDesktop; // 846~1279px
    const isDesktop = upDesktop; // 1280px~
    const isMobile = !upTablet; // 0~845px

    return {
      // 기본 (화면 크기)
      isMobilePortrait, // 0~480px
      isMobileLandscape, // 481~845px
      isTablet, // 846~1279px
      isDesktop, // 1280px~

      // 편의
      isMobile, // 0~845px

      // Orientation 조합 (크기 + 방향 파생)
      isPhonePortrait: isMobilePortrait && isPortrait, // 작은 화면 + 세로
      isPhoneLandscape: isMobile && !isPortrait, // 작은 화면 + 가로
      isTabletPortrait: isMobileLandscape && isPortrait, // 중간 화면 + 세로
      isTabletLandscape: isTablet && !isPortrait, // 큰 화면 + 가로
    } as const;
  }, [upMobileLandscape, upTablet, upDesktop, isPortrait]);
};
