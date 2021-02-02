import React from 'react';
import trashLogo from '../images/Trash.svg';
import {currentUserContext} from '../contexts/CurrentUserContext';

function Card({
  cardID,
  imageSrc,
  imageAlt,
  cardTitle,
  cardLikes,
  cardLikesArr,
  onCardClick,
  cardOwnerId,
}) {

  const currentUserT =  React.useContext(currentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
const isOwn = cardOwnerId === currentUserT._id;

// Создаём переменную, которую после зададим в `className` для кнопки удаления
const cardDeleteButtonClassName = (
  `card__delete-button ${isOwn ? '' : 'card__delete-button_hidden'}`
);

// Определяем, есть ли у карточки лайк, поставленный текущим пользователем
const testo = (i) => i === currentUserT._id;

function test(elem){
  return elem === currentUserT._id;
}



//const isLiked = cardLikesArr.some(test);
//console.log('MyID: ' + currentUserT._id + ' AnotherID: ' + cardLikesArr);
const isLiked =  cardLikesArr.some(id => id._id === currentUserT._id)
console.log(isLiked);

// Создаём переменную, которую после зададим в `className` для кнопки лайка
const cardLikeButtonClassName = (`card__like ${isLiked ? 'card__like_active' : ''}`);

  function handleClick() {
    onCardClick(imageSrc, cardTitle);
  }

  return (
    <div className="card" id={cardID}>
      <img
        className="card__image"
        src={imageSrc}
        alt={imageAlt}
        onClick={handleClick}
      />
      <img className={cardDeleteButtonClassName} src={trashLogo} alt="Иконка удаления карточки в виде мусорки" />
      <div className="card__body">
        <h2 className="card__title">{cardTitle}</h2>
        <div className="card__likes">
          {/* <button type="button" className=" card__like" /> */}
          <button type="button" className={cardLikeButtonClassName} />
          <p className="card__counter-like">{cardLikes}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
