import React from 'react';


function ImagePopup(props){
    return(
    <div className={`popup popup_type_image ${props.isOpen}`} name="popupImage">
        <button type="button" className="popup__close" aria-label="закрыть попап" onClick={props.onClose}></button>
        <img className='popup__image' src={props.img} alt=""/>
        <p className="popup__caption"> </p>
    </div>
    )
}


export default ImagePopup;