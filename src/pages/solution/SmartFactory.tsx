import { Box } from "@mui/material";
import SolutionTitle from "../../components/solution/SolutionTitle";
import TextBox from "../../components/solution/TextBox";
import TextImageBox from "../../components/solution/TextImageBox";
import ColorBox from "../../components/solution/ColorBox";
import List from "../../components/solution/List";
import { useBreakpoint } from "../../hooks/useBreakpoint";

import header from "../../data/solution/header.json";
import body from "../../data/solution/body.json";
import BreadScrum from "../../common/BreadScrum";
import ScrollButton from "../../common/ScrollButton";
import smartfactory from "../../data/solution/seo.json";
import SEO from "../../common/SEO";
import { useSEO } from "../../hooks/useSEO";

const THRESHOLD = 100;

const SmartFactory = () => {
  // header
  const { headerTitle, subtitle, color, subColor } = header.SmartFactory;
  const { isMobile } = useBreakpoint();

  const seoData = useSEO("solution/smartfactory", smartfactory.smartfactory);

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
    <>
      {/* SEO 메타 태그 */}
      <SEO {...seoData} />
      <Box component="main" className="solution-body">
        <ScrollButton color={color} threshold={THRESHOLD} show={!isMobile} />
        <Box component="article">
          {/* breadcrumb section */}
          {isMobile ? null : <BreadScrum pageKey="smartfactory" />}
          {/* header section */}
          {isMobile ? (
            <SolutionTitle
              contentProps={{
                title: headerTitle,
                subtitle: subtitle,
                color: color,
                subColor: subColor,
              }}
              isMobile={isMobile}
              pageKey="smartfactory"
            />
          ) : (
            <SolutionTitle
              contentProps={{
                title: headerTitle,
                subtitle: subtitle,
                color: color,
                subColor: subColor,
              }}
            />
          )}
          {/* body section */}
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
    </>
  );
};

export default SmartFactory;
