import produce from 'immer'
import { CoffeType } from '../../pages/Home/components/CoffeeCard'
import { ActionTypes } from './actions'

export type CartItem = CoffeType & {
  quantity: number
}

interface CartState {
  cartItems: CartItem[]
}

type PayloadType = {
  coffee?: CartItem
  cartItemId?: number
  quantity?: number
}

interface ActionPayload {
  payload?: PayloadType
  type: ActionTypes
}

export function cartReducer(
  state: CartState,
  action: ActionPayload,
): CartState {
  const payload = action.payload as unknown as PayloadType

  switch (action.type) {
    case ActionTypes.ADD_ITEM: {
      const coffee = payload.coffee as unknown as CartItem

      const itemAlreadyInCart = state.cartItems.findIndex(
        (item) => item.id === coffee.id,
      )

      return produce(state, (draft) => {
        if (itemAlreadyInCart < 0) {
          draft.cartItems.push(coffee)
        } else {
          draft.cartItems[itemAlreadyInCart] = coffee
        }
      })
    }
    case ActionTypes.REMOVE_ITEM: {
      const itemAlreadyInCart = state.cartItems.findIndex(
        (item) => item.id === payload.cartItemId,
      )

      return produce(state, (draft) => {
        if (itemAlreadyInCart >= 0) {
          draft.cartItems.splice(itemAlreadyInCart, 1)
        }
      })
    }
    case ActionTypes.UPDATE_ITEM_QUANTITY: {
      const itemAlreadyInCart = state.cartItems.findIndex(
        (item) => item.id === payload.cartItemId,
      )

      return produce(state, (draft) => {
        if (itemAlreadyInCart >= 0) {
          const quantity = payload.quantity as unknown as number
          draft.cartItems[itemAlreadyInCart].quantity = quantity
        }
      })
    }
    case ActionTypes.CLEAR_CART:
      return produce(state, (draft) => {
        draft.cartItems = []
      })

    default:
      return state
  }
}
