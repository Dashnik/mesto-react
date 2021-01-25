import React from 'react';


function ImagePopup({card,onClose}){

    return(
    <div className={`popup popup_type_image ${card.isOpen ? 'popup_opened' : ''}`} name="popupImage">
        <button type="button" className="popup__close" aria-label="закрыть попап" onClick={onClose}></button>
        <img className='popup__image' src={card.imageSrc} alt={card.name}/>
        <p className="popup__caption">{card.name} </p>
    </div>
    )
}


export default ImagePopup;