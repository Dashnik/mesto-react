import React, { useRef } from "react";
import { currentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
    // Подписка на контекст
  const currentUser = React.useContext(currentUserContext);

  const [name, setName] = React.useState(value);
  const [description, setDescription] = React.useState('');
  



  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  // React.useEffect(() => {
  //   setName(currentUser.name);
  //   setDescription(currentUser.about);
  // }, [currentUser]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  const handleChange = (e) =>{
     setName(e.target.value);
    
    console.log(e.target.value);
  }

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
      handleSubmit={handleSubmit}
       handleChange={handleChange}
    />
  );
}

export default EditProfilePopup;
