import './buttons.css'
export default function Buttons(props: { name: String }) {
    return(
        <div>
            <button className={'button'}>
                {props.name}
            </button>
        </div>
    )
}