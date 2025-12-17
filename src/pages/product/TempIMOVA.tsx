import { Box, Divider, Typography } from "@mui/material";
import iMOVA from "../../data/product/iMOVA.json";

const TempIMOVA = () => {
  const { main_image, title_image, title, name, main_function } = iMOVA;
  return (
    <Box
      component="main"
      sx={(theme) => ({
        ...theme.customStyles.productPageContainer,
        display: "flex",
        gap: 16,
        boxSizing: "border-box",
        // mr: 20,
      })}
    >
      <Box
        sx={{
          position: "sticky",
          top: 256,
          width: "200px",
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
          left: 80,
        }}
      >
        <Box
          sx={{
            padding: "16px",
            borderBottom: "1px solid #e0e0e0",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#000",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              "& .MuiTypography-root": {
                color: "#fff",
                paddingLeft: "8px",
              },
            },
          }}
        >
          <Typography>개요</Typography>
        </Box>
        <Box
          sx={{
            padding: "16px",
            borderBottom: "1px solid #e0e0e0",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#000",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              "& .MuiTypography-root": {
                color: "#fff",
                paddingLeft: "8px",
              },
            },
          }}
        >
          <Typography>주요기능</Typography>
        </Box>
        <Box
          sx={{
            padding: "16px",
            borderBottom: "1px solid #e0e0e0",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#000",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              "& .MuiTypography-root": {
                color: "#fff",
                paddingLeft: "8px",
              },
            },
          }}
        >
          <Typography>지능형 관제 시스템</Typography>
        </Box>
        <Box
          sx={{
            padding: "16px",
            borderBottom: "1px solid #e0e0e0",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#000",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              "& .MuiTypography-root": {
                color: "#fff",
                paddingLeft: "8px",
              },
            },
          }}
        >
          <Typography>활용 사례</Typography>
        </Box>
        <Box
          sx={{
            padding: "16px",
            borderBottom: "1px solid #e0e0e0",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#000",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              "& .MuiTypography-root": {
                color: "#fff",
                paddingLeft: "8px",
              },
            },
          }}
        >
          <Typography>기술 사양</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          position: "relative",
          minWidth: 0,
        }}
      >
        <Box sx={{ display: "flex", position: "absolute", right: "5%" }}>
          <Box component="img" src={main_image} sx={{ objectFit: "contain" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            gap: 30,
            mt: 72,
            mr: 20,
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
        <Divider sx={{ mt: 12, mb: 24 }} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4, mr: 20 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 4 }}>
            주요 기능
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(2, auto)",
              width: "100%",
              justifyContent: "center",
              rowGap: 8,
            }}
          >
            {main_function.map((func, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "40px 20px",
                  position: "relative",
                  boxSizing: "border-box",
                  justifyContent: index < 3 ? "start" : "end",
                  "&::after":
                    index % 3 !== 2
                      ? {
                          content: '""',
                          position: "absolute",
                          right: 0,
                          top: 0,
                          bottom: 0,
                          width: "1px",
                          backgroundColor: "#e0e0e0",
                        }
                      : {},
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "230px",
                  }}
                >
                  <Box
                    component="img"
                    src={func.function_image_url}
                    sx={{
                      mb: 3,
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        mb: 2,
                        textAlign: "center",
                      }}
                    >
                      {func.function_title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        lineHeight: 1.6,
                      }}
                    >
                      {func.function_description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TempIMOVA;
