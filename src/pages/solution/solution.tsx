import { Box } from "@mui/material";
// import { useBreakpoint } from "../../hooks/useBreakpoint";

import solution from "../../data/solution/solution.json";
import SolutionMainBox from "../../components/solution/SolutionMainBox";

const Solution = () => {
  // const { isMobile } = useBreakpoint();

  const { solution_box, solution_main_image } = solution;

  return (
    <Box
      component="main"
      sx={(theme) => ({
        display: "flex",
        gap: 8,
        boxSizing: "border-box",
        mx: 2,
        my: 4,
        [theme.breakpoints.up("tablet")]: {
          mx: 8,
          my: 10,
          height: "100vh",
        },
        [theme.breakpoints.up("desktop")]: {
          mx: 24,
          my: 5,
          height: "100%",
        },
      })}
    >
      <Box
        sx={(theme) => ({
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gridTemplateRows: "repeat(4,1fr)",
          columnGap: 2,
          rowGap: 4,
          width: "100%",
          [theme.breakpoints.up("tablet")]: {
            gridTemplateColumns: "repeat(3,1fr)",
            gridTemplateRows: "repeat(5,1fr)",
            columnGap: 3,
            rowGap: 4,
          },
          [theme.breakpoints.up("desktop")]: {
            gridTemplateColumns: "repeat(5,1fr)",
            gridTemplateRows: "repeat(3,1fr)",
          },
        })}
      >
        {solution_box.map((box, index) => (
          <SolutionMainBox key={index} {...box} />
        ))}

        {/* 이미지: 1~3행, 2~4열 */}
        <Box
          component="img"
          src={solution_main_image}
          sx={(theme) => ({
            gridColumn: "1 / 4",
            gridRow: "1 / 3",
            width: "100%",
            height: "auto",
            maxHeight: "100%",
            objectFit: "contain",
            alignSelf: "start",
            justifySelf: "center",
            [theme.breakpoints.up("tablet")]: {
              gridColumn: "1 / 4",
              gridRow: "1 / 6",
            },
            [theme.breakpoints.up("desktop")]: {
              gridColumn: "2 / 5",
              gridRow: "1 / 4",
            },
          })}
        />
      </Box>
    </Box>
  );
};

export default Solution;
