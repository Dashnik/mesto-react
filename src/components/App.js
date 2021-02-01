/** Код для десятой проектной работы */
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

import Api from '../utils/api.js';
import {currentUserContext} from '../contexts/CurrentUserContext';
 

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

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setPlacePopup(false);
    setAvatarPopup(false);

    setImageCard({ name:'', link:'' , isOpen: false});
  };

  return (
    <div className="page">
      <currentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        handleCardClick={handleCardClick}
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      </currentUserContext.Provider>
      <PopupWithForm
        isSecondInputActive={true}
        onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen ? 'popup_opened' : ''}
        name="edit-user-profile"
        title="Редактировать профиль"
        placeholderName="Имя"
        placeholderDescription="Вид деятельности"
        submitName="Сохранить"
      />
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
      <PopupWithForm
        isSecondInputActive={false}
        onClose={closeAllPopups}
        isOpen={isEditAvatarPopupOpen ? 'popup_opened' : ''}
        name="editing_photo_profile"
        title="Обновить аватар"
        placeholderName="Ссылка на аватар"
        submitName="Сохранить"
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



/** Код для 11 проектной работы */
// import React from 'react';
// import Header from './Header';
// import Main from './Main';
// import Footer from './Footer';
// import PopupWithForm from './PopupWithForm';
// import Api from '../utils/api';
// import ImagePopup from './ImagePopup';

// function App() {
//   const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
//   const [isAddPlacePopupOpen, setPlacePopup] = React.useState(false);
//   const [isEditAvatarPopupOpen, setAvatarPopup] = React.useState(false);

//   const [userName, setUserName] = React.useState('');
//   const [userDescription, setUserDescription] = React.useState('');
//   const [userAvatar, setUserAvatar] = React.useState('');
//   const [cards, setCards] = React.useState([]);

//   const [selectedCard, setImageCard] = React.useState({ isOpen:false, name:'', imageSrc:'' });

//   /**Обработчик событий для открытия карточки */
//   console.log('default value from selectedCard: ' + selectedCard);

//   const handleCardClick = (imageSrc, cardTitle) => {
   
//     setImageCard({
//       ...selectedCard,
//       isOpen: true,
//       name: cardTitle,
//       imageSrc:imageSrc
//     });
//     console.log(selectedCard);
//   };

//   React.useEffect(() => {
//     Api.getProfileInfo().then((data) => {
//       setUserName(data.name);
//       setUserDescription(data.about);
//       setUserAvatar(data.avatar);
//     })
//     .catch(error=>{
//       console.log(error);
//     });
//   }, []);

//   React.useEffect(() => {
//     Api.getInitialCards().then((data) => {
//       setCards(
//         data.map((item) => ({
//           cardID: item._id,
//           imageSrc: item.link,
//           imageAlt: item.name,
//           cardTitle: item.name,
//           cardLikes: item.likes.length,
//         }))
//       );
//     })
//     .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   const handleEditProfileClick = () => {
//     setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
//   };

//   const handleAddPlaceClick = () => {
//     setPlacePopup(!isAddPlacePopupOpen);
//   };

//   const handleEditAvatarClick = () => {
//     setAvatarPopup(!isEditAvatarPopupOpen);
//   };

//   const closeAllPopups = () => {
//     setIsEditProfilePopupOpen(false);
//     setPlacePopup(false);
//     setAvatarPopup(false);

//     setImageCard({ name:'', link:'' , isOpen: false});
//   };

//   return (
//     <div className="page">
//       <Header />
//       <Main
//         handleCardClick={handleCardClick}
//        allCards={cards}
//         onEditProfile={handleEditProfileClick}
//         onEditAvatar={handleEditAvatarClick}
//         onAddPlace={handleAddPlaceClick}
//         name={userName}
//         description={userDescription}
//         userAvatar={userAvatar}
//       />
//       <Footer />
//       <PopupWithForm
//         isSecondInputActive={true}
//         onClose={closeAllPopups}
//         isOpen={isEditProfilePopupOpen ? 'popup_opened' : ''}
//         name="edit-user-profile"
//         title="Редактировать профиль"
//         placeholderName="Имя"
//         placeholderDescription="Вид деятельности"
//         submitName="Сохранить"
//       />
//       <PopupWithForm
//         isSecondInputActive={true}
//         onClose={closeAllPopups}
//         isOpen={isAddPlacePopupOpen ? 'popup_opened' : ''}
//         name="new-cards"
//         title="Новое место"
//         placeholderName="Название"
//         placeholderDescription="Ссылка на картинку"
//         submitName="Создать"
//       />
//       <PopupWithForm
//         isSecondInputActive={false}
//         onClose={closeAllPopups}
//         isOpen={isEditAvatarPopupOpen ? 'popup_opened' : ''}
//         name="editing_photo_profile"
//         title="Обновить аватар"
//         placeholderName="Ссылка на аватар"
//         submitName="Сохранить"
//       />
//       <PopupWithForm
//         isSecondInputActive={false}
//         onClose={closeAllPopups}
//         name="removing_card"
//         title="Вы уверены?"
//         submitName="Да"
//       />
//       <ImagePopup onClose={closeAllPopups} card={selectedCard} />
//     </div>
//   );
// }

// export default App;
