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
    // nextPage: (state) => [...state],
  },
});

export const { getQuizQuestionsStart, getQuizQuestionsSuccess, checkAnswer } = quizSlice.actions;

export default quizSlice.reducer;

export const fetchQuestions = () => async (dispatch: Dispatch) => {
  try {
    dispatch(getQuizQuestionsStart());
    const data = await getQuizQuestionsFromJSON();
    dispatch(getQuizQuestionsSuccess(data));
  } catch (err) {
    console.error(err);
  }
};
