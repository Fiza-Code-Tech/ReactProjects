import { CLEAR_CART, REMOVE, INCREASE, DECREASE, LOADING, DISPLAY_ITEMS } from './actions';

//Reducer
const reducer = (state, action) => {
    //Before changing the state of an object/array or 
    //any complex data type you should should create a 
    //new instance and change that instance as a copy

    //Clear cart
    if(action.type === CLEAR_CART)
    {
        return {...state, cart: new Map()};
    } 
    //Remove an item
    else if(action.type === REMOVE)
    {
        const newCart = new Map(state.cart);
        newCart.delete(action.payload.id)
        return {...state, cart: newCart};
    } 
    //Increase the quantity of an item
    else if(action.type === INCREASE)
    {
        const newCart = new Map(state.cart);
        const itemId = action.payload.id;
        const item = newCart.get(itemId);
        const newItem = {...item, amount: item.amount + 1};
        newCart.set(itemId, newItem);
        return {...state, cart: newCart};
    }
    //Decrease the quantity of an item
    else if (action.type === DECREASE)
    {
        const newCart = new Map(state.cart);
        const itemId = action.payload.id;
        const item = newCart.get(itemId);

        if(item.amount === 1)
        {
            newCart.delete(itemId);
            return {...state, cart:newCart};
        }

        const newItem = {...item, amount: item.amount - 1};
        newCart.set(itemId, newItem);
        return {...state, cart: newCart};
    }
    //Throw no matching type exception
   throw new Error(`no matching type : ${action.type}`);
};

export default reducer;