import { Box, Typography } from "@mui/material";
import youtubeBlack from "/images/header/youtube_black.png";
import linkedinBlack from "/images/header/linkedin_black.png";
import footer from "../../data/footer/footer.json";
import search_icon from "/images/header/search_icon.png";

export const DrawerFixedArea = () => {
  const { companyInfo } = footer;
  return (
    <Box
      sx={{
        pl: 6,
        pb: 4,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          height: "100%",
          width: "70%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img
            src={youtubeBlack}
            alt="youtube"
            style={{
              width: "36px",
              height: "36px",
              cursor: "pointer",
            }}
            onClick={() => window.open(companyInfo.socialMedia.youtubeUrl)}
          />
          <img
            src={linkedinBlack}
            alt="linkedin"
            style={{
              width: "30px",
              height: "30px",
              cursor: "pointer",
            }}
            onClick={() => window.open(companyInfo.socialMedia.linkedinUrl)}
          />
        </Box>
        <Box
          sx={{
            mt: 1,
            mb: 2,
            position: "relative",
            backgroundColor: "blue",
            height: "fit-content",
          }}
        >
          <input
            type="text"
            style={{
              width: "100%",
              border: "2px solid #000000",
              height: "40px",
              backgroundColor: "#ffffff",
              padding: "2px 24px 2px 8px",
              boxSizing: "border-box",
              fontSize: "16px",
            }}
          />
          <Box
            component="img"
            src={search_icon}
            sx={{
              position: "absolute",
              right: 10,
              top: 0,
              bottom: 0,
              my: "auto",
              width: "14px",
              height: "14px",
              cursor: "pointer",
            }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          <Typography
            sx={{ fontSize: "14px", fontFamily: "Freesentation-4-Regular" }}
          >
            {companyInfo.phone}
          </Typography>
          <Typography
            sx={{ fontSize: "14px", fontFamily: "Freesentation-4-Regular" }}
          >
            {companyInfo.email}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "Freesentation-4-Regular",
              wordBreak: "keep-all",
              whiteSpace: "pre-wrap",
            }}
          >
            {companyInfo.address}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
