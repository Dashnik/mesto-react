import React from 'react';
//import avatarLink from '../images/Jacques_Cousteau.jpg';
//import PopupWithForm from './PopupWithForm.jsx';
//import ImagePopup from './ImagePopup.jsx';
import { render } from '@testing-library/react';
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
                    <h1 className="profile__name">{props.name}</h1>
                    <button type="button" className="profile__edit-icon" onClick={props.onEditProfile}></button>
                </div>
                <p className="profile__description">{props.description}</p>
            </div>
            <div className="profile__rectangle">
                <button type="button" className="profile__addingCard-icon" onClick={props.onAddPlace}> </button>
            </div>
        </section>
        <section className="elements">
        {cards.map(({cardID,...props})=> <Card key={cardID} {...props}/>)}
        </section>
    </main>
       <div className="overlay"></div>
       {/* <form className="popup popup_type_new-cards" name="popup" noValidate>
           <div className="popup__container popup_cards__container">
               <button type="button" className="popup__close" aria-label="закрыть попап"></button>
               <h2 className="popup__title popup_cards__title">Новое место</h2>
               <input 
               type='text' 
               value="" 
               id="place-name" 
               name="name" 
               className="popup__input popup__item_input_name"
               placeholder="Название" 
               minLength="1" 
               maxLength="30" 
               required/>
               <span className="popup__input-error" id='place-name-error'></span>
               <input 
               type='url'
               value="" 
               id="place-link" 
               name="link"
               className="popup__input popup__item_input_url" 
               placeholder="Ссылка на картинку" 
               required/>
               <span className="popup__input-error" id='place-link-error'></span>
               <button type="submit" className="popup__submit popup_cards__submit popup__submit_inactive" disabled> Создать</button>
           </div>
       </form> */}
       {/* <ImagePopup/> */}
       {/* <div className="popup popup_type_image" name="popupImage">
           <button type="button" className="popup__close" aria-label="закрыть попап"></button>
           <img className='popup__image' src="#" alt=""/>
           <p className="popup__caption"> </p>
       </div> */}
           {/* <PopupWithForm name="removing_card" title="Вы уверены?"   submit="Да"/> */}
       {/* <div className="popup popup_type_removing_card" name="popupRemovingCard">
           <button type="button" className="popup__close" aria-label="закрыть попап"></button>
           <div className="popup__removing">
               <h2 className="popup__title popup__title_removing_card">Вы уверены?</h2>
               <form>
                   <button type="submit" className="popup__submit">Да</button>
               </form>
           </div>
       </div> */}
   {/* <PopupWithForm isOpen={handleEditAvatarClick ? 'popup_opened' : ''}  name="editing_photo_profile" title="Обновить аватар"  placeholderName="Ссылка на аватар" submit="Сохранить"/> */}
       {/* <div className="popup popup_type_editing_photo_profile" name="popupEditingPhotoProfile">
           <button type="button" className="popup__close" aria-label="закрыть попап"></button>
           <div className="popup__editing_photo_container">
               <h2 className="popup__title">Обновить аватар</h2>
               <input 
               type='url'
               value="" 
               id="avatar-link" 
               name="avatar"
               className="popup__input popup__item_input_url" 
               placeholder="Ссылка на аватар" 
               required/>
               <span className="popup__input-error" id='place-name-error'></span>
               <form>
                   <button type="submit" className="popup__submit">Сохранить</button>
               </form>
           </div>
       </div> */}

       </>
    )
}


export default Main;