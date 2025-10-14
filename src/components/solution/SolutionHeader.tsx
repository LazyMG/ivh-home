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
            variant="h1"
            sx={{
              fontFamily: "Freesentation-8-ExtraBold",
              fontSize: {
                xs: "23px",
                sm: "37.73px",
                md: "35.4px",
              },
              fontWeight: "bold",
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
            py: 1.5,
            borderTop: `1px solid ${color}`,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "Freesentation-6-SemiBold",
              fontSize: {
                xs: "18.8px",
                sm: "31.6px",
                md: "29.2px",
              },
              fontWeight: "bold",
            }}
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
