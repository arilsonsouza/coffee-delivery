import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 6px 36px;
  padding: 1.25rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }

  footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const CoffeeTagsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 0.25rem;
  margin: 0.75rem 0 1rem 0;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 0.5rem;
    background-color: ${({ theme }) => theme['yellow-light']};
    border-radius: 100px;
    font-weight: 700;
    font-size: 0.625rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme['yellow-dark']};
  }
`

export const CoffeeNameContainer = styled.strong`
  color: ${({ theme }) => theme['base-subtitle']};
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 700;
  font-size: 1.25rem;
`

export const CoffeeDescriptionContainer = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['base-label']};
  margin: 0.5rem 0 2.0625rem 0;
`

export const CoffeeAmountContainer = styled.div`
  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-label']};
  }
  strong {
    font-size: 1.5rem;
    text-align: right;
    font-weight: bold;
  }
`

export const CardActionsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 0.5rem;
`

export const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  color: ${({ theme }) => theme['base-card']};
  background-color: ${({ theme }) => theme['purple-dark']};
  border-radius: 6px;
  border: none;
`
