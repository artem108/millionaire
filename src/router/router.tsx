import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import GameStart from '../components/GameStart';
import Game from '../components/Game/Game';
import GameOver from '../components/GameOver';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GameStart />,
  },
  {
    path: '/game/:id',
    element: <Game />,
  },
  {
    path: '/gameover/:totalreward',
    element: <GameOver />,
  },
], { basename: 'millionaire/' });

export default router;
