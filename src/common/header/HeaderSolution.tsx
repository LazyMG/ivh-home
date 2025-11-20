import { Box } from "@mui/material";

import SolutionIslandButtons from "../../components/solution/SolutionIslandButtons";
import SolutionIslandImage from "../../components/solution/SolutionIslandImage";

const HeaderSolution = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "fit-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <SolutionIslandImage />
      </Box>
      {/* 버튼들을 이미지 위에 absolute로 배치 */}
      <SolutionIslandButtons />
    </Box>
  );
};

export default HeaderSolution;
