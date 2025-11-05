import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useEffect, useState } from "react";

const ChatModal = ({
  open,
  onClose,
  onCloseHandler,
  children,
}: {
  open: boolean;
  onClose: () => void;
  onCloseHandler: (handler: () => void) => void;
  children: React.ReactNode;
}) => {
  const { isMobile } = useBreakpoint();
  const [isClosing, setIsClosing] = useState(false);

  // open이 false가 되면 isClosing도 false로 리셋
  useEffect(() => {
    if (open) {
      setIsClosing(false);
    }
  }, [open]);

  const handleClose = () => {
    setIsClosing(true);
    // 애니메이션 시간 후 실제로 닫기 (0.3초)
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  // handleClose를 부모 컴포넌트에 전달
  useEffect(() => {
    if (onCloseHandler) {
      onCloseHandler(handleClose);
    }
  }, []);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: "flex",
        alignItems: { xs: "center", sm: "flex-end" },
        justifyContent: { xs: "center", sm: "flex-end" },
        pointerEvents: "none",
      }}
      BackdropProps={{
        sx: {
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <Box
        sx={{
          position: "fixed",
          // 모바일 (0~845px): 전체 화면
          top: { mobilePortrait: 0, mobileLandscape: 0, tablet: "auto" },
          left: { mobilePortrait: 0, mobileLandscape: 0, tablet: "auto" },
          bottom: { mobilePortrait: 0, mobileLandscape: 0, tablet: 40 },
          right: { mobilePortrait: 0, mobileLandscape: 0, tablet: 120 },
          // 너비/높이
          width: {
            mobilePortrait: "100%",
            mobileLandscape: "100%",
            tablet: "400px",
            desktop: "400px",
          },
          height: {
            mobilePortrait: "100%",
            mobileLandscape: "100%",
            tablet: "600px",
            desktop: "600px",
          },
          maxHeight: {
            mobilePortrait: "100vh",
            mobileLandscape: "100vh",
            tablet: "80vh",
            desktop: "80vh",
          },
          backgroundColor: "#fff",
          borderRadius: {
            mobilePortrait: 0,
            mobileLandscape: 0,
            tablet: "16px",
            desktop: "16px",
          },
          boxShadow: {
            mobilePortrait: "none",
            mobileLandscape: "none",
            tablet: "0 -4px 20px rgba(0, 0, 0, 0.15)",
            desktop: "0 -4px 20px rgba(0, 0, 0, 0.15)",
          },
          display: "flex",
          flexDirection: "column",
          pointerEvents: "auto",
          // 닫힐 때와 열릴 때 애니메이션 분리
          animation: isClosing
            ? "slideDown 0.3s ease-out forwards"
            : isMobile
            ? "slideInFromBottom 0.3s ease-out"
            : "slideUp 0.3s ease-out",
          "@keyframes slideUp": {
            from: {
              transform: "translateY(100%)",
              opacity: 0,
            },
            to: {
              transform: "translateY(0)",
              opacity: 1,
            },
          },
          "@keyframes slideDown": {
            from: {
              transform: "translateY(0)",
              opacity: 1,
            },
            to: {
              transform: "translateY(100%)",
              opacity: 0,
            },
          },
          "@keyframes slideInFromBottom": {
            from: {
              transform: "translateY(100%)",
            },
            to: {
              transform: "translateY(0)",
            },
          },
        }}
      >
        {/* 헤더 */}
        <Box
          sx={{
            padding: "16px 20px",
            borderBottom: "1px solid #e0e0e0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#f8f9fa",
          }}
        >
          <Box sx={{ fontWeight: 600, fontSize: "16px" }}>고객 지원</Box>
          <IconButton onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        {/* 채팅 내용 */}
        {children}
      </Box>
    </Modal>
  );
};

export default ChatModal;
