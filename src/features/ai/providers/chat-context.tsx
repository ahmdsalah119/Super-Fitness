import { createContext, useState, useRef, useEffect } from "react";
import React from "react";

//Create Chat Context
export const ChatContext = createContext<ChatContextType | null>(null);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  //state
  const [conversations, setConversations] = useState<Conversation[]>(() => {
    const stored = localStorage.getItem("conversations");
    return stored ? JSON.parse(stored) : [];
  });

  const [currentConversationId, setCurrentConversationId] = useState<
    string | null
  >(null);

  const [loading, setLoading] = useState(false);

  // Ref
  const currentRequestId = useRef(0);

  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    localStorage.setItem("conversations", JSON.stringify(conversations));
  }, [conversations]);

  //Create and send message to Gemini API
  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    setLoading(true);

    const requestId = ++currentRequestId.current;

    //Abort previous request if still running
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const controller = new AbortController();
    controllerRef.current = controller;

    //Create user message object
    const userMessage: Message = {
      role: "user",
      text,
    };

    let conversationId = currentConversationId;

    //Create new conversation if none exists
    if (!conversationId) {
      conversationId = crypto.randomUUID();

      const newConversation: Conversation = {
        id: conversationId,
        title: text.slice(0, 30),
        messages: [],
      };

      setConversations((prev) => [...prev, newConversation]);
      setCurrentConversationId(conversationId);
    }

    //Get current conversation safely
    const currentMessages =
      conversations.find((c) => c.id === conversationId)?.messages || [];

    //Optimistically update UI with user message
    setConversations((prev) =>
      prev.map((conv) => {
        if (conv.id !== conversationId) return conv;

        return {
          ...conv,
          messages: [...conv.messages, userMessage],
        };
      }),
    );

    try {
      //Prepare payload for Gemini API
      const payloadMessages = [...currentMessages, userMessage].map((msg) => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      }));

      //Call Gemini API
      const response = await fetch(import.meta.env.VITE_GEMINI_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": import.meta.env.VITE_GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: payloadMessages,
        }),
        signal: controller.signal,
      });

      const data: GeminiResponse = await response.json();

      //Ignore outdated responses
      if (requestId !== currentRequestId.current) return;

      //Extract bot reply safely
      const botReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response available";

      const botMessage: Message = {
        role: "model",
        text: botReply,
      };
      // Append AI response to conversation
      setConversations((prev) =>
        prev.map((conv) => {
          if (conv.id !== conversationId) return conv;

          return {
            ...conv,
            messages: [...conv.messages, botMessage],
          };
        }),
      );
    } catch (error: any) {
      //Ignore aborted requests
      if (error.name === "AbortError") return;

      if (requestId !== currentRequestId.current) return;

      //Handle API errors
      setConversations((prev) =>
        prev.map((conv) => {
          if (conv.id !== conversationId) return conv;

          return {
            ...conv,
            messages: [
              ...conv.messages,
              {
                role: "model",
                text: error.message?.includes("high demand")
                  ? "Server is busy. Please try again later."
                  : "An error occurred while fetching response.",
              },
            ],
          };
        }),
      );
    } finally {
      //Stop loading state only for latest request
      if (requestId === currentRequestId.current) {
        setLoading(false);
      }
    }
  };

  //Get current active conversation messages
  const currentConversation = conversations.find(
    (c) => c.id === currentConversationId,
  );

  const messages = currentConversation?.messages || [];

  //Create new conversation
  const createNewChat = () => {
    setCurrentConversationId(null);
  };

  //Delete conversation
  const deleteConversation = (id: string) => {
    setConversations((prev) => prev.filter((conv) => conv.id !== id));
  };
  return (
    <ChatContext.Provider
      value={{
        messages,
        conversations,
        currentConversationId,
        setCurrentConversationId,
        sendMessage,
        loading,
        createNewChat,
        deleteConversation,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
