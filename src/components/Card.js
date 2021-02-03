import React from 'react';
import trashLogo from '../images/Trash.svg';
import {currentUserContext} from '../contexts/CurrentUserContext';

function Card({
  // cardID,
  // imageLink,
  // cardName,
  // cardLikes,
  // onCardClick,
  // cardOwnerId,
  // onCardLike,
  // cardIdentificator,
  card,
  onCardClick,
  onCardLike,
}) {

  const currentUser =  React.useContext(currentUserContext);
 
  // Определяем, являемся ли мы владельцем текущей карточки
const isOwn = card.ownerId === currentUser._id;
console.log(isOwn);
// Создаём переменную, которую после зададим в `className` для кнопки удаления
const cardDeleteButtonClassName = (
  `card__delete-button ${isOwn ? '' : 'card__delete-button_hidden'}`
);

// Определяем, есть ли у карточки лайк, поставленный текущим пользователем

const isLiked =  card.likes.some(id => id._id === currentUser._id)


// Создаём переменную, которую после зададим в `className` для кнопки лайка
const cardLikeButtonClassName = (`card__like ${isLiked ? 'card__like_active' : ''}`);

  function handleClick() {
    onCardClick(card.link, card.name);
  }

  function handleLikeClick(){
    onCardLike(card)
   
  }


  return (
    <div className="card" id={card._id}>
      <img
        className="card__image"
         src={card.link}
        //src={cardsContextT.imageSrc}
        alt={card.name}
        onClick={handleClick}
      />
      <img className={cardDeleteButtonClassName} src={trashLogo} alt="Иконка удаления карточки в виде мусорки" />
      <div className="card__body">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__likes">
          <button 
          type="button" 
          className={cardLikeButtonClassName}
          onClick={handleLikeClick}
           />
          <p className="card__counter-like">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;



// import React from 'react';
// import trashLogo from '../images/Trash.svg';
// import {currentUserContext} from '../contexts/CurrentUserContext';

// function Card({
//   // cardID,
//   // imageLink,
//   // cardName,
//   // cardLikes,
//   // onCardClick,
//   // cardOwnerId,
//   // onCardLike,
//   // cardIdentificator,
//   card,
//   onCardClick,
//   onCardLike,
// }) {

//   const currentUser =  React.useContext(currentUserContext);
 
//   // Определяем, являемся ли мы владельцем текущей карточки
// const isOwn = card.cardOwnerId === currentUser._id;

// // Создаём переменную, которую после зададим в `className` для кнопки удаления
// const cardDeleteButtonClassName = (
//   `card__delete-button ${isOwn ? '' : 'card__delete-button_hidden'}`
// );

// // Определяем, есть ли у карточки лайк, поставленный текущим пользователем

// const isLiked =  card.cardLikes.some(id => id._id === currentUser._id)


// // Создаём переменную, которую после зададим в `className` для кнопки лайка
// const cardLikeButtonClassName = (`card__like ${isLiked ? 'card__like_active' : ''}`);

//   function handleClick() {
//     onCardClick(card.imageLink, card.cardName);
//   }

//   function handleLikeClick(){
//     onCardLike(card)
   
//   }


//   return (
//     <div className="card" id={card.cardID}>
//       <img
//         className="card__image"
//          src={card.imageLink}
//         //src={cardsContextT.imageSrc}
//         alt={card.cardName}
//         onClick={handleClick}
//       />
//       <img className={cardDeleteButtonClassName} src={trashLogo} alt="Иконка удаления карточки в виде мусорки" />
//       <div className="card__body">
//         <h2 className="card__title">{card.cardName}</h2>
//         <div className="card__likes">
//           <button 
//           type="button" 
//           className={cardLikeButtonClassName}
//           onClick={handleLikeClick}
//            />
//           <p className="card__counter-like">{card.cardLikes.length}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;
