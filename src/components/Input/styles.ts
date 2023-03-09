import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;
`

type InputContainerProps = {
  hasError: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  height: 2.625rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background-color: ${({ theme }) => theme['base-input']};
  border: 1px solid ${({ theme }) => theme['base-button']};
  border-radius: 4px;
  transition: 0.4s;
  justify-content: space-between;

  &:focus-within {
    border-color: ${({ theme }) => theme['yellow-dark']};
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme['base-error']};
    `}
`

export const InputElement = styled.input`
  flex: 1;
  background: none;
  border: none;
  padding: 0 0.75rem;
  font-size: 0.75rem;
  height: 100%;
  color: ${({ theme }) => theme['base-text']};

  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }
`

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${({ theme }) => theme['base-label']};
`
