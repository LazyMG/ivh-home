import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Navigation } from "swiper/modules";
import { Card, CardContent, CardMedia, Box } from "@mui/material";
import HomeContents from "./HomeContents";
import homeData from "../../data/home/home.json";

// Swiper CSS import
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../style/home-slider.css";

const CardSlide = () => {
  const slides = homeData.slides;

  return (
    <>
      <Swiper
        className="custom-swiper"
        direction={"horizontal"} // 세로 방향 슬라이드 설정
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={false} // 마우스 휠 지원
        pagination={{
          type: "fraction", // 점 대신 "1 / 8" 형식으로 변경
          clickable: true,
        }}
        navigation={true} // 화살표 버튼 추가
        modules={[Mousewheel, Pagination, Navigation]}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          color: "white",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                display: "flex",
                height: "100%",
              }}
            >
              {/* 배경 이미지가 배경에만 있고 카드에는 별도 이미지를 넣는 예시 */}
              <CardMedia
                component="img"
                image={slide.imageUrl}
                alt="Live from space album cover"
                style={{ objectFit: "cover" }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ p: 0 }}>
                  <HomeContents
                    title={slide.title}
                    description={slide.description}
                    description_sub={slide.description_sub}
                    navigate_url={slide.navigate_url}
                  />
                </CardContent>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CardSlide;
