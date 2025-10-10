import { Typography } from "@mui/material";

const SubTitle = ({ subTitle }: { subTitle: string }) => {
  return (
    <Typography
      sx={{
        fontFamily: "Freesentation-7-Bold",
        fontWeight: "700",
        fontSize: "1rem",
      }}
    >
      • {subTitle}
    </Typography>
  );
};

export default SubTitle;
