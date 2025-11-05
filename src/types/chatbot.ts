export interface ChatMessage {
  id: number;
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
}

export interface ChatBubble {
  id: string;
  type: "question" | "answer" | "questionList";
  content: string;
  isTyping?: boolean;
}

export interface Message {
  id: string;
  type: "bot" | "user" | "showQuestionButton";
  content: string;
  isTyping?: boolean;
}
