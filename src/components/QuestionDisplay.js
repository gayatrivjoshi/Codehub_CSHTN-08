import React, { useState } from 'react';

const QuestionDisplay = ({ setQuizState, score, setScore, list }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');

  const nextQuestion = () => {
    if (list[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setOptionChosen('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (list[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setQuizState('result');
  };
  return (
    <div className='flex flex-col  mt-36 rounded-md w-1/2 text-secondary-darkgray text-2xl p-10 bg-primary shadow-pn'>
      <h1 className='text-3xl font-medium mb-3'>{list[currentQuestion].title}</h1>
      <div className="flex flex-col text-left w-full ">
        <button className='self-start hover:bg-secondary-lightred hover:bg-opacity-25 rounded-md py-2 px-6 focus:bg-secondary-red'
          onClick={() => {
            setOptionChosen('optionA');
          }}
        >
          {list[currentQuestion].optionA}
        </button>
        <button className='self-start hover:bg-secondary-lightred hover:bg-opacity-25 rounded-md py-2 px-6 focus:bg-secondary-red'
          onClick={() => {
            setOptionChosen('optionB');
          }}
        >
          {list[currentQuestion].optionB}
        </button>
        <button className='self-start hover:bg-secondary-lightred hover:bg-opacity-25 rounded-md py-2 px-6 focus:bg-secondary-red'
          onClick={() => {
            setOptionChosen('optionC');
          }}
        >
          {list[currentQuestion].optionC}
        </button>
        <button className='self-start hover:bg-secondary-lightred hover:bg-opacity-25 rounded-md py-2 px-6 focus:bg-secondary-red'
          onClick={() => {
            setOptionChosen('optionD');
          }}
        >
          {list[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion == list.length - 1 ? (
        <button className='mt-8 w-max h-max p-3 bg-secondary-red items-center rounded-md shadow-md text-primary font-medium' onClick={finishQuiz} >
          Finish Quiz
        </button>
      ) : (
        <button className='mt-8 w-max h-max p-3 bg-secondary-red items-center rounded-md shadow-md text-primary'
          disabled={!optionChosen}
          onClick={nextQuestion}
          id="nextQuestion"
        >
          Next Question
        </button>
      )}
    </div>
  );
};

export default QuestionDisplay;
