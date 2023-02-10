import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  background-color: ${({ theme }) => theme['base-button']};
  border-radius: 6px;

  span {
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    text-align: center;
    color: ${({ theme }) => theme['base-title']};
  }

  svg {
    cursor: pointer;
    color: ${({ theme }) => theme.purple};
  }
`
