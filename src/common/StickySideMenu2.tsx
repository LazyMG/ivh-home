import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface Menu {
  id: string;
  text: string;
}

interface StickySideMenuProps {
  menuList: Menu[];
}

const StickySideMenu2 = ({ menuList }: StickySideMenuProps) => {
  const [activeId, setActiveId] = useState<string>(
    menuList.length > 0 ? menuList[0].id : ""
  );

  useEffect(() => {
    // Observer 옵션 설정
    const observerOptions = {
      rootMargin: "-20% 0px -70% 0px", // 화면 상단 20% 지점을 기준
      threshold: 0, // 조금이라도 보이면 감지
    };

    // Observer 콜백 함수
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id); // 보이는 섹션의 id 저장
        }
      });
    };

    // Observer 생성
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // 모든 메뉴에 해당하는 DOM 요소를 관찰 시작
    menuList.forEach((menu) => {
      const element = document.getElementById(menu.id);
      if (element) {
        observer.observe(element);
      }
    });

    // 클린업: 컴포넌트 언마운트 시 관찰 중지
    return () => {
      observer.disconnect();
    };
  }, [menuList]); // menuList가 변경될 때마다 재설정

  const scrollCallBack = (id: string) => {
    document?.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: "28%",
        width: "240px",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        left: 80,
        zIndex: 998,
      }}
    >
      {menuList.map((menu) => (
        <Box
          key={menu.id}
          sx={{
            borderBottom: "1px solid #e0e0e0",
            cursor: "pointer",
            transition: "all 0.3s ease",
            height: "49px",
            display: "flex",
            alignItems: "center",
            backgroundColor: activeId === menu.id ? "#1339B4" : "transparent",
            boxShadow:
              activeId === menu.id ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none",
            "&:hover": {
              backgroundColor: "#1339B4",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              "& .MuiTypography-root": {
                color: "#fff",
                paddingLeft: "17px",
              },
            },
          }}
          onClick={() => scrollCallBack(menu.id)}
        >
          <Typography
            sx={{
              fontSize: "13px",
              color: activeId === menu.id ? "#fff" : "inherit",
              paddingLeft: activeId === menu.id ? "17px" : 0,
            }}
          >
            {menu.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default StickySideMenu2;
