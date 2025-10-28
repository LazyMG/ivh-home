import type { ReservationStatusColorType } from "../types/reservation";

export const API_BASE_URL = "http://192.168.0.4:9550";

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

export const RESERVATION_STATUS_COLOR: ReservationStatusColorType = {
  OPEN: { color: "#efb415", label: "모집 중" },
  CLOSED: { color: "#3cb56a", label: "모집 완료" },
  CANCELED: { color: "#888888", label: "취소" },
} as const;
