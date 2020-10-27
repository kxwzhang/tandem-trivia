import React from 'react';
import './reset.css';
import './trivia.css';
import data from './data/Apprentice_TandemFor400_Data.json';

function App() {
  return (
    <div className='trivia-container'>
      <div>
        Questions Placeholder
      </div>
      <div className='trivia-answers-container'>
        <div>Option 1</div>
        <div>Option 2</div>
        <div>Option 3</div>
        <div>Option 4</div>
      </div>
    </div>
  );
}

export default App;
