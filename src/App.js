import React, { useState, useEffect } from 'react';
import './reset.css';
import './trivia.css';
import './animations.css';
import { Trivia } from './components/trivia';
import { GameOver } from './components/game_over';
import { Next } from './components/next';

function App() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  // Check predep

  // On page load, fetch the trivia data
  useEffect(() => {
    fetch('./Apprentice_TandemFor400_Data.json')
      .then(res => res.json())
      .then(data => {
        setAllQuestions(data);
        setQuestions(generateRandomQuestions(data));
      });
  }, []);

  // When the question changes, remove the classes for correct/incorrect/selected answers
  useEffect(() => {
    const buttons = document.querySelectorAll('.trivia-answer-button');
    buttons.forEach(button => {
      button.classList.remove('green');
      button.classList.remove('red');
      button.classList.remove('user-answer');
    });
  }, [questionNumber]);

  function generateRandomQuestions(questions) {
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, 10);
  };

  function handleUpdate(e, answer) {
    setClicked(true); // Disable clicking
    const currButton = e.currentTarget;
    const buttons = document.querySelectorAll('.trivia-answer-button');
    highlightAnswers(currButton, buttons);
    if (answer === questions[questionNumber].correct) setScore(score + 1);
    if (!gameOver) {
      setNextButton(true); // Render the Next Question button
    }
  };

  /* Grab the current button and all the buttons, and add class depending 
  on the correctness of the button's answer */
  function highlightAnswers(currButton, buttons) {
    currButton.classList.add('user-answer');
    buttons.forEach(button => {
      if (button.innerHTML === questions[questionNumber].correct) {
        button.classList.add('green');
      } else {
        button.classList.add('red');
      }
    });
  };

  function handleStartGame() {
    setQuestions(generateRandomQuestions(allQuestions));
    setQuestionNumber(0);
    setScore(0);
    setClicked(false);
    setGameOver(false);
    setNextButton(false);
  };

  function nextQuestion() {
    if (questionNumber + 1 < 10) {
      setQuestionNumber(questionNumber + 1);
      setClicked(false);
      setNextButton(false);
    } else {
      setGameOver(true);
    }
  };

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
      {
      nextButton ? 
      <Next nextQuestion={nextQuestion} questionNumber={questionNumber} /> : 
      <div className='pick-text shimmer'>Pick your answer!</div>
      }
    </div>
  ) : (<div></div>)
  );
};

export default App;
