import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import logoBlack from "/images/header/ivh_logo_black.png";
import footer from "../../data/footer/footer.json";
import { FONTS } from "../../theme/theme";

interface FooterCompanyInfoProps {
  navigate: (path: string) => void;
}

// 푸터 왼쪽: 로고 · 회사명 · 주소/연락처 · 소셜 · 카피라이트
const FooterCompanyInfo = ({ navigate }: FooterCompanyInfoProps) => {
  const { t } = useTranslation("footer");
  const { phone, email, copyright, socialMedia } = footer.companyInfo;
  const companyName = t("companyName");
  const address = t("address");
  const { youtubeUrl, linkedinUrl, youtubeLogoBlack, linkedinLogoBlack } =
    socialMedia;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: 1,
          }}
        >
          <Box
            component="a"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            aria-label="iVH 홈으로 이동"
            sx={{ display: "inline-flex" }}
          >
            <Box
              component="img"
              src={logoBlack}
              alt="iVH 로고"
              loading="lazy"
              // 모바일 푸터(<1280)에선 68px, 데스크탑(≥1280)에선 88px
              sx={(theme) => ({
                width: "68px",
                [theme.breakpoints.up("desktop")]: { width: "88px" },
                cursor: "pointer",
              })}
            />
          </Box>
          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: FONTS.freesentation.medium,
              color: "black",
              height: "24px",
              lineHeight: "34px",
            }}
            component="p"
          >
            {companyName}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: FONTS.freesentation.regular,
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
                fontSize: "14px",
                fontFamily: FONTS.freesentation.regular,
                color: "black",
              }}
              component="p"
            >
              <Box
                component="span"
                sx={{ fontFamily: FONTS.freesentation.bold }}
              >
                T.
              </Box>{" "}
              {phone}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: FONTS.freesentation.regular,
                color: "black",
              }}
              component="p"
            >
              <Box
                component="span"
                sx={{ fontFamily: FONTS.freesentation.bold }}
              >
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
            <Box
              component="img"
              onClick={() => window.open(linkedinUrl)}
              src={linkedinLogoBlack}
              alt="linkedin"
              loading="lazy"
              sx={{ width: "40px", height: "40px", cursor: "pointer" }}
            />
            <Box
              component="img"
              onClick={() => window.open(youtubeUrl)}
              src={youtubeLogoBlack}
              alt="youtube"
              loading="lazy"
              sx={{ width: "40px", height: "40px", cursor: "pointer" }}
            />
          </Box>

          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: FONTS.freesentation.regular,
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
