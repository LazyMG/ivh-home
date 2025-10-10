import { Typography } from "@mui/material";

const ListText = ({ text }: { text: string }) => {
  return (
    <Typography
      sx={{
        fontFamily: "Freesentation-5-Medium",
        fontWeight: "500",
        fontSize: "14px",
        wordBreak: "keep-all",
        p: "0",
      }}
    >
      {text}
    </Typography>
  );
};

export default ListText;
