import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { CoffeeCard } from './components/CoffeeCard'
import { SectionTitle } from './components/SectionTitle'
import {
  AddressContainer,
  CartItemContainer,
  CheckoutButton,
  CheckoutContainer,
  CheckoutPriceInfo,
  CoffeesContainer,
  PaymentContainer,
  SectionHeader,
  SummaryContainer,
} from './styles'

export function Checkout() {
  const theme = useTheme()
  return (
    <div className="container">
      <CheckoutContainer>
        <section>
          <SectionHeader>Complete seu pedido</SectionHeader>
          <AddressContainer>
            <SectionTitle
              title="Endereço de Entrega"
              subtitle="Informe o endereço onde deseja receber seu pedido"
              icon={<MapPinLine size={22} color={theme['yellow-dark']} />}
            />
          </AddressContainer>
          <PaymentContainer>
            <SectionTitle
              title="Pagamento"
              subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
              icon={<CurrencyDollar size={22} color={theme.purple} />}
            />
          </PaymentContainer>
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
