import { FormHelperText, type SxProps } from "@mui/material";

{
  /** 교육 신청 폼에서 사용자의 입력이 올바르지 않을 때 보여주는 에러 문구 컴포넌트 */
}
const ApplicationInputErrorText = ({
  text,
  sx,
}: {
  text: string;
  sx?: SxProps;
}) => {
  return (
    <FormHelperText
      sx={{
        ...sx,
        width: "100%",
        height: "12px",
        position: "absolute",
        color: "red",
        lineHeight: 1.2,
        fontSize: "12px",
      }}
    >
      {text}
    </FormHelperText>
  );
};

export default ApplicationInputErrorText;
