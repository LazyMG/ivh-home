import { Box } from "@mui/material";
import chatbotIcon from "/images/home/chatbot.png";
import { useRef, useState } from "react";
import ChatModal from "./ChatModal";
import ChatContent from "./ChatContent";
import styled from "@emotion/styled";

const FloatingButton = () => {
  const [open, setOpen] = useState(false);
  const closeHandlerRef = useRef<(() => void) | null>(null);

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
          bottom: {
            mobilePortrait: 20,
            mobileLandscape: 20,
            tablet: 40,
            desktop: 40,
          },
          right: {
            mobilePortrait: 20,
            mobileLandscape: 20,
            tablet: 40,
            desktop: 40,
          },
          zIndex: 1999,
          // 모바일 클릭시 파란 배경 제거
          WebkitTapHighlightColor: "transparent",
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
  width: 60px;
  height: 60px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export default FloatingButton;
