import { isAxiosError } from "axios";
import { API_ENDPOINTS } from "../utils/constants";
import api from "./api";

export interface CustomerRequestForm {
  name: string;
  company: string;
  email: string;
  phone: string;
  productName: string;
}

const catchInvaildLoginError = (message: string) => {
  if (message.includes("Invalid login")) {
    return "서버 오류입니다. 잠시 후에 이용해주세요.";
  }
  return message;
};

export const customerService = {
  async postCustomerInfo(customerRequestForm: CustomerRequestForm) {
    try {
      const response = await api.post(
        API_ENDPOINTS.CUSTOMER.SEND_PRODUCT_INFO,
        customerRequestForm
      );
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message
            ? catchInvaildLoginError(error.response.data.message as string)
            : "전송에 실패했습니다. 다시 시도해주세요."
        );
      }
      throw error;
    }
  },
};
