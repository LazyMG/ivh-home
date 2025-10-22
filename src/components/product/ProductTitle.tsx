import type { ContentProps } from "../../types/solution";
import { alpha, Box, Typography } from "@mui/material";

const ProductTitle = (contentProps: ContentProps) => {
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
            background: `linear-gradient(${alpha(subColor, 0.36)}, #ffffff)`,
            mt: 3,
            pt: 3,
            pb: 12,
            borderTop: `2px solid ${color}`,
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

export default ProductTitle;
