import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  cards: {
    textPosition?: string;
    gap: number;
    cols: number;
    items: {
      title: string;
      description: string;
      image: string;
      path: string;
    }[];
  };
}

const ProductCard = ({ cards }: ProductCardProps) => {
  const navigate = useNavigate();

  // const products = {
  //   vtdCreate: {
  //     title: "VTD CREATE",
  //     boxFlex: "row",
  //     gap: 10,
  //     items: [
  //       {
  //         id: 1,
  //         title: "VTD FULLSTACK",
  //         description:
  //           "열반전 시스템 설계 발견으로 제외으로 제외으로 라이브러리",
  //         image: "/images/product/vtd_create.png",
  //       },
  //       {
  //         id: 2,
  //         title: "Battery",
  //         description:
  //           "열반전 시스템 설계 발견으로 제외으로 제외으로 라이브러리",
  //         image: "/images/product/vtd_simulate.png",
  //       },
  //       {
  //         id: 3,
  //         title: "Vehicle Dynamics Library",
  //         description:
  //           "열반전 시스템 설계 발견으로 제외으로 제외으로 라이브러리",
  //         image: "/images/product/vtd_fullstack.png",
  //       },
  //     ],
  //   },
  // };

  return (
    <>
      <Box
        sx={(theme) => ({
          // display: "flex",
          // flexDirection: products.vtdCreate.boxFlex,
          // justifyContent: "center",
          // alignItems: "center",
          // gap: products.vtdCreate.gap,

          display: "grid",
          gridTemplateColumns: `repeat(1,1fr)`,

          gap: 4,
          [theme.breakpoints.up("tablet")]: {
            gap: 6,
            gridTemplateColumns: `repeat(${cards.cols},1fr)`,
          },
          [theme.breakpoints.up("laptop")]: {
            gap: cards.gap,
          },
        })}
      >
        {cards.items.map((product, index) => (
          <Card
            key={`dymola-card-${index}`}
            sx={{
              // display: "flex",
              // flexDirection: "column",
              // justifyContent: "space-between",
              // alignItems: "center",
              // maxWidth: 345,
              // maxHeight: 450,
              // borderRadius: "18px",
              // boxShadow: "0px 9px 16px 0px rgba(0, 0, 0, 0.2)",

              maxWidth: 300,
              maxHeight: 450,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "18px",
              boxShadow: "0px 9px 16px 0px rgba(0, 0, 0, 0.2)",
            }}
          >
            <CardActionArea
              sx={{ height: "100%" }}
              onClick={() => navigate(product.path)}
            >
              <CardMedia
                component="img"
                height="300px"
                image={product.image}
                alt="test image"
              />
              <Typography
                gutterBottom
                component="div"
                sx={{
                  // position: "absolute",
                  // left: "50%",
                  // transform: "translate(-50%, -50%)",
                  // textAlign: "center",
                  // mb: 0,
                  // width: "100%",
                  // pb: "12px",
                  // fontFamily: "Freesentation-7-Bold",
                  // fontSize: "32px",
                  // color: "white",
                  // letterSpacing: 0,
                  // lineHeight: "31px",
                  // textShadow: "2px 2px 2px rgba(0, 0, 0, 0.64)",

                  position: "absolute",
                  fontFamily: "Freesentation-7-Bold",
                  fontSize: "32px",
                  color: "white",
                  letterSpacing: 0,
                  lineHeight: "31px",
                  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.64)",
                  display: "flex",
                  alignItems: "flex-end",
                  bottom: "70px",
                  width: "100%",
                  px: 3,
                  boxSizing: "border-box",

                  justifyContent: cards?.textPosition || "flex-end",
                  textAlign: cards?.textPosition || "end",
                }}
              >
                {product.title}
              </Typography>
              <CardContent sx={{ p: "24px 20px" }}>
                <Typography
                  sx={{
                    fontFamily: "Freesentation-6-SemiBold",
                    fontSize: "14.6px",
                    color: "#000000",
                    letterSpacing: 0,
                    lineHeight: "19px",
                    px: 1,
                    wordBreak: "keep-all",
                  }}
                >
                  {product.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default ProductCard;
