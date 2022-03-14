import { Logo, Next, Wrap } from './Header.components'

export function Header() {
  return (
    <Wrap>
      <Logo src="/img/logo.png" alt="Optimax Dev" />

      <Next src="/img/button-next.png" alt="button-next" />
    </Wrap>
  )
}
