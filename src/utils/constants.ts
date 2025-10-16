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
