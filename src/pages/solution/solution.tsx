import { Box } from "@mui/material";
import solutionImage from "/images/pages/solution/solution_main.png";
import solutionImageMobile from "/images/pages/solution/solution_mobile.png";
import RowNav from "../../components/solution/RowNav";
import { useBreakpoint } from "../../hooks/useBreakpoint";

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
        })}
      >
        <Box
          component="img"
          src={isMobile ? solutionImageMobile : solutionImage}
          alt="solution"
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: "80vh",
            objectFit: "contain",
          }}
        />
      </Box>
      <RowNav />
    </Box>
  );
};

export default Solution;
