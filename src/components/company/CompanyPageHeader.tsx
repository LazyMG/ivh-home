import { Box } from "@mui/material";
import ImageHeader from "./ImageHeader";
import BreadScrum from "../../common/BreadScrum";

interface CompanyPageHeaderProps {
  imgUrl: string;
  /** 모바일 전용 헤더 이미지 (태블릿↑은 imgUrl 사용) */
  mobileImgUrl: string;
  imgPosition: string;
  pageKey: string;
  /** breadcrumb 우측 여백 (페이지별 미세 조정용) */
  breadcrumbRight?: string | number;
  /** 이미지 위에 겹칠 그라데이션 오버레이 (예: History) */
  overlayGradient?: string;
}

/**
 * company 페이지 공통 상단 레이아웃.
 * 헤더 이미지 위에 breadcrumb을 우측 하단에 겹쳐 배치한다.
 * 이미지는 모바일에서도 최상단에 노출하며, breadcrumb은 모바일 시안에 없어 숨긴다.
 */
const CompanyPageHeader = ({
  imgUrl,
  mobileImgUrl,
  imgPosition,
  pageKey,
  breadcrumbRight = "8%",
  overlayGradient,
}: CompanyPageHeaderProps) => {
  return (
    <Box
      sx={{
        // 모바일: 좌우 여백 없이 전체 너비 이미지
        position: "relative",
      }}
    >
      <ImageHeader
        imgUrl={imgUrl}
        mobileImgUrl={mobileImgUrl}
        imgPosition={imgPosition}
      />
      {overlayGradient && (
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            background: overlayGradient,
            pointerEvents: "none",
          }}
        />
      )}
      <BreadScrum
        pageKey={pageKey}
        sx={(theme) => ({
          position: "absolute",
          right: breadcrumbRight,
          mt: 2,
          // 모바일 시안에는 브레드스크럼 없음 → 태블릿부터 표시
          display: "none",
          [theme.breakpoints.up("tablet")]: {
            display: "flex",
          },
        })}
      />
    </Box>
  );
};

export default CompanyPageHeader;
