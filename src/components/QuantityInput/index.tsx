import { Minus, Plus } from 'phosphor-react'
import { QuantityInputContainer } from './styles'

export function QuantityInput() {
  return (
    <QuantityInputContainer>
      <Minus size={22} />
      <span>1</span>
      <Plus size={22} />
    </QuantityInputContainer>
  )
}
