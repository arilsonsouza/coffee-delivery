import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { ShoppingCartSimple } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { CartContext } from '../../../../context/CartContext'
import { formatMoney } from '../../../../utils/money'
import { CartItem } from '../../../../reducers/cart/reducers'

import {
  AddToCartButton,
  CardActionsContainer,
  CardContainer,
  CoffeeAmountContainer,
  CoffeeDescriptionContainer,
  CoffeeNameContainer,
  CoffeeTagsContainer,
} from './styles'

export interface CoffeType {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeCardProps {
  coffee: CoffeType
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useContext(CartContext)

  function handleQuantityChange(updatedQuantity: number) {
    setQuantity(updatedQuantity)
  }

  function addItemToCart() {
    const coffeeItem: CartItem = { ...coffee, quantity }
    addItem(coffeeItem)
    toast(`${coffeeItem.name} foi adicionado ao carrinho!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: 'light',
    })
  }

  return (
    <CardContainer>
      <img src={`/images/coffees/${coffee.photo}`} alt={coffee.name} />
      <CoffeeTagsContainer>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CoffeeTagsContainer>
      <CoffeeNameContainer>{coffee.name}</CoffeeNameContainer>
      <CoffeeDescriptionContainer>
        {coffee.description}
      </CoffeeDescriptionContainer>
      <footer>
        <CoffeeAmountContainer>
          <span>R$</span> <strong>{formatMoney(coffee.price)}</strong>
        </CoffeeAmountContainer>
        <CardActionsContainer>
          <QuantityInput
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
          />
          <AddToCartButton onClick={addItemToCart}>
            <ShoppingCartSimple size={22} />
          </AddToCartButton>
        </CardActionsContainer>
      </footer>
    </CardContainer>
  )
}
