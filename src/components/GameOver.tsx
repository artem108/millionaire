import React from 'react';
import { useSelector } from 'react-redux';
import { GeneralState } from '../interfaces';
import ContainerWithSubmitButton from '../sharedComponents/ContainerWithSubmitButton';

const GameOver = () => {
  const { totalReward } = useSelector((state: GeneralState) => state.quiz);
  return (
    <ContainerWithSubmitButton
      mainText={`$${totalReward} earned`}
      subText="Total score"
      buttonText="Try again"
      route="/"
    />
  );
};

export default GameOver;
