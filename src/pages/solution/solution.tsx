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
      sx={{
        display: "flex",
        gap: 8,
        boxSizing: "border-box",
        mx: 24,
        my: 5,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gridTemplateRows: "repeat(3,1fr)",
          columnGap: 3,
          rowGap: 4,
          width: "100%",
        }}
      >
        {solution_box.map((box, index) => (
          <SolutionMainBox key={index} {...box} />
        ))}

        {/* 이미지: 1~3행, 2~4열 */}
        <Box
          component="img"
          src={solution_main_image}
          sx={{
            gridColumn: "2 / 5",
            gridRow: "1 / 4",
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
};

export default Solution;
