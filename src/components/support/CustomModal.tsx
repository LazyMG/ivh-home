import { Box, Button, Modal } from "@mui/material";

const CustomModal = ({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      autoFocus={false} // 자동 focus 방지
    >
      <Box
        sx={(theme) => ({
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          maxWidth: 600,
          maxHeight: "70%",
          bgcolor: "background.paper",
          p: 3,
          outline: "none",
          borderRadius: "8px",
          [theme.breakpoints.up("tablet")]: {
            p: 8,
          },
        })}
      >
        {children}
        <Button
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 15,
            right: 15,
            width: "20px",
            height: "20px",
            minWidth: "20px",
            minHeight: "20px",
            padding: 0,
            margin: 0,
            color: "black",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          X
        </Button>
      </Box>
    </Modal>
  );
};

export default CustomModal;
