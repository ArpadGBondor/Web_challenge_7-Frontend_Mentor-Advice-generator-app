import { createContext, useReducer } from 'react';
import adviceReducer from './AdviceReducer';
import axios from 'axios';

import { SET_ADVICE, SET_LOADING } from '../types';

const AdviceContext = createContext();

export const AlertProvider = ({ children }) => {
    const initialState = {
        id: 0,
        advice: '',
        loading: true,
    };
    const [state, dispatch] = useReducer(adviceReducer, initialState);

    const newAdvice = async () => {
        dispatch({ type: SET_LOADING });

        const { data } = await axios.get(`https://api.adviceslip.com/advice`);

        dispatch({ type: SET_ADVICE, payload: data.slip });
    };

    return (
        <AdviceContext.Provider
            value={{
                ...state,
                newAdvice,
            }}
        >
            {children}
        </AdviceContext.Provider>
    );
};

export default AdviceContext;
