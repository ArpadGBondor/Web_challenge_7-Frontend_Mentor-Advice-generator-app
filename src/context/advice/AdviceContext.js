import { createContext, useReducer } from 'react';
import adviceReducer from './AdviceReducer';
import axios from 'axios';

import { SET_ADVICE, SET_LOADING } from '../types';

const AdviceContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = {
    id: 117,
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
    loading: true,
  };
  const [state, dispatch] = useReducer(adviceReducer, initialState);

  const newAdvice = async () => {
    dispatch({ type: SET_LOADING });
    try {
      const [{ data }] = await Promise.all([
        axios.get(`https://api.adviceslip.com/advice`),
        // Delay response by 2 sec to show dice animation
        new Promise((resolve) => {
          setTimeout(resolve, 2000);
        }),
      ]);

      dispatch({ type: SET_ADVICE, payload: data.slip });
    } catch (error) {
      dispatch({
        type: SET_ADVICE,
        payload: { id: 404, advice: ' - No advice found. - ' },
      });
    }
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
