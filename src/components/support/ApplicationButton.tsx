import { Box } from "@mui/material";

interface ApplicationButtonProps {
  children: React.ReactNode;
}

{
  /** 교육 신청 시에 사용하는 인원 추가 및 삭제 버튼 컴포넌트*/
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
        // mx: 1,
      }}
    >
      {children}
    </Box>
  );
};

export default ApplicationButton;
