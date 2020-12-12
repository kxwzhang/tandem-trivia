import React from 'react';
import styled from 'styled-components';

const SplashContainer = styled.div`
  display: block;
`;

const SplashItem = styled.div`
  font-size: 20px;
`;

const RenderButton = styled.button`
  font-size: 16px;
  border-radius: 5px;
  border: none;
  padding: 8px;
  transition: background-color 0.25s, color 0.25s;
  margin-top: 8px;

  &:hover {
    background-color: rgb(223, 170, 223);
  }
`;

export const Splash = ({ setRenderSplash }) => {
  return (
    <SplashContainer>
      <SplashItem>
        Welcome to Tandem Trivia! Are you ready to play a game?
      </SplashItem>
      <RenderButton onClick={() => setRenderSplash(false)}>Get Started</RenderButton>
    </SplashContainer>
  )
};
