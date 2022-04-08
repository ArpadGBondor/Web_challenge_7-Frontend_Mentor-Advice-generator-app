import React, { useContext, useEffect } from 'react';
import AdviceContext from '../context/advice/AdviceContext';
import Button from './Button';
import HorizontalLine from './layout/HorizontalLine';

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
            <HorizontalLine />
            <div className="card-footer">
                <Button onClick={() => newAdvice()} />
            </div>
        </div>
    );
}

export default Advice;
