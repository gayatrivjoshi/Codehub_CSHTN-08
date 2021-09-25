import React, { useContext } from 'react';
import { SelectQuizContext } from '../context/SelectQuizContext';

const QuizItem = ({ title, idx }) => {
  const { selectQuiz, setSelectQuiz } = useContext(SelectQuizContext);
  return (
    <div>
      <div className="flex flex-row place-content-between border-b border-secondary-lightgray w-full h-32 border-opacity-10 items-center">
        <p className="ml-8 text-2xl font-normal">{title}</p>
        <button
          onClick={() => setSelectQuiz(idx + 1)}
          className="w-52 text-2xl h-12 mr-8 bg-secondary-red items-center rounded-md font-medium shadow-md text-primary"
        >
          Solve now
        </button>
      </div>
    </div>
  );
};

export default QuizItem;
