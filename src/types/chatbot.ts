// 질문/대답 데이터 리스트 상태
export interface ChatMessage {
  id: number;
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
}

// 현재 채팅방에 출력된 메시지 리스트 상태
export interface Message {
  id: string;
  type: "bot" | "user" | "showQuestionButton";
  content: string;
  isTyping?: boolean;
}
