import styled from "styled-components";

export const Home = () => {
  const HomeSection = styled.div`
    /* width: 1200px; */
    margin: 0 auto;
    height: 80px;
    /* background-color: red; */
    position: relative;
    /* background-color: aqua; */
  `;
  const ConBoxWrap = styled.div`
    width: 1200px;
    height: 100%;
    /* background-color: chartreuse; */
    margin: 0 auto;
    position: relative;
  `;
  const ConBox = styled.div`
    width: 480px;
    height: 80px;
    /* background-color: rebeccapurple; */
    display: flex;
    position: absolute;
    right: 0;
    display: flex;
    justify-content: space-around;
    /* background-color: purple; */
  `;
  const Box = styled.div`
    width: 230px;
    height: 80px;
    /* background-color: yellowgreen; */
    /* background-color: #5d2724; */
    background-color: ${(props) => props.$bgColor || "#5d2724"};
    border-radius: 40px 40px 0 40px;
    color: wheat;
    display: flex;
    align-items: center;
    position: relative;
  `;
  const TextWarp = styled.div`
    position: relative;
    left: 20px;
    align-items: center;
    font-weight: 700;
  `;
  const TextOne = styled.div``;
  const TextTwo = styled.div`
    margin-top: 3px;
  `;
  const Icon = styled.div`
    position: absolute;
    right: 20px;
  `;
  const HomeSectionTwo = styled.div`
    width: 500px;
    height: 200px;
    display: flex;
    align-items: center;
    img {
      position: relative;
      left: 360px;
    }
  `;
  const HomeSectionThree = styled.div`
    width: 1200px;
    height: 366px;
    padding: 30px;
    background: #fff;
    border-radius: 20px;
    border: 3px solid #5d2724;
    position: relative;
    left: 360px;
  `;

  const ThreeBoxWarp = styled.div`
    width: auto;
    height: 140px;
    /* background-color: red; */
    display: flex;
    position: relative;
  `;
  const LineBox = styled.div`
    height: 1px;
    background-color: black;
    margin: 10px 10px;
  `;
  const ThreeBox = styled.div`
    width: 140px;
    height: 140px;
    /* background-color: chartreuse; */
    font-size: 16px;
    font-weight: 600;
  `;
  const TextColorBox = styled.div`
    color: #0257a3;
    font-weight: 700;
  `;
  const TextColorBoxTwo = styled.div``;
  const ThreeBoxTw = styled.div`
    display: flex;
    margin-top: 18px;
    margin-left: 100px;
  `;
  const ThreeBoxTh = styled.div`
    width: 258px;
    height: 68px;
    border: 1px solid #5d2724;
    padding: 15px;
    display: flex;
    position: absolute;
    top: 18px;
    right: 0px;
    box-shadow: 3px 3px 1px #e3e3e3;
  `;

  const TwBoxOne = styled.div`
    height: 24px;
    font-weight: 500;
    border-radius: 20px;
    background-color: #5d2724;
    color: #fff;
    padding: 2px 14px;
    font-size: 14px;
  `;
  const TwBoxTwo = styled.div`
    margin-left: 20px;
  `;
  const TwConBox = styled.div`
    margin-top: 14px;
    border-radius: 20px;
    background-color: #252c2c;
    text-align: center;
    padding: 6px 2px;
    font-size: 14px;
    font-weight: 500;
  `;
  const ThTextWarp = styled.div`
    color: #5d2724;
    font-weight: 600;
    line-height: 1.2;
  `;
  const ThImgcon = styled.div`
    position: relative;
    margin-top: 5px;
  `;
  const Zid = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -50;
  `;

  return (
    <>
      <HomeSection>
        <ConBoxWrap>
          <ConBox>
            <a href="https://www.ut.ac.kr/kor.do">
              <Box>
                <TextWarp>
                  <TextOne>국립한국교통대학교</TextOne>
                  <TextTwo>홈페이지</TextTwo>
                </TextWarp>

                <Icon>
                  <img
                    src="https://www.ut.ac.kr/html/intro/files/ico_arr_big.png"
                    alt="오른쪽_화살표"
                  ></img>
                </Icon>
              </Box>
            </a>
            <a href="https://www.ut.ac.kr/ipsi.do">
              <Box $bgColor="#004D99">
                <TextWarp>
                  <TextOne>국립한국교통대학교입학</TextOne>
                  <TextTwo>홈페이지</TextTwo>
                </TextWarp>
                <Icon>
                  <img
                    src="https://www.ut.ac.kr/html/intro/files/ico_arr_big.png"
                    alt="오른쪽_화살표"
                  ></img>
                </Icon>
              </Box>
            </a>
          </ConBox>
        </ConBoxWrap>
      </HomeSection>
      <HomeSectionTwo>
        <img
          src="https://www.ut.ac.kr/html/intro/files/intit.png"
          alt="섹션_로고_텍스트"
        ></img>
      </HomeSectionTwo>
      <HomeSectionThree>
        <ThreeBoxWarp>
          <ThreeBox>
            <TextColorBox>2026 수시</TextColorBox>
            <TextColorBoxTwo>합격자 발표조회 및 등록안내</TextColorBoxTwo>
          </ThreeBox>
          <ThreeBoxTw>
            <TwBoxOne>발표 및 등록</TwBoxOne>
            <TwBoxTwo>
              <div>차수별 등록기간을 확인해주세요.</div>
              <a href="https://www.ut.ac.kr/cop/bbs/BBSMSTR_000000000661/selectBoardArticle.do?nttId=1084585">
                <TwConBox>차수별 등록기간 확인 바로가기</TwConBox>
              </a>
            </TwBoxTwo>
          </ThreeBoxTw>
          <a href="https://pims.jinhakapply.com/Pass/PassList.aspx?Code=2A8DEF1837">
            <ThreeBoxTh>
              <ThTextWarp>2026 수시모집 합격자 발표조회 및 등록안내</ThTextWarp>
              <ThImgcon>
                <img
                  src="https://www.ut.ac.kr/html/intro/files/ico_arr_ve2.png"
                  alt="클릭_아이콘"
                ></img>
              </ThImgcon>
            </ThreeBoxTh>
          </a>
        </ThreeBoxWarp>
        <LineBox></LineBox>
        <ThreeBoxWarp>
          <ThreeBox>
            <TextColorBox>2026 재외국민</TextColorBox>
            <TextColorBoxTwo>합격자 발표조회 및 등록안내</TextColorBoxTwo>
          </ThreeBox>
          <ThreeBoxTw>
            <TwBoxOne>발표 및 등록</TwBoxOne>
            <TwBoxTwo>
              <div>등록기간을 확인해주세요.</div>
            </TwBoxTwo>
          </ThreeBoxTw>
          <a href="https://pims.jinhakapply.com/Pass/PassList.aspx?Code=EBD28EA8EF">
            <ThreeBoxTh>
              <ThTextWarp>2026 수시모집 합격자 발표조회 및 등록안내</ThTextWarp>
              <ThImgcon>
                <img
                  src="https://www.ut.ac.kr/html/intro/files/ico_arr_ve2.png"
                  alt="클릭_아이콘"
                ></img>
              </ThImgcon>
            </ThreeBoxTh>
          </a>
        </ThreeBoxWarp>
      </HomeSectionThree>
      <Zid>
        <img src="https://www.ut.ac.kr/html/intro/files/intro_bg_2009.jpg"></img>
      </Zid>
    </>
  );
};
