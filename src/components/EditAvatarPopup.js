import React, { useRef } from "react";
//import { currentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

    const inputField = React.useRef(null)

    function handleSubmit(e) {
        e.preventDefault();

        const value = inputField.current.value;
      
         props.onUpdateAvatar({
           avatar:value /* Значение инпута, полученное с помощью рефа */,
        });
    }

    return (
        <PopupWithForm
            onClose={props.onClose}
            isOpen={props.isOpen ? "popup_opened" : ""}
            name="editing_photo_profile"
            title="Обновить аватар"
            placeholderName="Ссылка на аватар"
            submitName="Сохранить"
            handleSubmit={handleSubmit}
            inputField={inputField}
        />
    );
}

export default EditAvatarPopup;
