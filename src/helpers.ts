import data from './gameConfig/gameConfig.json';
import { Question, JsonData } from './interfaces';

export const getQuizQuestionsFromJSON = async (): Promise<JsonData> => data as JsonData;

export const getQuestionById = (questions: Question[], pageId: number) => (
  questions.find(({ id }) => id === pageId)
);
