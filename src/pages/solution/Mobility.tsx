import { Box } from "@mui/material";
import { useBreakpoint } from "../../hooks/useBreakpoint";

import BreadScrum from "../../common/BreadScrum";
import ScrollButton from "../../common/ScrollButton";

import header from "../../data/solution/header.json";

import SolutionTitle from "../../components/solution/SolutionTitle";

import new_body from "../../data/solution/new-body.json";
import SolutionContentGrid from "../../components/solution/SolutionContentGrid";

const THRESHOLD = 643;

const Mobility = () => {
  const { isMobile } = useBreakpoint();
  // header
  // 각각의 헤더에서 소제목 분리
  const { headerTitle, subColor, color, subtitle } = header.Mobility;

  const { mobility: new_mobility } = new_body;

  return (
    <Box className="solution-body">
      {/* breadcrumb section */}
      {isMobile ? null : <BreadScrum pageKey="mobility" />}

      {/** 스크롤 버튼 */}
      <ScrollButton color={color} threshold={THRESHOLD} show={!isMobile} />

      {/* header section */}
      {/* 제목만 있는 헤더 */}
      {isMobile ? (
        <SolutionTitle
          contentProps={{
            title: headerTitle,
            subtitle: subtitle,
            color: color,
            subColor: subColor,
          }}
          isMobile={isMobile}
          pageKey="mobility"
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
        items={new_mobility}
        isMobile={isMobile}
        color={color}
      />
    </Box>
  );
};

export default Mobility;
