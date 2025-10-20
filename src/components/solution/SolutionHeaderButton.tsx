import { Box, Typography } from "@mui/material";

// 스크롤 이동 버튼
const SolutionHeaderButton = ({
  text,
  color,
  id,
}: {
  text: string;
  color: string;
  id: string;
}) => {
  // 해당 아이디가 존재할 때 아이디 요소로 이동
  const scrollCallBack = () => {
    document?.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        px: 5,
        py: 1,
        border: `4px solid ${color}`,
        borderRadius: 8,
        display: "flex",
        ":hover": {
          cursor: "pointer",
        },
      }}
      onClick={scrollCallBack}
    >
      <Typography variant="solutionTextTitleFont" color="#3b4551">
        {text}
      </Typography>
    </Box>
  );
};

export default SolutionHeaderButton;
