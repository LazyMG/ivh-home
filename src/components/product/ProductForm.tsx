import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import ProductSectionLabel from "./ProductSectionLabel";

import product_form from "../../data/product/product-form.json";
import { useNavigate } from "react-router-dom";

const ProductForm = ({ productName }: { productName: string }) => {
  const { product_form_guide, product_form_training, product_form_navigation } =
    product_form;
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={(theme) => ({
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          [theme.breakpoints.up("desktop")]: {
            gap: 5,
          },
        })}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <ProductSectionLabel title="Application" sx={{ zIndex: 1 }} />
          <Divider
            sx={{
              width: "100%",
              backgroundColor: "#000",
              position: "absolute",
              borderWidth: 1,
            }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Typography
            sx={(theme) => ({
              fontFamily: "Freesentation-6-SemiBold",
              fontSize: "18px",
              ml: 1,
              [theme.breakpoints.up("desktop")]: {
                fontSize: "25px",
                ml: 4,
              },
            })}
          >
            {product_form_guide}
          </Typography>
          <Box
            component="form"
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 3,
              [theme.breakpoints.up("desktop")]: {
                flexDirection: "row",
                justifyContent: "flex-end",
              },
            })}
          >
            <Box sx={{ display: "flex", gap: 3 }}>
              <TextField
                size="small"
                placeholder="성함"
                variant="outlined"
                label="성함"
              />
              <TextField size="small" placeholder="소속" label="소속" />
              <TextField size="small" placeholder="이메일" label="이메일" />
              <TextField size="small" placeholder="연락처" label="연락처" />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#000", px: 4 }}
              >
                요청
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Paper
        elevation={5}
        sx={(theme) => ({
          width: "100%",
          borderRadius: "24px",
          display: "flex",
          position: "relative",
          border: "1px solid #caceccff",
          justifyContent: "space-between",
          boxSizing: "border-box",
          gap: 3,
          flexDirection: "column",
          background: `linear-gradient(to bottom, #e3faed, #ffffff 45%)`,
          [theme.breakpoints.up("desktop")]: {
            flexDirection: "row",
            background: `linear-gradient(to right, #e3faed, #ffffff 45%)`,
          },
        })}
      >
        <ProductSectionLabel
          title="Training"
          sx={(theme) => ({
            position: "absolute",
            top: -16,
            left: 24,
            [theme.breakpoints.up("desktop")]: { left: 64, top: -24 },
          })}
        />
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            px: 3,
            pt: 5,
            [theme.breakpoints.up("desktop")]: {
              pl: 8,
              pr: 0,
              pt: 10,
            },
          })}
        >
          <Box
            sx={(theme) => ({
              width: "100%",
              [theme.breakpoints.up("desktop")]: {
                width: "80%",
              },
            })}
          >
            <Typography
              sx={(theme) => ({
                fontSize: "16px",
                fontFamily: "Freesentation-6-SemiBold",
                whiteSpace: "pre-line",
                wordBreak: "keep-all",
                [theme.breakpoints.up("desktop")]: {
                  fontSize: "25px",
                },
              })}
            >
              {product_form_training}
            </Typography>
          </Box>
          <Box
            sx={(theme) => ({
              display: "flex",
              mt: 4,
              pb: 1,
              justifyContent: "flex-start",
              [theme.breakpoints.up("desktop")]: {
                mt: 8,
                pb: 6,

                justifyContent: "flex-end",
              },
            })}
          >
            <Typography
              sx={(theme) => ({
                fontSize: "18px",
                fontFamily: "Freesentation-8-ExtraBold",
                cursor: "pointer",
                [theme.breakpoints.up("desktop")]: {
                  fontSize: "25px",
                },
              })}
              onClick={() => navigate("/support/training")}
            >
              {`${productName} ${product_form_navigation}`}
            </Typography>
          </Box>
        </Box>
        <Box
          component="img"
          src="/images/pages/support/training/training_page.png"
          sx={(theme) => ({
            maxWidth: "100%",
            objectFit: "contain",
            borderRadius: "24px",
            pr: 0,
            alignSelf: "center",
            [theme.breakpoints.up("desktop")]: {
              pr: 6,
              maxWidth: "30%",
            },
          })}
        />
      </Paper>
    </>
  );
};

export default ProductForm;
