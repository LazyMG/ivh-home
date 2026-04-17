import { Box } from "@mui/material";
import ScrollButton from "../../common/ScrollButton";
import { SolutionPage } from "./SolutionPage";

interface SolutionPageLayoutProps {
  namespace: string;
}

export const SolutionPageLayout = ({ namespace }: SolutionPageLayoutProps) => (
  <Box component="main">
    <ScrollButton threshold={100} />
    <SolutionPage namespace={namespace} />
  </Box>
);
