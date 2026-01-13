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
          width: "90%",
          cursor: "pointer",
          backgroundColor: "transparent",
          boxShadow: "0 2px 4px rgba(0,0,0,0.25)",
          ":hover": {
            backgroundColor: color,
            gap: 2,

            "& img": {
              display: "none",
            },

            "& .MuiTypography-root": {
              color: "white",
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
            fontFamily: "Freesentation-5-Medium",
            textAlign: "center",
            fontSize: "14px",
            whiteSpace: "pre-line",
            wordBreak: "keep-all",
            px: 0.5,
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default SolutionMainBox;
