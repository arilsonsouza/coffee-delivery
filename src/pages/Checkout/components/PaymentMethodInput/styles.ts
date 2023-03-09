import styled, { css } from 'styled-components'

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
    &:checked + label div {
      ${({ theme }) => css`
        background-color: ${({ theme }) => theme['purple-light']};
        border-color: ${({ theme }) => theme.purple};

        &:hover {
          background-color: ${({ theme }) => theme['purple-light']};
        }
      `}
    }
  }
`

export const ContentContainer = styled.div`
  padding: 0 1rem;
  background-color: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme['base-text']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme['base-button']};

  svg {
    color: ${({ theme }) => theme.purple};
  }

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }
  user-select: none;
`
