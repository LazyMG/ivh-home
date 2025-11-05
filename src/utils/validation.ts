/**
 * 폼 유효성 검사 유틸리티 함수들
 */

import { EAMIL_REGEX, PHONE_REGEX } from "./constants";

/**
 * 빈칸 검사 및 최대 길이 제한 검사를 함께 수행하는 함수
 * @param value 검사할 값
 * @param maxLength 최대 길이 제한 (없으면 길이 제한 없음)
 * @param emptyErrorMessage 빈칸 검사 에러 메시지
 * @param maxLengthErrorMessage 최대 길이 검사 에러 메시지
 * @returns errorMessage 또는 true
 */
export const validateNotEmptyAndLength = (
  value: string,
  maxLength?: number,
  emptyErrorMessage?: string,
  maxLengthErrorMessage?: string
) => {
  // 빈칸 검사
  const trimmedValue = value.trim();
  if (trimmedValue === "") {
    return emptyErrorMessage || "필수 입력 항목입니다.";
  }
  // 최대 길이 검사
  if (maxLength && trimmedValue.length > maxLength) {
    return maxLengthErrorMessage || `최대 ${maxLength}자까지 입력 가능합니다.`;
  }
  return true;
};

/**
 * 빈칸 검사만 수행하는 함수
 * @param value 검사할 값
 * @param emptyErrorMessage 에러 메시지 (없으면 기본 메시지 사용)
 * @returns validation 결과 또는 true
 */
export const validateNotEmpty = (value: string, emptyErrorMessage?: string) => {
  const trimmedValue = value.trim();
  if (trimmedValue === "") {
    return emptyErrorMessage || "필수 입력 항목입니다.";
  }
  return true;
};
/**
 * 이메일 형식 검사 함수
 * @param value 검사할 값
 * @param errorMessage 에러 메시지 (없으면 기본 메시지 사용)
 * @returns validation 결과 또는 true
 */
export const validateEmail = (value: string, errorMessage?: string) => {
  // 빈값 검사
  if (!value || value.trim() === "") {
    return errorMessage || "필수 입력 항목입니다.";
  }

  if (!EAMIL_REGEX.test(value)) {
    return errorMessage || "올바른 형식의 이메일을 입력해주십시오.";
  }
  return true;
};

/**
 * 전화번호 형식 검사 함수
 * @param value 검사할 값
 * @param errorMessage 에러 메시지 (없으면 기본 메시지 사용)
 * @returns validation 결과 또는 true
 */
export const validatePhone = (value: string, errorMessage?: string) => {
  // 빈값 검사
  if (!value || value.trim() === "") {
    return errorMessage || "필수 입력 항목입니다.";
  }

  if (!PHONE_REGEX.test(value)) {
    return (
      errorMessage ||
      "올바른 형식의 전화번호를 입력해주십시오. (예: 010-1234-1234)"
    );
  }
  return true;
};

/**
 * 체크박스 선택 필수 검사 함수
 * @param checked 체크박스 선택 여부
 * @param errorMessage 에러 메시지 (없으면 기본 메시지 사용)
 * @returns validation 결과 또는 true
 */
export const validateCheckbox = (checked: boolean, errorMessage?: string) => {
  if (!checked) {
    return errorMessage || "필수 선택 항목입니다.";
  }
  return true;
};

/**
 * 커스텀 정규식 검사 함수
 * @param value 검사할 값
 * @param regex 정규식
 * @param errorMessage 에러 메시지
 * @returns validation 결과 또는 true
 */
export const validateRegex = (
  value: string,
  regex: RegExp,
  errorMessage: string
) => {
  if (!regex.test(value)) {
    return errorMessage;
  }
  return true;
};
