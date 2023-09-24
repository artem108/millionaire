import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuestions } from '../../slice';
import RevardsSection from './RewardsSection';
import QuizSection from './QuizSection';
import BurgerButton from './ BurgerButton';
import { GeneralState } from '../../interfaces';
import { getQuestionById } from '../../helpers';
import './index.scss';

const Game = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const idToNum = Number(id);
  const nextQuestId = idToNum + 1;

  const { questions, rewards } = useSelector((state: GeneralState) => state.quiz);
  const curretnQuestion = getQuestionById(questions, idToNum);
  const currentReward = curretnQuestion && rewards[curretnQuestion.id - 1];

  const chooseAnswerHandler = (event: any) => {
    const answer = event.target.innerText;
    const correctAnswer = curretnQuestion?.answer;
    if (correctAnswer?.includes(answer) && getQuestionById(questions, nextQuestId)) {
      navigate(`/game/${nextQuestId}`);
    } else {
      navigate(`/gameover/${currentReward}`);
    }
  };

  const menuClickHandler = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  useEffect(() => {
    fetchQuestions()(dispatch);
  }, []);

  return (
    <>
      {
      curretnQuestion && (
        <div className="gameContainer">
          <QuizSection
            question={curretnQuestion}
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
