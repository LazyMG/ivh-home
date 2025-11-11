import { useRef, useCallback } from "react";
import type { MenuItem } from "../types/header";

interface UseMenuHoverPreviewOptions {
  onPreviewItemChange?: (
    item: MenuItem | null, // 프리뷰 아이템
    position?: { x: number; y: number; align?: "left" | "right" } // 프리뷰 위치 (x, y)
  ) => void;
}

interface UseMenuHoverPreviewReturn {
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
}: UseMenuHoverPreviewOptions = {}): UseMenuHoverPreviewReturn => {
  const itemRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const triggerPreview = useCallback(
    (item: MenuItem, level?: number) => {
      const itemElement = itemRefs.current[item.name];
      if (itemElement) {
        const rect = itemElement.getBoundingClientRect();
        const align: "left" | "right" =
          level !== undefined && level >= 3 ? "left" : "right";

        onPreviewItemChange?.(item, {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          align,
        });
      } else {
        onPreviewItemChange?.(item);
      }
    },
    [onPreviewItemChange]
  );

  // 호버 시작 시 즉시 프리뷰 표시
  const handleMouseEnter = useCallback(
    (item: MenuItem, level?: number) => {
      triggerPreview(item, level);
    },
    [triggerPreview]
  );

  // 호버 종료 시 프리뷰 숨김
  const handleMouseLeave = useCallback(() => {
    onPreviewItemChange?.(null);
  }, [onPreviewItemChange]);

  // 클릭 시 프리뷰 숨김
  const handleClick = useCallback(() => {
    handleMouseLeave();
  }, [handleMouseLeave]);

  return {
    itemRefs,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
  };
};
