import { Box, Typography } from "@mui/material";
import type { ElementType } from "react";
import { FONTS } from "../../theme/theme";

interface NumberedSectionTitleProps {
  /** 섹션 번호 (1부터) */
  number: number;
  /** 섹션 제목 */
  text: string;
  /** 제목 태그 (기본 h2) */
  titleComponent?: ElementType;
}

/**
 * 번호 배지형 섹션 제목 (iSuite 등).
 * 바 오른쪽 끝에 번호가 담긴 glassy 원형이 겹쳐지는 구성.
 * 기존 SectionTitle(단색 pill + 텍스트)과는 별개 디자인.
 */
const NumberedSectionTitle = ({
  number,
  text,
  titleComponent = "h2",
}: NumberedSectionTitleProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      {/* 번호 배지: 그라데이션 바 + 겹쳐진 glassy 원형 */}
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        {/* 바 */}
        <Box
          sx={{
            width: "86px",
            height: "22px",
            borderRadius: "20px",
            backgroundColor: "#0058D0",
          }}
        />
        {/* glassy 원형 (바 오른쪽 끝에 겹침) */}
        <Box
          sx={(theme) => ({
            position: "relative",
            zIndex: 1,
            ml: "-20px",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // 리퀴드 글래스: 뒤의 바/배경을 블러 + 광택 인셋
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            border: "1px solid rgba(255, 255, 255, 0.6)",
            boxShadow: [
              "0 4px 10px rgba(0, 0, 0, 0.15)",
              "inset -1.5px 1.5px 3px rgba(255, 255, 255, 0.9)",
              "inset 1.5px -1.5px 4px rgba(0, 60, 150, 0.15)",
            ].join(", "),
            [theme.breakpoints.up("desktop")]: {
              ml: "-30px",
              width: "72px",
              height: "72px",
            },
          })}
        >
          <Typography
            component="span"
            sx={(theme) => ({
              fontFamily: FONTS.freesentation.extraBold,
              color: "#0058D0",
              fontSize: "20px",
              lineHeight: 1,
              [theme.breakpoints.up("desktop")]: {
                fontSize: "30px",
              },
            })}
          >
            {number}
          </Typography>
        </Box>
      </Box>

      {/* 제목 */}
      <Typography
        component={titleComponent}
        sx={(theme) => ({
          fontFamily: FONTS.freesentation.bold,
          color: "#0058D0",
          fontSize: "20px",
          lineHeight: 1.3,
          wordBreak: "keep-all",
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

export default NumberedSectionTitle;
