import { Box, Divider, Typography } from "@mui/material";
import footer from "../../data/footer/footer.json";

interface FooterMenuProps {
  navigate: (path: string) => void;
}

// 푸터 오른쪽: 메뉴 타이틀 행 + 구분선 + 링크 열
const FooterMenu = ({ navigate }: FooterMenuProps) => {
  const { menu } = footer;

  // path가 없으면 맨 위로 스크롤
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: `repeat(${menu.length}, auto)`,
        gridAutoRows: "auto",
        columnGap: "2vw",
        width: "fit-content",
      }}
    >
      {menu.map((item, index) => (
        <Typography
          key={`title-${index}`}
          sx={{
            fontSize: "18px",
            fontFamily: "Galderglynn-Titling-Regular",
            color: "#00235F",
            px: 3,
          }}
        >
          {item.title}
        </Typography>
      ))}

      <Divider
        sx={{
          gridColumn: "1 / -1",
          borderColor: "#2C3947",
          borderBottomWidth: 1,
          height: 0,
          my: 1,
        }}
      />

      {menu.map((item, index) => (
        <Box
          key={`items-${index}`}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            px: 3,
          }}
        >
          {item.items.map((subItem, subIndex) => (
            <Typography
              key={subIndex}
              sx={{
                fontSize: "16px",
                fontFamily: "Galderglynn-Titling-Book",
                color: "#313131",
                cursor: "pointer",
                width: "fit-content",
                textTransform: "uppercase",
              }}
              onClick={() =>
                subItem.path ? navigate(subItem.path) : scrollToTop()
              }
            >
              {subItem.name}
            </Typography>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default FooterMenu;
