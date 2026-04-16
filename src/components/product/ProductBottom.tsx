import { Box, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";
import { useLocalizedNavigate } from "../../i18n/useLocalizedNavigate";
import GradientBox from "./GradientBox";

const ProductBottom = ({ productName }: { productName: string }) => {
  const { t } = useTranslation("product/product-form" as never);
  const td = (key: string): string => t(key as never);
  const navigate = useLocalizedNavigate();

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
      {productName && (
        <GradientBox title="Training">
          <Box
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              px: 3,
              pt: 5,
              pb: 4,
              gap: 2,
              width: "100%",
              [theme.breakpoints.up("tablet")]: {
                px: 6,
                pt: 8,
                pb: 6,
                gap: 5,
              },
            })}
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
                {td("product_form_training")}
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
                sx={(theme) => ({
                  cursor: "pointer",
                  width: "100%",
                  [theme.breakpoints.up("tablet")]: {
                    width: "auto",
                  },
                })}
                onClick={() => navigate("/support/training")}
              >
                <Typography
                  sx={(theme) => ({
                    fontSize: "16px",
                    fontFamily: "Freesentation-6-SemiBold",
                    color: "#fff",
                    backgroundColor: "#1755C2",
                    px: 1,
                    py: 1,
                    textAlign: "center",
                    [theme.breakpoints.up("tablet")]: {
                      px: 4,
                    },
                  })}
                >
                  {`${productName} ${td("product_form_navigation")}`}
                </Typography>
              </Box>
            </Box>
          </Box>
        </GradientBox>
      )}
    </Box>
  );
};

export default ProductBottom;
