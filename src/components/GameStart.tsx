import React from 'react';
import ContainerWithSubmitButton from '../sharedComponents/ContainerWithSubmitButton';

const GameStart = () => (
  <ContainerWithSubmitButton
    mainText="Who wants to be a millionaire?"
    buttonText="Start"
    route="/game/1"
  />
);
export default GameStart;
