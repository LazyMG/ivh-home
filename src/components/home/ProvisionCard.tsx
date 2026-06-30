import { Box, Typography } from "@mui/material";
import { FONTS } from "../../theme/theme";

interface ProvisionCardProps {
  icon: string;
  title: string;
  description: string;
  onMore?: () => void;
}

// Provision 섹션의 반복 카드 (아이콘 → 제목 → 설명 → MORE 버튼)
const ProvisionCard = ({
  icon,
  title,
  description,
  onMore,
}: ProvisionCardProps) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        px: 4,
      }}
    >
      {/* 콘텐츠 컬럼 (제한 폭, 카드 가운데). 아이콘·제목은 가운데, 설명은 왼쪽 */}
      <Box
        sx={{
          maxWidth: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        {/* 아이콘 */}
        <Box
          component="img"
          src={icon}
          alt={title}
          sx={{ width: 72, height: 72, objectFit: "contain" }}
        />

        {/* 제목 */}
        <Typography
          sx={{
            fontFamily: FONTS.galderglynn.regular,
            fontSize: "22px",
            color: "#03193F",
            textTransform: "uppercase",
          }}
        >
          {title}
        </Typography>

        {/* 설명 - 컬럼 폭을 채우며 왼쪽 정렬 */}
        <Typography
          sx={{
            width: "100%",
            fontFamily: FONTS.freesentation.regular,
            fontSize: "16px",
            color: "#424242",
            wordBreak: "keep-all",
            textAlign: "left",
          }}
        >
          {description}
        </Typography>
      </Box>

      {/* MORE 버튼 - 하단 우측 (mt:auto 로 카드 바닥에 정렬) */}
      <Box
        sx={{
          width: "100%",
          mt: "auto",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Box
          component="button"
          onClick={onMore}
          sx={{
            position: "relative",
            width: 150,
            height: 32,
            border: "none",
            cursor: "pointer",
            // 왼쪽 짧은 흰색 꼬리 → 남색
            background: "linear-gradient(to right, #FFFFFF 10%, #03193F 41%)",
            transition: "opacity 0.2s",
            "&:hover": { opacity: 0.9 },
          }}
        >
          {/* 텍스트는 absolute 로 오른쪽에 고정 */}
          <Box
            sx={{
              position: "absolute",
              right: 12,
              top: "50%",
              transform: "translateY(-50%)",
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "#FFFFFF",
              fontFamily: FONTS.galderglynn.book,
              fontSize: "17px",
              letterSpacing: "0.1em",
              whiteSpace: "nowrap",
            }}
          >
            MORE
            {/* 화살표는 기본 폰트로 렌더 (Freesentation 상속 시 글리프가 짧게 보임) */}
            <Box
              component="span"
              sx={{ fontFamily: (theme) => theme.typography.fontFamily }}
            >
              →
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProvisionCard;
