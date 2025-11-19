import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ImageIconProps {
  src: string;
  text: string;
  color: string;
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
  textPosition: string;
  path: string;
  animationDelay?: number;
}

{
  /** Solution 메인 페이지에 사용되는 아이콘 */
}
{
  /** JSON 파일 구조를 바탕으로 아이콘 구성 */
}
const ImageIcon = (icon: ImageIconProps) => {
  const {
    src,
    text,
    color,
    flexDirection,
    justifyContent,
    alignItems,
    textPosition,
    path,
    animationDelay = 0,
  } = icon;

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        animation: "float 3s ease-in-out infinite",
        animationDelay: `${animationDelay}s`,
        "@keyframes float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-8px)",
          },
        },
      }}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          justifyContent,
          alignItems: "center",
          gap: 0.5,
          cursor: "pointer",
          transition: "transform 0.5s ease",
          "&:hover": {
            transform: "scale(1.1)",
          },
          [theme.breakpoints.up("desktop")]: {
            flexDirection,
            alignItems,
          },
        })}
        onClick={() => navigate(path)}
      >
        {textPosition === "left" && (
          <Typography
            sx={(theme) => ({
              color,
              fontFamily: "Freesentation-7-Bold",
              lineHeight: 1,
              fontSize: "12px",
              [theme.breakpoints.up("desktop")]: {
                fontSize: "24px",
              },
            })}
          >
            {text}
          </Typography>
        )}
        <img src={src} style={{ width: "4vw" }} />
        {textPosition === "right" && (
          <Typography
            sx={(theme) => ({
              color,
              fontFamily: "Freesentation-7-Bold",
              lineHeight: 1.1,
              fontSize: "12px",
              width: "70%",
              [theme.breakpoints.up("desktop")]: {
                fontSize: "24px",
                width: "100%",
              },
            })}
          >
            {text}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ImageIcon;
