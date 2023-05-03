import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isCartShow: false,
    alertName: '',
};

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState);
    value.getGoods = (data) => {
        dispatch({ type: 'GET_GOODS', payload: data });
    };
    value.closeAlert = () => {
        dispatch({ type: 'CLOSE_ALERT' });
    };
    value.removeFromCart = (idToRemove) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { id: idToRemove } });
    };
    value.toggleCart = () => {
        dispatch({ type: 'TOGGLE_CART' });
    };
    value.addToCart = (good) => {
        dispatch({ type: 'ADD_TO_CART', payload: good });
    };
    value.incQuantity = (itemID) => {
        dispatch({ type: 'INC_QUANTITY', payload: { id: itemID } });
    };
    value.decQuantity = (itemID) => {
        dispatch({ type: 'DEC_QUANTITY', payload: { id: itemID } });
    };

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    );
};
