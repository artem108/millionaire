import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerWithSubmitButtonProps } from '../interfaces';
import './sharedComponents.scss';

const ContainerWithSubmitButton = ({
  mainText,
  subText,
  buttonText,
  route,
  onClick,
}: ContainerWithSubmitButtonProps) => (
  <div className="container">
    <div className="contentContainer">
      <div className="handImageContainer" />
      <div className="buttonContainer">
        <div>
          {subText && <span className="subText">{subText}</span>}
          <span className="mainText">{mainText}</span>
        </div>
        <div>
          <Link to={route}>
            <button
              onClick={onClick}
              className="submitButton"
              type="button"
            >
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default ContainerWithSubmitButton;
