import { Box, Typography } from "@mui/material";
import logoBlack from "/images/header/ivh_logo_black.png";
import footer from "../../data/footer/footer.json";

interface FooterCompanyInfoProps {
  navigate: (path: string) => void;
}

// 푸터 왼쪽: 로고 · 회사명 · 주소/연락처 · 소셜 · 카피라이트
const FooterCompanyInfo = ({ navigate }: FooterCompanyInfoProps) => {
  const { companyName, address, phone, email, copyright, socialMedia } =
    footer.companyInfo;
  const { youtubeUrl, linkedinUrl, youtubeLogoBlack, linkedinLogoBlack } =
    socialMedia;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "10px",
        }}
      >
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
          aria-label="iVH 홈으로 이동"
          style={{ display: "inline-flex" }}
        >
          <img
            src={logoBlack}
            alt="iVH 로고"
            style={{
              width: "88px",
              marginRight: "10px",
              cursor: "pointer",
            }}
          />
        </a>
        <Typography
          sx={{
            fontSize: "16px",
            fontFamily: "Freesentation-5-Medium",
            color: "black",
            height: "24px",
            lineHeight: "34px",
          }}
          component="p"
        >
          {companyName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: "Freesentation-4-Regular",
              color: "black",
            }}
            component="p"
          >
            {address}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              mb: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: "Freesentation-4-Regular",
                color: "black",
              }}
              component="p"
            >
              <Box component="span" sx={{ fontFamily: "Freesentation-7-Bold" }}>
                T.
              </Box>{" "}
              {phone}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: "Freesentation-4-Regular",
                color: "black",
              }}
              component="p"
            >
              <Box component="span" sx={{ fontFamily: "Freesentation-7-Bold" }}>
                E.
              </Box>{" "}
              {email}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            <img
              onClick={() => window.open(linkedinUrl)}
              src={linkedinLogoBlack}
              alt="linkedin"
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
            />
            <img
              onClick={() => window.open(youtubeUrl)}
              src={youtubeLogoBlack}
              alt="youtube"
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
            />
          </Box>

          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: "Freesentation-4-Regular",
              color: "black",
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

export default FooterCompanyInfo;
