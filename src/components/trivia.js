import React from 'react';

export const Trivia = ({ triviaQuestion: { question, correct, incorrect }}) => {
  return (
    <div>
      <div className='trivia-question-container'>
        <h1 className='trivia-question'>Question: {question}</h1>
      </div>
      <div className='trivia-answers-container'>
        <button className='trivia-answer-button'>1) {correct}</button>
        <button className='trivia-answer-button'>2) {incorrect[0]}</button>
        <button className='trivia-answer-button'>3) {incorrect[1]}</button>
        <button className='trivia-answer-button'>4) {incorrect[2]}</button>
      </div>
    </div>
  );
};