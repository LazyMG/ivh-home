import { Box, Typography } from "@mui/material";
import MainGradientText from "../common/MainGradientText";
import section from "../../data/home/section.json";
import { useNavigate } from "react-router-dom";

const InfoSection = ({
  title,
  text,
  url,
}: {
  title: string;
  text: string;
  url: string;
}) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        gap: 3,
        [theme.breakpoints.up("tablet")]: {
          gap: 6,
        },
      })}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MainGradientText
          sx={(theme) => ({
            fontSize: "18px",
            [theme.breakpoints.up("tablet")]: { fontSize: "36px" },
          })}
        >
          {title}
        </MainGradientText>
        <Box
          sx={(theme) => ({
            pl: 3,
            pr: 2,
            py: "6px",
            backgroundColor: "#1755C2",
            borderRadius: "4px",
            display: "none",
            ":hover": {
              cursor: "pointer",
            },
            [theme.breakpoints.up("tablet")]: {
              display: "block",
            },
          })}
          onClick={() => navigate(url)}
        >
          <Typography
            sx={{ color: "#fff", fontFamily: "Freesentation-5-Medium" }}
          >
            더보기 →
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={(theme) => ({
          fontSize: "14px",
          fontFamily: "Freesentation-5-Medium",
          color: "#424242",
          [theme.breakpoints.up("tablet")]: {
            fontSize: "16px",
          },
        })}
      >
        {text}
      </Typography>
      <Box
        sx={(theme) => ({
          display: "block",
          width: "fit-content",
          alignSelf: "end",
          [theme.breakpoints.up("tablet")]: {
            display: "none",
          },
        })}
      >
        <Box
          sx={{
            px: 2,
            py: "6px",
            backgroundColor: "#1755C2",
            borderRadius: "4px",
            ":hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => navigate(url)}
        >
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Freesentation-5-Medium",
              fontSize: "14px",
            }}
          >
            더보기 →
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const ContactTrainingInfoSection = () => {
  const { contact_us, training } = section;

  return (
    <Box
      sx={(theme) => ({
        px: 4,
        py: 4,
        background:
          "linear-gradient(to left,  rgba(255, 255, 255, 1) 33%,  rgba(243, 243, 243, 1) 100%)",
        display: "grid",
        gridTemplateColumns: "repeat(1,1fr)",
        gap: 6,
        [theme.breakpoints.up("tablet")]: {
          gridTemplateColumns: "repeat(2,1fr)",
          px: "8%",
          py: 14,
          gap: 20,
        },
      })}
    >
      <InfoSection {...contact_us} />
      <InfoSection {...training} />
    </Box>
  );
};

export default ContactTrainingInfoSection;
