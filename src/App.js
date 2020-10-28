import React, { useState, useEffect } from 'react';
import './reset.css';
import './trivia.css';
import { Trivia } from './components/trivia';
import { GameOver } from './components/game_over';

function App() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  function generateRandomQuestions(questions) {
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, 10);
  };

  // On page load, fetch the trivia data
  useEffect(() => {
    fetch('./Apprentice_TandemFor400_Data.json')
      .then(res => res.json())
      .then(data => {
        setAllQuestions(data);
        setQuestions(generateRandomQuestions(data));
      });
  }, []);

  function handleUpdate(answer) {
    setClicked(true); // Disable clicking
    if (answer === questions[questionNumber].correct) setScore(score + 1000);
    if (!gameOver) {
      // After 3 seconds, update to next question and re-enable clicking
      setTimeout(() => {
        if (questionNumber + 1 < 10) {
          setQuestionNumber(questionNumber + 1);
          setClicked(false);
        } else {
          setGameOver(true);
        }
      }, 3000);
    }
  };

  function highlightAnswers() {
    
  }

  function handleStartGame() {
    setQuestions(generateRandomQuestions(allQuestions));
    setQuestionNumber(0);
    setScore(0);
    setClicked(false);
    setGameOver(false);
  }

  /* If the game is over, render the game over component
  Otherwise check that the questions array is loaded on the page 
  then render the trivia component */
  return (
    gameOver ? <GameOver score={score} handleStartGame={handleStartGame} /> : questions.length ? (
    <div className='trivia-container'>
      <h1 className='trivia-title'>Tandem Trivia-Hoot!</h1>
      <Trivia 
        questionNumber={questionNumber + 1}
        triviaQuestion={questions[questionNumber]}
        handleUpdate={handleUpdate}
        clicked={clicked} />
    </div>
  ) : (<div></div>)
  );
};

export default App;
