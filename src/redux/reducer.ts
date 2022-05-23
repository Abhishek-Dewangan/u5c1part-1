
import {  GET_DATA } from "./action"
import { CART_DATA } from "./action"


const initState = {
    products: [],
    cartProducts: [],
}
export const reducer = (state = initState, action:any) => {
     switch (action.type) {
         case GET_DATA:
         return {
             ...state,  
             products: action.payload
         }
         case CART_DATA:
            return {
              ...state,
              cartProducts: action.payload,
            //   totalPrice: payload.reduce((accumulator, currentValue) => {
            //     return accumulator + currentValue.Price * currentValue.quantity;
            //   }, 0),
            };
         default:
             return state
     }
}