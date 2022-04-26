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
        <main className="card">
            <h1 className="card-title">Advice #{id}</h1>
            <div className="card-content">"{advice}"</div>
            <HorizontalLine />
            <div className={`card-footer${loading ? ' spin' : ''}`}>
                <Button onClick={() => newAdvice()} loading={loading} />
            </div>
        </main>
    );
}

export default Advice;
