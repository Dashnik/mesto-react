/**Код для 10 проектной работы */
import React from 'react';
import Card from './Card';
import {currentUserContext} from '../contexts/CurrentUserContext';

import Api from '../utils/api.js';

function Main(props) {

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Api.getInitialCards().then((data) => {
    
      setCards(
        data.map((item) => ({
          // cardID: item._id,
          // imageLink: item.link,
          // cardName: item.name,
          // cardLikes: item.likes,
          // cardOwnerId:item.owner._id,
          _id: item._id,
          link: item.link,
          name: item.name,
          likes: item.likes,
          ownerId:item.owner._id,
          //cardIdentificator:item._id,
        }))
      );
    })
    .catch(error => {
        console.log(error);
      });
  }, []);


  const currentUser =  React.useContext(currentUserContext);


  function handleClick(imageSrc, cardTitle) {
    props.handleCardClick(imageSrc, cardTitle);
  } 

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке

    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    Api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));

      console.log(cards);
      // Обновляем стейт
      setCards(newCards);
    });
  } 

  function handleCardDelete(card){
    Api.deleteCard(card._id)
    .then(()=>{
     const newCards = cards.filter(r => (r._id === card._id ? '' : r))
      setCards(newCards);
    })
    .catch(error=>{
      console.log(error);
    });
  }


  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__photo_container">
            <img
              src={currentUser.avatar}
              className="profile__image"
              alt="Аватар пользователя"
            />
            <button
              type="button"
              className="profile__editingAvatar-icon"
              onClick={props.onEditAvatar}
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__info-table">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                type="button"
                className="profile__edit-icon"
                onClick={props.onEditProfile}
              />
            </div>
            <p className="profile__description">{currentUser.about}</p>
          </div>
          <div className="profile__rectangle">
            <button
              type="button"
              className="profile__addingCard-icon"
              onClick={props.onAddPlace}
            >
              {" "}
            </button>
          </div>
        </section>
        {/* <cardsContext.Provider value={cards} > */}
        <section className="elements">
          {/* {cards.map(({ cardID, ...props }) => (
            <Card onCardClick={handleClick}  onCardLike={handleCardLike} key={cardID} {...props}  />
          ))} */}
            {cards.map((card) => (
            <Card onCardClick={handleClick} 
             onCardLike={handleCardLike}
             onCardDelete={handleCardDelete}
              key={card._id}
               card={card}  />
          ))}
        </section>
        {/* </cardsContext.Provider> */}
      </main>
      <div className="overlay" />
    </>
  );
}

export default Main;