import Button from "./Button";

export default function ModalButtons({cancel, accept}) {
    return (
        <div className="modal-buttons">
            <Button text="Cancel" onClick={cancel}/>
            <Button text="Save" additionalClass="accept-button" onClick={accept}/>
        </div>
    )
    
}