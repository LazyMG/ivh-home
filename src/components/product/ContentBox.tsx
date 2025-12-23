import { Box, Divider, Grid, Typography } from "@mui/material";

interface FeatureImage {
  imgUrl?: string[];
  imgText?: string;
  col: number;
  imgSize?: string;
}
interface FeatureText {
  title?: string;
  text?: string;
  col: number;
}

export interface ContentBoxProps {
  imgObj?: FeatureImage[];
  textObj: FeatureText;
}

const ContentBox = ({ textObj, imgObj }: ContentBoxProps) => {
  const isImgTextExist = imgObj && imgObj.some((img) => img.imgText);
  return (
    <>
      <Grid container spacing={4} sx={{ display: "flex", alignItems: "end" }}>
        {imgObj &&
          imgObj.map((img, index) => (
            <Grid
              key={index}
              size={img.col}
              sx={{ display: "flex", flexDirection: "column", gap: 1 }}
            >
              {img.imgUrl &&
                img.imgUrl.map((url) => (
                  <Box
                    sx={{ display: "flex", justifyContent: "center" }}
                    key={url}
                  >
                    <Box
                      component="img"
                      src={url}
                      sx={{
                        objectFit: "contain",
                        width: img.imgSize === "small" ? "auto" : "100%",
                        maxWidth: "100%",
                      }}
                    />
                  </Box>
                ))}
              {img.imgText && (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontFamily: "Freesentation-5-Medium",
                      textAlign: "center",
                    }}
                  >
                    {img.imgText}
                  </Typography>
                </Box>
              )}
            </Grid>
          ))}
        <Grid
          size={textObj.col}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            pb: isImgTextExist ? 1 : 0,
          }}
        >
          <Typography
            sx={{ fontSize: "24px", fontFamily: "Freesentation-6-SemiBold" }}
          >
            {textObj.title}
          </Typography>
          <Typography
            sx={{ fontSize: "16px", fontFamily: "Freesentation-4-Regular" }}
          >
            {textObj.text}
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ my: 12 }} />
    </>
  );
};

export default ContentBox;
