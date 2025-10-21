import { Box, Typography } from "@mui/material";
import solutionImage from "/images/pages/solution/solution_main.png";
import RowNav from "../components/solution/RowNav";

const Solution = () => {
  return (
    <>
      <Typography
        variant="solutionMainTitle"
        component="p"
        sx={{
          ml: {
            xs: 6,
            lg: 8,
          },
        }}
      >
        SOLUTION
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="solutionMainTitle"
          component="p"
          sx={{
            ml: {
              xs: 6,
              lg: 8,
            },
          }}
        >
          SOLUTION
        </Typography>

        <Box
          component="main"
          sx={(theme) => ({
            ...theme.customStyles.solutionMainImage,
            display: "flex",
            flexDirection: "column",
            mx: "auto",
            width: "100%",
            alignItems: "center",
            flex: 1,
          })}
        >
          <img
            src={solutionImage}
            alt="solution"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>

      <RowNav />
    </>
  );
};

export default Solution;
