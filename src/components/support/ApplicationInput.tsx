import { Box, TextField } from "@mui/material";
import type { UseFormRegisterReturn } from "react-hook-form";

interface ApplicationInputProps {
  label: string;
  placeholder: string;
  disabled?: boolean;
  shrink?: string;
  children?: React.ReactNode;
  register: UseFormRegisterReturn;
}
const ApplicationInput = ({
  label,
  placeholder,
  disabled,
  shrink,
  register,
  children,
}: ApplicationInputProps) => {
  return (
    <Box sx={{ position: "relative" }}>
      <TextField
        size="small"
        label={label}
        placeholder={placeholder}
        required
        sx={{ width: "100%" }}
        slotProps={{
          inputLabel: {
            shrink: shrink ? true : undefined,
          },
        }}
        disabled={disabled}
        {...register}
      />
      {children}
    </Box>
  );
};

export default ApplicationInput;
