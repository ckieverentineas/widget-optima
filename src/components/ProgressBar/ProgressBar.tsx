import { Progress } from './ProgressBar.components'

export function ProgressBar(props: { currentStage: number; CountStage: number }) {
  return <Progress value={props.currentStage} max={props.CountStage}></Progress>
}
