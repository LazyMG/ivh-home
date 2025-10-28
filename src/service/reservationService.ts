import type {
  ReservationRequestForm,
  ReservationRequestResponse,
  ReservationResponse,
} from "../types/reservation";

import { isAxiosError } from "axios";
import { API_ENDPOINTS } from "../utils/constants";
import api from "./api";

export const reservationService = {
  async getReservations(): Promise<ReservationResponse[]> {
    try {
      const response = await api.get<ReservationResponse[]>(
        API_ENDPOINTS.RESERVATION.LIST
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

  async getDetailReservation(id: number): Promise<ReservationResponse> {
    try {
      const response = await api.get<ReservationResponse>(
        API_ENDPOINTS.RESERVATION.DETAIL(id)
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

  async postReservationRequest(
    reservationRequestForm: ReservationRequestForm
  ): Promise<ReservationRequestResponse> {
    try {
      const response = await api.post<ReservationRequestResponse>(
        API_ENDPOINTS.RESERVATION.REQUEST,
        reservationRequestForm
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
