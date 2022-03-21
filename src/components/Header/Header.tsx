import { useState } from 'react'

import { Back, Counter, Exit, Logo, Next, Progress, Wrap } from './Header.components'

export function Header() {
  const [progress_bar, SetProgress_Bar] = useState(5)
  function Test() {
    if (progress_bar == 0) {
      return (
        <Wrap>
          <Logo src="/img/logo.png" alt="Optimax Dev" />
          <Next src="/img/button-next.png" alt="button-next" />
        </Wrap>
      )
    } else {
      return (
        <Wrap>
          <Back src="/img/button-back.png" alt="button-back" />
          <Progress value={progress_bar} max="10"></Progress>
          <Exit src="/img/button-exit.png" alt="button-exit" />
        </Wrap>
      )
    }
  }
  return <div>{Test()}</div>
}
