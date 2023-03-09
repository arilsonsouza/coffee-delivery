import { ErrorTagContainer } from './styles'

type ErrorTagProps = {
  errorMessage: string
}
export function ErrorTag({ errorMessage }: ErrorTagProps) {
  return <ErrorTagContainer>{errorMessage}</ErrorTagContainer>
}
