import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface SolutionBoxProps {
  imgUrl: string;
  title: string;
  description: string;
  color: string;
  col: number;
  row: number;
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
      sx={{
        gridColumn: col,
        gridRow: row,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
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
            justifyContent: "flex-start",
            pt: 3,
            gap: 2,

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
          },
        }}
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
            sx={{
              color,
              fontFamily: "Freesentation-7-Bold",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
        </Box>

        <Typography
          className="hover-title"
          sx={{
            display: "none",
            color: "white",
            fontFamily: "Freesentation-7-Bold",
            fontSize: "20px",
            textAlign: "center",
          }}
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
          sx={{
            display: "none",
            color: "white",
            fontFamily: "Freesentation-5-Medium",
            textAlign: "center",
            fontSize: "14px",
            whiteSpace: "pre-line",
            maxWidth: "80%",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default SolutionMainBox;
