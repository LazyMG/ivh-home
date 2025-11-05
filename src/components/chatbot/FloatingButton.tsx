import { Box } from "@mui/material";
import chatbotIcon from "/images/home/chatbot.png";
import { useRef, useState, useEffect } from "react";
import ChatModal from "./ChatModal";
import ChatContent from "./ChatContent";
import styled from "@emotion/styled";

const FloatingButton = ({ isHomePage }: { isHomePage: boolean }) => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeHandlerRef = useRef<(() => void) | null>(null);

  const SCROLL_THRESHOLD = 100;

  useEffect(() => {
    // 홈페이지가 아닐 때만 스크롤 이벤트 리스너 추가
    if (!isHomePage) {
      const handleScroll = () => {
        if (window.scrollY >= SCROLL_THRESHOLD) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isHomePage]);

  const handleFloatingButtonClick = () => {
    if (open) {
      // 모달이 열려있으면 ChatModal의 handleClose를 통해 닫기
      closeHandlerRef.current?.();
    } else {
      // 모달이 닫혀있으면 열기
      setOpen(true);
    }
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: isHomePage
            ? {
                mobilePortrait: 20,
                mobileLandscape: 20,
                tablet: 40,
                desktop: 40,
              }
            : isScrolled
            ? {
                // 스크롤 버튼이 나타났을 때 위로 이동
                mobilePortrait: 60, // 57 + 60(스크롤버튼 높이) + 간격
                mobileLandscape: 60,
                tablet: 75,
                desktop: 75,
              }
            : {
                mobilePortrait: 20,
                mobileLandscape: 20,
                tablet: 40,
                desktop: 40,
              },
          right: isHomePage
            ? {
                mobilePortrait: 20,
                mobileLandscape: 20,
                tablet: 40,
                desktop: 40,
              }
            : {
                mobilePortrait: 18,
                mobileLandscape: 18,
                tablet: 28,
                desktop: 28,
              },
          zIndex: 1999,
          // 모바일 클릭시 파란 배경 제거
          WebkitTapHighlightColor: "transparent",

          transition: "bottom 0.1s ease-in-out",
        }}
      >
        <FloatingButtonImage
          src={chatbotIcon}
          alt="chatbot"
          onClick={handleFloatingButtonClick}
        />
        {/* </Button> */}
      </Box>

      <ChatModal
        open={open}
        onClose={() => setOpen(false)}
        onCloseHandler={(handler) => {
          closeHandlerRef.current = handler;
        }}
      >
        <ChatContent />
      </ChatModal>
    </>
  );
};

const FloatingButtonImage = styled("img")`
  @media (max-width: 845px) {
    width: 40px;
    height: 40px;
  }
  @media (min-width: 846px) {
    width: 60px;
    height: 60px;
  }
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export default FloatingButton;
