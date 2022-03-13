import './buttons.css'
export default function Buttons(props: { name: String }) {
    return(
        <div>
            <button>
                {props.name}
            </button>
        </div>
    )
}