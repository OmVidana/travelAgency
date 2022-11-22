import styled from "styled-components";
export default function Input({ type, placeholder }) {
  return <StyledInput type= {type} placeholder={placeholder} />;
}

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(83,104,120, .85);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: rgba(0,0,0);
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem rgba(255,255,255);
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: rgba(0,0,0);
    font-weight: 100;
    font-size: 1rem;
  }
`;
