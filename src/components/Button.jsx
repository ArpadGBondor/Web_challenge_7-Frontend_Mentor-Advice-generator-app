import React from 'react';
import Dice from '../assets/icon-dice.svg';

function Button({ onClick, loading }) {
    return (
        <button className="btn next-advice" onClick={onClick}>
            <img src={Dice} alt="Dice" />
        </button>
    );
}

export default Button;
