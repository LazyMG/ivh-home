import SolutionTitle from "../../components/solution/SolutionTitle";
import "../../style/solution.css";
import header from "../../data/solution/header.json";
import { Box } from "@mui/material";
import BreadScrum from "../../common/BreadScrum";
import ScrollButton from "../../common/ScrollButton";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import bems from "../../data/solution/seo.json";
import SEO from "../../common/SEO";
import { useSEO } from "../../hooks/useSEO";

import new_body from "../../data/solution/new-body.json";
import SolutionContentGrid from "../../components/solution/SolutionContentGrid";

const THRESHOLD = 100;

const Bems = () => {
  // header
  const { headerTitle, subtitle, color, subColor } = header.BEMS;
  const { isMobile } = useBreakpoint();

  const seoData = useSEO("solution/bems", bems.bems);

  const { bems: new_bems } = new_body;

  return (
    <>
      {/* SEO 메타 태그 */}
      <SEO {...seoData} />
      <Box component="main" className="solution-body">
        <ScrollButton color={color} threshold={THRESHOLD} show={!isMobile} />
        <Box component="article">
          {/* breadcrumb section */}
          {isMobile ? null : <BreadScrum pageKey="bems" />}
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
              pageKey="bems"
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

          <SolutionContentGrid
            items={new_bems}
            isMobile={isMobile}
            color={color}
          />
        </Box>
      </Box>
    </>
  );
};

export default Bems;
