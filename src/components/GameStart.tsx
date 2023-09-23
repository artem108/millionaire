import React from 'react';
import ContainerWithSubmitButton from '../sharedComponents/ContainerWithSubmitButton';

const GameStart = () => {
  const onClick = () => {};
  return (
    <ContainerWithSubmitButton
      mainText="Who wants to be a millionaire?"
      buttonText="Start"
      onClick={onClick}
      route="/game/1"
    />
  );
};
export default GameStart;
