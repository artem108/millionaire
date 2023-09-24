import React from 'react';

const BurgerButton = ({ menuClickHandler }: any) => (
  <div className="burgerButton">
    <button onClick={menuClickHandler} type="button">
      click
    </button>
  </div>
);

export default BurgerButton;
