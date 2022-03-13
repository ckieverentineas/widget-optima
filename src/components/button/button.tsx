import './buttons.css'

export function Buttons(props: { name: String }) {
  return (
    <div>
      <button className={'button'}>{props.name}</button>
    </div>
  )
}
