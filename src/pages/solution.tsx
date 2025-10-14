import { Box, Typography } from "@mui/material";
import solutionImage from "/images/pages/solution/solution_main.png";
import Header from "../common/Header";
import RowNav from "../components/solution/RowNav";

const Solution = () => {
  return (
    <>
      <Header />
      <Typography
        sx={{
          fontFamily: "Freesentation-8-ExtraBold",
          fontSize: {
            xs: "40.4px",
            sm: "66.56px",
            md: "62.5px",
          },
          ml: "64px",
        }}
      >
        Solution
      </Typography>

      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          p: " 12px 64px",
          m: "auto auto",
          width: {
            xs: "200px",
            md: "500px",
            lg: "800px",
            xl: "1200px",
          },
          height: {
            xs: "200px",
            md: "300px",
            lg: "400px",
            xl: "700px",
          },
          alignSelf: "center",
        }}
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
      <RowNav />
    </>
  );
};

export default Solution;
