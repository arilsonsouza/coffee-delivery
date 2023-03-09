import styled from 'styled-components'

export const SuccessPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const PageTitle = styled.h1`
  color: ${({ theme }) => theme['yellow-dark']};
  font-family: ${({ theme }) => theme.fonts.title};
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;
`

export const PageSubTitle = styled.p`
  color: ${({ theme }) => theme['base-subtitle']};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;
`
export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  position: relative;
  background: ${({ theme }) => theme.background};
  border-radius: 6px 36px 6px 36px;
  min-width: 32rem;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`

export const RegularText = styled.p`
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${({ theme }) => theme['base-subtitle']};
`
