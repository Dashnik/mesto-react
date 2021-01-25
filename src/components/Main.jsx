import React from 'react';
import Card from './Card';

function Main(props){

    function handleClick(imageSrc,cardTitle){
     
      props.handleCardClick(imageSrc,cardTitle);
      
    }

    return(
        <>
        <main className="content">
        <section className="profile">
            <div className="profile__photo_container">
                <img src={props.userAvatar} className="profile__image" alt='Аватар пользователя'/>
                <button type="button"  className="profile__editingAvatar-icon" onClick={props.onEditAvatar}></button>
             </div>
                <div className="profile__info">
                <div className="profile__info-table">
                    <h1 className="profile__name" >{props.name}</h1>
                    <button type="button" className="profile__edit-icon" onClick={props.onEditProfile}></button>
                </div>
                <p className="profile__description">{props.description}</p>
            </div>
            <div className="profile__rectangle">
                <button type="button" className="profile__addingCard-icon" onClick={props.onAddPlace}> </button>
            </div>
        </section>
        <section className="elements">
        {props.allCards.map(({cardID,...props})=> <Card  onCardClick={ handleClick} key={cardID} {...props} />)}
      
        </section>
    </main>
       <div className="overlay"></div>
       </>
    )
}


export default Main;