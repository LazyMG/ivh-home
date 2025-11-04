import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Navigation } from "swiper/modules";
import { Card, CardContent, CardMedia, Box } from "@mui/material";
import HomeContents from "./HomeContents";
import homeData from "../../data/home/home.json";

// Swiper CSS import
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CardSlide = () => {
  const slides = homeData.slides;

  return (
    <>
      <style>{`
        .custom-swiper .swiper-button-prev,
        .custom-swiper .swiper-button-next {
          top: auto;
          bottom: 28px;
          right: 20px;
          width: 10px;
          height: 10px;
          color: #ffffffb0;
          margin: 0;
          cursor: pointer;
    transition: all 0.3s ease;
        }

          /* 호버 효과 - 왼쪽 화살표는 왼쪽으로 이동 */
  .custom-swiper .swiper-button-prev:hover {
    transform: translateX(-5px);
              color: #ffffff;
  }

  /* 호버 효과 - 오른쪽 화살표는 오른쪽으로 이동 */
  .custom-swiper .swiper-button-next:hover {
    transform: translateX(5px);
              color: #ffffff;
      }

          /* 화살표 앞뒤로 선 추가 */
  .custom-swiper .swiper-button-prev::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;          /* 선의 길이 */
    height: 1px;          /* 선의 두께 */
    background: #ffffffb0;
    margin-left: 11px;    /* 화살표와의 간격 */
  }
  
  .custom-swiper .swiper-button-next::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;          /* 선의 길이 */
    height: 1px;          /* 선의 두께 */
    background: #ffffffb0;
    margin-right: 12px;     /* 화살표와의 간격 */
  }

  /* 호버 시 선 효과 */
        .custom-swiper .swiper-button-prev:hover::before,
        .custom-swiper .swiper-button-next:hover::before {
          background: #ffffff;
        }
    
        
        .custom-swiper .swiper-button-prev {
          left: calc(50% - 60px);
          right: auto;
        }
        
        .custom-swiper .swiper-button-next {
          right: calc(50% - 60px);
          left: auto;
        }
        
        .custom-swiper .swiper-pagination-fraction {
          bottom: 20px;
          color: white;
          font-size: 16px;
          font-weight: 500;
          width: auto;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .custom-swiper .swiper-button-prev:after,
        .custom-swiper .swiper-button-next:after {
          font-size: 20px;
        }
      `}</style>
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
                borderRadius: "0px", // 별도로 지정안하면 4px 들어가서 별도로 0px 지정
              }}
            >
              {/* 배경 이미지가 배경에만 있고 카드에는 별도 이미지를 넣는 예시 */}
              <CardMedia
                component="img"
                image={slide.imageUrl}
                alt="Live from space album cover"
                style={{ objectFit: "cover", transform: "scaleX(-1)" }}
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
