import React from 'react';
import { useParams } from 'react-router-dom';
import ContainerWithSubmitButton from '../sharedComponents/ContainerWithSubmitButton';

const GameOver = () => {
  const { totalreward } = useParams();
  return (
    <ContainerWithSubmitButton
      mainText={`$${totalreward} earned`}
      subText="Total score"
      buttonText="Try again"
      route="/game/1"
    />
  );
};

export default GameOver;
