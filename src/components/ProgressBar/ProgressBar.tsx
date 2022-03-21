import { Progress } from './ProgressBar.components'

export function ProgressBar(props: { currentStage: number; countStage: number }) {
  return <Progress value={props.currentStage} max={props.countStage}></Progress>
}
