import React, { useContext, useEffect } from 'react';
import AdviceContext from '../context/advice/AdviceContext';
import Button from './Button';

function Advice() {
    const { id, advice, loading, newAdvice } = useContext(AdviceContext);
    useEffect(
        () => {
            newAdvice();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    return (
        <div className="card">
            <div className="card-title">Advice #{id}</div>
            <div className="card-content">"{advice}"</div>
            <div className="card-footer">
                <Button onClick={() => newAdvice()} />
            </div>
        </div>
    );
}

export default Advice;
