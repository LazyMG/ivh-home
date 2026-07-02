import { Box } from "@mui/material";
import { FONTS } from "../../theme/theme";

// iVH 링크드인 회사 페이지 (뉴스 전체 보기 대상)
const ALL_NEWS_URL =
  "https://kr.linkedin.com/company/ivhkr?trk=public_post_feed-actor-image";

// "뉴스 모두 보기" 버튼 (우측 정렬). 화살표는 mask로 텍스트 색상·크기를 따라간다.
const ViewAllNewsButton = () => {
  return (
    <Box sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
      <Box
        component="button"
        onClick={() => window.open(ALL_NEWS_URL)}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 1,
          background: "none",
          border: "none",
          p: 0,
          cursor: "pointer",
          color: "#424242",
          fontFamily: FONTS.freesentation.medium,
          fontSize: "16px",
        }}
      >
        뉴스 모두 보기
        <Box
          component="span"
          sx={{
            width: "1em",
            height: "1em",
            backgroundColor: "currentColor",
            WebkitMaskImage: "url(/images/utils/right_arrow.png)",
            maskImage: "url(/images/utils/right_arrow.png)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
          }}
        />
      </Box>
    </Box>
  );
};

export default ViewAllNewsButton;
