import { SET_ADVICE, SET_LOADING } from '../types';

const adviceReducer = (state, action) => {
    switch (action.type) {
        case SET_ADVICE:
            return {
                ...state,
                id: action.payload.id,
                advice: action.payload.advice,
                loading: false,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};

export default adviceReducer;
