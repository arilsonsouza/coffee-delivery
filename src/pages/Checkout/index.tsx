import { CoffeeCard } from './components/CoffeeCard'
import {
  CartItemContainer,
  CheckoutButton,
  CheckoutContainer,
  CheckoutPriceInfo,
  CoffeesContainer,
  SectionHeader,
  SummaryContainer,
} from './styles'

export function Checkout() {
  return (
    <div className="container">
      <CheckoutContainer>
        <section>
          <SectionHeader>Complete seu pedido</SectionHeader>
        </section>

        <section>
          <SectionHeader>Cafés selecionados</SectionHeader>
          <CoffeesContainer>
            <CheckoutPriceInfo>
              <CartItemContainer>
                <CoffeeCard />
              </CartItemContainer>
              <CartItemContainer>
                <CoffeeCard />
              </CartItemContainer>

              <SummaryContainer>
                <div>
                  <span className="label">Total de itens</span>
                  <span>R$ 29,70</span>
                </div>
                <div>
                  <span className="label">Entrega</span> <span>R$ 3,50</span>
                </div>
                <div>
                  <strong>Total</strong> <strong>R$ 33,20</strong>
                </div>
              </SummaryContainer>
            </CheckoutPriceInfo>
            <CheckoutButton>Confirmar Pedido</CheckoutButton>
          </CoffeesContainer>
        </section>
      </CheckoutContainer>
    </div>
  )
}
