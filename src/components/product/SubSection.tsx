import { Box, Typography } from "@mui/material";
import ProductIntroduction, {
  type ProductIntroductionProps,
} from "./ProductIntroduction";
import ContentBox, { type ContentBoxProps } from "./ContentBox";
import ProductSectionTitle from "./ProductSectionTitle";

interface SubSectionProps {
  title: string;
  subTitle: string;
  introduction: ProductIntroductionProps[];
  features: ContentBoxProps[];
  color: string;
  id: string;
}

const SubSection = ({
  title,
  subTitle,
  introduction,
  features,
  color,
  id,
}: SubSectionProps) => {
  return (
    <Box id={id} sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Freesentation-6-SemiBold",
          fontSize: "24px",
          letterSpacing: "4px",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          py: 3,
          borderTop: `2px solid ${color}`,
          borderBottom: `2px solid ${color}`,
          my: 5,
        }}
      >
        <Typography
          sx={{
            color: color,
            fontSize: "18px",
            fontFamily: "Freesentation-5-Medium",
          }}
        >
          {subTitle}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {introduction.map((item, index) => (
          <ProductIntroduction key={index} {...item} />
        ))}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4, mt: 20 }}>
        <ProductSectionTitle titleText="특징" />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {features.map((item, index) => (
            <ContentBox key={index} {...item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SubSection;
