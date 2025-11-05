import type { ContentProps } from "../../types/solution";
import { alpha, Box, Typography } from "@mui/material";
import BreadScrum from "../../common/BreadScrum";

const SolutionTitle = ({
  contentProps,
  isMobile,
  pageKey,
}: {
  contentProps: ContentProps;
  isMobile?: boolean;
  pageKey?: string;
}) => {
  const { title, subtitle, color, subColor } = contentProps;

  return (
    <Box component="header">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="solutionTitleFont"
          sx={{
            color,
            letterSpacing: "6.4px",
          }}
        >
          {title}
        </Typography>
      </Box>
      {isMobile && pageKey && <BreadScrum pageKey={pageKey} />}
      <Box
        sx={{
          background: `linear-gradient(${alpha(subColor, 0.36)}, #ffffff)`,
          mt: 3,
          py: 3,
          borderTop: `1px solid ${color}`,
        }}
      >
        <Typography
          // aIInnovationHub 페이지는 더 작은 폰트 스타일 적용
          variant={"solutionSubTitleFont"}
          component="p"
          color={"#3b4551"}
          sx={(theme) => ({
            whiteSpace: "pre-wrap",
            ...(pageKey === "alinnovationhub" && {
              [theme.breakpoints.up("mobilePortrait")]: {
                fontSize: "13px",
              },
              [theme.breakpoints.up("mobileLandscape")]: {
                fontSize: "16px",
              },
              [theme.breakpoints.up("tablet")]: {
                fontSize: "18px",
              },
              [theme.breakpoints.up("desktop")]: {
                fontSize: "24px",
              },
            }),
          })}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default SolutionTitle;
