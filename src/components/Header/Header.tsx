import { useState } from 'react'

import { Back, Counter, Exit, Logo, Next, Wrap } from './Header.components'

export function Header(props: { currentStage: number; countStage: number }) {
  const [currentCounter, setCurrentCounter] = useState(props.currentStage)
  function Test() {
    if (currentCounter == 0) {
      return (
        <Wrap>
          <Logo src="/img/logo.png" alt="Optimax Dev" />
          <Next
            src="/img/button-next.png"
            alt="button-next"
            onClick={() => {
              setCurrentCounter(currentCounter + 1)
            }}
          />
        </Wrap>
      )
    } else if (currentCounter <= props.countStage) {
      return (
        <Wrap>
          <Back
            src="/img/button-back.png"
            alt="button-back"
            onClick={() => {
              setCurrentCounter(currentCounter - 1)
            }}
          />
          <div>
            <Counter>
              {currentCounter}/{props.countStage}
            </Counter>
          </div>
          <Exit
            src="/img/button-exit.png"
            alt="button-exit"
            onClick={() => {
              setCurrentCounter(0)
            }}
          />
        </Wrap>
      )
    } else {
      return (
        <Wrap>
          <Logo src="/img/logo.png" alt="Optimax Dev" />
          <Exit src="/img/button-exit.png" alt="button-exit" />
        </Wrap>
      )
    }
  }
  return <div>{Test()}</div>
}
