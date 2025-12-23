import { Box, Typography } from "@mui/material";

interface IntroductionImage {
  imgUrl: string;
  imgText?: string;
}

export interface ProductIntroductionProps {
  text?: string;
  imgObj?: IntroductionImage[];
}

const ProductIntroduction = ({ text, imgObj }: ProductIntroductionProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {text && (
        <Typography sx={{ fontFamily: "Freesentation-4-Regular" }}>
          {text}
        </Typography>
      )}
      {imgObj && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {imgObj.map((img, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box component="img" src={img.imgUrl} />
              {img.imgText && (
                <Typography sx={{ fontFamily: "Freesentation-5-Medium" }}>
                  {img.imgText}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ProductIntroduction;
