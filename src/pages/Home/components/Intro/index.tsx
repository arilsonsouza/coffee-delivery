import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import {
  BenefitsContainer,
  IntroContainer,
  IntroInfoContainer,
  IntroSubtitle,
  IntroTitle,
} from './styles'

import introImg from '../../../../assets/images/intro.svg'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'

export function Intro() {
  const theme = useTheme()
  return (
    <IntroContainer>
      <div className="container">
        <IntroInfoContainer>
          <IntroTitle>
            Encontre o café perfeito para qualquer hora do dia
          </IntroTitle>
          <IntroSubtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </IntroSubtitle>

          <BenefitsContainer>
            <InfoWithIcon
              bgColor={theme['yellow-dark']}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <InfoWithIcon
              bgColor={theme['base-text']}
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
            />
            <InfoWithIcon
              bgColor={theme.yellow}
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <InfoWithIcon
              bgColor={theme.purple}
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </BenefitsContainer>
        </IntroInfoContainer>
        <img src={introImg} alt="" />
      </div>
    </IntroContainer>
  )
}
