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
      <ImageHeader imgUrl={parnter_image} />
      <Box
        sx={{
          px: 40,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          my: 20,
        }}
      >
        <Stack gap={3}>
          <Typography
            sx={{
              textTransform: "uppercase",
              whiteSpace: "pre-line",
              fontSize: "36px",
              fontFamily: "Freesentation-6-SemiBold",
              letterSpacing: "4px",
              color: "#3e3e45",
            }}
          >
            {parnter_parnter}
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
            {parnter_parnterList.map((partnerImg, index) => (
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
                  src={partnerImg}
                  style={{ width: "70%", maxWidth: "130px" }}
                />
              </Box>
            ))}
          </Box>
        </Stack>
        <Stack gap={3}>
          <Typography
            sx={{
              textTransform: "uppercase",
              whiteSpace: "pre-line",
              fontSize: "36px",
              fontFamily: "Freesentation-6-SemiBold",
              letterSpacing: "4px",
              color: "#3e3e45",
            }}
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
