import { combineReducers } from 'redux';
import cartItemsReducer from './cartItemsReducer';

const rootReducer = combineReducers({
  items: cartItemsReducer
});

export default rootReducer;
