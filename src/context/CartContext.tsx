import { createContext, ReactNode, useEffect, useReducer } from 'react'
import {
  addCartItemAction,
  clearCartAction,
  removeCartItemAction,
  updateCartItemQuantityAction,
} from '../reducers/cart/actions'
import { CartItem, cartReducer } from '../reducers/cart/reducers'

interface CartContextType {
  cartItems: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (cartItemId: number) => void
  updateItemQuantity: (cartItemId: number, quantity: number) => void
  totalItems: number
  totalAmount: number
  clearCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

const CART_STORAGE_KEY = '@coffee-delivery:cart-state-1.0.0'

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    { cartItems: [] },
    () => {
      const storedStateAsJSON = localStorage.getItem(CART_STORAGE_KEY)
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
      return {
        cartItems: [],
      }
    },
  )
  const { cartItems } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem(CART_STORAGE_KEY, stateJSON)
  }, [cartState])

  const totalItems = cartItems.length
  const totalAmount = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  function addCartItem(item: CartItem) {
    dispatch(addCartItemAction(item))
  }

  function removeCartItem(cartItemId: number) {
    dispatch(removeCartItemAction(cartItemId))
  }

  function updateCartItemQuantity(cartItemId: number, quantity: number) {
    dispatch(updateCartItemQuantityAction(cartItemId, quantity))
  }

  function clearCart() {
    dispatch(clearCartAction())
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItems,
        totalAmount,
        addItem: addCartItem,
        removeItem: removeCartItem,
        updateItemQuantity: updateCartItemQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
