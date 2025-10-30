import type { SolutionJSONType } from "../../types/solution";

import { Box } from "@mui/material";

import ColorBox from "./ColorBox";
import List from "./List";
import GradientHeader from "./SolutionGradientHeader";
import TextImageBox from "./TextImageBox";
import TextBox from "./TextBox";

interface SubPageProp {
  color: string;
  subColor: string;
  subtitle: string;
  // 스크롤 이동을 위한 아이디
  id?: string;
  // JSON 파일 구조에 맞춰 타입 구현
  jsonData: SolutionJSONType;
}

const SubPage = ({ color, subColor, subtitle, jsonData }: SubPageProp) => {
  return (
    <>
      {/** 그라데이션이 있는 헤더 */}
      <GradientHeader color={color} subColor={subColor} subtitle={subtitle} />
      {/* body section */}
      {/* 개요 */}
      <TextImageBox
        title={jsonData.outline.outlineTitle}
        contents={jsonData.outline.outlineContents}
        imgurl={jsonData.outline.outlineImgUrl}
        imgText={jsonData.outline.outlineImgText}
        width="800px"
      />
      {/* 기술적 배경 */}
      <TextImageBox
        title={jsonData.technicalBackground.technicalBackgroundTitle}
        contents={jsonData.technicalBackground.technicalBackgroundContents}
      />
      {/* 시장 동향 및 필요성 */}
      <TextImageBox
        title={jsonData.marketTrend.marketTrendTitle}
        contents={jsonData.marketTrend.marketTrendContents}
      />
      {/* 시스템 아키텍처 */}
      <TextImageBox
        title={jsonData.systemArchitecture.systemArchitectureTitle}
        listHeader={jsonData.systemArchitecture.systemArchitectureListHeader}
        contents={jsonData.systemArchitecture.systemArchitectureContents}
        imgurl={jsonData.systemArchitecture.systemArchitectureImgUrl}
        imgText={jsonData.systemArchitecture.systemArchitectureImgText}
        width="800px"
      />
      {/* 핵심 기술, 제공 서비스, 기대 효과 */}
      {/* 모든 ColorBox를 반복 렌더링 */}
      {jsonData.colorBoxes.map((colorBox, index) => (
        <Box
          component="section"
          aria-label="box-content-section"
          key={index}
          sx={{ mt: 8, mb: 16 }}
        >
          <ColorBox
            boxColor={colorBox.boxColor}
            layout={colorBox.layout}
            boxes={colorBox.boxes}
          />
        </Box>
      ))}
      {/* 관련 소프트웨어 */}
      <TextBox
        title={jsonData.relatedSoftware.relatedSoftwareTitle}
        contents={jsonData.relatedSoftware.relatedSoftwareContents}
      />
      {/* 자주 묻는 질문 */}
      <List
        title={jsonData.frequentlyAskedQuestions.frequentlyAskedQuestionsTitle}
        contents={
          jsonData.frequentlyAskedQuestions.frequentlyAskedQuestionsContents
        }
      />
    </>
  );
};

export default SubPage;
