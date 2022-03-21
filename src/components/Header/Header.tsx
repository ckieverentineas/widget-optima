import { useState } from 'react'

import { Back, Counter, Exit, Logo, Next, Wrap } from './Header.components'

export function Header(props: { currentStage: number; countStage: number }) {
  function Test() {
    if (props.currentStage == 0) {
      return (
        <Wrap>
          <Logo src="/img/logo.png" alt="Optimax Dev" />
          <Next src="/img/button-next.png" alt="button-next" />
        </Wrap>
      )
    } else if (props.currentStage <= props.countStage) {
      return (
        <Wrap>
          <Back
            src="/img/button-back.png"
            alt="button-back"
            onClick={() => {
              console.log('worked')
            }}
          />
          <div>
            <Counter>
              {props.currentStage}/{props.countStage}
            </Counter>
          </div>
          <Exit src="/img/button-exit.png" alt="button-exit" />
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
