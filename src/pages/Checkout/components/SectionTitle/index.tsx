import { ReactNode } from 'react'
import { ContentWrapper, SectionTitleContainer } from './styles'

interface SectionTitleProps {
  title: string
  subtitle: string
  icon: ReactNode
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <ContentWrapper>
        <strong>{title}</strong>
        <span>{subtitle}</span>
      </ContentWrapper>
    </SectionTitleContainer>
  )
}
