import "./styles.css";

type Props = {
    text: string;
    icon: string
    background?: string;
}

function Button({ text, icon, background }: Props) {
    return (
        <div>
            <button className="button-container" type="button" style={{ background }}> <img src={icon} alt="icon"></img> {text} </button>
        </div>
    )
}

export default Button
