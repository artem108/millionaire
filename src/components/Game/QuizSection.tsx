import React from 'react';
import OptionButton from './OptionButton';
import { QuizSectionProps } from '../../interfaces';

const QuizSection = ({ question, chooseAnswerHandler, showMobileMenu }: QuizSectionProps) => (
  <div className={`quizContainer ${showMobileMenu ? 'hideQuizMobile' : ''}`}>
    <div className="questionTextContainer">
      <span className="questionText">{question.question}</span>
    </div>
    <div className="optionsSection">
      {
              question.options.map((option: string) => (
                <OptionButton
                  option={option}
                  key={`${question.id}${option}`}
                  chooseAnswerHandler={chooseAnswerHandler}
                />
              ))
          }
    </div>
  </div>
);

export default QuizSection;
