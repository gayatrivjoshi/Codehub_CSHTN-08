import React, { useState } from 'react';
import QuestionDisplay from '../components/QuestionDisplay';
import EndScreen from '../components/EndScreen';
import { Quizzes } from '../resources/Questions';

const PlayQuizPage = ({ selectQuiz }) => {
  const list = Quizzes[selectQuiz-1].questions;
  const [score, setScore] = useState(0);
  const [quizState, setQuizState] = useState('display');
  return (
    <div className='w-screen flex justify-center'>
      {quizState === 'display' ? (
        <QuestionDisplay
          selectQuiz={selectQuiz}
          setQuizState={setQuizState}
          score={score}
          setScore={setScore}
          list={list}
        />
      ) : (
        <EndScreen score={score} setScore={setScore} setQuizState={setQuizState} list={list} />
      )}
    </div>
  );
};

export default PlayQuizPage;
