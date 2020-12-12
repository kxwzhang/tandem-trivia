import React from 'react';
import styled from 'styled-components';

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
    <div className='splash-container'>
      <div className='splash-items'>
        Welcome to Tandem Trivia! Are you ready to play a game?
      </div>
      <RenderButton onClick={() => setRenderSplash(false)}>Let's get started</RenderButton>
    </div>
  )
};
