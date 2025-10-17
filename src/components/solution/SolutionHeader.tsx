import type { ContentProps } from "../../types/solution";
import { Box, Typography } from "@mui/material";

const SolutionHeader = (contentProps: ContentProps) => {
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
          >
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SolutionHeader;
