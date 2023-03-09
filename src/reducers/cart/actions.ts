import { CartItem } from './reducers'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY',
  CLEAR_CART = 'CLEAR_CART',
}
/* eslint-enable no-unused-vars */

export function addCartItemAction(coffee: CartItem) {
  return { type: ActionTypes.ADD_ITEM, payload: { coffee } }
}

export function removeCartItemAction(cartItemId: number) {
  return { type: ActionTypes.REMOVE_ITEM, payload: { cartItemId } }
}

export function updateCartItemQuantityAction(
  cartItemId: number,
  quantity: number,
) {
  return {
    type: ActionTypes.UPDATE_ITEM_QUANTITY,
    payload: { cartItemId, quantity },
  }
}
export function clearCartAction() {
  return { type: ActionTypes.CLEAR_CART }
}
