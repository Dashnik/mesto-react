//import './App.css';
import React from 'react';
import './Header.jsx';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import Api from '../utils/Api';


function App() {
 
  const[isEditProfilePopupOpen, setProfilePopup] = React.useState(false);
  const[isAddPlacePopupOpen, setPlacePopup] = React.useState(false);
  const[isEditAvatarPopupOpen, setAvatarPopup] = React.useState(false);

  const[userName, setUserName] = React.useState('');
  const[userDescription , setUserDescription] = React.useState(false);
  const[userAvatar, setUserAvatar] = React.useState(false);

React.useEffect(()=>{
  Api.getProfileInfo().then(data => {
    console.log(data);
    setUserName(data.name);
    setUserDescription(data.about);
    setUserAvatar(data.avatar);
  })
})

  const handleEditProfileClick = ()=>{
    setProfilePopup(!isEditProfilePopupOpen);
  }
  
  const handleAddPlaceClick = ()=>{
    setPlacePopup(!isAddPlacePopupOpen);
  }

  const handleEditAvatarClick = ()=>{
    setAvatarPopup(!isEditAvatarPopupOpen);
  }

  const closeAllPopups = () =>{
    setProfilePopup(false);
    setPlacePopup(false); 
    setAvatarPopup(false);
  }

  return (
    <div className="page">
    <Header/>
    <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} name={userName} description={userDescription} userAvatar={userAvatar}/> 
    <Footer/>
    <PopupWithForm onClose ={closeAllPopups} isOpen={isEditProfilePopupOpen ? 'popup_opened':''} name="edit-user-profile" title="Редактировать профиль" placeholderName="Имя" placeholderDescription="Вид деятельности" submitName="Сохранить" />    
    <PopupWithForm onClose ={closeAllPopups} isOpen={isAddPlacePopupOpen ? 'popup_opened':''} name="new-cards" title="Новое место"  placeholderName="Название" placeholderDescription="Ссылка на картинку" submitName="Создать"/> 
    <PopupWithForm onClose ={closeAllPopups} isOpen={isEditAvatarPopupOpen ? 'popup_opened' : ''}  name="editing_photo_profile" title="Обновить аватар"  placeholderName="Ссылка на аватар" submitName="Сохранить"/>
    </div>
  );
}


export default App;
