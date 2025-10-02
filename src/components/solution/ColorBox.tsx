import { Box, Grid, Typography } from "@mui/material";
import type { ColorBoxProps2 } from "../../types/solution";

const ColorBox = (colorBoxProps: ColorBoxProps2) => {
  const { boxColor, arrangement, title, contents } = colorBoxProps;
  if (arrangement === "basic") {
    return (
      <Grid container spacing={15}>
        {title.map((title, index) => (
          <Grid
            size={{ xs: 12, md: 6, lg: 4 }}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                border: `2px solid ${boxColor}`,
                borderRadius: "10px",
                padding: "30px 30px 0px 30px",
              }}
            >
              <Typography>{title}</Typography>
              <Typography sx={{ mt: 4 }}>
                {contents[index].join("\n")}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  } else if (arrangement === "TwoOnOne") {
    return (
      <Grid container rowSpacing={8} columnSpacing={4}>
        {/* 1행 왼쪽 박스 */}
        <Grid
          size={{ xs: 12, md: 6, lg: 6 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              border: `2px solid ${boxColor}`,
              borderRadius: "10px",
              padding: "30px 30px 0px 30px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Freesentation-7-Bold",
                fontSize: "20px",
                fontWeight: "bold",
                color: boxColor,
                mb: 3,
              }}
            >
              {title[0]}
            </Typography>
            {contents[0].map((content, index) => (
              <Typography
                key={index}
                sx={{ fontFamily: "Freesentation-5-Medium", fontSize: "13px" }}
              >
                {content}
              </Typography>
            ))}
          </Box>
        </Grid>
        {/* 1행 오른쪽 박스 */}
        <Grid
          size={{ xs: 12, md: 6, lg: 6 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              border: `2px solid ${boxColor}`,
              borderRadius: "10px",
              padding: "30px 30px 0px 30px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Freesentation-7-Bold",
                fontSize: "20px",
                fontWeight: "bold",
                color: boxColor,
                mb: 3,
              }}
            >
              {title[1]}
            </Typography>
            {contents[1].map((content, index) => (
              <Typography
                key={index}
                sx={{ fontFamily: "Freesentation-5-Medium", fontSize: "13px" }}
              >
                {content}
              </Typography>
            ))}
          </Box>
        </Grid>
        {/* 2행 박스 */}
        <Grid
          size={{ xs: 12 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              border: `2px solid ${boxColor}`,
              borderRadius: "10px",
              padding: "30px 30px 0px 30px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Freesentation-7-Bold",
                fontSize: "16px",
                fontWeight: "bold",
                color: boxColor,
                mb: 3,
              }}
            >
              {title[2]}
            </Typography>
            <Grid container spacing={4}>
              {contents[2].map((content, index) => {
                if (Array.isArray(content)) {
                  return (
                    <Grid size={{ xs: 12, sm: 6 }}>
                      {content.map((item, itemIndex) => {
                        // \n이 포함된 경우 처리
                        if (item.includes("\n")) {
                          return item.split("\n").map((line, lineIndex) => (
                            <Typography
                              key={`${itemIndex}-${lineIndex}`}
                              sx={{
                                fontFamily: "Freesentation-5-Medium",
                                fontSize: "13px",
                              }}
                            >
                              {line}
                            </Typography>
                          ));
                        }
                        // 일반 항목
                        return (
                          <Typography
                            key={itemIndex}
                            sx={{
                              fontFamily: "Freesentation-5-Medium",
                              fontSize: "13px",
                            }}
                          >
                            {item}
                          </Typography>
                        );
                      })}
                    </Grid>
                  );
                } else {
                  return (
                    <Typography
                      key={index}
                      sx={{
                        fontFamily: "Freesentation-5-Medium",
                        fontSize: "13px",
                      }}
                    >
                      {content}
                    </Typography>
                  );
                }
              })}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    );
  } else if (arrangement === "OneOnTwo") {
    return (
      <Grid container spacing={15}>
        {title.map((title, index) => (
          <Grid
            size={{ xs: 12, md: 6, lg: 4 }}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                border: `2px solid ${boxColor}`,
                borderRadius: "10px",
                padding: "30px 30px 0px 30px",
              }}
            >
              <Typography>{title}</Typography>
              <Typography sx={{ mt: 4 }}>
                {contents[index].join("\n")}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  }
};

export default ColorBox;
