import { Box, Typography, useMediaQuery } from "@mui/material";
import solutionImage from "/images/pages/solution/solution_main.png";
import solutionImageMobile from "/images/pages/solution/solution_mobile.png";
import RowNav from "../components/solution/RowNav";

const Solution = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  return (
    <>
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          [theme.breakpoints.up("laptop")]: {
            mt: 0,
          },
        })}
      >
        <Typography
          variant="solutionMainTitle"
          component="p"
          sx={{
            ml: {
              xs: 4,
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
            alignItems: "center",
            flex: 1,
            width: "100%",
          })}
        >
          <img
            src={isMobile ? solutionImageMobile : solutionImage}
            alt="solution"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Box>

      <RowNav />
    </>
  );
};

export default Solution;
