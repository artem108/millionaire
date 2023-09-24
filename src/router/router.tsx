import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import GameStart from '../components/GameStart';
import Game from '../components/Game/Game';
import GameOver from '../components/GameOver';

const router = createBrowserRouter([
  {
    path: '/millionaire/',
    element: <GameStart />,
  },
  {
    path: '/millionaire/game/:id',
    element: <Game />,
  },
  {
    path: '/millionaire/gameover/:totalreward',
    element: <GameOver />,
  },
], { basename: 'millionaire' });

export default router;
