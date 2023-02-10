import { CoffeesList } from './components/CoffeesList'
import { Intro } from './components/Intro'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeesList />
    </HomeContainer>
  )
}
