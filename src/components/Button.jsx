import React from 'react';
import Dice from '../assets/icon-dice.svg';

function Button({ onClick }) {
    return (
        <div className="btn next-advice" onClick={onClick}>
            <img src={Dice} alt="Dice" />
        </div>
    );
}

export default Button;
