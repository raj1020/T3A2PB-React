
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from './action-types/cart-actions'

//add cart action
export const addToCart= (_id)=>{
    return{
        type: ADD_TO_CART,
        _id
    }
}
//remove item action
export const removeItem=(_id)=>{
    return{
        type: REMOVE_ITEM,
        _id
    }
}
//subtract qt action
export const subtractQuantity=(_id)=>{
    return{
        type: SUB_QUANTITY,
        _id
    }
}
//add qt action
export const addQuantity=(_id)=>{
    return{
        type: ADD_QUANTITY,
        _id
    }
}