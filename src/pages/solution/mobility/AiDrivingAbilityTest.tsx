import { Box } from "@mui/material";
import header from "../../../data/solution/header.json";
import body from "../../../data/solution/body.json";
import BreadScrum from "../../../common/BreadScrum";
import ScrollButton from "../../../common/ScrollButton";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import SolutionTitleHeader from "../../../components/solution/SolutionTitleHeader";
import SubPage from "../../../components/solution/SubPage";
import SEO from "../../../common/SEO";
import mobility from "../../../data/solution/seo.json";
import { useSEO } from "../../../hooks/useSEO";

const AiDrivingAbilityTest = () => {
  const {
    headerTitle,
    color,
    subColor,
    aiDrivingAbilityTest: { subtitle: aiDrivingAbilityTestSubTitle },
  } = header.Mobility;
  const { aiDrivingAbilityTest } = body.oldMobility;
  const { isMobile } = useBreakpoint();
  const THRESHOLD = 100;
  const seoData = useSEO(
    "solution/mobility/aiDrivingAbilityTest",
    mobility.mobility.aiDrivingAbilityTest
  );

  return (
    <>
      {/* SEO 메타 태그 */}
      <SEO {...seoData} />
      <Box component="main" className="solution-body">
        <ScrollButton color={color} threshold={THRESHOLD} show={!isMobile} />
        <Box component="article">
          {/* breadcrumb section */}
          {isMobile ? null : <BreadScrum pageKey="mobility" />}
          {/* header section */}
          {/* 제목만 있는 헤더 */}
          {isMobile ? (
            <SolutionTitleHeader
              contentProps={{
                title: headerTitle,

                color: color,
                subColor: subColor,
              }}
              isMobile={isMobile}
              pageKey="mobility"
            />
          ) : (
            <SolutionTitleHeader
              contentProps={{
                title: headerTitle,

                color: color,
                subColor: subColor,
              }}
              isMobile={isMobile}
            />
          )}

          {/** AI 운전능력평가 표준화 및 평가 프로세스 개발 */}
          <SubPage
            color={color}
            subColor={subColor}
            subtitle={aiDrivingAbilityTestSubTitle}
            jsonData={aiDrivingAbilityTest}
          />
        </Box>
      </Box>
    </>
  );
};

export default AiDrivingAbilityTest;
