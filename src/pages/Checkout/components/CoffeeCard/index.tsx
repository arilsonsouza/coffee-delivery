import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { toast } from 'react-toastify'
import { QuantityInput } from '../../../../components/QuantityInput'
import { CartContext } from '../../../../context/CartContext'
import { CartItem } from '../../../../reducers/cart/reducers'
import { formatMoney } from '../../../../utils/money'
import {
  ActionsContainer,
  CoffeeCardContainer,
  DetailsContainer,
  InfoContainer,
  PriceContainer,
  RemoveButton,
} from './styles'

interface CoffeeCardProps {
  coffeeItem: CartItem
}

export function CoffeeCard({ coffeeItem }: CoffeeCardProps) {
  const { updateItemQuantity, removeItem } = useContext(CartContext)

  function handleQuantityChange(updatedQuantity: number) {
    updateItemQuantity(coffeeItem.id, updatedQuantity)
  }

  function removeCoffeeItem() {
    removeItem(coffeeItem.id)
    toast(`${coffeeItem.name} foi removido do carrinho!`, {
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
    <CoffeeCardContainer>
      <InfoContainer>
        <img
          src={`/images/coffees/${coffeeItem.photo}`}
          alt={coffeeItem.name}
        />
        <DetailsContainer>
          <strong>{coffeeItem.name}</strong>
          <ActionsContainer>
            <QuantityInput
              quantity={coffeeItem.quantity}
              onQuantityChange={handleQuantityChange}
            />
            <RemoveButton onClick={removeCoffeeItem}>
              <Trash size={22} />
              <span>Remover</span>
            </RemoveButton>
          </ActionsContainer>
        </DetailsContainer>
      </InfoContainer>
      <PriceContainer>R$ {formatMoney(coffeeItem.price)}</PriceContainer>
    </CoffeeCardContainer>
  )
}
