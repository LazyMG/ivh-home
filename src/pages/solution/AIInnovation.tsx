import { Box } from "@mui/material";
import { useBreakpoint } from "../../hooks/useBreakpoint";

import BreadScrum from "../../common/BreadScrum";
import TextImageBox from "../../components/solution/TextImageBox";
import ColorBox from "../../components/solution/ColorBox";
import TextBox from "../../components/solution/TextBox";

import header from "../../data/solution/header.json";
import body from "../../data/solution/body.json";
import SolutionTitle from "../../components/solution/SolutionTitle";
import ScrollButton from "../../common/ScrollButton";
import aiinnovationhub from "../../data/solution/seo.json";
import SEO from "../../common/SEO";
import { useSEO } from "../../hooks/useSEO";

const THRESHOLD = 100;

const AIInnovation = () => {
  // header
  const { headerTitle, subtitle, color, subColor } = header.AIInnovationHub;
  const { isMobile } = useBreakpoint();

  const seoData = useSEO(
    "solution/aiinnovationhub",
    aiinnovationhub.aiinnovationhub
  );

  // body
  const {
    aiPlatformBuild,
    coreAITechResearch,
    techInternalizationAndOrgSupport,
    responsibleAIDevelopment,
    colorBoxes,
    globalTechTrendHandle,
  } = body.aiInnovationHub;

  return (
    <>
      {/* SEO 메타 태그 */}
      <SEO {...seoData} />
      <Box component="main" className="solution-body">
        <ScrollButton color={color} threshold={THRESHOLD} show={!isMobile} />
        <Box component="article">
          {/* breadcrumb section */}
          {isMobile ? null : <BreadScrum pageKey="alinnovationhub" />}
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
              pageKey="alinnovationhub"
            />
          ) : (
            <SolutionTitle
              contentProps={{
                title: headerTitle,
                subtitle: subtitle,
                color: color,
                subColor: subColor,
              }}
              pageKey="alinnovationhub"
            />
          )}
          {/* body section */}
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
        </Box>
      </Box>
    </>
  );
};

export default AIInnovation;
