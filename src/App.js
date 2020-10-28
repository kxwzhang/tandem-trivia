import React, { useState } from 'react';
import './reset.css';
import './trivia.css';
import data from './data/Apprentice_TandemFor400_Data.json';

function App() {
  const [questions, setQuestions] = useState(data);

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
