import React from 'react';


function ImagePopup(){
    return(
        <div className="popup popup_type_image" name="popupImage">
        <button type="button" className="popup__close" aria-label="закрыть попап"></button>
        <img className='popup__image' src="#" alt=""/>
        <p className="popup__caption"> </p>
    </div>
    )
}


export default ImagePopup;