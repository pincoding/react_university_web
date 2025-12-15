// 📂 api.js

const API_ENDPOINT = "http://localhost:8000/chat";

export async function sendChatMessage(messageText) {
  try {
    const res = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: messageText }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return {
        error: `HTTP 오류 ${res.status}: ${
          errorData.detail || "알 수 없는 서버 오류"
        }`,
      };
    }

    const data = await res.json();
    return data;
  } catch (error) {
    return { error: `네트워크 연결 오류: ${error.message}` };
  }
}
