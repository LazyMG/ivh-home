import { Box, Typography } from "@mui/material";

interface SolutionImage {
  imgUrl?: string[];
  imgText?: string;
  imgSize?: string;
}
interface SolutionText {
  title?: string;
  text?: string[];
}

export interface SolutionContentItem {
  imgObj?: SolutionImage[];
  textObj: SolutionText;
  size: number;
}

export interface SolutionContentProps extends SolutionContentItem {
  color: string;
}

const SolutionContent = ({ textObj, imgObj, color }: SolutionContentProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        gap: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box sx={{ height: "18px", width: "10px", backgroundColor: color }} />
          <Typography
            sx={{ fontSize: "24px", fontFamily: "Freesentation-6-SemiBold" }}
          >
            {textObj.title}
          </Typography>
        </Box>

        {textObj.text && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {textObj.text.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: "18px",
                  fontFamily: "Freesentation-5-Medium",
                  whiteSpace: "pre-wrap",
                  wordBreak: "keep-all",
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        )}
      </Box>
      {imgObj &&
        imgObj.map((img, index) => (
          <Box
            key={index}
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
                      maxWidth: "80%",
                    }}
                  />
                </Box>
              ))}
            {img.imgText && (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Freesentation-5-Medium",
                    textAlign: "center",
                  }}
                >
                  {img.imgText}
                </Typography>
              </Box>
            )}
          </Box>
        ))}
    </Box>
  );
};

export default SolutionContent;
