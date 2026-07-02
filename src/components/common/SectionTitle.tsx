import { Box, Typography } from "@mui/material";
import { FONTS } from "../../theme/theme";

const SectionTitle = ({
  text,
  align = "center",
}: {
  text: string;
  /** pill(디자인 요소) 세로 정렬. "top"이면 2줄 제목에서도 pill이 상단에 고정 */
  align?: "center" | "top";
}) => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        alignItems: align === "top" ? "flex-start" : "center",
        gap: 2,
        [theme.breakpoints.up("desktop")]: {
          gap: 4,
        },
      })}
    >
      <Box
        sx={(theme) => ({
          width: "32px",
          height: "14px",
          // flex 자식이라 shrink 기본값(1)이면 긴 제목에서 pill이 찌부러짐 → 고정
          flexShrink: 0,
          backgroundColor: "#03193F",
          borderRadius: "20px",
          // 상단 정렬 시 대문자 위 여백(ascender + line-height leading)만큼 pill을 내려 정렬
          ...(align === "top" && { mt: "4px" }),
          [theme.breakpoints.up("tablet")]: {
            width: "88px",
            height: "24px",
            ...(align === "top" && { mt: "5px" }),
          },
        })}
      />
      <Typography
        sx={(theme) => ({
          fontSize: "18px",
          fontFamily: FONTS.galderglynn.regular,
          color: "#03193F",
          // 상단 정렬 시 줄 간격 확보(pill mt로 정렬 보정)
          ...(align === "top" && { lineHeight: 1.2 }),
          [theme.breakpoints.up("tablet")]: {
            fontSize: "28px",
          },
        })}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
