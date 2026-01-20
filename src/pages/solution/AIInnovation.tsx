import { Box } from "@mui/material";
import { useBreakpoint } from "../../hooks/useBreakpoint";

import BreadScrum from "../../common/BreadScrum";

import header from "../../data/solution/header.json";
import SolutionTitle from "../../components/solution/SolutionTitle";
import ScrollButton from "../../common/ScrollButton";
import aiinnovationhub from "../../data/solution/seo.json";
import SEO from "../../common/SEO";
import { useSEO } from "../../hooks/useSEO";

import new_body from "../../data/solution/new-body.json";
import SolutionContentGrid from "../../components/solution/SolutionContentGrid";

const THRESHOLD = 100;

const AIInnovation = () => {
  // header
  const { headerTitle, subtitle, color, subColor } = header.AIInnovationHub;
  const { isMobile } = useBreakpoint();

  const seoData = useSEO(
    "solution/aiinnovationhub",
    aiinnovationhub.aiinnovationhub
  );

  const { ai } = new_body;

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

          <SolutionContentGrid items={ai} isMobile={isMobile} color={color} />
        </Box>
      </Box>
    </>
  );
};

export default AIInnovation;
