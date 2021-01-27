/**Код для 10 проектной работы */
import React from 'react';
import Card from './Card';
import Api from '../utils/api';

function Main(props) {
  function handleClick(imageSrc, cardTitle) {
    props.handleCardClick(imageSrc, cardTitle);
  }

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Api.getProfileInfo().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
    .catch(error=>{
      console.log(error);
    });
  }, []);

  React.useEffect(() => {
    Api.getInitialCards().then((data) => {
      setCards(
        data.map((item) => ({
          cardID: item._id,
          imageSrc: item.link,
          imageAlt: item.name,
          cardTitle: item.name,
          cardLikes: item.likes.length,
        }))
      );
    })
    .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__photo_container">
            <img
              src={userAvatar}
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
              <h1 className="profile__name">{userName}</h1>
              <button
                type="button"
                className="profile__edit-icon"
                onClick={props.onEditProfile}
              />
            </div>
            <p className="profile__description">{userDescription}</p>
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
            <Card onCardClick={handleClick} key={cardID} {...props} />
          ))}
        </section>
      </main>
      <div className="overlay" />
    </>
  );
}

export default Main;


/**Код для 11 проектной работы */
// import React from 'react';
// import Card from './Card';

// function Main(props) {
//   function handleClick(imageSrc, cardTitle) {
//     props.handleCardClick(imageSrc, cardTitle);
//   }

//   return (
//     <>
//       <main className="content">
//         <section className="profile">
//           <div className="profile__photo_container">
//             <img
//               src={props.userAvatar}
//               className="profile__image"
//               alt="Аватар пользователя"
//             />
//             <button
//               type="button"
//               className="profile__editingAvatar-icon"
//               onClick={props.onEditAvatar}
//             ></button>
//           </div>
//           <div className="profile__info">
//             <div className="profile__info-table">
//               <h1 className="profile__name">{props.name}</h1>
//               <button
//                 type="button"
//                 className="profile__edit-icon"
//                 onClick={props.onEditProfile}
//               />
//             </div>
//             <p className="profile__description">{props.description}</p>
//           </div>
//           <div className="profile__rectangle">
//             <button
//               type="button"
//               className="profile__addingCard-icon"
//               onClick={props.onAddPlace}
//             >
//               {" "}
//             </button>
//           </div>
//         </section>
//         <section className="elements">
//           {props.allCards.map(({ cardID, ...props }) => (
//             <Card onCardClick={handleClick} key={cardID} {...props} />
//           ))}
//         </section>
//       </main>
//       <div className="overlay" />
//     </>
//   );
// }

// export default Main;
