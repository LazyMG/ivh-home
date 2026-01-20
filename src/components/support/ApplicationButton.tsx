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
        width: "30px",
        height: "30px",
        border: "2px solid #626262",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      {children}
    </Box>
  );
};

export default ApplicationButton;
