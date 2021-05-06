import styled from "styled-components";
import profile from "./assets/profile.jpg";
import logo from "./assets/google.png";
import memu from "./assets/menu.PNG";
import search from "./assets/search.PNG";
import buttons from "./assets/button.PNG";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height:100vh;
  margin:0;
`

/* Header */
const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%
  justify-content: flex-end;
  height: 50px;
  margin-top:3px;
`

const Button = styled.button`
  margin-right: 10px;
  background: white;
  border: none;
  outline: none;
`

const Image = styled.button`
  margin-right: 10px;
  margin-top:10px;
  background: white;
  border: none;
  outline: none;
`

/* Center */

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`

const Logo = styled.image`
  margin-right: 10px;
  margin-top: 10px;
  background: white;
  border: none;
  outline: none;
`

const Input = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  width:550px;
  height:40px;
  border-radius: 30px;
  border: 1px solid lightgray;
  outline: none;
`

const InputConsol = styled.input`
  border: 1px solid white;
  width: 400px;
  outline: none;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const GrayButton = styled.button`
  margin-top: 10px;
  background: #F8F9F9;
  outline: none;
  border: none;
  margin-top: 30px;
  height: 35px;
  padding-left:20px;
  padding-right:20px;
  border-radius:10px;
`

/* Footer */

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  justify-content: flex-start;
`

const Footer1 = styled.div`
  margin-top: 310px;
  color: gray;
  align-content: flex-end;
  padding-left: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 15px;
  background-color: #F2F2F2;
`

const Footer2 = styled.div`
  color: gray;
  border-top: 1px solid lightgray;
  padding-left: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 14px;
  background-color: #F2F2F2;
`

function App() {
  return (
    <Wrapper>
      <Header>
        <Button>Gmail</Button>
        <Button>이미지</Button>
        <Button><img src={memu} style={{marginTop: "8px"}}/></Button>
        <Image><img src={profile} style={{ borderRadius: "50%"}}/></Image>
      </Header>
      <Center>
        <Logo><img src={logo}/></Logo>
        <Input >
          <img src={search} style={{margin: "7px"}}/>
          <InputConsol/>
          <img src={buttons} style={{height: "100%", borderRadius: "50%", marginRight: "10px"}} />
        </Input>
        <Row>
          <GrayButton>Google 검색</GrayButton>
          <GrayButton>I'm Feeling Lucky </GrayButton>
        </Row>
        <div style={{ marginTop: "20px"}}>
          <a style={{ fontSize: "14px"}}>Google 제공 서비스:
          <a style={{ color: "#3733BF"}}>English</a></a>
        </div>
      </Center>
      <FooterWrapper>
        <Footer1>대한민국</Footer1>
        <Footer2>
          <a href="" style={{ marginRight: "23px"}}>Google 정보</a>
          <a href="" style={{ marginRight: "23px"}}>광고</a>
          <a href="" style={{ marginRight: "23px"}}>비즈니스</a>
          <a href="" style={{ marginRight: "23px"}}>검색의 원리</a>
          <a href="" style={{ marginLeft: "80rem", marginRight: "23px"}}>개인정보처리방침</a>
          <a href="" style={{ marginRight: "23px"}}>약관</a>
          <a style={{ marginRight: "23px"}}>설정</a>
        </Footer2>
      </FooterWrapper>
    </Wrapper>
    
  );
}

export default App;
