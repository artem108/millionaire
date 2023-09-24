import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { QuizState, JsonData, Question } from '../interfaces';
import { getQuizQuestionsFromJSON, getQuestionById } from '../helpers';

const initialState: QuizState = {
  questions: [],
  rewards: [],
  totalReward: 0,
  currentQuestion: null,
  loading: false,
  error: null,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    getQuizQuestionsStart: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    getQuizQuestionsSuccess: (state, action: PayloadAction<JsonData>) => ({
      ...state,
      questions: action.payload.questions,
      rewards: action.payload.rewards,
      currentQuestion: action.payload.questions[0],
      loading: false,
      error: null,
    }),
    navigateNextQuestion: (state, action: PayloadAction<any>) => ({
      ...state,
      currentQuestion: action.payload.nextQuestion,
    }),
    gameOver: (state, action: PayloadAction<number>) => ({
      ...state,
      totalReward: state.rewards[action.payload],
      currentQuestion: state.questions[0],
    }),
    getQuizQuestionsFail: (state, action: PayloadAction<string>) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
});

export const {
  getQuizQuestionsStart,
  getQuizQuestionsSuccess,
  getQuizQuestionsFail,
  navigateNextQuestion,
  gameOver,
} = quizSlice.actions;

export default quizSlice.reducer;

export const fetchQuestions = () => async (dispatch: Dispatch) => {
  try {
    dispatch(getQuizQuestionsStart());
    const data = await getQuizQuestionsFromJSON();
    dispatch(getQuizQuestionsSuccess(data));
  } catch (err: any) {
    dispatch(getQuizQuestionsFail(err?.massage || 'Something whent wrong:('));
  }
};

export const checkAnswer = (
  answer: string,
  navigate: any, questions: Question[], dispatch: Dispatch, currentQuestion: any,
) => {
  const correctAnswer = currentQuestion?.answer;
  const nextQuestId = currentQuestion.id + 1;
  const nextQuestion = getQuestionById(questions, nextQuestId);

  if (correctAnswer?.includes(answer) && nextQuestion) {
    dispatch(navigateNextQuestion({
      nextQuestion,
    }));
    navigate(`/game/${nextQuestId}`);
  } else {
    dispatch(gameOver(nextQuestion ? currentQuestion.id - 2 : currentQuestion.id - 1));
    navigate('/gameover');
  }
};
