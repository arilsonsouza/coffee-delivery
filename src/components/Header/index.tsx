import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { HeaderAction, HeaderActionContainer, HeaderContainer } from './styles'

import logo from '../../assets/images/logo.svg'

export function Header() {
  return (
    <div className="container">
      <HeaderContainer>
        <NavLink to="/">
          <img src={logo} alt="Logo Coffee Delivery" />
        </NavLink>

        <HeaderActionContainer>
          <HeaderAction variant="purple">
            <MapPin size={20} weight="fill" /> Porto Alegre, RS
          </HeaderAction>
          <NavLink to="/checkout">
            <HeaderAction variant="yellow">
              <span>3</span>
              <ShoppingCart size={20} weight="fill" />
            </HeaderAction>
          </NavLink>
        </HeaderActionContainer>
      </HeaderContainer>
    </div>
  )
}
