import { createContext, useContext, useReducer } from 'react';
import { TYPES } from './type';

export const globalContext = createContext();

const initialState = {
    favorites: [],
    is_loading: false,
}

function reducer(state, action) {
    switch (action.type) {
        case TYPES.TOGGLE_FAV:
            return { ...state, favorites: action.payload };
        case TYPES.IS_LOADING:
            return { ...state, is_loading: action.payload };
        default:
            return state;
    }
}

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {
        state,
        dispatch,
    };

    return (
        <globalContext.Provider value={value}>
            {children}
        </globalContext.Provider>
    );
};

export default GlobalProvider;

export const useGlobalStore = () => {
    const value = useContext(globalContext);
    return value;
};
