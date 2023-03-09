import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../../components/Input'
import { CoffeeCard } from './components/CoffeeCard'
import { SectionTitle } from './components/SectionTitle'
import {
  AddressContainer,
  CartItemContainer,
  CheckoutButton,
  CheckoutContainer,
  CheckoutPriceInfo,
  CoffeesContainer,
  PaymentContainer,
  PaymentMethodsContainer,
  SectionHeader,
  SummaryContainer,
} from './styles'
import { PaymentMethodInput } from './components/PaymentMethodInput'
import { ErrorTag } from '../../components/ErrorTag'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import { formatMoney } from '../../utils/money'
import { useNavigate } from 'react-router-dom'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

/* eslint-disable no-unused-vars */
enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  cash = 'cash',
}
/* eslint-enable no-unused-vars */

export const paymentMethods = [
  {
    value: PaymentMethods.credit,
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} />,
  },
  {
    value: PaymentMethods.debit,
    label: 'Cartão de débito',
    icon: <Bank size={16} />,
  },
  {
    value: PaymentMethods.cash,
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
]

const orderSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type OrderData = zod.infer<typeof orderSchema>

const DELIVERY = 3.5

export function Checkout() {
  const theme = useTheme()
  const navigate = useNavigate()
  const { cartItems, totalAmount, clearCart } = useContext(CartContext)

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/', { replace: true })
    }
  }, [cartItems, navigate])

  const { register, handleSubmit, formState } = useForm<OrderData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  })

  const { errors } = formState as unknown as ErrorsType

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  const onSubmit = (data: OrderData) => {
    navigate('/checkout-success', { state: data })
    clearCart()
  }

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      <CheckoutContainer>
        <section>
          <SectionHeader>Complete seu pedido</SectionHeader>
          <AddressContainer>
            <SectionTitle
              title="Endereço de Entrega"
              subtitle="Informe o endereço onde deseja receber seu pedido"
              icon={<MapPinLine size={22} color={theme['yellow-dark']} />}
            />
            <div className="address-wrapper">
              <Input
                placeholder="CEP"
                className="cep"
                {...register('cep')}
                error={errors.cep?.message}
              />

              <Input
                placeholder="Rua"
                className="street"
                {...register('street')}
                error={errors.street?.message}
              />

              <Input
                placeholder="Número"
                type="number"
                {...register('number')}
                error={errors.number?.message}
              />

              <Input
                placeholder="Complemento"
                className="complement"
                {...register('complement')}
                error={errors.complement?.message}
                rightText="Opcional"
              />

              <Input
                placeholder="Bairro"
                className="district"
                {...register('district')}
                error={errors.district?.message}
              />

              <Input
                placeholder="Cidate"
                className="city"
                {...register('city')}
                error={errors.city?.message}
              />

              <Input
                placeholder="RS"
                {...register('uf')}
                error={errors.uf?.message}
              />
            </div>
          </AddressContainer>
          <PaymentContainer>
            <SectionTitle
              title="Pagamento"
              subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
              icon={<CurrencyDollar size={22} color={theme.purple} />}
            />
            <PaymentMethodsContainer>
              <div>
                {paymentMethods.map(({ value, label, icon }) => (
                  <PaymentMethodInput
                    key={label}
                    id={value}
                    icon={icon}
                    label={label}
                    value={value}
                    {...register('paymentMethod')}
                  />
                ))}
              </div>
              {paymentMethodError && (
                <ErrorTag errorMessage={paymentMethodError} />
              )}
            </PaymentMethodsContainer>
          </PaymentContainer>
        </section>

        <section>
          <SectionHeader>Cafés selecionados</SectionHeader>
          <CoffeesContainer>
            <CheckoutPriceInfo>
              {cartItems.map((coffeeItem) => (
                <CartItemContainer key={coffeeItem.id}>
                  <CoffeeCard coffeeItem={coffeeItem} />
                </CartItemContainer>
              ))}

              <SummaryContainer>
                <div>
                  <span className="label">Total de itens</span>
                  <span>R$ {formatMoney(totalAmount)}</span>
                </div>
                <div>
                  <span className="label">Entrega</span>{' '}
                  <span>R$ {formatMoney(DELIVERY)}</span>
                </div>
                <div>
                  <strong>Total</strong>{' '}
                  <strong>R$ {formatMoney(totalAmount + DELIVERY)}</strong>
                </div>
              </SummaryContainer>
            </CheckoutPriceInfo>
            <CheckoutButton>Confirmar Pedido</CheckoutButton>
          </CoffeesContainer>
        </section>
      </CheckoutContainer>
    </form>
  )
}
