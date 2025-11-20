import { Box } from "@mui/material";
import RowNav from "../../components/solution/RowNav";
import { useBreakpoint } from "../../hooks/useBreakpoint";

import SolutionIslandButtons from "../../components/solution/SolutionIslandButtons";
import SolutionIslandImage from "../../components/solution/SolutionIslandImage";

const Solution = () => {
  const { isMobile } = useBreakpoint();

  return (
    <Box
      component="main"
      sx={(theme) => ({
        ...theme.customStyles.solutionMainContainer,
        minHeight: isMobile ? "calc(100vh - 66px)" : "calc(100vh - 86px)",
        // minHeight: "100vh",
        position: "relative",
      })}
    >
      <Box
        sx={(theme) => ({
          ...theme.customStyles.solutionMainImageContainer,
          position: "relative", // 이미지 컨테이너를 relative로 설정
        })}
      >
        <SolutionIslandImage />

        {/* 버튼들을 이미지 위에 absolute로 배치 */}
        <SolutionIslandButtons />
      </Box>

      <RowNav />
    </Box>
  );
};

export default Solution;
