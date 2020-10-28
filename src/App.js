import React, { useState, useEffect } from 'react';
import './reset.css';
import './trivia.css';
import { Trivia } from './components/trivia';

function App() {
  const [questions, setQuestions] = useState([]);

  function generateRandomQuestions(questions) {
    /* 
    Duplicate original questions array then sort based 
    on the difference between a random number and 0.5
    */
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    // Get sub-array of first 10 elements after shuffling
    return shuffledQuestions.slice(0, 10);
  }

  useEffect(() => {
    fetch('./Apprentice_TandemFor400_Data.json')
      .then(res => res.json())
      .then(data => setQuestions(generateRandomQuestions(data)));
  }, []);

  console.log(questions);

  return questions.length ? (
    <div className='trivia-container'>
      <Trivia triviaQuestion={questions[0]} />
    </div>
  ) : (<div></div>);
}

export default App;
