import { Box, Typography } from "@mui/material";
import section from "../../data/home/section.json";
import { useLocalizedNavigate } from "../../i18n/useLocalizedNavigate";

const ContactTrainingInfoSection = () => {
  const navigate = useLocalizedNavigate();
  const { contact_us } = section;

  return (
    <Box
      sx={(theme) => ({
        px: 4,
        py: 4,
        [theme.breakpoints.up("tablet")]: {
          px: "16%",
          py: 14,
        },
      })}
    >
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#00235F",
          borderRadius: "36px",
          px: 16,
          alignItems: "center",
          position: "relative",
        }}
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
            gap: 2,
          }}
        >
          <Typography
            sx={(theme) => ({
              fontSize: "20px",
              color: "#ffffff",
              textTransform: "uppercase",
              [theme.breakpoints.up("tablet")]: { fontSize: "36px" },
            })}
          >
            {contact_us.title}
          </Typography>
          <Typography
            sx={(theme) => ({
              fontSize: "18px",
              fontFamily: "Freesentation-5-Medium",
              color: "#ffffff",
              [theme.breakpoints.up("tablet")]: {
                fontSize: "16px",
              },
            })}
          >
            {contact_us.text}
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
