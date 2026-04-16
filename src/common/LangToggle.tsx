import { Box } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { useLang, type Lang } from "../i18n/useLang";

const OPTIONS: { value: Lang; label: string }[] = [
  { value: "ko", label: "KR" },
  { value: "en", label: "EN" },
];

const LangToggle = () => {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 닫기
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const currentLabel = OPTIONS.find((o) => o.value === lang)?.label ?? "KR";

  return (
    <Box
      ref={ref}
      sx={(theme) => ({
        position: "fixed",
        top: 128,
        right: 48,
        zIndex: 997,
        [theme.breakpoints.down("tablet")]: {
          top: 80,
          right: 16,
        },
      })}
    >
      {/* 선택 버튼 */}
      <Box
        onClick={() => setOpen((prev) => !prev)}
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          width: "72px",
          height: "45px",
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          boxShadow: open
            ? "1px 0px 5px 0 rgba(0,0,0,0.25)"
            : "1px 1px 5px 0 rgba(0,0,0,0.25)",
          cursor: "pointer",
          userSelect: "none",
          position: "relative",
          zIndex: 2,
          [theme.breakpoints.down("tablet")]: {
            width: "56px",
            height: "36px",
          },
        })}
      >
        <Box
          component="span"
          sx={(theme) => ({
            fontFamily: "Freesentation-5-Medium",
            fontSize: "18px",
            fontWeight: 700,
            color: "#1755C2",
            [theme.breakpoints.down("tablet")]: {
              fontSize: "13px",
            },
          })}
        >
          {currentLabel}
        </Box>
        <Box
          component="span"
          sx={(theme) => ({
            width: 0,
            height: 0,
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderTop: "6px solid #A7A7A7",
            transition: "transform 0.2s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            [theme.breakpoints.down("tablet")]: {
              borderLeft: "4px solid transparent",
              borderRight: "4px solid transparent",
              borderTop: "5px solid #A7A7A7",
            },
          })}
        />
      </Box>

      {/* 드롭다운 */}
      {open && (() => {
        const others = OPTIONS.filter((o) => o.value !== lang);
        return (
          <Box
            sx={(theme) => ({
              position: "absolute",
              top: "calc(100% - 4px)",
              left: 0,
              width: "72px",
              backgroundColor: "#FFFFFF",
              borderRadius: "0 0 8px 8px",
              boxShadow: "1px 3px 5px 0 rgba(0,0,0,0.25)",
              pt: "4px",
              zIndex: 1,
              overflow: "hidden",
              [theme.breakpoints.down("tablet")]: {
                width: "56px",
              },
            })}
          >
            {others.map((option, idx) => (
              <Box key={option.value}>
                {idx > 0 && (
                  <Box
                    sx={{
                      height: "1px",
                      backgroundColor: "#E0E0E0",
                      mx: 1,
                    }}
                  />
                )}
                <Box
                  onClick={() => {
                    setLang(option.value);
                    setOpen(false);
                  }}
                  sx={(theme) => ({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "40px",
                    cursor: "pointer",
                    fontFamily: "Freesentation-5-Medium",
                    fontSize: "18px",
                    color: "#A7A7A7",
                    fontWeight: 400,
                    "&:hover": {
                      backgroundColor: "#F5F5F5",
                    },
                    [theme.breakpoints.down("tablet")]: {
                      height: "32px",
                      fontSize: "13px",
                    },
                  })}
                >
                  {option.label}
                </Box>
              </Box>
            ))}
          </Box>
        );
      })()}
    </Box>
  );
};

export default LangToggle;
