import { useState, useCallback } from "react";
import { sendChatMessage } from "./api"; // API 함수 임포트

export function useChatbot() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = useCallback(async (text) => {
    if (!text.trim()) return;

    const userMessage = { sender: "user", text };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const data = await sendChatMessage(text);

      if (data.reply) {
        const botMessage = { sender: "bot", text: data.reply };
        setMessages((prev) => [...prev, botMessage]);
      } else if (data.error) {
        const errorMessage = { sender: "system", text: `오류: ${data.error}` };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      // (api.js에서 이미 대부분 처리되지만, 만약을 위해)
      const errorMessage = {
        sender: "system",
        text: `예외 발생: ${error.message}`,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  }, []);

  return { messages, loading, sendMessage };
}
