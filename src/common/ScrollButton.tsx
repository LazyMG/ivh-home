import { Fab, Slide } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { useEffect, useState } from "react";

const ScrollButton = ({ color }: { color: string }) => {
  // 최상단 스크롤을 위한 스크롤 버튼 노출 상태
  const [isShow, setIsShow] = useState(false);

  // 화면의 스크롤 위치에 따라 스크롤 버튼 노출 감지
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 화면의 스크롤이 643보다 커지면 스크롤 버튼 노출
  const handleScroll = () => {
    if (window.scrollY >= 643) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };
  return (
    <Slide direction="up" in={isShow} mountOnEnter unmountOnExit>
      <Fab
        sx={(theme) => ({
          position: "fixed",
          bottom: "1rem",
          right: "20px",
          [theme.breakpoints.up("tablet")]: {
            right: "30px",
          },
          [theme.breakpoints.up("laptop")]: {
            right: "30px",
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
