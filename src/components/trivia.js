import React, { useState } from 'react';

export const Trivia = ({ triviaQuestion: { question, correct, incorrect }}) => {
  const [currQuestion, setCurrQuestion] = useState(undefined);

  const shuffledAnswers = [correct, ...incorrect].sort(() => Math.random() - 0.5);

  function handleAnswer(answer) {
    console.log();
    setCurrQuestion(question);
  }

  return (
    <div>
      <div className='trivia-question-container'>
        <h1 className='trivia-question'>Question: {question}</h1>
      </div>
      <div className='trivia-answers-container'>
        {shuffledAnswers.map((answer, idx) => {
          return (<button
            key={idx} 
            onClick={() => handleAnswer(answer)}
            className='trivia-answer-button'>{answer}</button>
          );
        })}
        {/* <button
          className='temp'
          onClick={() => handleAnswer(shuffledAnswers[0])} 
          className='trivia-answer-button'>1) {shuffledAnswers[0]}</button>
        <button
          className='temp'
          onClick={() => handleAnswer(shuffledAnswers[1])} 
          className='trivia-answer-button'>2) {shuffledAnswers[1]}</button>
        <button
          className='temp'
          onClick={() => handleAnswer(shuffledAnswers[2])} 
          className='trivia-answer-button'>3) {shuffledAnswers[2]}</button>
        <button
          className='temp'
          onClick={() => handleAnswer(shuffledAnswers[3])} 
          className='trivia-answer-button'>4) {shuffledAnswers[3]}</button> */}
      </div>
    </div>
  );
};