import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <div className="container">
        <Header />
        <Outlet />
      </div>
    </LayoutContainer>
  )
}
