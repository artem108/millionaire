import React from 'react';
import { createHashRouter } from 'react-router-dom';
import GameStart from '../components/GameStart';
import Game from '../components/Game/Game';
import GameOver from '../components/GameOver';

const router = createHashRouter([
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
]);

export default router;
