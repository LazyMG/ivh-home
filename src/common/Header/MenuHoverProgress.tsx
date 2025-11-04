import { Box, Fade } from "@mui/material";
import { useEffect, useState } from "react";
import { headerColors } from "../../theme/headerTheme";
import { previewDurations } from "./previewConstants";

interface MenuHoverProgressProps {
  visible: boolean;
  duration?: number; // 프로그레스 완료까지 걸리는 시간 (ms)
  size?: number; // 프로그레스 링 크기 (px)
  strokeWidth?: number; // 선 두께
  color?: string;
}

export const MenuHoverProgress = ({
  visible,
  duration = previewDurations.progress,
  size = 24,
  strokeWidth = 2.5,
  color = headerColors.home.preview.color,
}: MenuHoverProgressProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!visible) {
      setProgress(0);
      return;
    }

    // 프로그레스 리셋 및 시작
    setProgress(0);
    const startTime = Date.now();
    let animationFrameId: number;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      setProgress(0);
    };
  }, [visible, duration]);

  if (!visible) return null;

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <Fade in={visible} timeout={200}>
      <Box
        sx={{
          position: "absolute",
          right: "8px",
          top: "50%",
          transform: "translateY(-50%)",
          width: `${size}px`,
          height: `${size}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <svg
          width={size}
          height={size}
          style={{
            transform: "rotate(-90deg)",
          }}
        >
          {/* 배경 원 (비어있는 부분) */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            opacity={0.2}
          />
          {/* 진행 원 */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{
              transition: visible ? "none" : "stroke-dashoffset 0.2s ease",
            }}
          />
        </svg>
      </Box>
    </Fade>
  );
};
