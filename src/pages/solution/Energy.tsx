import SolutionHeader from "../../components/solution/SolutionHeader";
import "../../style/solution.css";
import header from "../../data/solution/header.json";
import body from "../../data/solution/body.json";
import TextBox from "../../components/solution/TextBox";
import { Box } from "@mui/material";
import useSolutionClass from "../../hooks/useSolutionClass";
import TextImageBox from "../../components/solution/TextImageBox";
import ColorBox from "../../components/solution/ColorBox";
import List from "../../components/solution/List";

const Energy = () => {
  // header
  const { headerTitle, subtitle, color } = header.energy;

  // body
  const {
    outline,
    technicalBackground,
    marketTrend,
    systemArchitecture,
    colorBoxes,
    relatedSoftware,
    frequentlyAskedQuestions,
  } = body.energy;

  useSolutionClass("solution-body");

  return (
    <>
      {/* header section */}
      <SolutionHeader title={headerTitle} subtitle={subtitle} color={color} />
      {/* body section */}
      <Box component="main">
        {/* 개요 */}
        <TextBox
          title={outline.outlineTitle}
          contents={outline.outlineContents}
          marginTop={8}
        />
        {/* 기술적 배경 */}
        <TextBox
          title={technicalBackground.technicalBackgroundTitle}
          contents={technicalBackground.technicalBackgroundContents}
        />
        {/* 시장 동향 및 필요성 */}
        <TextBox
          title={marketTrend.marketTrendTitle}
          contents={marketTrend.marketTrendContents}
        />
        {/* 시스템 아키텍처 */}
        <TextImageBox
          title={systemArchitecture.systemArchitectureTitle}
          imgurl={[systemArchitecture.systemArchitectureImgUrl]}
          listHeader={systemArchitecture.systemArchitectureListHeader}
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

export default Energy;
