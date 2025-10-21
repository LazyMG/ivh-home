import { API_ENDPOINTS } from "../utils/constants";
import api from "./api";

// Date 또는 string으로 정리
export interface MenuResponse {
  id: number;
  title: string;
  subTitle: string;
  link: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  isActive: string;
}

export const menuService = {
  async getMenus(): Promise<MenuResponse[]> {
    try {
      const response = await api.get<MenuResponse[]>(API_ENDPOINTS.MENU.LIST);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch Menus:", error);
      throw error;
    }
  },
};
