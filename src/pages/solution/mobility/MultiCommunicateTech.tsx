import { Box } from "@mui/material";
import header from "../../../data/solution/header.json";
import body from "../../../data/solution/body.json";
import BreadScrum from "../../../common/BreadScrum";
import ScrollButton from "../../../common/ScrollButton";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import SolutionTitleHeader from "../../../components/solution/SolutionTitleHeader";
import SubPage from "../../../components/solution/SubPage";
import mobility from "../../../data/solution/seo.json";
import SEO from "../../../common/SEO";
import { useSEO } from "../../../hooks/useSEO";

const MultiCommunicateTech = () => {
  const {
    headerTitle,
    color,
    subColor,
    multiCommunicateTech: { subtitle: multiCommunicateTechSubTitle },
  } = header.Mobility;
  const { multiCommunicateTech } = body.mobility;
  const { isMobile } = useBreakpoint();
  const THRESHOLD = 100;
  const seoData = useSEO(
    "solution/mobility/multiCommunicateTech",
    mobility.mobility.multiCommunicateTech
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

          {/** 다중 통신기술 네트워크 로드밸런싱 기술개발 */}
          <SubPage
            color={color}
            subColor={subColor}
            subtitle={multiCommunicateTechSubTitle}
            jsonData={multiCommunicateTech}
          />
        </Box>
      </Box>
    </>
  );
};

export default MultiCommunicateTech;
