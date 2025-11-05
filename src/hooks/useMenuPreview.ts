import { useState, useRef, useEffect } from "react";
import type { MenuItem } from "../types/header";
import { previewDurations } from "../common/Header/previewConstants";

interface UseMenuPreviewOptions {
  fadeOutDuration?: number; // 프리뷰 사라지는 애니메이션 시간 (ms)
}

interface UseMenuPreviewReturn {
  previewItem: MenuItem | null; // 현재 프리뷰 아이템
  previewPosition: { x: number; y: number } | undefined; // 프리뷰 위치
  previewVisible: boolean; // 프리뷰 표시 여부
  handlePreviewItemChange: (
    item: MenuItem | null,
    position?: { x: number; y: number }
  ) => void; // 프리뷰 아이템 변경 핸들러
}

/**
 * 메뉴 프리뷰 상태를 관리하는 커스텀 훅
 * @param options - 옵션 설정
 * @returns 프리뷰 관련 상태와 핸들러
 */
export const useMenuPreview = ({
  fadeOutDuration = previewDurations.fadeOut,
}: UseMenuPreviewOptions = {}): UseMenuPreviewReturn => {
  const [previewItem, setPreviewItem] = useState<MenuItem | null>(null);
  const [previewPosition, setPreviewPosition] = useState<
    { x: number; y: number } | undefined
  >(undefined);
  const [previewVisible, setPreviewVisible] = useState(false);
  const fadeOutTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 타이머 정리
  useEffect(() => {
    return () => {
      if (fadeOutTimerRef.current) {
        clearTimeout(fadeOutTimerRef.current);
      }
    };
  }, []);

  // 프리뷰 아이템 변경 핸들러
  const handlePreviewItemChange = (
    item: MenuItem | null,
    position?: { x: number; y: number }
  ) => {
    // 기존 타이머 클리어
    if (fadeOutTimerRef.current) {
      clearTimeout(fadeOutTimerRef.current);
      fadeOutTimerRef.current = null;
    }

    if (item) {
      // 프리뷰 표시
      setPreviewItem(item);
      setPreviewPosition(position);
      setPreviewVisible(true);
    } else {
      // 프리뷰 숨김 (애니메이션을 위해 딜레이 후 아이템 제거)
      setPreviewVisible(false);
      fadeOutTimerRef.current = setTimeout(() => {
        setPreviewItem(null);
        setPreviewPosition(undefined);
      }, fadeOutDuration);
    }
  };

  return {
    previewItem,
    previewPosition,
    previewVisible,
    handlePreviewItemChange,
  };
};
