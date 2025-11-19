import { Box } from "@mui/material";
// import solutionImage from "/images/pages/solution/solution_main.png";
// import solutionImageMobile from "/images/pages/solution/solution_mobile.png";
import solutionBlankImage from "/images/pages/solution/solution main_blank.png";
import RowNav from "../../components/solution/RowNav";
import { useBreakpoint } from "../../hooks/useBreakpoint";

import main_images from "../../data/solution/mainImage.json";
import ImageIcon from "../../components/solution/ImageIcon";

const Solution = () => {
  const { isMobile } = useBreakpoint();

  const { ai, energy, home, factory, bems, mobility } = main_images;

  return (
    <Box
      component="main"
      sx={(theme) => ({
        ...theme.customStyles.solutionMainContainer,
        minHeight: isMobile ? "calc(100vh - 66px)" : "calc(100vh - 86px)",
        // minHeight: "100vh",
        position: "relative",
      })}
    >
      <Box
        sx={(theme) => ({
          ...theme.customStyles.solutionMainImageContainer,
          position: "relative", // 이미지 컨테이너를 relative로 설정
        })}
      >
        <Box
          component="img"
          // src={isMobile ? solutionImageMobile : solutionBlankImage}
          src={solutionBlankImage}
          alt="solution"
          sx={{
            height: "auto",
            maxHeight: "90vh",
            objectFit: "contain",
            width: "100%",
            display: "block",
          }}
        />

        {/* 버튼들을 이미지 위에 absolute로 배치 */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {/* 첫 번째 행: Energy, AI */}
          <Box
            sx={(theme) => ({
              position: "absolute",
              top: "40%",
              left: "25%",
              transform: "translate(-50%, -50%)",
              [theme.breakpoints.up("tablet")]: {
                top: "25%",
                left: "25%",
              },
              [theme.breakpoints.up("desktop")]: {
                top: "25%",
                left: "25%",
              },
            })}
          >
            <ImageIcon {...energy} animationDelay={1} />
          </Box>
          <Box
            sx={(theme) => ({
              position: "absolute",
              top: "40%",
              right: "25%",
              transform: "translate(50%, -50%)",
              [theme.breakpoints.up("tablet")]: {
                top: "25%",
                right: "25%",
              },
              [theme.breakpoints.up("desktop")]: {
                top: "25%",
                right: "25%",
              },
            })}
          >
            <ImageIcon {...ai} />
          </Box>

          {/* 두 번째 행: Home, Factory */}
          <Box
            sx={(theme) => ({
              position: "absolute",
              top: "50%",
              left: "10%",
              transform: "translate(-50%, -50%)",
              [theme.breakpoints.up("tablet")]: {
                top: "50%",
                left: "20%",
              },
              [theme.breakpoints.up("desktop")]: {
                top: "50%",
                left: "20%",
              },
            })}
          >
            <ImageIcon {...home} />
          </Box>
          <Box
            sx={(theme) => ({
              position: "absolute",
              top: "50%",
              right: "10%",
              transform: "translate(50%, -50%)",
              [theme.breakpoints.up("tablet")]: {
                top: "50%",
                right: "20%",
              },
              [theme.breakpoints.up("desktop")]: {
                top: "50%",
                right: "20%",
              },
            })}
          >
            <ImageIcon {...factory} animationDelay={1} />
          </Box>

          {/* 세 번째 행: BEMS, Mobility */}
          <Box
            sx={(theme) => ({
              position: "absolute",
              top: "60%",
              left: "30%",
              transform: "translate(-50%, -50%)",
              [theme.breakpoints.up("tablet")]: {
                top: "75%",
                left: "30%",
              },
              [theme.breakpoints.up("desktop")]: {
                top: "75%",
                left: "30%",
              },
            })}
          >
            <ImageIcon {...bems} animationDelay={1} />
          </Box>
          <Box
            sx={(theme) => ({
              position: "absolute",
              top: "60%",
              right: "30%",
              transform: "translate(50%, -50%)",
              [theme.breakpoints.up("tablet")]: {
                top: "75%",
                right: "30%",
              },
              [theme.breakpoints.up("desktop")]: {
                top: "75%",
                right: "30%",
              },
            })}
          >
            <ImageIcon {...mobility} />
          </Box>
        </Box>
      </Box>

      <RowNav />
    </Box>
  );
};

export default Solution;
