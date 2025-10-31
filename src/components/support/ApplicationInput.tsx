import { Box, TextField } from "@mui/material";
import type { UseFormRegisterReturn } from "react-hook-form";

interface ApplicationInputProps {
  label: string;
  placeholder: string;
  disabled?: boolean;
  shrink?: string;
  children?: React.ReactNode;
  register: UseFormRegisterReturn;
  type?: string;
  onFocus?: () => void;
}
const ApplicationInput = ({
  label,
  placeholder,
  disabled,
  shrink,
  register,
  children,
  type = "text",
  onFocus,
}: ApplicationInputProps) => {
  return (
    <Box sx={{ position: "relative" }}>
      <TextField
        size="small"
        label={label}
        type={type}
        placeholder={placeholder}
        required
        sx={{ width: "100%" }}
        slotProps={{
          inputLabel: {
            shrink: shrink ? true : undefined,
          },
        }}
        disabled={disabled}
        onFocus={onFocus}
        {...register}
      />
      {children}
    </Box>
  );
};

export default ApplicationInput;
