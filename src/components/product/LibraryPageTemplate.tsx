import { Box, Typography } from "@mui/material";
import ScrollButton from "../../common/ScrollButton";
import BreadScrum from "../../common/BreadScrum";
import LibraryHeader from "./LibraryHeader";
import IntroductionContent, {
  type IntroductionItem,
} from "./IntroductionContent";
import LibrarySectionTitle from "./LibrarySectionTitle";
import ProductContent from "./ProductContent";
import ProductBottom from "./ProductBottom";

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
}

interface LibraryPageTemplate {
  title: string;
  subTitle: string;
  introduction: IntroductionItem[];
  features?: FeatureItem[];
  pageKey: string;
  name: string;
}

const LibraryPageTemplate = ({
  title,
  subTitle,
  introduction,
  features,
  pageKey,
  name,
}: LibraryPageTemplate) => {
  return (
    <Box
      component="main"
      sx={(theme) => ({
        display: "flex",
        boxSizing: "border-box",
        mt: 3,
        px: 4,
        position: "relative",
        flexDirection: "column",
        overflowX: "hidden",
        [theme.breakpoints.up("tablet")]: {
          px: "8%",
          mt: 8,
        },
      })}
    >
      <ScrollButton />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          mt: 1,
        }}
      >
        <BreadScrum pageKey={pageKey} />
      </Box>
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
          <Box
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 2,
              [theme.breakpoints.up("tablet")]: {
                mt: 0,
              },
            })}
          >
            <Typography
              sx={(theme) => ({
                fontFamily: "Freesentation-7-Bold",
                fontSize: "20px",
                [theme.breakpoints.up("tablet")]: {
                  fontSize: "32px",
                },
              })}
            >
              {title}
            </Typography>
            <LibraryHeader text={subTitle} />

            <IntroductionContent items={introduction} />
          </Box>
        </Box>
        {features && (
          <Box
            id="feature"
            sx={{ display: "flex", flexDirection: "column", gap: 4 }}
          >
            <LibrarySectionTitle titleText="특징" />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {features.map((item, index) => (
                <ProductContent key={index} {...item} />
              ))}
            </Box>
          </Box>
        )}

        <ProductBottom productName={name} />
      </Box>
    </Box>
  );
};

export default LibraryPageTemplate;
