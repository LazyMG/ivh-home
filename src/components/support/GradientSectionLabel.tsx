import { Typography } from "@mui/material";

{
  /** Training 페이지에 사용되는 그라데이션 섹션 제목 컴포넌트 */
}
const GradientSectionLabel = ({ labelText }: { labelText: string }) => {
  return (
    <Typography
      sx={{
        fontFamily: "Freesentation-7-Bold",
        fontSize: "18.7px",
        width: "128px",
        color: "#ffffff",
        px: 2,
        borderRadius: "24px",
        background: "linear-gradient(to right, #28a759 30%, #3167d5)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {labelText}
    </Typography>
  );
};

export default GradientSectionLabel;
