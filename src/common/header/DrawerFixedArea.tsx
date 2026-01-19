import { Box, Typography } from "@mui/material";
import youtubeBlack from "/images/header/youtube_black.png";
import linkedinBlack from "/images/header/linkedin_black.png";
import footer from "../../data/footer/footer.json";
import search_icon from "../../../public/images/header/search_icon.png";

export const DrawerFixedArea = () => {
  const { companyInfo } = footer;
  return (
    <Box
      sx={{
        px: 6,
        py: 4,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          height: "100%",
          width: "80%",
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
              height: "28px",
              backgroundColor: "#ffffff",
              paddingLeft: "8px",
              paddingRight: "24px",
              boxSizing: "border-box",
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
              width: "12px",
              height: "12px",
              cursor: "pointer",
            }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          <Typography
            sx={{ fontSize: "12px", fontFamily: "Freesentation-4-Regular" }}
          >
            {companyInfo.phone}
          </Typography>
          <Typography
            sx={{ fontSize: "12px", fontFamily: "Freesentation-4-Regular" }}
          >
            {companyInfo.email}
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
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
