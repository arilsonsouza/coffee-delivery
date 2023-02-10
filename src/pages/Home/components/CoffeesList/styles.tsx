import styled from 'styled-components'

export const CoffeesListContainer = styled.main`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
`

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const TagFiltersContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 0.5rem;
`

export const TagFilter = styled.span`
  display: flex;
  align-items: flex-start;
  padding: 0.375rem 0.75rem;
  gap: 0.5rem;

  border: 1px solid ${({ theme }) => theme.yellow};
  border-radius: 100px;
  outline: none;

  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;
  color: ${({ theme }) => theme['yellow-dark']};

  /*transition: all 0.1s;

   &:hover {
    background-color: ${({ theme }) => theme.yellow};
    color: ${({ theme }) => theme.white};
  } */
`

export const CoffeesContainer = styled.div`
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
`
