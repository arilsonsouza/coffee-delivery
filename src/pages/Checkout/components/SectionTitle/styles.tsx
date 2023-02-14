import styled from 'styled-components'

export const SectionTitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0;
  gap: 0.25rem;
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 0.125rem;

  font-style: normal;
  line-height: 130%;
  font-weight: 400;
  strong {
    color: ${({ theme }) => theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-text']};
  }
`
