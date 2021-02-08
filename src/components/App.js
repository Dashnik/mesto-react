import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

import Api from '../utils/api.js';
import { CurrentUserContext, CardsContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopup] = React.useState(false);
  const [selectedCard, setImageCard] = React.useState({ isOpen: false, name: '', imageSrc: '' });

  const [currentUser, setCurrentUser] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Api.getInitialCards()
      .then((data) => {
        setCards(
          data.map((item) => ({
            _id: item._id,
            link: item.link,
            name: item.name,
            likes: item.likes,
            owner: { _id: item.owner._id },
          }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    Api.getProfileInfo().then((data) => {
      setCurrentUser(data);
    })
      .catch(error => {
        console.log(error);
      });
  }, []);

  /**Обработчики событий */
  const handleCardClick = (imageSrc, cardTitle) => {

    setImageCard({
      ...selectedCard,
      isOpen: true,
      name: cardTitle,
      imageSrc: imageSrc
    });
  };

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    Api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {

      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));

      // Обновляем стейт
      setCards(newCards);
    })
    .catch(error => {
      console.log(error);
    });
  }

  function handleCardDelete(card) {
    Api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((r) => (r._id === card._id ? "" : r));
        setCards(newCards);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
   

    Api.setNewProfile({ name, about })
      .then((userData) => {
        setCurrentUser(userData)
        closeAllPopups();
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleUpdateAvatar = (link) => {

    Api.setUserAvatar(link).then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    }
    )
      .catch(error => {
        console.log(error);
      })
  }

  const handleAddPlaceSubmit = (newCard) => {

    Api.postCardOnTheServer(newCard)
      .then(newElement => {
        setCards([newElement, ...cards ])
      })
      .catch(error => {
        console.log(error);
      })
    closeAllPopups();
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setPlacePopup(false);
    setAvatarPopup(false);

    setImageCard({ name: '', link: '', isOpen: false });
  };


  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser} >
        <Header />
        <CardsContext.Provider value={cards} >
          <Main
            handleCardClick={handleCardClick}
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            handleCardLike={handleCardLike}
            handleCardDelete={handleCardDelete}
          />
        </CardsContext.Provider>
        <Footer />
        <EditProfilePopup onClose={closeAllPopups}
          isOpen={isEditProfilePopupOpen}
          onUpdateUser={handleUpdateUser} />
      </CurrentUserContext.Provider>
      <AddPlacePopup
        onClose={closeAllPopups}
        isOpen={isAddPlacePopupOpen}
        onCreateCard={handleAddPlaceSubmit}
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