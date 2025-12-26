import { Box, Divider, Typography } from "@mui/material";
import type { ImageBannerProps } from "../../types/product";

const ImageBanner2 = ({ imgUrl, title, subtitle }: ImageBannerProps) => {
  return (
    <Box component="header" sx={{ position: "relative" }}>
      {/** 그라데이션이 적용된 이미지 */}
      <Box
        component="img"
        src={imgUrl}
        sx={{
          width: "100%",
          maskImage: "linear-gradient(to top, #ffffff 80%,transparent 100%)",
        }}
      />
      {/** 이미지 위에 표시되는 문구 */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          boxSizing: "border-box",
          px: "20%",
          bottom: "2rem",
        }}
      >
        <Typography
          sx={(theme) => ({
            color: "#ffffff",
            ...theme.typography.productImageBannerTitleFont,
            letterSpacing: 5,
            // iPad 세로 모드(tablet portrait)에서는 tablet 크기로 강제 적용
            [`${theme.breakpoints.between(
              "mobileLandscape",
              "tablet"
            )} and (orientation: portrait)`]: {
              fontSize: "44px", // tablet 사이즈로 오버라이드
            },
          })}
        >
          {title}
        </Typography>
        <Divider
          sx={{ width: "100%", height: "1px", backgroundColor: "#ffffff" }}
        />
        <Typography
          sx={(theme) => ({
            color: "#ffffff",
            pt: 1,
            ...theme.typography.productImageBannerSubtitleFont,
          })}
        >
          {subtitle}
        </Typography>
      </Box>
      {/* <Box
        sx={{
          position: "absolute",
          display: "flex",
          bottom: 0,
          overflow: "hidden",
          px: "20%",
          gap: 2,
        }}
      >
        <Box
          sx={{ px: 6, py: 3, cursor: "pointer", backgroundColor: "#ffffff21" }}
        >
          개요
        </Box>
        <Box sx={{ px: 6, py: 3, cursor: "pointer" }}>특징</Box>
        <Box sx={{ px: 6, py: 3, cursor: "pointer" }}>라이브러리</Box>
      </Box> */}
    </Box>
  );
};

export default ImageBanner2;
