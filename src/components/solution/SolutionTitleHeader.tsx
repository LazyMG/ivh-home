import { Box, Typography } from "@mui/material";
import BreadScrum from "../../common/BreadScrum";
import type { ContentProps } from "../../types/solution";

const SolutionTitleHeader = ({
  contentProps,
  isMobile,
  pageKey,
}: {
  contentProps: ContentProps;
  isMobile?: boolean;
  pageKey?: string;
}) => {
  const { color, title } = contentProps;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        pb: 3,
        borderBottom: `2px solid ${color}`,
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
      {isMobile && pageKey && <BreadScrum pageKey={pageKey} />}
    </Box>
  );
};

export default SolutionTitleHeader;
