import { Box, Divider, Typography } from "@mui/material";
import ScrollButton from "../../common/ScrollButton";
import BreadScrum from "../../common/BreadScrum";
import IntroductionContent, {
  type IntroductionItem,
} from "./IntroductionContent";
import ProductContent from "./ProductContent";
import SectionTitle from "../common/SectionTitle";
import { FONTS } from "../../theme/theme";

interface ImageObject {
  imgUrl?: string[];
  imgText?: string;
  col: number;
  imgSize?: string;
}

interface TextObject {
  title: string;
  text: string;
  col: number;
}

interface ImageLayoutStyle {
  large: string;
  small: string;
}

export interface FeatureItem {
  imgObj?: ImageObject[];
  textObj: TextObject;
  imageLayoutStyle?: ImageLayoutStyle;
  /** 하단 구분선 표시 여부 (기본 true) */
  showDivider?: boolean;
}

interface LibraryPageTemplate {
  title: string;
  subTitle: string;
  introduction: IntroductionItem[];
  features?: FeatureItem[];
  pageKey: string;
  name: string;
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
        sx={{ position: "absolute", top: "40px", right: "8%", zIndex: 1 }}
      />
      <Box
        sx={(theme) => ({
          display: "flex",
          boxSizing: "border-box",
          mt: 3,
          px: 4,
          flexDirection: "column",
          overflowX: "hidden",
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
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 9,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
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
                    textTransform: "uppercase",
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
                  sx={{ width: "120%", borderColor: "#00235F", my: 2 }}
                />
                <Typography
                  sx={{
                    color: "#03193F",
                    fontSize: "18px",
                    fontFamily: FONTS.freesentation.semiBold,
                  }}
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
              <Box sx={{ display: "flex", flexDirection: "column", px: 10 }}>
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
