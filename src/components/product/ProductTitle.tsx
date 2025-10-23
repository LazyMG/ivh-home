import type { ContentProps } from "../../types/solution";
import { alpha, Box, Typography } from "@mui/material";
import BreadScrum from "../solution/BreadScrum";

const ProductTitle = ({
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
          sx={(theme) => ({
            background: `linear-gradient(${alpha(subColor, 0.36)}, #ffffff)`,
            mt: 3,
            pt: 3,
            borderTop: `2px solid ${color}`,
            pb: 8,
            [theme.breakpoints.up("tablet")]: {
              pb: 12,
            },
          })}
        >
          <Typography
            // variant="subtitle1"
            variant="solutionSubTitleFont"
            component="p"
            color={"#3b4551"}
            sx={{
              whiteSpace: "pre-wrap",
              wordBreak: "keep-all",
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
