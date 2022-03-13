import { Logo, Next, Wrap } from './header-components'

export function Header() {
  return (
    <Wrap>
      <Logo src="/img/logo.jpg" alt="Optimax Dev" />

      <Next src="/img/button-next.jpg" alt="button-next" />
    </Wrap>
  )
}
