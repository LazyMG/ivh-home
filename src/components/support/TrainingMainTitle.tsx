import { Typography } from "@mui/material";
import { FONTS } from "../../theme/theme";

interface TrainingMainTitleProps {
  titleList: {
    text: string;
    font: string;
    color: string;
    size: string;
    backColor: string;
    padding?: string;
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
      component="h1"
      sx={(theme) => ({
        wordBreak: "keep-all",
        zIndex: 1,
        width: "fit-content",
        fontFamily: FONTS.freesentation.bold,
        textAlign: "center",
        maxWidth: "90%",
        [theme.breakpoints.up("desktop")]: {
          maxWidth: "100%",
        },
      })}
    >
      {titleList.map((title, index) => (
        <Typography
          key={index}
          component="span"
          sx={(theme) => ({
            fontSize: title.size,
            color: title.color,
            fontFamily: title.font,
            backgroundColor: title.backColor,
            px: title.padding,
            boxDecorationBreak: "clone",
            WebkitBoxDecorationBreak: "clone",
            [theme.breakpoints.up("desktop")]: {
              fontSize: "50px",
            },
          })}
        >
          {title.text}
        </Typography>
      ))}
    </Typography>
  );
};

export default TrainingMainTitle;
