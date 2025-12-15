import { Card, CardContent, CardMedia, Box, Typography } from "@mui/material";
import homeData from "../../data/home/home.json";

// Swiper CSS import
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../style/home-slider.css";
import { useBreakpoint } from "../../hooks/useBreakpoint";

const TempCardSlide = () => {
  const iMOVA = homeData.iMOVA;
  const { isMobile } = useBreakpoint();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          color: "white",
        }}
      >
        <Card
          sx={{
            display: "flex",
            borderRadius: "0px", // 별도로 지정안하면 4px 들어가서 별도로 0px 지정
            marginTop: isMobile ? "56px" : "0px",
          }}
        >
          {/* 배경 이미지가 배경에만 있고 카드에는 별도 이미지를 넣는 예시 */}
          <CardMedia
            component="img"
            image={iMOVA.imageUrl}
            alt="Live from space album cover"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              clipPath: isMobile ? "inset(0% 0 0% 0)" : "inset(4% 0 20% 0)", // 모바일에서는 자르지 않음
              display: "block",
              marginTop: isMobile ? "0" : "-4%", // 모바일에서는 마진 없음
              marginBottom: isMobile ? "0" : "-20%",
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ p: 0 }}>
              <Box
                component="div"
                sx={{
                  position: "absolute",
                  top: isMobile ? "50%" : "22%",
                  left: "0%",
                  m: 0,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transform: isMobile ? "translate(0, -50%)" : "0",
                  textAlign: isMobile ? "center" : "left",
                  alignItems: isMobile ? "center" : "flex-end",
                  justifyContent: "center",
                  boxSizing: "border-box",
                  pl: isMobile ? "28px" : "0",
                  pr: isMobile ? "28px" : "0",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    width: isMobile ? "100%" : "50%",
                    mr: isMobile ? "0" : "16%",
                    boxSizing: "border-box",
                  }}
                >
                  <Box component="div" sx={{ width: "100%" }}>
                    <Typography
                      component="p"
                      variant="h2"
                      sx={{
                        fontSize: isMobile ? "1.5rem" : "33.9px",
                        fontWeight: "700",
                        lineHeight: 1,
                        color: "#fff",
                        mb: ".75rem",
                        fontFamily: "Freesentation-7-Bold",
                        textAlign: isMobile ? "center" : "right",
                        fontStyle: "italic",
                      }}
                    >
                      {iMOVA.mainText}
                    </Typography>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      width: "100%",
                    }}
                  >
                    <Typography
                      component="p"
                      sx={{
                        fontSize: isMobile ? "14px" : "24px",
                        lineHeight: "1.75rem",
                        color: "#fff",
                        whiteSpace: isMobile ? "normal" : "pre-line",
                        textAlign: isMobile ? "center" : "right",
                        fontFamily: "Freesentation-4-Regular",
                      }}
                    >
                      {iMOVA.subText}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default TempCardSlide;
