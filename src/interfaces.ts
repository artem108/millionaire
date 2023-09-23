export interface ContainerWithSubmitButtonProps {
  mainText: string;
  subText?: string;
  buttonText: string;
  route: string;
  onClick?: (event?: React.MouseEvent) => void;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  reward: string;
}

export interface JsonData {
  questions: Question[] | [];
  rewards: number[] | [];
}

export interface QuizState {
  questions: Question[] | [];
  rewards: number[] | [];
  loading: boolean;
  error: string | null;
}

export interface GeneralState {
  quiz: QuizState;
}
