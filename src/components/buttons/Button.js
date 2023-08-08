export default function Button({text, additionalClass, onClick}) {
    return (
        <button onClick={onClick} className={"modal-button " + additionalClass}>{text}</button>
    )
    
}