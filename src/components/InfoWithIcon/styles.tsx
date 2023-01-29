import styled from 'styled-components'

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  gap: 0.75rem;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  color: ${({ theme }) => theme['base-text']};
`

interface IconContainerProps {
  bgColor: string
}
export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  height: 2rem;
  width: 2rem;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 1000px;
  color: ${({ theme }) => theme.background};
`
