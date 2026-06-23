import { Box } from "@mui/material";
import ImageHeader from "./ImageHeader";
import BreadScrum from "../../common/BreadScrum";

interface CompanyPageHeaderProps {
  imgUrl: string;
  imgPosition: string;
  pageKey: string;
  /** breadcrumb 우측 여백 (페이지별 미세 조정용) */
  breadcrumbRight?: string | number;
}

/**
 * company 페이지 공통 상단 레이아웃.
 * 헤더 이미지 위에 breadcrumb을 우측 하단에 겹쳐 배치한다.
 * (모바일 미고려 — 태블릿↑에서만 노출)
 */
const CompanyPageHeader = ({
  imgUrl,
  imgPosition,
  pageKey,
  breadcrumbRight = "8%",
}: CompanyPageHeaderProps) => {
  return (
    <Box
      sx={(theme) => ({
        px: "20px",
        display: "none",
        [theme.breakpoints.up("tablet")]: {
          p: 0,
          display: "block",
        },
        position: "relative",
      })}
    >
      <ImageHeader imgUrl={imgUrl} imgPosition={imgPosition} />
      <BreadScrum
        pageKey={pageKey}
        sx={{ position: "absolute", right: breadcrumbRight, mt: 2 }}
      />
    </Box>
  );
};

export default CompanyPageHeader;
