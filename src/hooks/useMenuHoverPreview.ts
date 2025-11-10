import { useRef, useCallback } from "react";
import type { MenuItem } from "../types/header";

interface UseMenuHoverPreviewOptions {
  onPreviewItemChange?: (
    item: MenuItem | null, // 프리뷰 아이템
    position?: { x: number; y: number } // 프리뷰 위치 (x, y)
  ) => void;
}

interface UseMenuHoverPreviewReturn {
  itemRefs: React.MutableRefObject<{ [key: string]: HTMLElement | null }>; // 아이템 요소 참조
  handleMouseEnter: (item: MenuItem) => void; // 호버 시작 시 프리뷰 표시
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
    (item: MenuItem) => {
      const itemElement = itemRefs.current[item.name];
      if (itemElement) {
        const rect = itemElement.getBoundingClientRect();
        const styles = window.getComputedStyle(itemElement);
        const paddingRight = parseFloat(styles.paddingRight) || 0;

        onPreviewItemChange?.(item, {
          x: rect.left + rect.width - paddingRight,
          y: rect.top + rect.height / 2,
        });
      } else {
        onPreviewItemChange?.(item);
      }
    },
    [onPreviewItemChange]
  );

  // 호버 시작 시 즉시 프리뷰 표시
  const handleMouseEnter = useCallback(
    (item: MenuItem) => {
      triggerPreview(item);
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
