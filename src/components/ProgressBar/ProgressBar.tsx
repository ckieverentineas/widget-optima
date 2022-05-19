import { FoneEdition, Progress } from './ProgressBar.components'

export function ProgressBar(props: { currentStage: number; countStage: number }) {
  return (
    <FoneEdition>
      <Progress value={props.currentStage} max={props.countStage}></Progress>
    </FoneEdition>
  )
}
