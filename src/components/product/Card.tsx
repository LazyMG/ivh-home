import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

const ProductCard = () => {
  const products = {
    vtdCreate: {
      title: "VTD CREATE",
      boxFlex: "row",
      gap: 10,
      items: [
        {
          id: 1,
          title: "VTD CREATE",
          description:
            "열반전 시스템 설계 발견으로 제외으로 제외으로 라이브러리",
          image: "/images/product/vtd_create.png",
        },
        {
          id: 2,
          title: "VTD SIMULATE",
          description:
            "열반전 시스템 설계 발견으로 제외으로 제외으로 라이브러리",
          image: "/images/product/vtd_simulate.png",
        },
        {
          id: 3,
          title: "VTD FULLSTACK",
          description:
            "열반전 시스템 설계 발견으로 제외으로 제외으로 라이브러리",
          image: "/images/product/vtd_fullstack.png",
        },
      ],
    },
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: products.vtdCreate.boxFlex,
          justifyContent: "center",
          alignItems: "center",
          gap: products.vtdCreate.gap,
        }}
      >
        {products.vtdCreate.items.map((product) => (
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: 345,
              maxHeight: 450,
              borderRadius: "18px",
              boxShadow: "0px 9px 16px 0px rgba(0, 0, 0, 0.2)",
            }}
          >
            <CardActionArea sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="300px"
                image="/images/pages/product/vtd_create.png"
                alt="test image"
              />
              <Typography
                gutterBottom
                component="div"
                sx={{
                  position: "absolute",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  mb: 0,
                  width: "100%",
                  pb: "12px",
                  fontFamily: "Freesentation-7-Bold",
                  fontSize: "32px",
                  color: "white",
                  letterSpacing: 0,
                  lineHeight: "31px",
                  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.64)",
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
