import type { ContentProps } from "../../types/solution";
import { Box, Typography } from "@mui/material";
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
  const { title, subtitle, color } = contentProps;

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
          sx={{
            color,
            letterSpacing: "2px",
            fontSize: "30px",
            fontFamily: "Freesentation-7-Bold",
          }}
        >
          {title}
        </Typography>
      </Box>
      {isMobile && pageKey && <BreadScrum pageKey={pageKey} />}
      <Box
        sx={{
          backgroundColor: color,
          mt: 3,
          py: 1,
          px: 3,
        }}
      >
        <Typography
          // aIInnovationHub 페이지는 더 작은 폰트 스타일 적용
          variant={"solutionSubTitleFont"}
          component="p"
          color="#fff"
          sx={{
            fontSize: "18px",
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default SolutionTitle;
