import { Fragment } from "react";
import { Box, Divider, Typography } from "@mui/material";

interface IntroductionImage {
  url: string;
  alt: string;
  imgText?: string;
}

export interface IntroductionItem {
  text: string;
  imgObj?: IntroductionImage[];
}

interface IntroductionContentProps {
  items: IntroductionItem[];
}

const hasImages = (item?: IntroductionItem) =>
  !!(item?.imgObj && item.imgObj.length > 0);

const IntroductionContent = ({ items }: IntroductionContentProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 5, pl: 4 }}>
      {items.map((item, index) => {
        const withImages = hasImages(item);
        // 캡션 유무로 레이아웃 결정: 캡션 있으면 좌우 지그재그, 없으면 이미지 위/텍스트 아래 stack
        const hasCaption =
          withImages && item.imgObj!.some((img) => img.imgText);
        const stacked = withImages && !hasCaption;
        // 좌우 지그재그 항목이 연속될 때 그 사이에 점선 구분선
        const showDivider =
          withImages && !stacked && hasImages(items[index - 1]);
        // 인덱스 지그재그: 짝수=이미지 좌, 홀수=이미지 우 (데스크톱)
        const imageFirst = index % 2 === 0;

        return (
          <Fragment key={index}>
            {showDivider && (
              <Divider
                sx={{
                  borderStyle: "dashed",
                  borderColor: "#c9c9c9",
                  borderBottomWidth: "2px",
                }}
              />
            )}

            {stacked ? (
              // 이미지 위 / 텍스트 아래 (풀폭)
              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: 2,
                  }}
                >
                  {item.imgObj!.map((img, imgIndex) => (
                    <Box
                      key={imgIndex}
                      component="img"
                      src={img.url}
                      alt={img.alt}
                      loading="lazy"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                    />
                  ))}
                </Box>
                <Typography
                  sx={(theme) => ({
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                    color: "#656565",
                    whiteSpace: "pre-line",
                    [theme.breakpoints.up("tablet")]: { color: "#656565" },
                  })}
                >
                  {item.text}
                </Typography>
              </Box>
            ) : withImages ? (
              <Box
                sx={(theme) => ({
                  display: "flex",
                  flexDirection: "column", // 모바일: 이미지 위 / 텍스트 아래
                  gap: 4,
                  [theme.breakpoints.up("tablet")]: {
                    // 데스크톱: 좌우 2단. 홀수면 좌우만 뒤집음(모바일 순서는 유지)
                    flexDirection: imageFirst ? "row" : "row-reverse",
                    alignItems: "center",
                    gap: 6,
                  },
                })}
              >
                {/* 이미지 블록 */}
                <Box
                  sx={(theme) => ({
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: 2,
                    [theme.breakpoints.up("tablet")]: { flex: 1 },
                  })}
                >
                  {item.imgObj!.map((img, imgIndex) => (
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
                        src={img.url}
                        alt={img.alt}
                        loading="lazy"
                        sx={{ objectFit: "contain", maxWidth: "100%" }}
                      />
                      {img.imgText && (
                        <Typography
                          sx={(theme) => ({
                            fontSize: "14px",
                            fontFamily: "Freesentation-5-Medium",
                            textAlign: "center",
                            color: "#656565",
                            [theme.breakpoints.up("tablet")]: {
                              color: "#656565",
                            },
                          })}
                        >
                          {img.imgText}
                        </Typography>
                      )}
                    </Box>
                  ))}
                </Box>

                {/* 텍스트 블록 */}
                <Box
                  sx={(theme) => ({
                    display: "flex",
                    alignItems: "center",
                    [theme.breakpoints.up("tablet")]: { flex: 1 },
                  })}
                >
                  <Typography
                    sx={(theme) => ({
                      fontFamily: "Freesentation-5-Medium",
                      fontSize: "18px",
                      color: "#656565",
                      whiteSpace: "pre-line",
                      [theme.breakpoints.up("tablet")]: { color: "#656565" },
                    })}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Box>
            ) : (
              // 텍스트만 (풀폭)
              <Typography
                sx={(theme) => ({
                  fontFamily: "Freesentation-5-Medium",
                  fontSize: "18px",
                  color: "#737373",
                  whiteSpace: "pre-line",
                  [theme.breakpoints.up("tablet")]: { color: "#424242" },
                })}
              >
                {item.text}
              </Typography>
            )}
          </Fragment>
        );
      })}
    </Box>
  );
};

export default IntroductionContent;
