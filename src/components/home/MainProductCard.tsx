import { Box, Divider, Typography } from "@mui/material";

interface MainProductCardProps {
  category?: string; // 상단 헤더 (예: HARDWARE)
  image: string;
  title?: string; // 강조 타이틀 (예: iMOVA)
  subtitle?: string; // 보조 타이틀 (예: SERIES)
  description?: string;
  onClick?: () => void;
}

// 메인 제품 소개 카드 (헤더 + 제품 이미지 + 화살표 버튼 + 하단 타이틀/설명)
const MainProductCard = ({
  category = "HARDWARE",
  image,
  title,
  subtitle = "SERIES",
  description = "iMOVA 시리즈는 스마트 제조 환경을 실현하기 위해 개발된 고중량 자율주행 로봇 플랫폼입니다.",
  onClick,
}: MainProductCardProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {/* 카드 프레임 (버튼이 모서리 밖으로 걸칠 수 있도록 overflow visible) */}
      <Box sx={{ position: "relative" }}>
        {/* 라운드/클리핑되는 콘텐츠 (헤더 + 이미지) */}
        <Box
          sx={{
            borderRadius: "0 24px 0 0", // 우측 상단만 라운드
            overflow: "hidden",
          }}
        >
          {/* 헤더 */}
          <Box sx={{ backgroundColor: "#03193F", px: 5, py: 1 }}>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontFamily: "Freesentation-6-SemiBold",
                fontSize: "24px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              {category}
            </Typography>
          </Box>

          {/* 본문 (제품 이미지) - 카드 폭 가득 */}
          <Box
            component="img"
            src={image}
            alt={description}
            sx={{ width: "100%", display: "block" }}
          />
        </Box>

        {/* 화살표 버튼 - 우하단 모서리에 걸침 */}
        <Box
          component="button"
          onClick={onClick}
          sx={{
            position: "absolute",
            right: 0,
            bottom: 0,
            transform: "translate(40%, 40%)", // 모서리 밖으로 더 이동
            width: 100,
            height: 100,
            borderRadius: "50%",
            backgroundColor: "#03193F",
            border: "14px solid #FFFFFF", // 이미지와 분리되는 흰 여백(링)
            backgroundClip: "padding-box", // 테두리(흰 여백) 안쪽만 남색
            color: "#FFFFFF",
            fontSize: 28,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.2s",
            "&:hover": { transform: "translate(40%, 40%) scale(1.05)" },
          }}
        >
          →
        </Box>
      </Box>

      {/* 하단 타이틀 + 설명 (구분선은 풀 폭, 텍스트만 들여쓰기) */}
      <Box>
        <Box sx={{ display: "flex", alignItems: "baseline", gap: 1, pl: 3 }}>
          <Box component="img" src={title} sx={{ width: "128px" }} />
          <Typography
            sx={{
              fontFamily: "Freesentation-7-Bold",
              fontSize: "24px",
              color: "#737373",
            }}
          >
            {subtitle}
          </Typography>
        </Box>
        <Divider sx={{ my: 1, borderColor: "#D0D0D0" }} />
        <Typography
          sx={{
            pl: 3,
            fontFamily: "Freesentation-4-Regular",
            fontSize: "16px",
            color: "#424242",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default MainProductCard;
