import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { QuizState, JsonData } from './interfaces';
import { getQuizQuestionsFromJSON } from './helpers';

const initialState: QuizState = {
  questions: [],
  rewards: [],
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
      loading: false,
      error: null,
    }),
    checkAnswer: (state) => state,
    getQuizQuestionsFail: (state, action: PayloadAction<string>) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
});

export const {
  getQuizQuestionsStart, getQuizQuestionsSuccess, checkAnswer, getQuizQuestionsFail,
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
