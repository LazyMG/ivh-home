import { Box, Typography } from "@mui/material";

const Feature = ({ color }: { color: string }) => {
  return (
    <Box
      sx={{
        width: "fit-content",
        border: `2px solid ${color}`,
        px: 5,
        py: "2px",
        borderRadius: "24px",
        maskImage: "linear-gradient(to right, transparent 0%, white 50%)",
      }}
    >
      <Typography variant="solutionTextTitleFont">Features</Typography>
    </Box>
  );
};

export default Feature;
