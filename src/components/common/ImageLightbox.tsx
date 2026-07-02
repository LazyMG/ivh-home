import { Box, IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ImageLightboxProps {
  open: boolean;
  onClose: () => void;
  /** 확대해서 보여줄 이미지 URL */
  src: string;
  alt: string;
}

/**
 * 이미지 클릭 → 전체 화면 확대(라이트박스).
 * MUI Modal 기반: 어두운 배경 + 이미지 화면 맞춤(contain).
 * 배경 클릭 / X 버튼 / Esc 로 닫힘(포커스 트랩·스크롤락은 Modal이 처리).
 */
const ImageLightbox = ({ open, onClose, src, alt }: ImageLightboxProps) => {
  return (
    <Modal open={open} onClose={onClose} aria-label={alt}>
      {/* 배경(오버레이) 클릭 시 닫힘 */}
      <Box
        onClick={onClose}
        sx={{
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          outline: "none",
          boxSizing: "border-box",
        }}
      >
        <IconButton
          onClick={onClose}
          aria-label="닫기"
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "#ffffff",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        >
          <CloseIcon />
        </IconButton>
        {/* 이미지 자체 클릭은 닫힘에서 제외 */}
        <Box
          component="img"
          src={src}
          alt={alt}
          onClick={(e) => e.stopPropagation()}
          sx={{
            maxWidth: "95vw",
            maxHeight: "95vh",
            objectFit: "contain",
            boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
          }}
        />
      </Box>
    </Modal>
  );
};

export default ImageLightbox;
