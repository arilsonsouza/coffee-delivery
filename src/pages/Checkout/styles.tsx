import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;
  section:first-child {
    flex: 1;
  }
`

export const SectionHeader = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 130%;
  color: ${({ theme }) => theme['base-subtitle']};
  margin-top: 2.5rem;
  margin-bottom: 0.9375rem;
`
export const CoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  min-width: 28rem;
  gap: 1.5rem;

  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 6px 44px;
`
export const CheckoutButton = styled.button`
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.yellow};
  padding: 0.75rem 0.5rem;
  text-align: center;
  border-radius: 6px;

  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  line-height: 160%;
  color: ${({ theme }) => theme.white};
  font-stretch: 100;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }
`

export const CheckoutPriceInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
`

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 130%;
  width: 100%;
  gap: 0.75rem;
  div {
    display: flex;
    justify-content: space-between;
  }

  span {
    font-weight: 400;
    color: ${({ theme }) => theme['base-text']};

    &.label {
      font-size: 0.875rem;
    }
  }

  strong {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const CartItemContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};
  padding-bottom: 1.5rem;
  + div {
    padding-top: 1.5rem;
  }
`

const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  padding: 2.5rem;

  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 6px;
`

export const AddressContainer = styled(BaseContainer)`
  .address-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: 12.5rem 17.25rem 3.75rem;
    column-gap: 0.75rem;
    row-gap: 1rem;
    grid-auto-flow: dense;

    .cep {
      grid-column: span 3;
      max-width: 12.5rem;
    }

    .street {
      grid-column: span 3;
    }

    .complement {
      grid-column: span 2;
    }
  }
`

export const PaymentContainer = styled(BaseContainer)`
  margin-top: 0.75rem;
`
export const PaymentMethodsContainer = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
  }

  span {
    margin-left: 0.75rem;
  }
`
