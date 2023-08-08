export default function Button({text, additionalClass}) {
    return (
        <button className={"modal-button " + additionalClass}>{text}</button>
    )
    
}