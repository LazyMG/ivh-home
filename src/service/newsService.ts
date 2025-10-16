import { isAxiosError } from "axios";
import { API_ENDPOINTS } from "../utils/constants";
import api from "./api";

// 타입 정리 필요 -> 데이터 확인 후 정리

type NewsStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";

interface News {
  title: string;
  content: string;
  author: string;
  status?: NewsStatus;
  thumbnailUrl?: string;
  tags?: string[];
  publishedAt?: string;
}

export const newsService = {
  async getNews() {
    try {
      const response = await api.get(API_ENDPOINTS.NEWS.LIST);
      console.log(response);
    } catch (error) {
      console.error("Failed to fetch:", error);
      throw error;
    }
  },
  async searchNewsByTag(tag: string) {
    try {
      const response = await api.get(API_ENDPOINTS.NEWS.SEARCH_BY_TAG(tag));
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch:", error);
      throw error;
    }
  },
  async getDetailNews(id: number) {
    try {
      const response = await api.get(API_ENDPOINTS.NEWS.DETAIL(id));
      console.log(response);
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
