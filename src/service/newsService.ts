import { isAxiosError } from "axios";
import { API_ENDPOINTS } from "../utils/constants";
import api from "./api";

export type NewsStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";

export interface NewsResponse {
  title: string;
  content: string;
  contentsUrl: string;
  updatedAt: string;
  author: string;
  createdAt: string;
  id: number;
  publishedAt: string;
  status: NewsStatus;
  tags: string[];
  viewCount: number;
  // 임시 필드 — 추후 응답에 이미지가 포함되면 사용 (없으면 NewsCard에서 플레이스홀더 처리)
  image?: string;
}

export const newsService = {
  async getNews(): Promise<NewsResponse[]> {
    try {
      const response = await api.get<NewsResponse[]>(API_ENDPOINTS.NEWS.LIST);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch:", error);
      throw error;
    }
  },
  // 빈 문자열 처리 필요
  async searchNewsByTag(tag: string): Promise<NewsResponse[]> {
    try {
      const response = await api.get<NewsResponse[]>(
        API_ENDPOINTS.NEWS.SEARCH_BY_TAG(tag)
      );
      return response.data;
    } catch (error) {
      console.error("Failed to fetch:", error);
      throw error;
    }
  },
  async getDetailNews(id: number): Promise<NewsResponse> {
    try {
      const response = await api.get<NewsResponse>(
        API_ENDPOINTS.NEWS.DETAIL(id)
      );
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || "에러가 발생했습니다."
        );
      }
      throw error;
    }
  },
};
