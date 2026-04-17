import { Box } from "@mui/material";
import ScrollButton from "../../common/ScrollButton";
import LangToggle from "../../common/LangToggle";
import { SolutionPage } from "../../components/solution/SolutionPage";

const NewSolution = () => {
  return (
    <Box component="main">
      <ScrollButton threshold={100} />
      <LangToggle />
      <SolutionPage namespace="solution/philosophy" />
      <SolutionPage namespace="solution/modelica" />
      <SolutionPage namespace="solution/asam" />
      <SolutionPage namespace="solution/physical-ai" />
      <SolutionPage namespace="solution/engineering-to-industry" />
      <SolutionPage namespace="solution/future-directions" />
    </Box>
  );
};

export default NewSolution;
