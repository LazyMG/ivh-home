import { Box, Stack, Typography } from "@mui/material";
import partner from "../../data/company/partner.json";
import ImageHeader from "../../components/company/ImageHeader";
import CustomerContainer from "../../components/company/CustomerContainer";

interface CustomerListObj {
  src: string;
  maxWidth: string;
}

const Partner = () => {
  const {
    parnter_image,
    parnter_parnter,
    parnter_parnterList,
    parnter_customer,
    parnter_customerList,
    parnter_image_position,
  } = partner;

  const { customer_company, customer_institution, customer_education } =
    parnter_customerList;

  // 작은 화면용: 3개씩 chunk로 나누기
  const chunkArray = (arr: CustomerListObj[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const companyMobileChunks = chunkArray(
    customer_company.flatMap((c) => c.list),
    3
  );

  const institutionMobileChunks = chunkArray(
    customer_institution.flatMap((c) => c.list),
    3
  );

  const educationMobileChunks = chunkArray(
    customer_education.flatMap((c) => c.list),
    3
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", mb: 20 }}>
      <Box
        sx={(theme) => ({
          px: "20px",
          pt: "20px",
          [theme.breakpoints.up("tablet")]: {
            p: 0,
          },
        })}
      >
        <ImageHeader
          imgUrl={parnter_image}
          imgPosition={parnter_image_position}
        />
      </Box>

      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          gap: 24,
          my: 10,
          px: "16px",
          pt: "20px",
          [theme.breakpoints.up("tablet")]: {
            px: 10,
          },
          [theme.breakpoints.up("desktop")]: {
            pt: "50px",
            px: 30,
          },
        })}
      >
        <Stack gap={3}>
          <Typography
            sx={(theme) => ({
              textTransform: "uppercase",
              whiteSpace: "pre-line",
              fontFamily: "Freesentation-7-Bold",
              letterSpacing: "4px",
              color: "#3e3e45",
              fontSize: "24px",
              [theme.breakpoints.up("tablet")]: {
                fontSize: "28px",
              },
              [theme.breakpoints.up("desktop")]: {
                fontSize: "30px",
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
              fontFamily: "Freesentation-7-Bold",
              letterSpacing: "4px",
              color: "#3e3e45",
              fontSize: "24px",
              [theme.breakpoints.up("tablet")]: {
                fontSize: "28px",
              },
              [theme.breakpoints.up("desktop")]: {
                fontSize: "30px",
              },
            })}
          >
            {parnter_customer}
          </Typography>
          <Box
            // component="ul"
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
            }}
          >
            <CustomerContainer
              chunkList={companyMobileChunks}
              customerList={customer_company}
            />
            <CustomerContainer
              chunkList={institutionMobileChunks}
              customerList={customer_institution}
            />
            <CustomerContainer
              chunkList={educationMobileChunks}
              customerList={customer_education}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Partner;
