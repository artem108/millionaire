import React from 'react';

const BurgerButton = ({ menuClickHandler }: any) => (
  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
  <div className="burgerButton" onClick={menuClickHandler} />
);

export default BurgerButton;
