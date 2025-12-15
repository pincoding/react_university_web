import { Link } from "react-router-dom";
import styled from "styled-components";

export const Headers = () => {
  const Sheader = styled.div`
    width: 100%;
    height: 80px;
    /* background-color: saddlebrown; */
    position: relative;
    display: flex;
    align-items: center;
  `;
  const Logs = styled.div`
    width: 256px;
    height: 46px;
    /* background-color: red; */
    position: relative;
    left: 20px;
  `;
  return (
    <>
      <Sheader>
        <Link to={"/"}>
          <Logs>
            <img
              src="https://www.ut.ac.kr/html/intro/files/logo.png"
              alt="한국교통대학교_로그_이미지"
            />
          </Logs>
        </Link>
      </Sheader>
    </>
  );
};
