import React from 'react';

export const GameOver = ({ score }) => {
  return (
    <div className='game-over-container'>
      <h2 className='score'>Nice job! Your Score was {score} points</h2>
      <button className='play-again'>Play Again</button>
    </div>
  );
};