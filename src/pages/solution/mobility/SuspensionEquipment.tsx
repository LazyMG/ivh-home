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

const SuspensionEquipment = () => {
  const {
    headerTitle,
    color,
    subColor,
    suspensionEquipment: { subtitle: suspensionEquipmentSubTitle },
  } = header.Mobility;
  const { suspensionEquipment } = body.mobility;
  const { isMobile } = useBreakpoint();
  const THRESHOLD = 100;
  const seoData = useSEO(
    "solution/mobility/suspensionEquipment",
    mobility.mobility.suspensionEquipment
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

          {/** 현가 장치 설계 툴 개발 */}
          <SubPage
            color={color}
            subColor={subColor}
            subtitle={suspensionEquipmentSubTitle}
            jsonData={suspensionEquipment}
          />
        </Box>
      </Box>
    </>
  );
};

export default SuspensionEquipment;
