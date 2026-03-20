import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "../../style/home-slider.css";

interface Product {
  name: string;
  path?: string;
  mobile_image: string;
  mobile_image_alt: string;
  title_image: string;
  title_image_alt: string;
}

const MobileProductSwiper = ({ products }: { products: Product[] }) => {
  const navigate = useNavigate();

  return (
    <Swiper
      className="custom-swiper"
      direction={"horizontal"}
      slidesPerView={1}
      spaceBetween={24}
      centeredSlides={true}
      navigation={true}
      modules={[Navigation]}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: "0 2px",
      }}
      onClick={(swiper) => {
        const clickedIndex = swiper.clickedIndex;
        if (clickedIndex !== undefined && products[clickedIndex]?.path) {
          navigate(products[clickedIndex].path);
        }
      }}
    >
      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              borderRadius: "20px",
              width: "100%",
              aspectRatio: "4/3",
              background:
                "linear-gradient(white, white) padding-box, linear-gradient(to right, #339070, #1755C2) border-box",
              border: "2px solid transparent",
              boxSizing: "border-box",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={product.mobile_image}
              alt={product.mobile_image_alt}
              loading="lazy"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "18px",
              }}
            />
            <Box
              component="img"
              src={product.title_image}
              alt={product.title_image_alt}
              loading="lazy"
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                m: "auto",
              }}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MobileProductSwiper;
