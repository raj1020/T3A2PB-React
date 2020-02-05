import cartReducer from './cartReducer';
import productReducer from './product_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    addedItems: cartReducer,
    products: productReducer
});
