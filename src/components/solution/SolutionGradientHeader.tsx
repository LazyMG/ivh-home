import { Box, Typography } from "@mui/material";

const GradientHeader = ({
  color,
  subColor,
  subtitle,
}: {
  color: string;
  subColor: string;
  subtitle: string;
}) => {
  return (
    <Box
      sx={{
        background: `linear-gradient(rgba(${subColor}, 0.36), #ffffff)`,
        py: 3,
        borderTop: `1px solid ${color}`,
      }}
    >
      <Typography
        variant="solutionSubTitleFont"
        component="p"
        color={"#3b4551"}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default GradientHeader;
