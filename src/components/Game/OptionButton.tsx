import React from 'react';
import { OptionButtonProps } from '../../interfaces';

const OptionButton = ({ option, chooseAnswerHandler }: OptionButtonProps) => (
  <div className="optionButton greyBorder">
    <span className="orangeOptionText">A</span>
    <button
      type="button"
      onClick={(event) => chooseAnswerHandler(event)}
    >
      {option}
    </button>
  </div>
);

export default OptionButton;
