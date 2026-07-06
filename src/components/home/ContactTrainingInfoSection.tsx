import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import section from "../../data/home/section.json";
import { useLocalizedNavigate } from "../../i18n/useLocalizedNavigate";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { FONTS } from "../../theme/theme";
import ContactTrainingInfoMobile from "./ContactTrainingInfoMobile";

const ContactTrainingInfoSection = () => {
  const { isMobile } = useBreakpoint();
  const navigate = useLocalizedNavigate();
  const { t } = useTranslation("home");
  const { contact_us } = section;

  // 모바일은 배경/버튼/이미지가 완전히 다른 레이아웃 → 컴포넌트 교체
  if (isMobile) return <ContactTrainingInfoMobile />;

  return (
    <Box
      sx={(theme) => ({
        // 이 레이아웃은 tablet(846) 이상에서만 렌더 (그 아래는 모바일 컴포넌트로 교체)
        // 태블릿은 여백을 줄여 카드 공간 확보, 데스크탑은 넓은 여백 유지
        px: "8%",
        py: 8,
        [theme.breakpoints.up("desktop")]: {
          px: "16%",
          py: 14,
        },
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          backgroundColor: "#00235F",
          borderRadius: "36px",
          px: 8,
          alignItems: "center",
          position: "relative",
          [theme.breakpoints.up("desktop")]: {
            px: 16,
          },
        })}
      >
        <Box
          component="img"
          src="/images/home/contact_image.png"
          sx={{
            width: "40%", // 부모 폭에 맞춤
            height: "auto", // 비율 유지
            display: "block",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography
            sx={(theme) => ({
              fontSize: "20px",
              color: "#ffffff",
              textTransform: "uppercase",
              fontFamily: FONTS.galderglynn.regular,
              [theme.breakpoints.up("tablet")]: { fontSize: "36px" },
            })}
          >
            {t("contact_us.title")}
          </Typography>
          <Typography
            sx={(theme) => ({
              fontSize: "18px",
              fontFamily: FONTS.freesentation.medium,
              color: "#ffffff",
              [theme.breakpoints.up("tablet")]: {
                fontSize: "16px",
              },
            })}
          >
            {t("contact_us.text")}
          </Typography>
        </Box>
        <Box
          component="button"
          sx={{
            position: "absolute",
            zIndex: 999,
            right: -24,
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            cursor: "pointer",
            // 리퀴드 글래스 (피그마 Glass 이펙트 근사)
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(4px)", // frost 4
            WebkitBackdropFilter: "blur(4px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: [
              "5px 3px 4px 0 rgba(0, 0, 0, 0.4)", // 드롭섀도우 (x5 y3 blur4 #000 40%)
              "inset -1.5px 1.5px 2px rgba(255, 255, 255, 0.8)", // light -45, 80% (우상단 광택)
              "inset 1.5px -1.5px 3px rgba(255, 255, 255, 0.15)", // depth 두께감 (반대편)
            ].join(", "),
            color: "#ffffff",
            transition: "transform 0.2s, background-color 0.2s",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              transform: "scale(1.05)",
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => navigate(contact_us.url)}
        >
          <Box
            component="img"
            src="/images/utils/play-button.png"
            sx={{ width: "24px", height: "auto", ml: "4px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactTrainingInfoSection;
