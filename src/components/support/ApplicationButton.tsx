import { Box } from "@mui/material";

interface ApplicationButtonProps {
  children: React.ReactNode;
}

const ApplicationButton = ({ children }: ApplicationButtonProps) => {
  return (
    <Box
      sx={{
        borderRadius: "50%",
        width: "20px",
        height: "20px",
        border: "2px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        mx: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default ApplicationButton;
