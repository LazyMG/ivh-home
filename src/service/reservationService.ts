import { isAxiosError } from "axios";
import { API_ENDPOINTS } from "../utils/constants";
import api from "./api";

type ReservationStatus = "OPEN" | "CLOSED" | "CANCELED";

type ReservationType = "EDUCATION" | "EVENT" | "ETC";

type RequestStatus = "PENDING" | "CONFIRMED" | "CANCELLED";

export interface ReservationResponse {
  id: number;
  reservationName: string;
  startDate: string;
  endDate: string;
  reservationStatus: ReservationStatus;
  reservationType: ReservationType;
  cost: number;
  reservationDescription: string;
  maxPeople: number;
  minPeople: number;
  reservatedPeople: number;
  createdAt: string;
  updatedAt: string;
}

// validation 확인 - 이메일 등
export interface Customer {
  name: string;
  company: string;
  position: string;
  email: string;
  phone: string;
}

// validation 확인 - 이메일 등
// requestedPeople과 customerList의 길이 확인
export interface ReservationRequestForm {
  reservationId: number;
  applicantName: string;
  applicantEmail: string;
  applicantCompany: string;
  applicantPosition: string;
  applicantPhone: string;
  requestedPeople: number;
  customerList: Customer[];
  memo?: string;
}

export interface ReservationRequestResponse {
  id: number;
  reservationId: number;
  applicantName: string;
  applicantCompany: string;
  applicantEmail: string;
  applicantPosition: string;
  applicantPhone: string;
  requestedPeople: number;
  status: RequestStatus;
  memo: string;
  adminMemo: string | null;
  cancelReason: string | null;
  createdAt: string;
  updatedAt: string;
}

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
