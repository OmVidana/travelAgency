import styled from "styled-components";
import Button from "../components/global/Button";
import Icon from "../components/global/Icon";
import Input from "../components/global/Input";
import signupimg from "../components/global/background.jpg";
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";

function Signup() {
  return (
    <Bodysign>
    <MainContainer>
      <WelcomeText>Sign Up</WelcomeText>
      <InputContainer>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button content="Sign Up" />
      </ButtonContainer>
      <LoginWith>OR LOGIN WITH</LoginWith>
      <HorizontalRule />
      <IconsContainer>
        <Icon>
          <FaFacebookF />
        </Icon>
        <Icon>
          <FaInstagram />
        </Icon>
        <Icon>
          <FaTwitter />
        </Icon>
        <Icon>
          <FaGoogle/>
        </Icon>
      </IconsContainer>
      <ForgotPassword>Forgot Password ?</ForgotPassword>
    </MainContainer>
    </Bodysign>
  );
}

const Bodysign = styled.body`
background-image: url(${signupimg});
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
font-family: "Raleway", sans-serif;
color: white;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(83,104,114, 0.85);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 80%;
  height: 0.1rem;
  border-radius: 0.3rem;
  border: none;
  background-color: rgba(0,0,0);
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export default Signup;
