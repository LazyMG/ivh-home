/**
 * Grid 레이아웃에서 size 4 항목 사이에 divider가 필요한지 계산
 * @param items - 전체 항목 배열 (size 속성을 가진 객체)
 * @param currentIndex - 현재 항목의 인덱스
 * @returns divider 표시 여부
 */
export const calculateContentDivider = <T extends { size: number }>(
  items: T[],
  currentIndex: number
): boolean => {
  const currentItem = items[currentIndex];
  const nextItem = items[currentIndex + 1];

  const isSize4 = currentItem.size === 4;
  const nextIsSize4 = nextItem?.size === 4;

  // size 4 항목의 순서 계산
  const size4Items = items
    .slice(0, currentIndex + 1)
    .filter((item) => item.size === 4);
  const size4Position = size4Items.length;

  // size 4이고, 다음 항목도 size 4이고, 3의 배수 위치가 아닐 때 divider 필요
  return isSize4 && nextIsSize4 && size4Position % 3 !== 0;
};
