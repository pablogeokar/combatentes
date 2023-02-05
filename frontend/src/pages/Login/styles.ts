import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  overflow: hidden;
`;

export const FormLogin = styled.form`
  position: relative;
  background-color: #ffffff;
  min-width: 350px;
  min-height: 350px;
  padding: 24px;
  border-radius: 8px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;

export const Moita = styled.img`
  position: absolute;
  width: 350px;
  top: -175px;
  right: -100px;
  pointer-events: none;
  filter: drop-shadow(0 0 4px #000);
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  padding: 16px 0;
  color: #004b23;
`;

export const InputText = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 8px 0;
  outline: none;
  font-size: 1.1rem;
  color: #111d13;
  font-weight: 100;

  :focus {
    border: 2px solid #004b23;
  }
`;

export const Btn = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  margin: 8px 0;
  outline: none;
  background-color: #004b23;
  cursor: pointer;
  color: #fffcf7;

  :hover {
    background-color: #2b9348;
  }
`;
