import { useState, useRef, useEffect, useCallback } from "react";
import type { MenuItem } from "../types/header";
import { previewDurations } from "../common/header/previewConstants";

interface UseMenuHoverPreviewOptions {
  onPreviewItemChange?: (
    item: MenuItem | null, // 프리뷰 아이템
    position?: { x: number; y: number } // 프리뷰 위치 (x, y)
  ) => void;
  hoverDuration?: number; // 호버 지속 시간 (ms)
}

interface UseMenuHoverPreviewReturn {
  hoveredItemForPreview: string | null; // 현재 호버된 아이템 이름
  itemRefs: React.MutableRefObject<{ [key: string]: HTMLElement | null }>; // 아이템 요소 참조
  handleMouseEnter: (item: MenuItem, level?: number) => void; // 호버 시작 시 프리뷰 표시
  handleMouseLeave: () => void; // 호버 종료 시 프리뷰 숨김
  handleClick: () => void; // 클릭 시 프리뷰 숨김
}

/**
 * 메뉴 호버 프리뷰 기능을 관리하는 커스텀 훅
 * @param options - 옵션 설정
 * @returns 호버 프리뷰 관련 상태와 핸들러
 */
export const useMenuHoverPreview = ({
  onPreviewItemChange,
  hoverDuration = previewDurations.hover,
}: UseMenuHoverPreviewOptions = {}): UseMenuHoverPreviewReturn => {
  const [hoveredItemForPreview, setHoveredItemForPreview] = useState<
    string | null
  >(null);
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const itemRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // 호버 타이머 정리
  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
    };
  }, []);

  // 호버 시작 시 타이머 설정
  const handleMouseEnter = useCallback(
    (item: MenuItem) => {
      // 기존 타이머 클리어
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }

      // 프로그레스 표시 시작
      setHoveredItemForPreview(item.name);

      // 일정 시간 후 프리뷰 표시
      hoverTimerRef.current = setTimeout(() => {
        const itemElement = itemRefs.current[item.name];
        if (itemElement) {
          const rect = itemElement.getBoundingClientRect();
          const styles = window.getComputedStyle(itemElement);
          const paddingRight = parseFloat(styles.paddingRight); // 숫자(px)로 변환
          onPreviewItemChange?.(item, {
            x: rect.left + rect.width - paddingRight,
            y: rect.top + rect.height / 2,
          });
        } else {
          onPreviewItemChange?.(item);
        }
      }, hoverDuration);
    },
    [onPreviewItemChange, hoverDuration]
  );

  // 호버 종료 시 프리뷰 숨김
  const handleMouseLeave = useCallback(() => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    setHoveredItemForPreview(null);
    onPreviewItemChange?.(null);
  }, [onPreviewItemChange]);

  // 클릭 시 프리뷰 숨김
  const handleClick = useCallback(() => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    handleMouseLeave();
  }, [handleMouseLeave]);

  return {
    hoveredItemForPreview,
    itemRefs,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
  };
};
