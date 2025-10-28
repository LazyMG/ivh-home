import { Typography } from "@mui/material";

interface TrainingMainTitleProps {
  titleList: {
    text: string;
    font: string;
    color: string;
  }[];
  children?: React.ReactNode;
}

{
  /** Training 페이지의 제목 컴포넌트 */
}
{
  /** JSON 파일에서 폰트와 굵기 정보를 가져옴 */
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
