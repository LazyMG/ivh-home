import { Box, Container, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const PrivacyPolicy = () => {
  const handleClose = () => {
    window.close();
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      {/* 헤더 */}
      <Box
        sx={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #e0e0e0",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <Container sx={{ maxWidth: "1200px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontFamily: "Freesentation-6-SemiBold" }}
            >
              iVH 개인정보처리방침
            </Typography>
            <IconButton onClick={handleClose} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* PDF 뷰어 */}
      <Container sx={{ maxWidth: "1200px", py: 4 }}>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            overflow: "hidden",
            height: "calc(100vh - 150px)",
          }}
        >
          <iframe
            src="/documents/private-policy.pdf"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="개인정보처리방침"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
