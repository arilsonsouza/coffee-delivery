import { Minus, Plus } from 'phosphor-react'
import { QuantityInputContainer } from './styles'

interface QuantityInputProps {
  quantity: number
  onQuantityChange: (quantity: number) => void
}

export function QuantityInput({
  quantity,
  onQuantityChange,
}: QuantityInputProps) {
  function handleIncreaseQauntity() {
    onQuantityChange(quantity + 1)
  }

  function handleDecreaseQauntity() {
    if (quantity - 1 >= 1) {
      onQuantityChange(quantity - 1)
    }
  }
  return (
    <QuantityInputContainer>
      <Minus size={22} onClick={handleDecreaseQauntity} />
      <span>{quantity}</span>
      <Plus size={22} onClick={handleIncreaseQauntity} />
    </QuantityInputContainer>
  )
}
