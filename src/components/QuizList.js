import React from 'react';
import { Quizzes } from '../resources/Questions';
import QuizItem from './QuizItem';

const QuizList = () => {
  const options = Quizzes;
  return (
    <div>
      <div className="flex flex-col bg-primary rounded-lg justify-center ml-40 w-3/4 mt-16 z-20 shadow-pn mb-32">
        {options.map((option, idx) => {
          return (
            <div key={idx}>
              <QuizItem title={option.title} idx={idx} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizList;
