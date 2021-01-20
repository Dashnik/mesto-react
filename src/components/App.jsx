//import './App.css';
import React from 'react';
import './Header.jsx';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';


function App(props) {
  const[isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false);
  const[isAddPlacePopupOpen, setPlacePopupOpen] = React.useState(false);
  const[isEditAvatarPopupOpen , setAvatarPopupOpen] = React.useState(false);


   function handleEditProfileClick(){
    setProfilePopupOpen(!isEditProfilePopupOpen);
   }

   const handleAddPlaceClick = ()=>{
     setPlacePopupOpen(!isAddPlacePopupOpen); 
     isOpen();
   }

   function handleEditAvatarClick(){
    setAvatarPopupOpen(!isEditAvatarPopupOpen);
   }

   const isOpen = () => {

    handleAddPlaceClick ? 'hi' : 'bye'

   }

  return (
    <div className="page">
    <Header/>
    <Main onAddPlace={handleAddPlaceClick} />
    <Footer/>
 
    </div>
  );
}


export default App;
