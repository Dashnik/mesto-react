//import './App.css';
import './Header.jsx';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

function App() {

  let isEditProfilePopupOpen = true;
  let isAddPlacePopupOpen = true;
  let isEditAvatarPopupOpen = false;

  const handleEditProfileClick = () => 
  {
      const popupEditUserInfoIcon = document.querySelector('.popup_type_edit-user-profile');
      popupEditUserInfoIcon.classList.add('popup_opened');
 
  }

  const handleEditAvatarClick = () => 
  {
    isEditAvatarPopupOpen = true;
   const popupEditUserAvatar = document.querySelector('.popup_type_editing_photo_profile');
   popupEditUserAvatar.classList.add('popup_opened');
  }

  const handleAddPlaceClick = () => 
  {
    isAddPlacePopupOpen = true;
      const popupAddCardsIcon = document.querySelector('.popup_type_new-cards');
      popupAddCardsIcon.classList.add('popup_opened');
  }

  return (
    <div className="page">
    <Header/>
    <Main onEditProfile={isEditProfilePopupOpen ? handleEditProfileClick : ''} onAddPlace={isAddPlacePopupOpen ? handleAddPlaceClick : ''} onEditAvatar={isEditAvatarPopupOpen ? handleEditAvatarClick : ''}/>
    <Footer/>
 
    </div>
  );
}

export default App;
