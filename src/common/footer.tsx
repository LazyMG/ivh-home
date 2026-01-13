import { Box, Divider, Typography } from "@mui/material";
import logoBlack from "/images/header/ivh_logo_black.png";
import footer from "../data/footer/footer.json";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { compantInfo, menu } = footer;
  const { companyName, address, phone, email, copyright, socialMedia } =
    compantInfo;
  const { youtubeUrl, linkedinUrl, youtubeLogoBlack, linkedinLogoBlack } =
    socialMedia;
  const navigate = useNavigate();

  const handleFooterLevelClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // 정렬을 위한 부모 컨테이너
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "10px",
        backgroundColor: "white",
        minHeight: "400px",
        py: 7,
        px: 20,
        boxShadow: "0 -2px 12px rgba(0,0,0,0.05), 0 -2px 15px rgba(0,0,0,0.1)",
      }}
    >
      {/** 왼쪽, 오른쪽 자식 컨테이너를 정렬하는 컨테이너 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          gap: 8,
        }}
      >
        {/** 왼쪽 회사 정보 영역 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            color: "white",
          }}
        >
          {/** 로고 영역 */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              gap: "10px",
            }}
          >
            <img
              src={logoBlack}
              alt="logo"
              style={{
                width: "64px",
                height: "27.4px",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            />
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: "Freesentation-6-SemiBold",
                color: "black",
                height: "24px",
                lineHeight: "34px",
              }}
              component="p"
            >
              {companyName}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {/** 소셜 미디어 영역 */}
            <Box
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              <img
                onClick={() => window.open(youtubeUrl)}
                src={youtubeLogoBlack}
                alt="youtube"
                style={{ width: "35px", height: "35px", cursor: "pointer" }}
              />
              <img
                onClick={() => window.open(linkedinUrl)}
                src={linkedinLogoBlack}
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
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
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
                  mb: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Freesentation-4-Regular",
                    color: "black",
                  }}
                  component="p"
                >
                  {phone}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Freesentation-4-Regular",
                    color: "black",
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
                  color: "black",
                }}
                component="p"
              >
                {copyright}
              </Typography>
            </Box>
          </Box>
        </Box>
        {/** 오른쪽 메뉴 영역 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "black",
            width: "1000px",
          }}
        >
          {/** 타이틀 행 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              pl: 12,
              mb: 2,
            }}
          >
            {menu.map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: item.title === "PRODUCT & SERVICES" ? 1.5 : 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "19px",
                    fontFamily: "Freesentation-7-Bold",
                    color: "black",
                  }}
                  component="p"
                >
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Box>

          {/** 구분선 */}
          <Divider sx={{ backgroundColor: "white", mb: 2, height: "1px" }} />

          {/** 아이템 행 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              pl: 12,
              my: 3,
            }}
          >
            {menu.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  flex: item.title === "PRODUCT & SERVICES" ? 1.5 : 1,
                }}
              >
                {item.items.map((subItem, subIndex) => {
                  if (subItem?.state === "hide") return null;
                  return (
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: "Freesentation-4-Regular",
                        color: "black",
                        cursor: "pointer",
                      }}
                      key={subIndex}
                      onClick={() =>
                        subItem.path
                          ? navigate(subItem.path)
                          : handleFooterLevelClick()
                      }
                    >
                      {subItem.name}
                    </Typography>
                  );
                })}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
