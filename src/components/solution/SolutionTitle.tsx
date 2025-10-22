import type { ContentProps } from "../../types/solution";
import { Box, Typography } from "@mui/material";
import BreadScrum from "./BreadScrum";

const SolutionTitle = ({
  contentProps,
  isMobile,
}: {
  contentProps: ContentProps;
  isMobile?: boolean;
}) => {
  const { title, subtitle, color, subColor } = contentProps;
  return (
    <>
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
        {isMobile && <BreadScrum title={title} />}
        <Box
          sx={{
            background: `linear-gradient(rgba(${subColor}, 0.36), #ffffff)`,
            mt: 3,
            py: 3,
            borderTop: `1px solid ${color}`,
          }}
        >
          <Typography
            // variant="subtitle1"
            variant="solutionSubTitleFont"
            component="p"
            color={"#3b4551"}
            sx={{
              whiteSpace: "pre-wrap",
            }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SolutionTitle;
