import { ShoppingCartSimple } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { formatMoney } from '../../../../utils/money'
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
          <QuantityInput />
          <AddToCartButton>
            <ShoppingCartSimple size={22} />
          </AddToCartButton>
        </CardActionsContainer>
      </footer>
    </CardContainer>
  )
}
