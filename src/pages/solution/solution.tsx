import { Box, Typography } from "@mui/material";
import solutionImage from "/images/pages/solution/solution_main.png";
import solutionImageMobile from "/images/pages/solution/solution_mobile.png";
import RowNav from "../../components/solution/RowNav";
import { useBreakpoint } from "../../hooks/useBreakpoint";

const Solution = () => {
  const { isMobile } = useBreakpoint();

  return (
    <>
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          [theme.breakpoints.up("desktop")]: {
            mt: 0,
          },
        })}
      >
        <Typography
          variant="solutionMainTitle"
          component="p"
          sx={{
            ml: "36px",
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
            my: "auto",
            alignItems: "center",

            [theme.breakpoints.up("mobileLandscape")]: {
              maxWidth: "90%",
            },

            [theme.breakpoints.up("tablet")]: {
              maxWidth: "230%",
            },

            objectFit: "cover",
            justifyContent: "center",
          })}
        >
          <Box
            component="img"
            src={isMobile ? solutionImageMobile : solutionImage}
            alt="solution"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "80vh",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>

      <RowNav />
    </>
  );
};

export default Solution;
