import { Box } from "@mui/material";
import SolutionTitle from "../../components/solution/SolutionTitle";
import BreadScrum from "../../common/BreadScrum";
import { useBreakpoint } from "../../hooks/useBreakpoint";

import header from "../../data/solution/header.json";

import "../../style/solution.css";
import ScrollButton from "../../common/ScrollButton";
import homeappliance from "../../data/solution/seo.json";
import SEO from "../../common/SEO";
import { useSEO } from "../../hooks/useSEO";

import new_body from "../../data/solution/new-body.json";
import SolutionContentGrid from "../../components/solution/SolutionContentGrid";

const THRESHOLD = 100;

const HomeAppliance = () => {
  // header
  const { headerTitle, subtitle, color, subColor } = header.HomeAppliance;
  const { isMobile } = useBreakpoint();

  const seoData = useSEO("solution/homeappliance", homeappliance.homeappliance);

  const { home_appliance } = new_body;

  return (
    <>
      {/* SEO 메타 태그 */}
      <SEO {...seoData} />
      <Box component="main" className="solution-body">
        <ScrollButton color={color} threshold={THRESHOLD} show={!isMobile} />
        <Box component="article">
          {/* breadcrumb section */}
          {isMobile ? null : <BreadScrum pageKey="homeAppliance" />}
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
              pageKey="homeAppliance"
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
            items={home_appliance}
            isMobile={isMobile}
            color={color}
          />
        </Box>
      </Box>
    </>
  );
};

export default HomeAppliance;
