import { Box } from "@mui/material";
import main_images from "../../data/solution/mainImage.json";
import ImageIcon from "./ImageIcon";

const SolutionIslandButtons = () => {
  const { ai, energy, home, factory, bems, mobility } = main_images;

  return (
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
        <ImageIcon {...energy} />
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
          zIndex: 10,
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
          zIndex: 10,
        })}
      >
        <ImageIcon {...factory} />
      </Box>

      {/* 세 번째 행: BEMS, Mobility */}
      <Box
        sx={(theme) => ({
          position: "absolute",
          top: "60%",
          left: "24%",
          transform: "translate(-50%, -50%)",
          [theme.breakpoints.up("tablet")]: {
            top: "75%",
            left: "24%",
          },
          [theme.breakpoints.up("desktop")]: {
            top: "75%",
            left: "24%",
          },
          zIndex: 10,
        })}
      >
        <ImageIcon {...bems} />
      </Box>
      <Box
        sx={(theme) => ({
          position: "absolute",
          top: "60%",
          right: "24%",
          transform: "translate(50%, -50%)",
          [theme.breakpoints.up("tablet")]: {
            top: "75%",
            right: "24%",
          },
          [theme.breakpoints.up("desktop")]: {
            top: "75%",
            right: "24%",
          },
        })}
      >
        <ImageIcon {...mobility} />
      </Box>
    </Box>
  );
};
export default SolutionIslandButtons;
