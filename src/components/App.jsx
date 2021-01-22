//import './App.css';
import React from 'react';
import './Header.jsx';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import Api from '../utils/Api';
import Card from './Card';


function App() {
 
  const[isEditProfilePopupOpen, setProfilePopup] = React.useState(false);
  const[isAddPlacePopupOpen, setPlacePopup] = React.useState(false);
  const[isEditAvatarPopupOpen, setAvatarPopup] = React.useState(false);

  const[userName, setUserName] = React.useState('');
  const[userDescription , setUserDescription] = React.useState('');
  const[userAvatar, setUserAvatar] = React.useState('');
  const[cards, setCards] = React.useState([]);

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
  })
},[])


  const handleEditProfileClick = ()=>{
    setProfilePopup(!isEditProfilePopupOpen);
    console.log(cards);
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
  }

  const renderCards = ()=>{
    cards.map(({cardID,...props})=> <Card key={cardID} {...props}/>)
  }

  return (
    <div className="page">
    <Header/>
    <Main  onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} name={userName} description={userDescription} userAvatar={userAvatar}>
      </Main> 
    <Footer/>
    <PopupWithForm onClose ={closeAllPopups} isOpen={isEditProfilePopupOpen ? 'popup_opened':''} name="edit-user-profile" title="Редактировать профиль" placeholderName="Имя" placeholderDescription="Вид деятельности" submitName="Сохранить" />    
    <PopupWithForm onClose ={closeAllPopups} isOpen={isAddPlacePopupOpen ? 'popup_opened':''} name="new-cards" title="Новое место"  placeholderName="Название" placeholderDescription="Ссылка на картинку" submitName="Создать"/> 
    <PopupWithForm onClose ={closeAllPopups} isOpen={isEditAvatarPopupOpen ? 'popup_opened' : ''}  name="editing_photo_profile" title="Обновить аватар"  placeholderName="Ссылка на аватар" submitName="Сохранить"/>
    {/* {cards.map(({cardID,...props})=> <Card {...props}/>)} */}
    </div>
  );
}


export default App;
