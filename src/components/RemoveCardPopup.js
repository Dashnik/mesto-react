import React from "react";
import PopupWithForm from "./PopupWithForm";

function RemoveCardPopup(props) {

    function handleSubmit(e) {
        e.preventDefault();
        
        props.onRemoveCard({cardId})
    }

    return (
    <PopupWithForm
            onClose={props.onClose}
            isOpen={props.isOpen ? "popup_opened" : ""}
            name="removing_card"
            title="Вы уверены?"
            submitName="Да"
            handleSubmit={handleSubmit}
        >  
    </PopupWithForm>
    );
}

export default RemoveCardPopup;
