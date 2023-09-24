import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import router from './router/router';
import { fetchQuestions } from './reducers/quizReducer';

const MainApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchQuestions()(dispatch);
  }, []);

  return (
    <RouterProvider router={router} />
  );
};

export default MainApp;
