import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import RevardsSection from './RewardsSection';
import QuizSection from './QuizSection';
import BurgerButton from './ BurgerButton';
import { GeneralState } from '../../interfaces';
import { checkAnswer } from '../../reducers/quizReducer';
import './index.scss';

const Game = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { questions, rewards, currentQuestion } = useSelector((state: GeneralState) => state.quiz);
  const currentReward = currentQuestion && rewards[currentQuestion.id - 1];

  const chooseAnswerHandler = (event: any) => {
    const answer = event.target.innerText;
    checkAnswer(answer, navigate, questions, dispatch, currentQuestion);
  };

  const menuClickHandler = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  return (
    <>
      {
      currentQuestion && (
        <div className="gameContainer">
          <QuizSection
            question={currentQuestion}
            chooseAnswerHandler={chooseAnswerHandler}
            showMobileMenu={showMobileMenu}
          />
          <RevardsSection
            rewards={rewards}
            currentReward={currentReward}
            showMobileMenu={showMobileMenu}
          />
          <BurgerButton
            menuClickHandler={menuClickHandler}
          />
        </div>
      )
    }
    </>
  );
};

export default Game;
