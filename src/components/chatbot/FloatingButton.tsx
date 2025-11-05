import { Box, Button } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { useRef, useState } from "react";
import ChatModal from "./ChatModal";
import ChatContent from "./ChatContent";

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
        }}
      >
        <Button
          onClick={handleFloatingButtonClick}
          sx={{
            borderRadius: "50%",
            width: {
              mobilePortrait: 56,
              mobileLandscape: 56,
              tablet: 60,
              desktop: 60,
            },
            height: {
              mobilePortrait: 56,
              mobileLandscape: 56,
              tablet: 60,
              desktop: 60,
            },
            backgroundColor: "#000000",
            "&:hover": {
              backgroundColor: "#333333",
            },
            minWidth: 0,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          }}
        >
          <ChatIcon
            sx={{
              fontSize: {
                mobilePortrait: 28,
                mobileLandscape: 28,
                tablet: 30,
                desktop: 30,
              },
              color: "white",
            }}
          />
        </Button>
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

export default FloatingButton;
