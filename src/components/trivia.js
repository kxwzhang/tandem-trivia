import React, { useState, useEffect } from 'react';

export const Trivia = ({ 
  handleUpdate, 
  clicked, 
  questionNumber,
  triviaQuestion: { question, correct, incorrect }}) => {

  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    setShuffledAnswers([correct, ...incorrect].sort(() => Math.random() - 0.5));
  }, [questionNumber]);

  return (
    <div>
      <div className='trivia-question-container'>
        <h1 className='trivia-question'>{questionNumber}) {question}</h1>
      </div>
      <div className='trivia-answers-container'>
        {shuffledAnswers.map((answer, idx) => {
          return (
            <button
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