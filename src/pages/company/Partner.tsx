import { Box, Stack, Typography } from "@mui/material";
import partner from "../../data/company/partner.json";
import ImageHeader from "../../components/company/ImageHeader";

const Partner = () => {
  const {
    parnter_image,
    parnter_parnter,
    parnter_parnterList,
    parnter_customer,
    parnter_customerList,
  } = partner;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={(theme) => ({
          px: "20px",
          pt: "20px",
          [theme.breakpoints.up("tablet")]: {
            p: 0,
          },
        })}
      >
        <ImageHeader imgUrl={parnter_image} />
      </Box>

      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          gap: 6,
          my: 10,
          px: "16px",
          pt: "20px",
          [theme.breakpoints.up("tablet")]: {
            px: 10,
          },
          [theme.breakpoints.up("desktop")]: {
            pt: "50px",
            px: 40,
          },
        })}
      >
        <Stack gap={3}>
          <Typography
            sx={(theme) => ({
              textTransform: "uppercase",
              whiteSpace: "pre-line",
              fontFamily: "Freesentation-6-SemiBold",
              letterSpacing: "4px",
              color: "#3e3e45",
              fontSize: "24px",
              [theme.breakpoints.up("tablet")]: {
                fontSize: "28px",
              },
              [theme.breakpoints.up("desktop")]: {
                fontSize: "36px",
              },
            })}
          >
            {parnter_parnter}
          </Typography>
          <Box
            component="ul"
            sx={{
              display: "flex",
              justifyContent: "between",
              alignItems: "center",
              flexWrap: "wrap",
              rowGap: 10,
              pl: 0,
            }}
          >
            {parnter_parnterList.map((partnerImg, index) => (
              <Box
                key={index}
                sx={(theme) => ({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50%",
                  [theme.breakpoints.up("desktop")]: {
                    width: "25%",
                  },
                })}
              >
                <img
                  src={partnerImg}
                  style={{ width: "70%", maxWidth: "128px" }}
                />
              </Box>
            ))}
          </Box>
        </Stack>
        <Stack gap={3}>
          <Typography
            sx={(theme) => ({
              textTransform: "uppercase",
              whiteSpace: "pre-line",
              fontFamily: "Freesentation-6-SemiBold",
              letterSpacing: "4px",
              color: "#3e3e45",
              fontSize: "24px",
              [theme.breakpoints.up("tablet")]: {
                fontSize: "28px",
              },
              [theme.breakpoints.up("desktop")]: {
                fontSize: "36px",
              },
            })}
          >
            {parnter_customer}
          </Typography>
          <Box
            component="ul"
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "between",
              flexWrap: "wrap",
              rowGap: 10,
            }}
          >
            {parnter_customerList.map((customerImg, index) => (
              <Box
                key={index}
                sx={{
                  width: "25%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={customerImg}
                  style={{ width: "70%", maxWidth: "130px" }}
                />
              </Box>
            ))}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Partner;
