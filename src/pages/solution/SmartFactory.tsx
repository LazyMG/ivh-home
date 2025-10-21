import { Box } from "@mui/material";
import SolutionTitle from "../../components/solution/SolutionTitle";
import TextBox from "../../components/solution/TextBox";
import TextImageBox from "../../components/solution/TextImageBox";
import ColorBox from "../../components/solution/ColorBox";
import List from "../../components/solution/List";

import header from "../../data/solution/header.json";
import body from "../../data/solution/body.json";
import BreadScrum from "../../components/solution/BreadScrum";
import ScrollButton from "../../common/ScrollButton";

const THRESHOLD = 100;

const SmartFactory = () => {
  // header
  const { headerTitle, subtitle, color, subColor } = header.SmartFactory;

  // body
  const {
    outline,
    technicalBackground,
    marketTrend,
    systemArchitecture,
    colorBoxes,
    relatedSoftware,
    frequentlyAskedQuestions,
  } = body.smartFactory;

  return (
    <Box className="solution-body">
      <ScrollButton color={color} threshold={THRESHOLD} />

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
        <TextImageBox
          title={outline.outlineTitle}
          contents={outline.outlineContents}
          imgurl={outline.outlineImgUrl}
          width="1000px"
          height="500px"
        />
        {/* 기술적 배경 */}
        <TextBox
          title={technicalBackground.technicalBackgroundTitle}
          contents={technicalBackground.technicalBackgroundContents}
        />
        {/* 시장 동향 및 필요성 */}
        <TextImageBox
          title={marketTrend.marketTrendTitle}
          contents={marketTrend.marketTrendContents}
        />
        {/* 시스템 아키텍처 */}
        <TextImageBox
          title={systemArchitecture.systemArchitectureTitle}
          contents={systemArchitecture.systemArchitectureContents}
          imgurl={systemArchitecture.systemArchitectureImgUrl}
          width="800px"
          height="400px"
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
    </Box>
  );
};

export default SmartFactory;
