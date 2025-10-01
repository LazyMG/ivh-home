import type { ContentProps } from "../../types/solution";
import { Box, Typography } from "@mui/material";

const SolutionHeader = (contentProps: ContentProps) => {
  const { title, subtitle, color } = contentProps;
  return (
    <>
      <Box component="header">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            borderBottom: `1px solid ${color}`,
            mb: 1.5,
            pb: 1.5,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Freesentation-8-ExtraBold",
              fontSize: "23px",
              fontWeight: "bold",
              color,
              letterSpacing: "4px",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "Freesentation-6-SemiBold",
              fontSize: "19px",
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
