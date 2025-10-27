import { Fab, Slide } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { useEffect, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

const ScrollButton = ({
  color = "#000000",
  threshold,
  show,
}: {
  color?: string;
  threshold: number;
  show?: boolean;
}) => {
  const isMobile = useIsMobile();

  // 항상 보이거나 모바일 화면에서만 보이도록 설정
  const defaultShowing = show || isMobile;

  // 최상단 스크롤을 위한 스크롤 버튼 노출 상태
  const [isShow, setIsShow] = useState(false);

  // 화면의 스크롤 위치에 따라 스크롤 버튼 노출 감지
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 화면의 스크롤이 threshold보다 커지면 스크롤 버튼 노출
  const handleScroll = () => {
    if (window.scrollY >= threshold) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  // 항상 보이거나 모바일 화면이 아니라면 렌더하지 않음
  if (!defaultShowing) return null;

  return (
    <Slide direction="up" in={isShow} mountOnEnter unmountOnExit>
      <Fab
        sx={(theme) => ({
          position: "fixed",
          bottom: "1rem",
          right: "10px",
          scale: 0.6,

          [theme.breakpoints.up("tablet")]: {
            right: "30px",
            scale: 0.8,
          },
          [theme.breakpoints.up("laptop")]: {
            right: "30px",
            scale: 1,
          },
          backgroundColor: "#ffffff",
          ":hover": {
            backgroundColor: color,
            color: "#ffffff",
          },
        })}
        onClick={() => {
          // 스크롤 상단으로 이동하는 함수
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <ArrowUpwardIcon />
      </Fab>
    </Slide>
  );
};
export default ScrollButton;
