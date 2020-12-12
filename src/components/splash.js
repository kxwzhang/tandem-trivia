import React from 'react';

export const Splash = ({ setRenderSplash }) => {
  return (
    <div className='splash-container'>
      <div className='splash-items'>
        Welcome to Tandem Trivia! Are you ready to play a game?
      </div>
      <button onClick={() => setRenderSplash(false)}>Let's get started</button>
    </div>
  )
};
