import { Box } from "@mui/material";

interface CustomerListObj {
  src: string;
  maxWidth: string;
}

interface CustomerList {
  layout: string;
  list: CustomerListObj[];
}

const CustomerContainer = ({
  chunkList,
  customerList,
}: {
  chunkList: CustomerListObj[][];
  customerList: CustomerList[];
}) => {
  const getMobileVerticalSizeFormatter = (maxWidth: string) => {
    if (!parseInt(maxWidth.split("%")[0])) return maxWidth;

    const percentage = parseInt(maxWidth.split("%")[0]);
    if (percentage <= 10) {
      return (percentage + 30).toString() + "%";
    } else {
      return (percentage + 70).toString() + "%";
    }
  };

  const getMobileLandScapeSizeFormatter = (maxWidth: string) => {
    if (!parseInt(maxWidth.split("%")[0])) return maxWidth;

    const percentage = parseInt(maxWidth.split("%")[0]);
    if (percentage <= 10) {
      return (percentage + 20).toString() + "%";
    } else {
      return (percentage + 40).toString() + "%";
    }
  };

  const getTabletSizeFormatter = (maxWidth: string) => {
    if (!parseInt(maxWidth.split("%")[0])) return maxWidth;

    const percentage = parseInt(maxWidth.split("%")[0]);
    if (percentage <= 10) {
      return (percentage + 5).toString() + "%";
    } else {
      return (percentage + 10).toString() + "%";
    }
  };

  return (
    <>
      {chunkList.map((chunk, index) => (
        <Box
          key={`mobile-${index}`}
          sx={(theme) => ({
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            width: "100%",
            alignItems: "center",
            boxSizing: "border-box",
            px: 2,
            py: 3,
            borderBottom: "2px solid #caceccff",
            gap: 2,
            [theme.breakpoints.up("tablet")]: {
              display: "none",
            },
          })}
        >
          {chunk.map((customerImg) => (
            <Box
              key={customerImg.src}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "80px",
              }}
            >
              <Box
                component="img"
                src={customerImg.src}
                sx={(theme) => ({
                  width: "100%",
                  maxWidth: getMobileVerticalSizeFormatter(
                    customerImg.maxWidth
                  ),
                  [theme.breakpoints.up("mobileLandscape")]: {
                    maxWidth: getMobileLandScapeSizeFormatter(
                      customerImg.maxWidth
                    ),
                  },
                })}
              />
            </Box>
          ))}
        </Box>
      ))}
      {customerList.map((content, index) => (
        <Box
          key={`desktop-${index}`}
          sx={(theme) => ({
            display: "none",
            [theme.breakpoints.up("tablet")]: {
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: content.layout,
              boxSizing: "border-box",
              height: "160px",
              maxHeight: "160px",
              px: 4,
              borderBottom: "2px solid #caceccff",
              overflow: "hidden",
              gap: content.layout === "start" ? 10 : 0,
            },
          })}
        >
          {content.list.map((customerImg) => (
            <Box
              component="img"
              key={customerImg.src}
              src={customerImg.src}
              sx={(theme) => ({
                width: "20%",
                maxWidth: getTabletSizeFormatter(
                  customerImg.maxWidth || "120px"
                ),
                [theme.breakpoints.up("desktop")]: {
                  width: "70%",
                  maxWidth: customerImg.maxWidth || "120px",
                },
              })}
            />
          ))}
        </Box>
      ))}
    </>
  );
};

export default CustomerContainer;
