import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuestions } from '../../slice';
import RevardsSection from './RewardsSection';
import QuizSection from './QuizSection';
import { GeneralState } from '../../interfaces';
import { getQuestionById } from '../../helpers';
import './index.scss';

const Game = () => {
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
          />
          <RevardsSection
            rewards={rewards}
            currentReward={currentReward}
          />
        </div>
      )
    }
    </>
  );
};

export default Game;
