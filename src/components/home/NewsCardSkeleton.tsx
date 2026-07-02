import { Box, Skeleton } from "@mui/material";

// Latest News 로딩 자리표시 카드 — 실제 NewsCard와 동일한 비율·간격으로 높이를 맞춘다.
const NewsCardSkeleton = () => {
  return (
    <Box sx={{ border: "1px solid #E5E5E5", borderRadius: "16px", p: 2 }}>
      {/* aspect-ratio 박스로 감싸 실제 카드 이미지와 동일한 높이 보장 */}
      <Box
        sx={{
          width: "100%",
          aspectRatio: "18 / 11",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </Box>
      <Box sx={{ my: 4, borderTop: "1px dashed #C9C9C9" }} />
      {/* 실제 NewsCard 텍스트 영역과 동일한 폰트 크기·간격으로 맞춰 높이 일치 */}
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 3, pb: 2, px: 3 }}
      >
        {/* 제목 2줄 (18px, lineHeight 1.4) */}
        <Box>
          <Skeleton
            variant="text"
            width="100%"
            sx={{ fontSize: "18px", lineHeight: 1.4 }}
          />
          <Skeleton
            variant="text"
            width="70%"
            sx={{ fontSize: "18px", lineHeight: 1.4 }}
          />
        </Box>
        {/* 날짜 (14px) */}
        <Skeleton variant="text" width="40%" sx={{ fontSize: "14px" }} />
      </Box>
    </Box>
  );
};

export default NewsCardSkeleton;
