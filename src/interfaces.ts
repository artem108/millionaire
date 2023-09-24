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
}

export interface JsonData {
  questions: Question[] | [];
  rewards: number[] | [];
}

export interface QuizState {
  questions: Question[] | [];
  rewards: number[] | [];
  totalReward: number;
  currentQuestion: Question | null;
  loading: boolean;
  error: string | null;
}

export interface GeneralState {
  quiz: QuizState;
}

export interface OptionButtonProps {
  option: string;
  chooseAnswerHandler: (event?: React.MouseEvent) => void;
}

export interface QuizSectionProps {
  question: Question;
  showMobileMenu: boolean;
  chooseAnswerHandler: (event?: React.MouseEvent) => void;
}

export interface RevardsSectionProps {
  rewards: number[];
  currentReward?: any;
  showMobileMenu: boolean;
}
