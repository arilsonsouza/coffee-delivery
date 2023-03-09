import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { HeaderAction, HeaderActionContainer, HeaderContainer } from './styles'

import logo from '../../assets/images/logo.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export function Header() {
  const { totalItems } = useContext(CartContext)

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
              {totalItems > 0 && <span>{totalItems}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderAction>
          </NavLink>
        </HeaderActionContainer>
      </HeaderContainer>
    </div>
  )
}
