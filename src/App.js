import React, { useState, useEffect } from 'react';
import './reset.css';
import './trivia.css';
import { Trivia } from './components/trivia';

function App() {
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);

  function generateRandomQuestions(questions) {
    /* Duplicate original questions array then sort based 
    on the difference between a random number and 0.5 */
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    // Get sub-array of first 10 elements after shuffling
    return shuffledQuestions.slice(0, 10);
  };

  // On page load, fetch the trivia data
  useEffect(() => {
    fetch('./Apprentice_TandemFor400_Data.json')
      .then(res => res.json())
      .then(data => setQuestions(generateRandomQuestions(data)));
  }, []);

  function handleUpdate(answer) {
    console.log('clicking');
    setClicked(true); // Disable clicking
    // If the answer is correct update our score
    if (answer === questions[questionNumber].correct) setScore(score + 1000);
    if (questionNumber < 10) {
      // After 3 seconds, update to next question and re-enable clicking
      setTimeout(() => {
        setQuestionNumber(questionNumber + 1);
        setClicked(false);
      }, 3000);
    } else {
      // Reset the game after the last question has been reache 
    }
  };

  return questions.length ? (
    <div className='trivia-container'>
      <h1 className='trivia-title'>Tandem Trivia-Hoot!</h1>
      <h2 className='score'>Score: {score}</h2>
      <Trivia 
        triviaQuestion={questions[questionNumber]}
        handleUpdate={handleUpdate}
        clicked={clicked} />
    </div>
  ) : (<div></div>);
};

export default App;
