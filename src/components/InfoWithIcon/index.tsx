import { ReactNode } from 'react'
import { IconContainer, InfoWithIconContainer } from './styles'

interface InfoWithIconProps {
  icon: ReactNode
  text: string | ReactNode
  bgColor: string
}
export function InfoWithIcon({ icon, text, bgColor }: InfoWithIconProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer bgColor={bgColor}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  )
}
