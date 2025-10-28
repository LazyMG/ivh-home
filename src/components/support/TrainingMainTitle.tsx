import { Typography } from "@mui/material";

interface TrainingMainTitleProps {
  titleList: {
    text: string;
    font: string;
    color: string;
  }[];
  children?: React.ReactNode;
}

const TrainingMainTitle = ({ children, titleList }: TrainingMainTitleProps) => {
  return (
    <Typography
      sx={{
        ml: "10%",
        wordBreak: "keep-all",
        zIndex: 1,
        position: "relative",
        width: "fit-content",
        fontFamily: "Freesentation-6-SemiBold",
      }}
    >
      {titleList.map((title, index) => (
        <Typography
          key={index}
          component="span"
          sx={(theme) => ({
            fontSize: "18px",
            [theme.breakpoints.up("tablet")]: {
              fontSize: "32px",
            },
            color: title.color,
            fontFamily: title.font,
          })}
        >
          {title.text}
        </Typography>
      ))}
      {children}
    </Typography>
  );
};

export default TrainingMainTitle;
