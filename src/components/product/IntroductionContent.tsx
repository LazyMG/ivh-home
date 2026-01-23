import { Box, Typography } from "@mui/material";

interface IntroductionImage {
  imgUrl: string;
  imgText?: string;
}

export interface IntroductionItem {
  text: string;
  imgObj?: IntroductionImage[];
}

interface IntroductionContentProps {
  items: IntroductionItem[];
}

const IntroductionContent = ({ items }: IntroductionContentProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{ display: "flex", flexDirection: "column", gap: 5 }}
        >
          <Typography
            sx={(theme) => ({
              fontFamily: "Freesentation-5-Medium",
              fontSize: "16px",
              color: "#737373",
              [theme.breakpoints.up("tablet")]: {
                color: "#424242",
              },
            })}
          >
            {item.text}
          </Typography>

          {item.imgObj && item.imgObj.length > 0 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-end",
                gap: 2,
              }}
            >
              {item.imgObj.map((img, imgIndex) => (
                <Box
                  key={imgIndex}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    component="img"
                    src={img.imgUrl}
                    sx={{
                      objectFit: "contain",
                      maxWidth: "100%",
                    }}
                  />
                  {img.imgText && (
                    <Typography
                      sx={(theme) => ({
                        fontSize: "14px",
                        fontFamily: "Freesentation-5-Medium",
                        textAlign: "center",
                        color: "#979797",
                        [theme.breakpoints.up("tablet")]: {
                          color: "#000",
                        },
                      })}
                    >
                      {img.imgText}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default IntroductionContent;
