import React from 'react';
import OptionButton from './OptionButton';

const QuizSection = ({ question, chooseAnswerHandler }: any) => (
  <div className="quizContainer">
    <div className="questionTextContainer">
      <span className="questionText">{question.question}</span>
    </div>
    <div className="optionsSection">
      {
              question.options.map((option: string, index: number) => {
                const key = `${index}${option}`;
                return (
                  <OptionButton
                    option={option}
                    index={key}
                    chooseAnswerHandler={chooseAnswerHandler}
                  />
                );
              })
          }
    </div>
  </div>
);

export default QuizSection;