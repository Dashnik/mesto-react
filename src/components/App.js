/** Код для десятой проектной работы */
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

import Api from '../utils/api.js';
import {currentUserContext} from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

 

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopup] = React.useState(false);
  const [selectedCard, setImageCard] = React.useState({ isOpen:false, name:'', imageSrc:'' });

  const [currentUser, setCurrentUser] = React.useState('');

  React.useEffect(() => {
    Api.getProfileInfo().then((data) => {
      setCurrentUser(data);

    })
    .catch(error=>{
      console.log(error);
    });
  }, []);

  /**Обработчик событий для открытия карточки */
  const handleCardClick = (imageSrc, cardTitle) => {
   
    setImageCard({
      ...selectedCard,
      isOpen: true,
      name: cardTitle,
      imageSrc:imageSrc
    });
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setPlacePopup(!isAddPlacePopupOpen);
  };

  const handleEditAvatarClick = () => {
    setAvatarPopup(!isEditAvatarPopupOpen);
  };

  const handleUpdateUser = ({ name, about }) => {
    {
      currentUser.name = name,
        currentUser.about = about
    }

    Api.setNewProfile(currentUser)
      .then(() => {

        closeAllPopups();
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleUpdateAvatar = (link) => {

    Api.setUserAvatar(link).then((data)=>{
      setCurrentUser(data);
      closeAllPopups();
    }
    )
    .catch(error => {
      console.log(error);
    })

  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setPlacePopup(false);
    setAvatarPopup(false);

    setImageCard({ name:'', link:'' , isOpen: false});
  };


  return (
    <div className="page">
      <currentUserContext.Provider value={currentUser} >
      <Header />
      <Main
        handleCardClick={handleCardClick}
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      <EditProfilePopup onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen}
        onUpdateUser={handleUpdateUser}/>
       </currentUserContext.Provider>
      <PopupWithForm
        isSecondInputActive={true}
        onClose={closeAllPopups}
        isOpen={isAddPlacePopupOpen ? 'popup_opened' : ''}
        name="new-cards"
        title="Новое место"
        placeholderName="Название"
        placeholderDescription="Ссылка на картинку"
        submitName="Создать"
      />
      <EditAvatarPopup 
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
        />
      <PopupWithForm
        isSecondInputActive={false}
        onClose={closeAllPopups}
        name="removing_card"
        title="Вы уверены?"
        submitName="Да"
      />
      <ImagePopup onClose={closeAllPopups} card={selectedCard} />
    </div>
  );
}

export default App;