import { useState } from "react";
import styled from "styled-components";
import { ChatInterface } from "../ChatInterface";

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
const Md = styled.div`
  width: 300px;
  height: 500px;
  background-color: darkgreen;
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => props.$isVisible};
`;
export const Footer = () => {
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
      <ChatInterface />
    </>
  );
};
