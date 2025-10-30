import { Box, Typography } from "@mui/material";
import footer from "../../data/footer/footer.json";
import logoWhite from "/images/header/ivh_logo_white.png";
import { useNavigate } from "react-router-dom";

const MobileFooter = () => {
  const { compantInfo } = footer;
  const { companyName, address, phone, email, copyright, socialMedia } =
    compantInfo;
  const { youtubeLogo, linkedinLogo, youtubeUrl, linkedinUrl } = socialMedia;
  const navigate = useNavigate();
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "white",
        backgroundColor: "black",
        py: 3,
        px: 8,
      }}
    >
      {/** 로고 영역 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <img
          src={logoWhite}
          alt="logo"
          style={{
            width: "56px",
            height: "22.7px",
            marginRight: "10px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        />
        <Typography
          sx={{
            fontSize: "14px",
            fontFamily: "Freesentation-6-SemiBold",
            color: "white",
            height: "24px",
            lineHeight: "34px",
          }}
          component="p"
        >
          {companyName}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 4 }}>
        {/** 소셜 미디어 영역 */}
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <img
            onClick={() => window.open(youtubeUrl)}
            src={youtubeLogo}
            alt="youtube"
            style={{ width: "35px", height: "35px", cursor: "pointer" }}
          />
          <img
            onClick={() => window.open(linkedinUrl)}
            src={linkedinLogo}
            alt="linkedin"
            style={{ width: "35px", height: "35px", cursor: "pointer" }}
          />
        </Box>
        {/** 주소 및 부가 정보 영역 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 2,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "Freesentation-4-Regular",
              color: "white",
            }}
            component="p"
          >
            {address}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              mb: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Freesentation-4-Regular",
                color: "white",
              }}
              component="p"
            >
              {phone}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Freesentation-4-Regular",
                color: "white",
              }}
              component="p"
            >
              {email}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "Freesentation-4-Regular",
              color: "white",
            }}
            component="p"
          >
            {copyright}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileFooter;
