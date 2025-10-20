import { Box, Typography } from "@mui/material";

const SolutionTitleHeader = ({
  color,
  title,
}: {
  color: string;
  title: string;
}) => {
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
    </Box>
  );
};

export default SolutionTitleHeader;
