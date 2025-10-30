import { Alert, CircularProgress, Snackbar } from "@mui/material";

interface CustomSnackbarProps {
  submitStatus: "loading" | "success" | "error" | null;
  snackbarMessage: string;
  handleCloseSnackbar: () => void;
}

const CustomSnackbar = ({
  submitStatus,
  snackbarMessage,
  handleCloseSnackbar,
}: CustomSnackbarProps) => {
  return (
    <>
      {/** 신청 요청을 보낼 때 발생한 에러 보여주는 스낵바 */}
      {/** 에러 문구 출력 필요 */}
      <Snackbar
        open={submitStatus === "loading"}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity="info"
          variant="filled"
          sx={{
            width: "20%",
            minWidth: "300px",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
          icon={<CircularProgress size={24} sx={{ color: "white" }} />}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <Snackbar
        open={submitStatus === "success"}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: "20%", minWidth: "300px" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <Snackbar
        open={submitStatus === "error"}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          variant="filled"
          sx={{ width: "20%", minWidth: "300px" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CustomSnackbar;
