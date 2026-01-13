import { Box, Grid } from "@mui/material";
import SolutionTitle from "../../components/solution/SolutionTitle";

import { useBreakpoint } from "../../hooks/useBreakpoint";

import header from "../../data/solution/header.json";
import BreadScrum from "../../common/BreadScrum";
import ScrollButton from "../../common/ScrollButton";
import smartfactory from "../../data/solution/seo.json";
import SEO from "../../common/SEO";
import { useSEO } from "../../hooks/useSEO";

import new_body from "../../data/solution/new-body.json";
import SolutionContent from "../../components/solution/SolutionContent";
import { calculateContentDivider } from "../../utils/solutionUtils";

const THRESHOLD = 100;

const SmartFactory = () => {
  // header
  const { headerTitle, subtitle, color, subColor } = header.SmartFactory;
  const { isMobile } = useBreakpoint();

  const seoData = useSEO("solution/smartfactory", smartfactory.smartfactory);

  const { smart_factory } = new_body;

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

          <Grid
            container
            spacing={12}
            sx={{
              width: "100%",
              mt: 6,
              mb: 20,
            }}
          >
            {smart_factory.map((item, index) => {
              const needsDivider = calculateContentDivider(
                smart_factory,
                index
              );
              return (
                <Grid
                  size={isMobile ? 12 : item.size}
                  sx={{
                    position: "relative",
                    ...(needsDivider && {
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        right: "-48px",
                        top: 0,
                        height: "100%",
                        width: "1px",
                        backgroundColor: "rgba(0, 0, 0, 0.12)",
                      },
                    }),
                  }}
                >
                  <SolutionContent key={index} {...item} color={color} />
                </Grid>
              );
            })}
          </Grid>

          {/* 핵심 기술, 제공 서비스, 기대 효과 */}
          {/* 모든 ColorBox를 반복 렌더링 */}
          {/* {colorBoxes.map((colorBox, index) => (
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
          ))} */}
          {/* 관련 소프트웨어 */}
          {/* <TextBox
            title={relatedSoftware.relatedSoftwareTitle}
            contents={relatedSoftware.relatedSoftwareContents}
          /> */}
          {/* 자주 묻는 질문 */}
          {/* <List
            title={frequentlyAskedQuestions.frequentlyAskedQuestionsTitle}
            contents={frequentlyAskedQuestions.frequentlyAskedQuestionsContents}
          /> */}
        </Box>
      </Box>
    </>
  );
};

export default SmartFactory;
