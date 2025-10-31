import type {
  ReservationStatusColorType,
  ReservationTypeMap,
} from "../types/reservation";

export const API_BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const API_ENDPOINTS = {
  MENU: {
    LIST: "/menu",
  },
  RESERVATION: {
    LIST: "/reservation",
    DETAIL: (id: number) => `/reservation/${id}`,
    REQUEST: "/reservation-request",
  },
  NEWS: {
    LIST: "/news/published",
    SEARCH_BY_TAG: (tag: string) => `/news/tag/${tag}`,
    DETAIL: (id: number) => `/news/${id}`,
  },
} as const;

// 달력에 사용되는 색상을 객체로 분리함
export const RESERVATION_STATUS_COLOR: ReservationStatusColorType = {
  OPEN: { color: "#efb415", label: "모집 중" },
  CLOSED: { color: "#3cb56a", label: "모집 완료" },
  CANCELLED: { color: "#888888", label: "취소" },
} as const;

export const EAMIL_REGEX =
  /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$/i;

export const PHONE_REGEX = /^(02-\d{3,4}-\d{4}|0[3-9]\d-\d{3,4}-\d{4}|01[016789]-\d{3,4}-\d{4})$/;

export const RESERVATION_TYPE: ReservationTypeMap = {
  EDUCATION: "교육",
  EVENT: "행사",
  ETC: "기타",
};
