import React from 'react';

const OptionButton = ({ option, index, chooseAnswerHandler }: any) => (
  <div className="optionButton" key={index}>
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
