import {items} from '../json/cart.json'

const cartItemsReducer = (state=[],action) => {
  switch(action.type) {
    case 'LOAD_ITEMS': return action.payload;
    case 'EDIT_BAG':
    var copy = Object.assign({}, items);
    debugger
    return copy.productsInCart.map((item,key) => {
      if(item.p_id == action.payload.productId){
        var obj = Object.assign({},item,{p_selected_size:action.payload.state.selectedSize,p_selected_color:action.payload.state.selectedColor,
        p_quantity:action.payload.state.selectedQty,p_price:item.p_price*action.payload.state.selectedQty})
        return obj;
      }
      debugger
      return item;
    })
    default: return state;
  }
}


export default cartItemsReducer;
