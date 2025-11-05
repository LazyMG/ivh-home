/**
 * HTML 태그를 제거하고 순수 텍스트만 반환하는 함수
 * ReactQuill 등의 에디터에서 저장된 HTML 컨텐츠를 일반 텍스트로 변환
 */
export const stripHtmlTags = (html: string): string => {
  if (!html) return "";

  // DOMParser를 사용하여 HTML을 파싱하고 텍스트만 추출
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;

  return tmp.textContent || tmp.innerText || "";
};
