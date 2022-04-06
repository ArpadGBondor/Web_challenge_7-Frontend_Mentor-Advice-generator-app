import React, { useContext, useEffect } from 'react';
import AdviceContext from '../context/advice/AdviceContext';

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
        <div>
            {' '}
            Advice #{id} "{advice}"{' '}
        </div>
    );
}

export default Advice;
