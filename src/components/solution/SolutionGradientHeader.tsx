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
      sx={(theme) => ({
        background: `linear-gradient(rgba(${subColor}, 0.36), #ffffff)`,
        py: 3,
        borderTop: `1px solid ${color}`,
        mt: 9,
        [theme.breakpoints.up("laptop")]: {
          mt: 0,
        },
      })}
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
