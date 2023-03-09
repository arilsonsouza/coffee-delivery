import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { OrderData, paymentMethods } from '../Checkout'
import {
  OrderInfo,
  PageSubTitle,
  PageTitle,
  RegularText,
  SuccessPageContainer,
} from './styles'

import confirmedOrderImg from '../../assets/images/confirmed-order.svg'

interface LocationType {
  state: OrderData
}

export function Success() {
  const theme = useTheme()

  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [state])

  if (!state) return <></>
  const paymentMethod = paymentMethods.find(
    (item) => (item.value = state.paymentMethod),
  )
  return (
    <SuccessPageContainer className="container">
      <div>
        <PageTitle>Uhu! Pedido confirmado</PageTitle>
        <PageSubTitle>
          Agora é só aguardar que logo o café chegará até você
        </PageSubTitle>
      </div>
      <section>
        <OrderInfo>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            bgColor={theme.purple}
            text={
              <RegularText>
                Entrega em <strong>{state.street}</strong>, {state.number}{' '}
                <br /> {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            bgColor={theme.yellow}
            text={
              <RegularText>
                Previsão de entrega <br /> <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            bgColor={theme['yellow-dark']}
            text={
              <RegularText>
                Pagamento na entrega <br />{' '}
                <strong>{paymentMethod?.label}</strong>
              </RegularText>
            }
          />
        </OrderInfo>
        <img src={confirmedOrderImg} alt="" />
      </section>
    </SuccessPageContainer>
  )
}
