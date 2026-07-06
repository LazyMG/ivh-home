import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FONTS } from "../../theme/theme";

/**
 * pill(직사각형) 왼쪽 변이 화면 왼쪽 끝에 붙고 오른쪽 변에만 radius가 들어가는 섹션 제목.
 * Training 페이지의 부모 px(모바일 5 / 태블릿 10 / 데스크탑 20)를 음수 마진으로 상쇄해
 * 화면 끝까지 뻗어나가는 형태이므로 해당 페이지 전용이다.
 */
const FullBleedSectionTitle = ({ text }: { text: string }) => {
  const { i18n } = useTranslation();
  // text에 국문이 유입될 수 있으므로 라틴 전용 Galderglynn 대신 Freesentation으로 전환
  const isKorean = i18n.language.startsWith("ko");

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        gap: 2,
        [theme.breakpoints.up("desktop")]: {
          gap: 4,
        },
      })}
    >
      <Box
        sx={(theme) => ({
          // 부모 px만큼 왼쪽으로 빼서 화면 왼쪽 끝에 붙임
          ml: -5,
          // 화면 끝(bleed) + 기존 pill 보이는 폭
          width: `calc(${theme.spacing(5)} + 8px)`,
          height: "14px",
          flexShrink: 0,
          backgroundColor: "#03193F",
          // 오른쪽 변에만 radius
          borderRadius: "0 20px 20px 0",
          [theme.breakpoints.up("tablet")]: {
            ml: 0,
            width: "88px",
            height: "24px",
            borderRadius: "20px",
          },
          // 데스크탑: full-bleed 해제, 일반 SectionTitle처럼 표시
          [theme.breakpoints.up("desktop")]: {
            ml: 0,
            width: "88px",
            borderRadius: "20px",
          },
        })}
      />
      <Typography
        sx={(theme) => ({
          fontSize: "18px",
          fontFamily: isKorean
            ? FONTS.freesentation.bold
            : FONTS.galderglynn.regular,
          color: "#03193F",
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

export default FullBleedSectionTitle;
