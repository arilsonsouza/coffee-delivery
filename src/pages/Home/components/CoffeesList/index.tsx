import {
  CoffeesContainer,
  CoffeesListContainer,
  FiltersContainer,
  TagFilter,
  TagFiltersContainer,
} from './styles'

import { CoffeeCard } from '../CoffeeCard'
import { coffees } from '../../../../data/coffees'

// const filterTags = [
//   'tradicional',
//   'especial',
//   'com leite',
//   'alcoólico',
//   'gelado',
// ]

export function CoffeesList() {
  return (
    <div className="container">
      <CoffeesListContainer>
        <FiltersContainer>
          <h2>Nossos cafés</h2>
          {/* <TagFiltersContainer>
            {filterTags.map((tag) => (
              <TagFilter key={tag}>{tag}</TagFilter>
            ))}
          </TagFiltersContainer> */}
        </FiltersContainer>
        <CoffeesContainer>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeesContainer>
      </CoffeesListContainer>
    </div>
  )
}
