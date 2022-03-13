import { Header, Logo, Next } from './header-components'

export function Headers() {
  return (
    <Header>
      <Logo src="/img/logo.jpg" alt="logo" />

      <Next src="/img/button-next.jpg" alt="button-next" />
    </Header>
  )
}
