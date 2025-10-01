import SolutionHeader from "../../components/solution/SolutionHeader";
import "../../style/solution.css";
import header from "../../data/solution/header.json";
import body from "../../data/solution/body.json";
import TextBox from "../../components/solution/TextBox";
import { Box } from "@mui/material";
import useSolutionClass from "../../hooks/useSolutionClass";
import TextImageBox from "../../components/solution/TextImageBox";

const Energy = () => {
  const { headerTitle, subtitle, color } = header.energy;
  const { outlineTitle, outlineContents } = body.energy.outline;
  const { technicalBackgroundTitle, technicalBackgroundContents } =
    body.energy.technicalBackground;
  const { marketTrendTitle, marketTrendContents } = body.energy.marketTrend;
  const { systemArchitectureTitle, systemArchitectureImgUrl } =
    body.energy.systemArchitecture;

  useSolutionClass("solution-body");

  return (
    <>
      {/* header section */}
      <SolutionHeader title={headerTitle} subtitle={subtitle} color={color} />
      {/* body section */}
      <Box component="main">
        {/* 개요 */}
        <TextBox
          title={outlineTitle}
          contents={outlineContents}
          marginTop={8}
        />
        {/* 기술적 배경 */}
        <TextBox
          title={technicalBackgroundTitle}
          contents={technicalBackgroundContents}
        />
        {/* 시장 동향 및 필요성 */}
        <TextBox title={marketTrendTitle} contents={marketTrendContents} />
        {/* 시스템 아키텍처 */}
        <TextImageBox
          title={systemArchitectureTitle}
          imgurl={[systemArchitectureImgUrl]}
          width="1200px"
          height="700px"
        />
      </Box>
    </>
  );
};

export default Energy;
