import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Spinning animation for the loader ring
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const LoadingWrapper = styled.div<{ $isLoading: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #071E46;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${({ $isLoading }) => ($isLoading ? "none" : fadeOut)} 0.5s ease-out forwards;
  pointer-events: ${({ $isLoading }) => ($isLoading ? "all" : "none")};
`;

const LoaderContainer = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpinnerRing = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-top: 5px solid #fac82d;
  animation: ${spin} 1.2s linear infinite;
`;

const Logo = styled.img`
  width: 120px;
  height: 120px;
  z-index: 1;
`;

interface LoadingProps {
  minDuration?: number;
}

const Loading = ({ minDuration = 1500 }: LoadingProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShouldRender(false), 500);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration]);

  if (!shouldRender) return null;

  return (
    <LoadingWrapper $isLoading={isLoading}>
      <LoaderContainer>
        <SpinnerRing />
        <Logo src="/assets/images/Logo-uri/ESU_logo.png" alt="Loading..." />
      </LoaderContainer>
    </LoadingWrapper>
  );
};

export default Loading;
