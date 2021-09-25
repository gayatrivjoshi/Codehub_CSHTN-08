import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import QuizList from '../components/QuizList';
import { SelectQuizContext } from '../context/SelectQuizContext';
import Quiz from '../static/CoverSvg/Quiz.svg';
import PlayQuizPage from './PlayQuizPage';

const QuizPage = () => {
  const { selectQuiz, setSelectQuiz } = useContext(SelectQuizContext);
  return (
    <div className="flex flex-col items-center text-secondary-lightgray w-screen">
      <Navbar />
      {selectQuiz ? (
        <PlayQuizPage selectQuiz={selectQuiz} />
      ) : (
        <div className="flex flex-col w-screen">
          <div className="flex flex-row place-content-between">
            <div className="flex flex-col ml-10 justify-center -mt-16">
              <p className="text-7xl font-serif font-semibold mb-10">
                Catch it and quiz it!
              </p>
              <p className="text-2xl font-sans font-normal ml-2">
                Buckle up and unlock your memory.
              </p>
            </div>
            <img src={Quiz} alt="quiz" className="w-5/12 mt-16" />
          </div>
          <div className='flex flex-col w-screen'>
            <p className="text-6xl text-center font-serif font-semibold">Fun Quizzes</p>
            <QuizList />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default QuizPage;
