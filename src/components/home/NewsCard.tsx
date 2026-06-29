import { Box, Typography } from "@mui/material";

interface NewsCardProps {
  image?: string;
  title: string;
  date: string;
  onClick?: () => void;
}

// 뉴스/소식 반복 카드 (이미지 → 점선 구분선 → 제목 → 날짜)
const NewsCard = ({ image, title, date, onClick }: NewsCardProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #03193F",
        borderRadius: "16px",
        boxShadow: "2px 2px 5px 3px rgba(0,0,0,0.25)",
        cursor: onClick ? "pointer" : "default",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        p: 2,
      }}
    >
      {/* 이미지 (카드 높이의 약 1/2, 자체 라운드) — 이미지가 없으면 플레이스홀더 표시 */}
      {image ? (
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "100%",
            aspectRatio: "18 / 11",
            objectFit: "cover",
            borderRadius: "12px",
            display: "block",
          }}
        />
      ) : (
        <Box
          sx={{
            width: "100%",
            aspectRatio: "18 / 11",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #E8EEF7 0%, #D2DEF0 100%)",
            color: "#9DB1D0",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Freesentation-7-Bold",
              fontStyle: "italic",
              fontSize: "32px",
              userSelect: "none",
            }}
          >
            iVH
          </Typography>
        </Box>
      )}

      {/* 가로 점선 구분선 (이미지와 동일 너비) */}
      <Box
        sx={{
          my: 4,
          borderTop: "1px dashed #C9C9C9",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          pb: 2,
          px: 3,
        }}
      >
        {/* 제목 */}
        <Typography
          sx={{
            fontFamily: "Freesentation-6-SemiBold",
            fontSize: "18px",
            color: "#03193F",
            lineHeight: 1.4,
            wordBreak: "keep-all",
          }}
        >
          {title}
        </Typography>

        {/* 날짜 */}
        <Typography
          sx={{
            fontFamily: "Freesentation-6-SemiBold",
            fontSize: "14px",
            color: "#003B8D",
          }}
        >
          | {date} |
        </Typography>
      </Box>
    </Box>
  );
};

export default NewsCard;
