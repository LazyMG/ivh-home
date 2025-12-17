export type ReservationStatus = "OPEN" | "CLOSED" | "CANCELLED";

type ReservationType = "EDUCATION" | "EVENT" | "ETC";

type RequestStatus = "PENDING" | "CONFIRMED" | "CANCELLED";

// 교육 일정 상태에 따른 색상 타입
export type ReservationStatusColorType = Record<
  ReservationStatus,
  { color: string; label: string }
>;

export type ReservationTypeMap = Record<ReservationType, string>;

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
export interface ReservationCustomer {
  name: string;
  company: string;
  position: string;
  email: string;
  phone: string;
  division: string;
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
  applicantDivision: string;
  requestedPeople: number;
  customerList: ReservationCustomer[];
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
  applicantDivision: string;
  requestedPeople: number;
  status: RequestStatus;
  memo: string;
  adminMemo: string | null;
  cancelReason: string | null;
  createdAt: string;
  updatedAt: string;
}
