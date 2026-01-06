//The context is the one we are using to drill the state down
//That is why we update the state here using the useReducer

import {useContext, useReducer, useEffect, createContext} from 'react';
import reducer from './reducer';
import cartItems from './data';
import { CLEAR_CART, REMOVE, INCREASE, DECREASE, LOADING, DISPLAY_ITEMS } from './actions';
import { getTotals } from './utils';

//Invoking the create context method
const AppContext = createContext();

//Initial State
const InitialState = {
    loading: false,
    cart: new Map(cartItems.map((item) => [item.id, item])),
};

export const AppProvider = ({children}) => {
    //The value to drill
    const [state, dispatch] = useReducer(reducer, InitialState);
    
    //Calculate totals
    const {totalAmount, totalCost} = getTotals(state.cart);
   
    //Clear cart
    const clearCart = () => {
        dispatch({type: CLEAR_CART});
    };

    //Remove item
    const removeItem = (id) =>
    {
        dispatch({type: REMOVE, payload: {id}});
    };
    //Increase quantity of an item
    const increase = (id) =>
    {
        dispatch({type: INCREASE, payload: {id}});
    };

    //Decrease the quantity of an item
    const decrease = (id) =>
    {
        dispatch({type: DECREASE, payload: {id}});
    };

    //Return statement to provide the context
    return (
    <AppContext.Provider value={{...state, clearCart, removeItem, increase, decrease, totalAmount, totalCost}}>
        {children}
    </AppContext.Provider>);

};

export const useGlobalContext = () => 
{
    return useContext(AppContext);
};