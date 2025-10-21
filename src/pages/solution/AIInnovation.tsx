import { Box } from "@mui/material";

import BreadScrum from "../../components/solution/BreadScrum";
import useSolutionClass from "../../hooks/useSolutionClass";
import TextImageBox from "../../components/solution/TextImageBox";
import ColorBox from "../../components/solution/ColorBox";
import TextBox from "../../components/solution/TextBox";

import header from "../../data/solution/header.json";
import body from "../../data/solution/body.json";
import SolutionTitle from "../../components/solution/SolutionTitle";

const AIInnovation = () => {
  // header
  const { headerTitle, subtitle, color, subColor } = header.AIInnovationHub;

  // body
  const {
    aiPlatformBuild,
    coreAITechResearch,
    techInternalizationAndOrgSupport,
    responsibleAIDevelopment,
    colorBoxes,
    globalTechTrendHandle,
  } = body.aiInnovationHub;

  useSolutionClass("solution-body");

  return (
    <>
      {/* breadcrumb section */}
      <BreadScrum title={headerTitle} />
      {/* header section */}
      <SolutionTitle
        title={headerTitle}
        subtitle={subtitle}
        color={color}
        subColor={subColor}
      />
      {/* body section */}
      <Box component="main">
        {/* 개요 */}
        <TextBox
          title={aiPlatformBuild.aiPlatformBuildTitle}
          contents={aiPlatformBuild.aiPlatformBuildContents}
        />
        {/* 기술적 배경 */}
        <TextImageBox
          title={coreAITechResearch.coreAITechResearchTitle}
          contents={coreAITechResearch.coreAITechResearchContents}
        />
        {/* 시장 동향 및 필요성 */}
        <TextImageBox
          title={
            techInternalizationAndOrgSupport.techInternalizationAndOrgSupportTitle
          }
          contents={
            techInternalizationAndOrgSupport.techInternalizationAndOrgSupportContents
          }
        />
        {/* 시스템 아키텍처 */}
        <TextImageBox
          title={responsibleAIDevelopment.responsibleAIDevelopmentTitle}
          contents={responsibleAIDevelopment.responsibleAIDevelopmentContents}
        />
        <TextImageBox
          title={globalTechTrendHandle.globalTechTrendHandleTitle}
          contents={globalTechTrendHandle.globalTechTrendHandleContents}
        />
        {/* 핵심 기술, 제공 서비스, 기대 효과 */}
        {/* 모든 ColorBox를 반복 렌더링 */}
        {colorBoxes.map((colorBox, index) => (
          <Box key={index} sx={{ mt: 8, mb: 16 }}>
            <ColorBox
              boxColor={colorBox.boxColor}
              layout={colorBox.layout}
              boxes={colorBox.boxes}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default AIInnovation;
