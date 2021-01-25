//import './App.css';
import React from 'react';
import './Header.jsx';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import Api from '../utils/Api';
import ImagePopup from './ImagePopup.jsx';

function App() {
 
  const[isEditProfilePopupOpen, setProfilePopup] = React.useState(false);
  const[isAddPlacePopupOpen, setPlacePopup] = React.useState(false);
  const[isEditAvatarPopupOpen, setAvatarPopup] = React.useState(false);

  const[userName, setUserName] = React.useState('');
  const[userDescription , setUserDescription] = React.useState('');
  const[userAvatar, setUserAvatar] = React.useState('');
  const[cards, setCards] = React.useState([]);

  const[selectedCard, setImageCard] = React.useState([false]);


    /**Обработчик событий для открытия карточки */
   
    const handleCardClick = (imageSrc,cardTitle) =>  
    {   
      setImageCard({...selectedCard,
        isOpen:true,
        name:cardTitle,
        imageSrc:imageSrc,
      })
    }

  React.useEffect(()=>{
  Api.getProfileInfo().then(data => {
    setUserName(data.name);
    setUserDescription(data.about);
    setUserAvatar(data.avatar);
  })
  },[])

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
  });


},[])

  const handleEditProfileClick = ()=>{
    setProfilePopup(!isEditProfilePopupOpen);
  }
  
  const handleAddPlaceClick = ()=>{
    setPlacePopup(!isAddPlacePopupOpen);
  }

  const handleEditAvatarClick = ()=>{
    setAvatarPopup(!isEditAvatarPopupOpen);
  }


  const closeAllPopups = () =>{
    setProfilePopup(false);
    setPlacePopup(false); 
    setAvatarPopup(false);

    setImageCard(false);
  }

  return (
    <div className="page">
      <Header/>
      <Main handleCardClick={handleCardClick} allCards={cards} onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} name={userName} description={userDescription} userAvatar={userAvatar}/>
      <Footer/>
      <PopupWithForm isSecondInputActive={true} onClose ={closeAllPopups} isOpen={isEditProfilePopupOpen ? 'popup_opened':''} name="edit-user-profile" title="Редактировать профиль" placeholderName="Имя" placeholderDescription="Вид деятельности" submitName="Сохранить" />    
      <PopupWithForm isSecondInputActive={true} onClose ={closeAllPopups} isOpen={isAddPlacePopupOpen ? 'popup_opened':''} name="new-cards" title="Новое место"  placeholderName="Название" placeholderDescription="Ссылка на картинку" submitName="Создать"/> 
      <PopupWithForm isSecondInputActive={false} onClose ={closeAllPopups} isOpen={isEditAvatarPopupOpen ? 'popup_opened' : ''}  name="editing_photo_profile" title="Обновить аватар"  placeholderName="Ссылка на аватар" submitName="Сохранить"/>
      <PopupWithForm isSecondInputActive={false} onClose ={closeAllPopups}  name="removing_card" title="Вы уверены?"  submitName="Да"/>
      <ImagePopup onClose={closeAllPopups} card={selectedCard}/>
 
    </div>
  );
}


export default App;