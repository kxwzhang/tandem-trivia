import React from 'react';

export const Next = ({ nextQuestion, questionNumber }) => {
  let buttonText = questionNumber === 9 ? 'Results' : 'Next Question'; 
  return (
    <div>
      <button onClick={nextQuestion} className='next-button'>{buttonText}</button>
    </div>
  );
};