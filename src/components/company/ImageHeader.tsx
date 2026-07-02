import { Box, useTheme } from "@mui/material";

const ImageHeader = ({
  imgUrl,
  mobileImgUrl,
  imgPosition,
}: {
  imgUrl: string;
  mobileImgUrl: string;
  imgPosition: string;
}) => {
  const theme = useTheme();
  const tabletUp = `(min-width:${theme.breakpoints.values.tablet}px)`;

  return (
    <Box component="picture" sx={{ display: "block" }}>
      {/* 태블릿↑: 데스크탑 이미지 / 그 외: 모바일 전용 이미지 */}
      <source media={tabletUp} srcSet={imgUrl} />
      <Box
        component="img"
        src={mobileImgUrl}
        alt=""
        sx={(theme) => ({
          display: "block",
          width: "100%",
          // 모바일: 원본 비율 그대로 전체 표시 (잘림 없음)
          height: "auto",
          [theme.breakpoints.up("tablet")]: {
            // 태블릿↑: 기존과 동일하게 288px 고정 + cover
            height: "288px",
            objectFit: "cover",
            objectPosition: imgPosition,
          },
        })}
      />
    </Box>
  );
};

export default ImageHeader;
