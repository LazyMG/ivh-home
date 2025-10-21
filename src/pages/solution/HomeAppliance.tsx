import { Box } from "@mui/material";
import SolutionTitle from "../../components/solution/SolutionTitle";
import TextBox from "../../components/solution/TextBox";
import TextImageBox from "../../components/solution/TextImageBox";
import ColorBox from "../../components/solution/ColorBox";
import List from "../../components/solution/List";
import useSolutionClass from "../../hooks/useSolutionClass";
import BreadScrum from "../../components/solution/BreadScrum";

import header from "../../data/solution/header.json";
import body from "../../data/solution/body.json";

import "../../style/solution.css";

const HomeAppliance = () => {
  // header
  const { headerTitle, subtitle, color, subColor } = header.HomeAppliance;

  // body
  const {
    outline,
    technicalBackground,
    marketTrend,
    systemArchitecture,
    colorBoxes,
    relatedSoftware,
    frequentlyAskedQuestions,
  } = body.homeAppliance;

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
          title={outline.outlineTitle}
          contents={outline.outlineContents}
          marginTop={8}
        />
        {/* 기술적 배경 */}
        <TextImageBox
          title={technicalBackground.technicalBackgroundTitle}
          listHeader={technicalBackground.technicalBackgroundListHeader}
          contents={technicalBackground.technicalBackgroundContents}
          width="1200px"
          height="700px"
        />
        {/* 시장 동향 및 필요성 */}
        <TextImageBox
          title={marketTrend.marketTrendTitle}
          listHeader={marketTrend.marketTrendListHeader}
          contents={marketTrend.marketTrendContents}
          width="1200px"
          height="700px"
        />
        {/* 시스템 아키텍처 */}
        <TextImageBox
          title={systemArchitecture.systemArchitectureTitle}
          listHeader={systemArchitecture.systemArchitectureListHeader}
          contents={systemArchitecture.systemArchitectureContents}
          width="1200px"
          height="700px"
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
        {/* 관련 소프트웨어 */}
        <TextBox
          title={relatedSoftware.relatedSoftwareTitle}
          contents={relatedSoftware.relatedSoftwareContents}
        />
        {/* 자주 묻는 질문 */}
        <List
          title={frequentlyAskedQuestions.frequentlyAskedQuestionsTitle}
          contents={frequentlyAskedQuestions.frequentlyAskedQuestionsContents}
        />
      </Box>
    </>
  );
};

export default HomeAppliance;
