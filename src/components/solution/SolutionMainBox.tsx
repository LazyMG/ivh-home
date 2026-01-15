import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface SolutionBoxProps {
  imgUrl: string;
  title: string;
  description: string;
  color: string;
  col: {
    desktop: number;
    tablet: number;
    mobile: number;
  };
  row: {
    desktop: number;
    tablet: number;
    mobile: number;
  };
  url: string;
}

const SolutionMainBox = ({
  imgUrl,
  title,
  description,
  color,
  col,
  row,
  url,
}: SolutionBoxProps) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={(theme) => ({
        gridColumn: col.mobile,
        gridRow: row.mobile,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.up("tablet")]: {
          gridColumn: col.tablet,
          gridRow: row.tablet,
        },
        [theme.breakpoints.up("desktop")]: {
          gridColumn: col.desktop,
          gridRow: row.desktop,
        },
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          border: `2px solid ${color}`,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          height: "100%",
          width: "100%",
          cursor: "pointer",
          backgroundColor: "transparent",
          boxShadow: "0 2px 4px rgba(0,0,0,0.25)",
          boxSizing: "border-box",
          ":hover": {
            backgroundColor: color,
            justifyContent: "center",
            pt: 0,
            gap: 0.5,

            "& .idle": {
              display: "none",
            },

            "& .hover-title": {
              display: "block",
            },

            "& .divider": {
              display: "block",
            },

            "& .description": {
              display: "block",
            },

            [theme.breakpoints.up("tablet")]: {
              pt: 3,
              gap: 2,
              justifyContent: "flex-start",
            },
          },
        })}
        onClick={() => navigate(url)}
      >
        <Box
          className="idle"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Box component="img" src={imgUrl} sx={{ width: "35%" }} />
          <Typography
            sx={(theme) => ({
              color,
              fontFamily: "Freesentation-7-Bold",
              fontSize: "14px",
              textAlign: "center",
              [theme.breakpoints.up("tablet")]: {
                fontSize: "20px",
              },
            })}
          >
            {title}
          </Typography>
        </Box>

        <Typography
          className="hover-title"
          sx={(theme) => ({
            display: "none",
            color: "white",
            fontFamily: "Freesentation-7-Bold",
            fontSize: "14px",
            textAlign: "center",
            [theme.breakpoints.up("tablet")]: {
              fontSize: "20px",
            },
          })}
        >
          {title}
        </Typography>

        <Box
          className="divider"
          sx={{
            display: "none",
            width: "80%",
            height: "1px",
            backgroundColor: "white",
          }}
        />
        <Typography
          className="description"
          sx={(theme) => ({
            display: "none",
            color: "white",
            fontFamily: "Freesentation-5-Medium",
            textAlign: "center",
            fontSize: "10px",
            whiteSpace: "pre-line",
            maxWidth: "80%",
            [theme.breakpoints.up("tablet")]: {
              fontSize: "14px",
            },
          })}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default SolutionMainBox;
