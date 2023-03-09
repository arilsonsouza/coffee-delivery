/* eslint-disable react/display-name */
import { forwardRef, InputHTMLAttributes } from 'react'
import { ErrorTag } from '../ErrorTag'
import { InputContainer, InputElement, InputWrapper, RightText } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, rightText, className, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputContainer hasError={!!error}>
          <InputElement ref={ref} {...props} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputContainer>
        {error && <ErrorTag errorMessage={error} />}
      </InputWrapper>
    )
  },
)
