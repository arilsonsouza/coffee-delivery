import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import {
  ActionsContainer,
  CoffeeCardContainer,
  DetailsContainer,
  InfoContainer,
  PriceContainer,
  RemoveButton,
} from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <InfoContainer>
        <img src="/images/coffees/irlandes.png" alt="" />
        <DetailsContainer>
          <strong>Expresso Tradicional</strong>
          <ActionsContainer>
            <QuantityInput />
            <RemoveButton>
              <Trash size={22} />
              <span>Remover</span>
            </RemoveButton>
          </ActionsContainer>
        </DetailsContainer>
      </InfoContainer>
      <PriceContainer>R$ 9,90</PriceContainer>
    </CoffeeCardContainer>
  )
}
