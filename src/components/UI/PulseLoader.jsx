import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const pulseAnimation = keyframes`
  0% {opacity: 0; transform: scale(0);}
  50% {opacity: 1; transform: scale(1);}
  100% {opacity: 0; transform: scale(1);}
`;

const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin: 0.7rem 0 0.7rem 0;
  background-color: #000;
  animation: ${pulseAnimation} 0.5s linear infinite;
  animation-fill-mode: none;
  &:not(:last-child) {
    margin-right: 0.6rem;
  }
  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.1s;
  }
`;

export default function PulseLoader() {
  return (
    <Wrapper>
      <Dot />
      <Dot />
      <Dot />
    </Wrapper>
  );
}
