//import './App.css';
import React from 'react';
import './Header.jsx';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import PopupWithForm from './PopupWithForm.jsx';


function App() {
 
  const[isEditProfilePopupOpen, setProfilePopup] = React.useState(false);
  const[isAddPlacePopupOpen, setPlacePopup] = React.useState(false);
  const[isEditAvatarPopupOpen, setAvatarPopup] = React.useState(false);

  const handleEditProfileClick = ()=>{
    setProfilePopup(!isEditProfilePopupOpen);
  }
  
  const handleAddPlaceClick = ()=>{
    setPlacePopup(!isAddPlacePopupOpen);
  }

  const handleEditAvatarClick = ()=>{
    setAvatarPopup(!isEditAvatarPopupOpen);
  }

  return (
    <div className="page">
    <Header/>
    <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} /> 
    <Footer/>
    <PopupWithForm isOpen={isEditProfilePopupOpen ? 'popup_opened':''} name="edit-user-profile" title="Редактировать профиль" placeholderName="Имя" placeholderDescription="Вид деятельности" submitName="Сохранить" />    
    <PopupWithForm isOpen={isAddPlacePopupOpen ? 'popup_opened':''} name="new-cards" title="Новое место"  placeholderName="Название" placeholderDescription="Ссылка на картинку" submitName="Создать"/> 
    <PopupWithForm isOpen={isEditAvatarPopupOpen ? 'popup_opened' : ''}  name="editing_photo_profile" title="Обновить аватар"  placeholderName="Ссылка на аватар" submitName="Сохранить"/>
    </div>
  );
}


export default App;
