export default function Button({text, additionalClass, onClick, isDisabled}) {
    return (
        <button onClick={onClick} className={"modal-button " + additionalClass} disabled={isDisabled}>{text}</button>
    )
    
}