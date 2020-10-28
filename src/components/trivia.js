import React from 'react';

export const Trivia = ({ 
  handleUpdate, 
  clicked, 
  triviaQuestion: { question, correct, incorrect }}) => {
  const shuffledAnswers = [correct, ...incorrect].sort(() => Math.random() - 0.5);

  return (
    <div>
      <div className='trivia-question-container'>
        <h1 className='trivia-question'>{question}</h1>
      </div>
      <div className='trivia-answers-container'>
        {shuffledAnswers.map((answer, idx) => {
          return (<button
            key={idx} 
            disabled={clicked}
            onClick={() => handleUpdate(answer)}
            className='trivia-answer-button'>{answer}</button>
          );
        })}
      </div>
    </div>
  );
};