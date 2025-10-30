import { Box, Divider, Typography } from "@mui/material";
import type { ImageBannerProps } from "../../types/product";

const ImageBanner = ({ imgUrl, title, subtitle }: ImageBannerProps) => {
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
        sx={(theme) => ({
          position: "absolute",
          width: "100%",
          boxSizing: "border-box",
          px: 4,
          bottom: "3rem",
          [theme.breakpoints.up("tablet")]: {
            px: 10,
          },
          [theme.breakpoints.up("desktop")]: {
            px: 20,
            bottom: "6rem",
          },
        })}
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
    </Box>
  );
};

export default ImageBanner;
