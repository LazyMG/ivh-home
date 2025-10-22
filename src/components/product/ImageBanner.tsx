import { Box, Divider, Typography } from "@mui/material";
import type { ImageBannerProps } from "../../types/product";

const ImageBanner = ({ imgUrl, title, subtitle }: ImageBannerProps) => {
  return (
    <Box sx={{ position: "relative" }}>
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
          [theme.breakpoints.up("laptop")]: {
            px: 20,
            bottom: "6rem",
          },
        })}
      >
        <Typography
          sx={{
            color: "#ffffff",
            fontSize: "53px",
            letterSpacing: 5,
            fontFamily: "Freesentation-8-ExtraBold",
          }}
        >
          {title}
        </Typography>
        <Divider
          sx={{ width: "100%", height: "1px", backgroundColor: "#ffffff" }}
        />
        <Typography
          sx={{
            color: "#ffffff",
            pt: 1,
            fontSize: "19px",
            fontFamily: "Freesentation-6-SemiBold",
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageBanner;
