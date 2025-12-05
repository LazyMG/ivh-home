import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
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
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setIsTooltipOpen(false);
      }
    };

    if (isTooltipOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isTooltipOpen]);

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
          position: "relative",
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
        onClick={() => {
          navigate(path);
        }}
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
        {/* {isTooltipOpen && (
          <Box
            ref={tooltipRef}
            sx={(theme) => ({
              position: "absolute",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              borderRadius: "12px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              border: `2px solid ${color}`,
              zIndex: 1000,
              animation: "fadeInSlide 0.3s ease-out",
              // 모바일 스타일
              top: "calc(100% + 12px)",
              left: "50%",
              transform: "translateX(-50%)",
              minWidth: "120px",
              padding: "8px",
              "@keyframes fadeInSlide": {
                from: {
                  opacity: 0,
                  transform: "translateX(-50%) translateY(-10px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateX(-50%) translateY(0)",
                },
              },
              "&::before": {
                content: '""',
                position: "absolute",
                left: "50%",
                top: "-10px",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderBottom: `10px solid ${color}`,
                borderTop: 0,
                [theme.breakpoints.up("desktop")]: {
                  left: "-8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  borderLeft: 0,
                  borderRight: `8px solid ${color}`,
                  borderTop: "8px solid transparent",
                  borderBottom: "8px solid transparent",
                },
              },
              // 데스크탑 스타일
              [theme.breakpoints.up("desktop")]: {
                top: "50%",
                left: "calc(100% + 16px)",
                transform: "translateY(-50%)",
                minWidth: "200px",
                padding: "16px",
                animation: "fadeInSlideDesktop 0.3s ease-out",
                "@keyframes fadeInSlideDesktop": {
                  from: {
                    opacity: 0,
                    transform: "translateY(-50%) translateX(-10px)",
                  },
                  to: {
                    opacity: 1,
                    transform: "translateY(-50%) translateX(0)",
                  },
                },
              },
            })}
          >
            {mobilityData.map((data, index) => (
              <Box
                key={index}
                sx={(theme) => ({
                  color,
                  fontFamily: "Freesentation-5-Medium",
                  fontSize: "10px",
                  padding: "8px 6px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  wordBreak: "keep-all",
                  textAlign: "center",
                  "&:hover": {
                    backgroundColor: `${color}15`,
                    fontFamily: "Freesentation-7-Bold",
                  },
                  [theme.breakpoints.up("desktop")]: {
                    fontSize: "16px",
                    padding: "12px 8px",
                    borderRadius: "8px",
                    textAlign: "left",
                    "&:hover": {
                      backgroundColor: `${color}15`,
                      transform: "translateX(4px)",
                      fontFamily: "Freesentation-7-Bold",
                    },
                  },
                })}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(data.path);
                  setIsTooltipOpen(false);
                }}
              >
                {data.title}
              </Box>
            ))}
          </Box>
        )} */}
      </Box>
    </Box>
  );
};

export default ImageIcon;
