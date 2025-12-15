import { Box, Divider, Typography } from "@mui/material";
import iMOVA from "../../data/product/iMOVA.json";

const IMOVA = () => {
  const { main_image, title_image, title, name, main_function } = iMOVA;
  return (
    <Box
      component="main"
      sx={(theme) => ({
        ...theme.customStyles.productPageContainer,
        position: "relative",
      })}
    >
      <Box
        sx={{
          position: "sticky",
          top: 256,
          width: "200px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ padding: "16px", border: "1px solid black" }}>
          <Typography>개요</Typography>
        </Box>
        <Box sx={{ padding: "16px", border: "1px solid black" }}>
          <Typography>주요기능</Typography>
        </Box>
        <Box sx={{ padding: "16px", border: "1px solid black" }}>
          <Typography>지능형 관제 시스템</Typography>
        </Box>
        <Box sx={{ padding: "16px", border: "1px solid black" }}>
          <Typography>활용 사례</Typography>
        </Box>
        <Box sx={{ padding: "16px", border: "1px solid black" }}>
          <Typography>기술 사양</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: 56,
          paddingRight: 24,
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ display: "flex", paddingLeft: 24 }}>
          <Box component="img" src={main_image} />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            gap: 30,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box component="img" src={title_image} />
            <Typography sx={{ textAlign: "center" }}>{name}</Typography>
          </Box>
          <Typography>{title}</Typography>
        </Box>
        <Divider />
        <Box>
          <Typography>주요 기능</Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 3,
            }}
          >
            {main_function.map((func) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box component="img" src={func.function_image_url} />
                <Box>
                  <Typography>{func.function_title}</Typography>
                  <Typography>{func.function_description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IMOVA;
