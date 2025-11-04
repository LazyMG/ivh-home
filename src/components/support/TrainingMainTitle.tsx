import { Typography } from "@mui/material";

interface TrainingMainTitleProps {
  titleList: {
    text: string;
    font: string;
    color: string;
  }[];
}

{
  /** Training 페이지의 제목 컴포넌트 */
}
{
  /** JSON 파일에서 폰트와 굵기 정보를 가져옴 */
}
const TrainingMainTitle = ({ titleList }: TrainingMainTitleProps) => {
  return (
    <Typography
      sx={(theme) => ({
        wordBreak: "keep-all",
        zIndex: 1,
        position: "relative",
        width: "fit-content",
        fontFamily: "Freesentation-7-Bold",
        ml: 3,
        [theme.breakpoints.up("tablet")]: {
          ml: "10%",
        },
      })}
    >
      {titleList.map((title, index) => (
        <Typography
          key={index}
          component="span"
          sx={(theme) => ({
            fontSize: "24px",
            [theme.breakpoints.up("tablet")]: {
              fontSize: "48px",
            },
            color: title.color,
            fontFamily: title.font,
          })}
        >
          {title.text}
        </Typography>
      ))}
    </Typography>
  );
};

export default TrainingMainTitle;
