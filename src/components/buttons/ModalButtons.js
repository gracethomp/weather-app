import Button from "./Button";

export default function ModalButtons() {
    return (
        <div className="modal-buttons">
            <Button text="Cancel"/>
            <Button text="Save" additionalClass="accept-button"/>
        </div>
    )
    
}