import { Box } from "@mui/material";
import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useLang, type Lang } from "../i18n/useLang";

const OPTIONS: { value: Lang; label: string }[] = [
  { value: "ko", label: "KR" },
  { value: "en", label: "EN" },
];

const LangToggle = () => {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0, width: 0 });
  const buttonRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 버튼 위치 측정 (드롭다운을 fixed로 띄우기 위해)
  const updatePos = useCallback(() => {
    const r = buttonRef.current?.getBoundingClientRect();
    if (r) setPos({ top: r.bottom, left: r.left, width: r.width });
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

  // 색상: 평소 흰색, 열림/hover 시 강조색
  const BASE = "#FFFFFF";
  const ACCENT = "#66BAFF";
  const labelColor = open ? ACCENT : BASE;

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
        gap: 2,
        width: "80px",
        py: 3,
        cursor: "pointer",
        userSelect: "none",
        // 헤더 메뉴와 동일한 hover 강조
        "&:hover .lang-label": { color: ACCENT },
        "&:hover .lang-arrow": { borderTopColor: ACCENT },
      }}
    >
      <Box
        component="span"
        className="lang-label"
        sx={{
          fontFamily: "Freesentation-7-Bold",
          fontSize: "16px",
          color: labelColor,
          transition: "color 0.2s",
        }}
      >
        {currentLabel}
      </Box>
      <Box
        component="span"
        className="lang-arrow"
        sx={{
          width: 0,
          height: 0,
          borderLeft: "5px solid transparent",
          borderRight: "5px solid transparent",
          borderTop: `6px solid ${labelColor}`,
          transition: "transform 0.2s, border-top-color 0.2s",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
        }}
      />

      {/* 드롭다운 - 메뉴바 overflow에 잘리지 않도록 body로 포털 + fixed */}
      {open &&
        createPortal(
          <Box
            ref={dropdownRef}
            sx={{
              position: "fixed",
              top: pos.top,
              left: pos.left,
              minWidth: pos.width,
              backgroundColor: "#03193F",
              borderRadius: "0 0 8px 8px",
              boxShadow: "0 4px 10px 0 rgba(0,0,0,0.35)",
              overflow: "hidden",
              zIndex: 1300,
            }}
          >
            {/* 버튼(선택된 언어)과 드롭다운 경계 구분선 */}
            <Box sx={{ height: "1px", backgroundColor: "#1B3A6B", mx: 1 }} />
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
                  fontFamily: "Freesentation-7-Bold",
                  fontSize: "16px",
                  color: "#FFFFFF",
                  transition: "color 0.2s",
                  "&:hover": {
                    color: "#66BAFF",
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

export default LangToggle;
