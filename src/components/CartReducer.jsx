import React from "react";

// define the initial state
const initialState = [];

const cartReducer = (state, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            const exists = state.find(item => item.id === action.payload.id);
            if(exists){
                return state.map(item =>
                    item.id === action.payload
                    ? {...item, quantity: item.quantity + 1}: item
                )
            } else {
                return [...state, {...action.payload, quantity: 1}];
            }
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.payload.id);

        case 'INCREASE':
            return state.map(item => 
                item.id === action.payload.id
                ? {...item, quantity:item.quantity + 1}
                : item
            );
        case 'DECREASE':
            return state.map(item => 
                item.id === action.payload.id && item.quantity > 1
                ? {...item, quantity:item.quantity - 1}
                : item
            );
        default:
            return state;
    }
}

// the main component 
const  ShoppingCart = () => {
    // initial reducer
    const [cart, dispatch] = React.useReducer(cartReducer, initialState);

    // create a dummy cartItems
    const mockItem = {
        id: 1,
        name: "Apple",
        price: 700,
        quantity: 1
    }

    // the return statement
    return(
        <div>
            <h2>Simple Shopping Cart</h2>
            <button onClick={() => dispatch({type: 'ADD_ITEM', payload:mockItem})}>Add Apple</button>
            {cart.map(item => (
                <div key={item.id}>
                    <p>{item.name} - Quantity: {item.quantity}</p>
                    <button onClick={() => dispatch({type: 'INCREASE', payload: item})}>+</button>
                    <button onClick={() => dispatch({type: 'DECREASE', payload: item})}>-</button>
                    <button onClick={() => dispatch({type: 'REMOVE_ITEM', payload: item})}>Remove</button>
                </div>
            ))}
        </div>
    )

    // map() is used to loop through the array and create a new array based on parameters set
}

export default ShoppingCart;


// tenary operatio
// const NegativeMessage = "I will not go to work today";
// const PositiveMessage = "Off to work";

// const isPublicHoliday = true;

// isPublicHoliday ? NegativeMessage : PositiveMessage