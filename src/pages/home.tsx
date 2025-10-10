import { Box, CssBaseline, Typography } from "@mui/material";
import Menu from "../components/home/Menu";
import bgImg from "../assets/images/home/main-back.jpg";
import youtubeImg from "../assets/images/home/youtube.png";
import linkedinImg from "../assets/images/home/linkedin.png";

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          width: "100dvw",
          height: "100dvh",
          background: `url(${bgImg}) no-repeat top center
    fixed`,
          backgroundSize: "cover",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          position: "relative",
          isolation: "isolate",
          // "&::after": {
          //   content: '""',
          //   position: "absolute",
          //   zIndex: "-1",
          //   inset: "0",
          //   opacity: "0.4",
          //   background: "black",
          // },
        }}
      >
        <Box
          component="main"
          sx={{
            gridColumn: "1 / span 3",
            background: "transparent",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              color: "white",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              pb: {
                xl: "7.5rem",
                xs: "7rem",
              },
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontStyle: "italic",
                fontSize: "2.5rem",
                fontWeight: "700",
                fontFamily: "Presentation",
              }}
              gutterBottom
            >
              Welcome to iVH
            </Typography>
            <Typography
              component="h4"
              sx={{
                lineHeight: 0,
                fontWeight: "500",
                fontFamily: "Presentation",
                fontSize: "1.3rem",
              }}
            >
              안녕하십니까, 아이브이에이치 입니다.
            </Typography>
          </Box>
          <Box
            sx={{
              maxWidth: "100%",
              display: "flex",
              alignItems: "center",
              p: "1.5rem 0",
              pl: "2.9rem",
              fontSize: "0.8rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                mr: {
                  lg: "5rem",
                  md: "1rem",
                },
              }}
            >
              <Box
                component="img"
                src={youtubeImg}
                sx={{
                  width: {
                    md: "40px",
                    xs: "30px",
                  },
                  mr: "1rem",
                }}
                alt="ivh youtube 링크"
              />
              <Box
                component="img"
                src={linkedinImg}
                sx={{
                  width: {
                    md: "40px",
                    xs: "30px",
                  },
                  mr: "1rem",
                }}
                alt="ivh linkedin 링크"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                color: "white",
                justifyContent: "space-around",
                flex: 1,
              }}
            >
              <Box>
                <Typography
                  component="span"
                  sx={{
                    fontSize: {
                      md: "0.8rem",
                      xs: "0.7rem",
                    },
                    fontFamily: "Presentation",
                  }}
                >
                  &copy; iVH(Institute of Vehicle Engineering). All rights
                  reserved.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontSize: {
                      md: "0.8rem",
                      xs: "0.7rem",
                    },
                    fontFamily: "Presentation",
                  }}
                >
                  서울특별시 서초구 양재천로 17길 19,2층,3층 (양재동, 태암빌딩)
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontSize: {
                        md: "0.8rem",
                        xs: "0.7rem",
                      },
                    }}
                  >
                    T . 02-557-5010
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: {
                        md: "0.8rem",
                        xs: "0.7rem",
                      },
                    }}
                  >
                    E . ivh@ivh.co.kr
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Menu />
      </Box>
    </>
  );
};

export default Home;
