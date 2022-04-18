import { TYPES } from "../Actions/cartAction";

export const cartItems = {

    products: [],
    cart: []

}


export function cartReducer ( state , action) {
    
        switch (action.type) {
    
            case 'ADD_TO_CART':
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
    
            case 'CLEAR_CART':
                return {
                    ...state,
                    cart: []
                }
    
            case 'REMOVE_FROM_CART':
                return {
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payload)
                }
    
            default:
                return state;
    
        }
    
}