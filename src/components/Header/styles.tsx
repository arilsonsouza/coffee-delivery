import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`

export const HeaderActionContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface HeaderActionProps {
  variant: 'purple' | 'yellow'
}

export const HeaderAction = styled.button<HeaderActionProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;
  border: none;
  font-size: 0.875rem;
  line-height: 130%;
  position: relative;
  cursor: inherit;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    right: -8.35px;
    top: -8px;
    border-radius: 1000px;
    font-size: 0.75rem;
    text-align: center;
    letter-spacing: -0.06rem;
    color: ${({ theme }) => theme.white};
  }

  ${({ variant }) => css`
    background-color: ${({ theme }) => theme[`${variant}-light`]};
    color: ${({ theme }) => theme[`${variant}-dark`]};

    span {
      background-color: ${({ theme }) => theme[`${variant}-dark`]};
    }
  `}
`
