// 💬 ChatInterface.js

import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components"; // styled, css 임포트
import { useChatbot } from "./useChatbot"; // 로직 훅 임포트

// =======================================================
// ⭐ Styled Components 정의
// =======================================================

// 1. 전체 컨테이너 스타일 (이전의 style 객체 대체)
const ChatContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); /* 약간의 그림자 추가 */
  background-color: white;
  position: fixed;
  bottom: 180px;
  right: 150px;
  display: ${(props) => props.$isVisible};
`;

// 2. 메시지 표시 영역 스타일
const MessageArea = styled.div`
  height: 350px;
  overflow-y: scroll;
  padding: 10px;
`;

// 3. 동적 스타일을 가진 메시지 박스 (이전의 messageBoxStyle 함수 대체)
const MessageBox = styled.div`
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  max-width: 80%;
  word-wrap: break-word;
  line-height: 1.5;

  // sender prop에 따라 동적 스타일 적용
  ${(props) =>
    props.$sender === "user"
      ? css`
          background: #e0f7fa; /* 연한 청록색 */
          margin-left: auto;
          margin-right: 0;
          text-align: right;
        `
      : css`
          background: #ffe0b2; /* 연한 주황색 */
          margin-left: 0;
          margin-right: auto;
          text-align: left;
        `}
`;

// 4. 초기 텍스트 및 로딩 상태 텍스트 스타일
const InfoText = styled.div`
  text-align: center;
  color: #666;

  // 로딩 상태에 따라 스타일 변경
  ${(props) =>
    props.$loading
      ? css`
          font-style: italic;
          color: #00796b;
          margin-top: 0;
        `
      : css`
          margin-top: 50px;
        `}
`;

// 5. 입력 및 버튼 컨테이너 스타일
const InputArea = styled.div`
  display: flex;
  margin-top: 15px;
`;

// 6. 입력 필드 스타일
const ChatInput = styled.input`
  flex-grow: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.2s;

  &:focus {
    border-color: #00bcd4;
    outline: none;
  }
`;

// 7. 전송 버튼 스타일
const SendButton = styled.button`
  padding: 12px 25px;
  margin-left: 10px;
  background-color: #00bcd4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #0097a7;
  }

  &:disabled {
    background-color: #b2ebf2; /* 비활성화 색상 */
    cursor: not-allowed;
  }
`;
const ChatAiWrap = styled.div`
  width: 60px;
  height: 60px;
  background-color: tomato;
  position: fixed;
  bottom: 100px;
  right: 50px;
  text-align: center;
  border-radius: 50%;
`;
const TextCon = styled.div`
  font-size: 18px;
  font-family: 600;
  text-align: center;
  margin-top: 8px;
`;

// =======================================================
// ⭐ ChatInterface 컴포넌트
// =======================================================

export function ChatInterface() {
  // useChatbot 훅에서 필요한 모든 상태와 함수를 가져옵니다.
  const [input, setInput] = useState("");
  const { messages, loading, sendMessage } = useChatbot();
  const messagesEndRef = useRef(null);

  // 스크롤 자동 이동
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 메시지 전송 및 입력 초기화
  const handleSendMessage = () => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSendMessage();
  };

  const [num, setNum] = useState(0);
  const [iCons, setiCons] = useState("none");

  const IconHandler = () => {
    if (num === 0) {
      setiCons("block");
      setNum(1);
    } else if (num === 1) {
      setiCons("none");
      setNum(0);
    }
  };

  return (
    <>
      <ChatAiWrap onClick={IconHandler}>
        <TextCon>Ai</TextCon>
        <div> 채팅봇</div>
      </ChatAiWrap>

      <ChatContainer $isVisible={iCons}>
        <MessageArea>
          {messages.length === 0 && (
            <InfoText>챗봇에게 질문을 입력해주세요!</InfoText>
          )}
          {messages.map((msg, index) => (
            // $sender prop을 전달하여 동적 스타일링
            <MessageBox key={index} $sender={msg.sender}>
              <strong>{msg.sender === "user" ? "나" : "챗봇"}:</strong>{" "}
              {msg.text}
            </MessageBox>
          ))}
          {loading && (
            // $loading prop을 전달하여 스타일 변경
            <InfoText $loading>... 챗봇이 답변을 생각 중입니다 ...</InfoText>
          )}
          <div ref={messagesEndRef} />
        </MessageArea>
        {/* 입력 및 버튼 영역 */}
        <InputArea>
          <ChatInput
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="질문을 입력하세요"
            onKeyPress={handleKeyPress}
            disabled={loading}
          />
          <SendButton
            onClick={handleSendMessage}
            disabled={loading || !input.trim()}
          >
            전송
          </SendButton>
        </InputArea>
      </ChatContainer>
    </>
  );
}
