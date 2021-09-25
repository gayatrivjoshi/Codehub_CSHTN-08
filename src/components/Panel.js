import React from 'react';
import PanelCard from './PanelCard';
import BookLogo from '../static/panel-logo/Book.svg';
import CourseLogo from '../static/panel-logo/Courses.svg';
import QuizLogo from '../static/panel-logo/Quizzes.svg';
import QALogo from '../static/panel-logo/Q&A.svg';

const Panel = () => {
  return (
    <div>
      <div className="flex flex-row w-screen bg-secondary-brightred h-72 items-center justify-center shadow-inner">
        <div className="flex flex-row place-content-between w-2/3">
          <PanelCard img={BookLogo} title={'Books'} />
          <PanelCard img={CourseLogo} title={'Courses'} />
          <PanelCard img={QuizLogo} title={'Quizzes'} />
          <PanelCard img={QALogo} title={'Q&A'} />
        </div>
      </div>
    </div>
  );
};

export default Panel;
