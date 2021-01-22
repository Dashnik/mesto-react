import React from 'react';
import trashLogo from '../images/Trash.svg';

function Card({cardID,imageSrc,imageAlt,cardTitle,cardLikes}){

    function handleClick() {
        props.onCardClick(props.card);
    }

    return(
        <div className="card" id={cardID}> 
            <img className='card__image' src={imageSrc} alt={imageAlt} onClick={handleClick}/>
            <img className="card__trash" src={trashLogo} alt="Иконка мусорки"/>
            <div className="card__body">
                <h2 className="card__title">{cardTitle}</h2>
                <div className="card__likes">
                    <button type="button" className=" card__like"></button>
                    <p className="card__counter-like">{cardLikes}</p>
                </div>
            </div>       
        </div>
    )
}

export default Card;