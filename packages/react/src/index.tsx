import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  height: '$10',
})

export function App() {
  return (
    <div>
      <h1>Hello</h1>

      <Button>Enviar</Button>
    </div>
  )
}
