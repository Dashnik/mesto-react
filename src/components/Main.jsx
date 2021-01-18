import React from 'react';
import avatarLink from '../images/Jacques_Cousteau.jpg';
import PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx';

function Main(props){

    // const handleEditProfileClick = () => 
    // {
    //     const popupEditUserInfoIcon = document.querySelector('.popup_type_edit-user-profile');
    //     popupEditUserInfoIcon.classList.add('popup_opened');
    // }

    // const handleEditAvatarClick = () => 
    // {
    //     console.log('hi');
    //  const test = document.querySelector('.popup_type_editing_photo_profile');
    //  test.classList.add('popup_opened');
    // }

    // const handleAddPlaceClick = () => 
    // {
    //     const popupAddCardsIcon = document.querySelector('.popup_type_new-cards');
    //     popupAddCardsIcon.classList.add('popup_opened');
    // }


    

    return(
        <>
        <main className="content">
        <section className="profile">
            <div className="profile__photo_container">
                <img src={avatarLink} className="profile__image" alt='Жак-Ив Кусто'/>
                <button type="button"  className="profile__editingAvatar-icon" onClick={props.onEditAvatar}></button>
             </div>
                <div className="profile__info">
                <div className="profile__info-table">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button type="button" className="profile__edit-icon" onClick={props.onEditProfile}></button>
                </div>
                <p className="profile__description">Исследователь, ученый</p>
            </div>
            <div className="profile__rectangle">
                <button type="button" className="profile__addingCard-icon" onClick={props.onAddPlace}> </button>
            </div>
        </section>
        <section className="elements">
        </section>
    </main>
       <div className="overlay"></div>
       <PopupWithForm name="edit-user-profile" title="Редактировать профиль" placeholderName="Имя" placeholderDescription="Вид деятельности" submit="Сохранить"/>
       {/* <form className="popup popup_type_edit-user-profile" name="popup" noValidate>
           <div className="popup__container">        
               <button type="button" className="popup__close" aria-label="закрыть попап"></button>
               <h2 className="popup__title">Редактировать профиль</h2>
               <input 
               type='text' 
               value="" 
               id="profile-name"
               name="popup__name" 
               className="popup__input popup__item_profile_name"
               minLength="2"
               maxLength="40" 
               placeholder="Имя" 
               required/>
               <span className="popup__input-error" id='profile-name-error'></span>
               <input 
               type='text' 
               value=""
               id="profile-job"
               name="popup__description" 
               className="popup__input popup__item_profile_job" 
               minLength="2"
               maxLength="200" 
                placeholder="Вид деятельности"
                required/>
               <span className="popup__input-error" id='profile-job-error'></span>
               <button type="submit" className="popup__submit popup__profile_submit"> Сохранить</button>
           </div>
       </form> */}
         <PopupWithForm name="new-cards" title="Новое место"  placeholderName="Название" placeholderDescription="Ссылка на картинку" submit="Создать"/>
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
       <ImagePopup/>
       {/* <div className="popup popup_type_image" name="popupImage">
           <button type="button" className="popup__close" aria-label="закрыть попап"></button>
           <img className='popup__image' src="#" alt=""/>
           <p className="popup__caption"> </p>
       </div> */}
           <PopupWithForm name="removing_card" title="Вы уверены?"   submit="Да"/>
       {/* <div className="popup popup_type_removing_card" name="popupRemovingCard">
           <button type="button" className="popup__close" aria-label="закрыть попап"></button>
           <div className="popup__removing">
               <h2 className="popup__title popup__title_removing_card">Вы уверены?</h2>
               <form>
                   <button type="submit" className="popup__submit">Да</button>
               </form>
           </div>
       </div> */}
        <PopupWithForm name="editing_photo_profile" title="Обновить аватар"  placeholderName="Ссылка на аватар" submit="Сохранить"/>
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