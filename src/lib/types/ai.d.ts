declare type Message = {
  role: "user" | "model";
  text: string;
};

declare type Conversation = {
  id: string;
  title: string;
  messages: Message[];
};

declare type ChatContextType = {
  messages: Message[];
  conversations: Conversation[];
  currentConversationId: string | null;
  setCurrentConversationId: (id: string | null) => void;
  sendMessage: (text: string) => void;
  loading: boolean;
  createNewChat: () => void;
  deleteConversation: (id: string) => void;
};

declare type GeminiResponse = {
  candidates?: {
    content?: {
      parts?: { text: string }[];
    };
  }[];
};
