import React, { useState, useEffect } from 'react';
import './reset.css';
import './trivia.css';

function App() {
  const [questions, setQuestions] = useState([]);

  function generateRandomQuestions(questions) {
    /* 
    Duplicate original questions array then sort based 
    on the difference between a random number and 0.5
    */
    const shuffled = [...questions].sort(() => Math.random() - 0.5);

    // Get sub-array of first 10 elements after shuffling
    return shuffled.slice(0, 10);
  }

  useEffect(() => {
    fetch('./Apprentice_TandemFor400_Data.json')
      .then(res => res.json())
      .then(data => setQuestions(generateRandomQuestions(data)));
  }, []);

  console.log(questions);

  return (
    <div className='trivia-container'>
      <div className='trivia-question-container'>
        <h1 className='trivia-question'>Questions Placeholder</h1>
      </div>
      <div className='trivia-answers-container'>
        <button className='trivia-answer-button'>Option 1</button>
        <button className='trivia-answer-button'>Option 2</button>
        <button className='trivia-answer-button'>Option 3</button>
        <button className='trivia-answer-button'>Option 4</button>
      </div>
    </div>
  );
}

export default App;
