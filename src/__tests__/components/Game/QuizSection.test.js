import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import QuizSection from '../../../components/Game/QuizSection';
import '@testing-library/jest-dom';

// eslint-disable-next-line no-undef
afterEach(() => {
  cleanup();
});
const question = {
  id: 1,
  question: 'What is the capital of France?',
  options: ['London', 'Berlin', 'Madrid', 'Paris'],
  answer: ['Paris'],
};

// eslint-disable-next-line no-undef
test('Should render question text', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  render(<QuizSection
    question={question}
    showMobileMenu={false}
    chooseAnswerHandler={() => {}}
  />);

  const textElem = screen.getByText('What is the capital of France?');

  // eslint-disable-next-line no-undef
  expect(textElem).toBeInTheDocument();
});

// eslint-disable-next-line no-undef
test('Should render answers options text', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  render(<QuizSection
    question={question}
    showMobileMenu={false}
    chooseAnswerHandler={() => {}}
  />);

  const optionText = screen.getByText('London');

  // eslint-disable-next-line no-undef
  expect(optionText).toBeInTheDocument();
});
