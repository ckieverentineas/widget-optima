import { useCallback, useEffect, useState } from 'react'

import { Back, Counter, Exit, Logo, Next, Tester, Wrap } from './Header.components'

export function Header(props: {
  currentStage: number
  countStage: number
  onUpdateCurrentStage: (newStage: number) => void
}) {
  function Test() {
    if (props.currentStage == 0) {
      return (
        <Wrap>
          <Logo src="/img/logo.png" alt="Optimax Dev" />
          <Next
            src="/img/button-next.png"
            alt="button-next"
            onClick={() => {
              props.onUpdateCurrentStage(props.currentStage + 1)
            }}
          />
        </Wrap>
      )
    } else if (props.currentStage <= props.countStage) {
      return (
        <Wrap>
          <Back
            src="/img/button-back.png"
            alt="button-back"
            onClick={() => {
              props.onUpdateCurrentStage(props.currentStage - 1)
            }}
          />
          <Tester>
            <Counter>
              {props.currentStage}/{props.countStage}
            </Counter>
          </Tester>
          <Exit
            src="/img/button-exit.png"
            alt="button-exit"
            onClick={() => {
              props.onUpdateCurrentStage(0)
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
