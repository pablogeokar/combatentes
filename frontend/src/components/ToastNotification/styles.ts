import styled, { keyframes } from "styled-components";

const AnimationToastInRight = keyframes`
    from{
        transform: translateX(100%);
    }
    to{
        transform: translateX(0);
    }
`;

export const Wrapper = styled.div`
  position: fixed;
  right: 25px;
  top: 30px;
  z-index: 1000;
  transition: 0.3s ease-in-out;

  &.animation-right {
    animation: ${AnimationToastInRight} 0.7s;
  }
`;

export const Container = styled.div`
  animation: ${AnimationToastInRight} 0.7s;
  background: url("/bg-dialog.jpg");
  background-size: contain;
  border-radius: 12px;
  border: 4px solid #e7ae5d;
  box-shadow: inset 0 0 5px #4b4b4b, 0 1px 8px #fff;
  color: #4e3927;
  cursor: pointer;
  display: flex;
  margin-top: 8px;
  opacity: 0.9;
  overflow: hidden;
  padding: 20px 35px 20px 25px;
  position: relative;

  &:hover {
    opacity: 1;
  }

  .error {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 50%;
    background-color: #b33939;
    color: #f7f7f7;
    box-shadow: inset 0 0 10px #000;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 15px;
    padding: 5px;
    cursor: pointer;
    opacity: 0.8;

    :hover {
      opacity: 1;
    }
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

export const Text = styled.span`
  font-weight: 400;
  font-size: 0.8rem;
`;
