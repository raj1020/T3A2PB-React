import cartReducer from './cartReducer';
import { combinedReducers } from 'redux';

export default combinedReducers({
    addedItems: cartReducer
});
