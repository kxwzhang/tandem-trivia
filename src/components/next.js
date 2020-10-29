import React from 'react';

export const Next = ({ nextQuestion }) => {
  return (
    <div>
      <button onClick={nextQuestion} className='next-button'>Next Question</button>
    </div>
  );
};