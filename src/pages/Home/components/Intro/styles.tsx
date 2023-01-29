import styled from 'styled-components'
import { rgba } from 'polished'

import introBgImg from '../../../../assets/images/intro-bg.svg'

export const IntroContainer = styled.section`
  .container {
    display: flex;
    justify-content: space-between;
  }
  padding: 3rem 0;
  background: ${({
    theme,
  }) => `url(${introBgImg}) no-repeat center, linear-gradient(
    0deg,
    ${theme.white} 0%,
    ${rgba(theme.background, 0.2)} 50%,
    ${theme.background} 100%
  )`};
  background-size: cover;
`
export const IntroInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const IntroTitle = styled.h1`
  color: ${({ theme }) => theme['base-title']};
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 800;
  font-size: 3rem;
  line-height: 130%;
`
export const IntroSubtitle = styled.h2`
  color: ${({ theme }) => theme['base-subtitle']};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;
  font-stretch: 100;
  margin-top: 1rem;
`

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`
