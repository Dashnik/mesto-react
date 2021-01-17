import logo from './images/header-logo.jpg';
//import './App.css';

function App() {
  return (
    <div className="page">
      <header className="header">
        <img className="header__logo" src={logo} alt='логотип проекта Mesto'/>
    </header>
     <main className="content">
        <section className="profile">
            <div className="profile__photo_container">
                <img src="#" className="profile__image" alt='Жак-Ив Кусто'/>
                <img src="./images/EditPen.svg" className="penEdit" alt="PenEdit"/>
             </div>
                <div className="profile__info">
                <div className="profile__info-table">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button type="button" className="profile__name-edit"></button>
                </div>
                <p className="profile__description"></p>
            </div>
            <div className="profile__rectangle">
                <button type="button" className="profile__vector"> </button>
            </div>
        </section>
        <section className="elements">
        </section>
    </main>
    <footer className="footer">
        <p className="footer__logo">© 2020 Mesto Russia</p>
    </footer>
    <div className="overlay"></div>
    <form className="popup popup_type_edit-user-profile" name="popup" noValidate>
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
    </form>
    <form className="popup popup_type_new-cards" name="popup" noValidate>
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
    </form>
    <div className="popup popup_type_image" name="popupImage">
        <button type="button" className="popup__close" aria-label="закрыть попап"></button>
        <img className='popup__image' src="#" alt=""/>
        <p className="popup__caption"> </p>
    </div>
    <div className="popup popup_type_removing_card" name="popupRemovingCard">
        <button type="button" className="popup__close" aria-label="закрыть попап"></button>
        <div className="popup__removing">
            <h2 className="popup__title popup__title_removing_card">Вы уверены?</h2>
            <form>
                <button type="submit" className="popup__submit">Да</button>
            </form>
        </div>
    </div>

    <div className="popup popup_type_editing_photo_profile" name="popupEditingPhotoProfile">
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
    </div>
    </div>
  );
}

export default App;
