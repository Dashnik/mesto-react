import React from 'react';
//import { render } from '@testing-library/react';
import Card from './Card';
import Api from '../utils/Api';

function Main(props){
    const[cards, setCards] = React.useState([]);

    React.useEffect(()=>{
        Api.getInitialCards().then(data=>{
        setCards( data.map(item =>({
            cardID : item._id,
            imageSrc: item.link,
            imageAlt: item.name,
            cardTitle: item.name,
            cardLikes: item.likes.length,
          })
        ));
      })
    },[])
  
    

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
        {cards.map(({cardID,...props})=> <Card key={cardID} {...props} />)}
        </section>
    </main>
       <div className="overlay"></div>
       </>
    )
}


export default Main;