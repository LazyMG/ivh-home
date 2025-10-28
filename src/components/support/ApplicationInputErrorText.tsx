import { FormHelperText, type SxProps } from "@mui/material";

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
      }}
    >
      {text}
    </FormHelperText>
  );
};

export default ApplicationInputErrorText;
