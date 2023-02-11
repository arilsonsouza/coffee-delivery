import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
  background-color: ${({ theme }) => theme['base-card']};
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 1.25rem;
  img {
    width: 4rem;
    height: 4rem;
  }
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 0.5rem;

  strong {
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    font-size: 1rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`
export const PriceContainer = styled.strong`
  font-size: 1rem;
  font-weight: 700;
  line-height: 130%;
  color: ${({ theme }) => theme['base-text']};
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;

  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;
  color: ${({ theme }) => theme['base-text']};

  background-color: ${({ theme }) => theme['base-button']};
  border-radius: 6px;
  border: none;
  transition: all 0.2s;
  svg {
    color: ${({ theme }) => theme.purple};
  }

  &:hover {
    color: ${({ theme }) => theme['base-subtitle']};
    background-color: ${({ theme }) => theme['base-hover']};
  }
`
