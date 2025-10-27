import { Box, Typography } from "@mui/material";
import solutionImage from "/images/pages/solution/solution_main.png";
import solutionImageMobile from "/images/pages/solution/solution_mobile.png";
import RowNav from "../components/solution/RowNav";
import { useIsMobile } from "../hooks/useIsMobile";

const Solution = () => {
  const isMobile = useIsMobile();

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
            my: "auto",
            alignItems: "center",
            // flex: 1,
            // width: "100%",
            objectFit: "cover",
            justifyContent: "center",
          })}
        >
          <img
            src={isMobile ? solutionImageMobile : solutionImage}
            alt="solution"
            style={{
              maxWidth: "90%",
              maxHeight: "80%",
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
