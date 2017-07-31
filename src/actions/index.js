import {items} from '../json/cart.json'

export const loadtItems = () => {
  return {
    type:'LOAD_ITEMS',
    payload:items.productsInCart
  }
}


export const editBag = (productId,state) => {
  debugger

  return {
    type:'EDIT_BAG',
    payload:{productId,state}
  }
}
