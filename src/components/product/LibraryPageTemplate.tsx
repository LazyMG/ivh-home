import { Box, Divider, Typography } from "@mui/material";
import ScrollButton from "../../common/ScrollButton";
import BreadScrum from "../../common/BreadScrum";
import IntroductionContent, {
  type IntroductionItem,
} from "./IntroductionContent";
import ProductContent from "./ProductContent";
import SectionTitle from "../common/SectionTitle";
import { FONTS } from "../../theme/theme";

// features는 그대로 ProductContent로 스프레드된다. ProductContent가 실제로 읽는 필드
// (images 배열)를 반영. imgTextAlign은 ProductContent 쪽이 "center"|"start" 유니온인데
// JSON 값은 string으로 넓혀져 충돌하므로, 여기 타입에선 생략한다(런타임 값은 스프레드로 전달됨).
interface FeatureImage {
  images?: { url: string; alt: string }[];
  imgText?: string;
  col: number;
  colMobile?: number;
  imgSize?: string;
}

interface FeatureItem {
  imgObj?: FeatureImage[];
  textObj: { title: string; text: string; col: number };
  imageLayoutStyle?: { large: string; small: string };
  /** 하단 구분선 표시 여부 (기본 true) */
  showDivider?: boolean;
  /** 이미지 그리드 열 간격 (MUI spacing, 기본 4) */
  columnSpacing?: number;
}

interface LibraryPageTemplate {
  title: string;
  subTitle: string;
  introduction: IntroductionItem[];
  features?: FeatureItem[];
  pageKey: string;
  featuresSectionTitle?: string;
}

const LibraryPageTemplate = ({
  title,
  subTitle,
  introduction,
  features,
  pageKey,
  featuresSectionTitle = "특징",
}: LibraryPageTemplate) => {
  return (
    <Box component="main" sx={{ position: "relative", display: "flow-root" }}>
      <BreadScrum
        pageKey={pageKey}
        sx={{
          position: "absolute",
          top: "40px",
          right: "8%",
          zIndex: 1,
          display: "none",
          "@media (min-width:1024px)": {
            display: "flex",
          },
        }}
      />
      <Box
        sx={(theme) => ({
          display: "flex",
          boxSizing: "border-box",
          mt: 3,
          px: 4,
          flexDirection: "column",
          overflowX: "hidden",
          mb: 10,
          [theme.breakpoints.up("tablet")]: {
            px: "8%",
            mt: 10,
            mb: 24,
          },
        })}
      >
        <ScrollButton />
        <Box
          sx={(theme) => ({
            flex: 1,
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            minWidth: 0,
            gap: 10,
            [theme.breakpoints.up("tablet")]: {
              gap: 20,
            },
          })}
        >
          <Box
            id="introduction"
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 5,
              [theme.breakpoints.up("desktop")]: {
                gap: 9,
              },
            })}
          >
            <Box
              sx={(theme) => ({
                display: "flex",
                alignItems: "center",
                gap: 2,
                [theme.breakpoints.up("desktop")]: {
                  gap: 3,
                },
              })}
            >
              <Box
                sx={{
                  alignSelf: "stretch",
                  width: "8px",
                  borderRadius: "20px",
                  backgroundColor: "#03193F",
                }}
              />
              <Box
                sx={(theme) => ({
                  display: "flex",
                  flexDirection: "column",
                  [theme.breakpoints.up("tablet")]: {
                    mt: 0,
                  },
                })}
              >
                <Typography
                  component="h1"
                  sx={(theme) => ({
                    fontFamily: FONTS.galderglynn.regular,
                    fontSize: "20px",
                    color: "#03193F",
                    lineHeight: "1",
                    [theme.breakpoints.up("tablet")]: {
                      fontSize: "32px",
                    },
                  })}
                >
                  {title}
                </Typography>
                <Divider
                  sx={(theme) => ({
                    width: "90%",
                    borderColor: "#00235F",
                    my: 1,
                    [theme.breakpoints.up("desktop")]: {
                      width: "120%",
                      my: 2,
                    },
                  })}
                />
                <Typography
                  sx={(theme) => ({
                    color: "#000000",
                    fontSize: "16px",
                    fontFamily: FONTS.freesentation.semiBold,
                    [theme.breakpoints.up("desktop")]: {
                      fontSize: "18px",
                      color: "#03193F",
                    },
                  })}
                >
                  {subTitle}
                </Typography>
              </Box>
            </Box>

            <IntroductionContent items={introduction} />
          </Box>
          {features && (
            <Box
              id="feature"
              sx={{ display: "flex", flexDirection: "column", gap: 4 }}
            >
              <SectionTitle text={featuresSectionTitle} />
              <Box
                sx={(theme) => ({
                  display: "flex",
                  flexDirection: "column",
                  px: 0,
                  [theme.breakpoints.up("desktop")]: {
                    px: 10,
                  },
                })}
              >
                {features.map((item, index) => (
                  <ProductContent key={index} {...item} />
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default LibraryPageTemplate;
