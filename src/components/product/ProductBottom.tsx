import { Box, Typography } from "@mui/material";

import product_form from "../../data/product/product-form.json";
import { useNavigate } from "react-router-dom";
import ProductForm from "./ProductForm";
import GradientBox from "./GradientBox";

const ProductBottom = ({ productName }: { productName: string }) => {
  const { product_form_guide, product_form_training, product_form_navigation } =
    product_form;
  const navigate = useNavigate();
  return (
    <Box
      component="section"
      aria-label="form-heading"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        mb: 20,
      }}
    >
      <GradientBox title="Application">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            px: 6,
            pt: 8,
            pb: 6,
            gap: 5,
            width: "100%",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "18px",
                fontFamily: "Freesentation-5-Medium",
                whiteSpace: "pre-line",
                wordBreak: "keep-all",
              }}
            >
              {product_form_guide}
            </Typography>
          </Box>
          <ProductForm productName={productName} />
        </Box>
      </GradientBox>
      <GradientBox title="Training">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            px: 6,
            pt: 8,
            pb: 6,
            gap: 5,
            width: "100%",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "18px",
                fontFamily: "Freesentation-5-Medium",
                whiteSpace: "pre-line",
                wordBreak: "keep-all",
              }}
            >
              {product_form_training}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              justifySelf: "flex-end",
            }}
          >
            <Box
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/support/training")}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "Freesentation-6-SemiBold",
                  color: "#fff",
                  backgroundColor: "#1755C2",
                  px: 4,
                  py: 1,
                }}
              >
                {`${productName} ${product_form_navigation}`}
              </Typography>
            </Box>
          </Box>
        </Box>
      </GradientBox>
    </Box>
  );
};

export default ProductBottom;
