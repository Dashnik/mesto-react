import React from "react";
import { currentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const [name, setName] = React.useState(false);
  const [description, setDescription] = React.useState(false);

  // Подписка на контекст
  const currentUser = React.useContext(currentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      isSecondInputActive={true}
      onClose={props.onClose}
      isOpen={props.isOpen ? "popup_opened" : ""}
       name="edit-user-profile"
      title="Редактировать профиль"
      firstInputValue={currentUser.name}
      secondInputValue={currentUser.about}
      placeholderName="Имя"
      placeholderDescription="Вид деятельности"
      submitName="Сохранить"
    />
  );
}

export default EditProfilePopup;
