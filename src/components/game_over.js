import React from 'react';

export const GameOver = ({ score, handleStartGame }) => {
  return (
    <div className='game-over-container'>
      <h2 className='score'>You answered {score} questions correctly!</h2>
      <button onClick={handleStartGame} className='play-again'>Play Again</button>
    </div>
  );
};