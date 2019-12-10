import styled, { keyframes } from 'styled-components';
import Fundo from '../../assets/bagan.jpg';

// Animations
export const fade = keyframes`
  from{
    opacity: 0;
    transform: scale(0.4);
  }
  to{
    opacity: 1;
    transform: scale(1);
  }
`;

export const move = keyframes`
  from {
    opacity: 0;
    transform: translateX(-35%);
  }
  to {
    opacity: 1;
    transform: translateX(1);
  }
`;

export const Background = styled.div`
  background: linear-gradient(
      to right top,
      rgba(5, 25, 55, 0.5),
      rgba(0, 74, 120, 0.5),
      rgba(0, 128, 147, 0.5),
      rgba(0, 181, 118, 0.5),
      rgba(123, 225, 26, 0.5)
    ),
    url(${Fundo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  min-height: 65%;
  min-width: 30%;
  padding: 1em;
  margin: 0.5em;
  text-align: center;
  animation-name: ${fade};
  animation-duration: 0.8s;
`;

export const Input = styled.input`
  border: none;
  background-color: #f4f4f4;
  border-radius: 5rem;
  color: #adadad;
  width: 20rem;
  height: 3rem;
  margin: 0.5rem;
  text-align: center;
  font-size: 1.2rem;
  animation-name: ${move};
  animation-duration: 500ms;
  animation-delay: 250ms;
  animation-fill-mode: backwards;

  ::placeholder {
    color: #adadad;
  }
`;

export const Button = styled.button`
  background-color: #fff;
  border: 0.1rem solid #7be11a;
  border-radius: 5rem;
  font-size: 1.5rem;
  margin-top: 1rem;
  width: 100%;
  height: 3rem;
  color: #7be11a;
  transition: 0.2s;
  animation-name: ${move};
  animation-duration: 500ms;
  animation-delay: 250ms;
  animation-fill-mode: backwards;

  :hover {
    background-color: #7be11a;
    color: #fff;
  }
`;
