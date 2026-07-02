import { Box } from "@mui/material";
import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useLang, type Lang } from "../../i18n/useLang";
import { FONTS } from "../../theme/theme";

const OPTIONS: { value: Lang; label: string }[] = [
  { value: "ko", label: "KR" },
  { value: "en", label: "EN" },
];

// 강조색 (선택된 언어 라벨 색상)
const ACCENT = "#66BAFF";

/**
 * 모바일 헤더 전용 언어 토글.
 * 흰색 헤더에 맞춰 라벨은 강조색(#66BAFF), 드롭다운은 라이트 테마.
 * 언어 전환 로직은 데스크탑과 동일하게 useLang 재사용.
 */
const MobileLangToggle = () => {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, centerX: 0 });
  const buttonRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 버튼 위치 측정 (드롭다운을 버튼 중앙 기준으로 fixed 배치)
  const updatePos = useCallback(() => {
    const r = buttonRef.current?.getBoundingClientRect();
    if (r) setPos({ top: r.bottom, centerX: r.left + r.width / 2 });
  }, []);

  // 외부(버튼·드롭다운 밖) 클릭 시 닫기
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const t = e.target as Node;
      if (buttonRef.current?.contains(t) || dropdownRef.current?.contains(t))
        return;
      setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // 열려있는 동안 스크롤/리사이즈 시 드롭다운 닫기 (위치를 따라오지 않도록)
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("scroll", close, true);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
    };
  }, [open]);

  const currentLabel = OPTIONS.find((o) => o.value === lang)?.label ?? "KR";
  const others = OPTIONS.filter((o) => o.value !== lang);

  const toggle = () => {
    updatePos();
    setOpen((prev) => !prev);
  };

  return (
    <Box
      ref={buttonRef}
      onClick={toggle}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <Box
        component="span"
        sx={{
          fontFamily: FONTS.freesentation.bold,
          fontSize: "16px",
          color: ACCENT,
        }}
      >
        {currentLabel}
      </Box>

      {/* 드롭다운 - AppBar overflow에 잘리지 않도록 body로 포털 + fixed */}
      {open &&
        createPortal(
          <Box
            ref={dropdownRef}
            sx={{
              position: "fixed",
              top: pos.top + 8, // 버튼과 살짝 간격
              left: pos.centerX, // 버튼 중앙 x좌표
              transform: "translateX(-50%)", // 중앙 정렬
              minWidth: 56,
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 4px 10px 0 rgba(0,0,0,0.2)",
              overflow: "hidden",
              zIndex: 1300,
            }}
          >
            {others.map((option) => (
              <Box
                key={option.value}
                onClick={() => {
                  setLang(option.value);
                  setOpen(false);
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "44px",
                  px: 2,
                  cursor: "pointer",
                  fontFamily: FONTS.freesentation.bold,
                  fontSize: "16px",
                  color: "#424242",
                  transition: "color 0.2s",
                  "&:hover": {
                    color: ACCENT,
                  },
                }}
              >
                {option.label}
              </Box>
            ))}
          </Box>,
          document.body,
        )}
    </Box>
  );
};

export default MobileLangToggle;
