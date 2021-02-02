/**Код для 10 проектной работы */
import React from 'react';
import Card from './Card';
import {currentUserContext, cardsContext} from '../contexts/CurrentUserContext';

function Main(props) {

  const currentUserT =  React.useContext(currentUserContext);
  const cards =  React.useContext(cardsContext);

  function handleClick(imageSrc, cardTitle) {
    props.handleCardClick(imageSrc, cardTitle);
  } 

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__photo_container">
            <img
              src={currentUserT.avatar}
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
              <h1 className="profile__name">{currentUserT.name}</h1>
              <button
                type="button"
                className="profile__edit-icon"
                onClick={props.onEditProfile}
              />
            </div>
            <p className="profile__description">{currentUserT.about}</p>
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
        <section className="elements">
          {cards.map(({ cardID, ...props }) => (
            <Card onCardClick={handleClick} key={cardID} {...props}/>
          ))}
        </section>
      </main>
      <div className="overlay" />
    </>
  );
}

export default Main;

 //const [cards, setCards] = React.useState([]);

  // React.useEffect(() => {
  //   Api.getInitialCards().then((data) => {
  //     setCards(
  //       data.map((item) => ({
  //         cardID: item._id,
  //         imageSrc: item.link,
  //         imageAlt: item.name,
  //         cardTitle: item.name,
  //         cardLikes: item.likes.length,
  //       }))
  //     );
  //   })
  //   .catch(error => {
  //       console.log(error);
  //     });
  // }, []);