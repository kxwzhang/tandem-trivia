import React, { useState } from 'react';

export const Trivia = ({ handleUpdate, triviaQuestion: { question, correct, incorrect }}) => {
  const shuffledAnswers = [correct, ...incorrect].sort(() => Math.random() - 0.5);

  return (
    <div>
      <div className='trivia-question-container'>
        <h1 className='trivia-question'>Question: {question}</h1>
      </div>
      <div className='trivia-answers-container'>
        {shuffledAnswers.map((answer, idx) => {
          return (<button
            key={idx} 
            onClick={() => handleUpdate(answer)}
            className='trivia-answer-button'>{answer}</button>
          );
        })}
      </div>
    </div>
  );
};