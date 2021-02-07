import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  const handleChange = (e) => {

     e.target.name === 'popup__name' ? setName(e.target.value) : '';
     e.target.name === 'popup__description' ? setLink(e.target.value) : '';

  };

  function handleSubmit(e) {
    /**  Запрещаем браузеру переходить по адресу формы*/
    e.preventDefault();

    /** Передаём значения управляемых компонентов во внешний обработчик*/
    props.onCreateCard({
        name,
        link: link,
    });
  }

  return (
    <PopupWithForm
        isSecondInputActive={true}
        onClose={props.onClose}
        isOpen={props.isOpen ? 'popup_opened' : ''}
        name="new-cards"
        title="Новое место"
        placeholderName="Название"
        placeholderDescription="Ссылка на картинку"
        submitName="Создать"
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        />
    );
}

export default AddPlacePopup;
