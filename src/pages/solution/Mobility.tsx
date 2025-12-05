import { Box } from "@mui/material";
import { useBreakpoint } from "../../hooks/useBreakpoint";

import BreadScrum from "../../common/BreadScrum";
import ScrollButton from "../../common/ScrollButton";

import body from "../../data/solution/body.json";
import header from "../../data/solution/header.json";
import TextBox from "../../components/solution/TextBox";
import TextImageBox from "../../components/solution/TextImageBox";
import ColorBox from "../../components/solution/ColorBox";
import SolutionTitle from "../../components/solution/SolutionTitle";

const THRESHOLD = 643;

const Mobility = () => {
  const { isMobile } = useBreakpoint();
  // header
  // 각각의 헤더에서 소제목 분리
  const { headerTitle, subColor, color, subtitle } = header.Mobility;

  const { outline, marketTrend, colorBoxes, relatedSoftware } = body.mobility;

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
      {/* 개요 */}
      <TextBox
        title={outline.outlineTitle}
        contents={outline.outlineContents}
        marginTop={8}
      />

      <TextImageBox
        title={marketTrend.marketTrendTitle}
        contents={marketTrend.marketTrendContents}
        width="700px"
        height="400px"
        imgurl={marketTrend.marketTrendContentImgUrl}
        imgText={marketTrend.marketTrendContentImgText}
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
    </Box>
  );
};

export default Mobility;
