import React from "react";

function PopupWithForm(props) {

  return (
    <form
      className={`popup  ${props.isOpen}`}
      name={props.name}
      noValidate
      onSubmit={props.handleSubmit}
    >
      <div className={`popup__container popup_type_${props.name}`}>
        <button
          type="button"
          className="popup__close"
          aria-label="закрыть попап"
          onClick={props.onClose}
        />
        <h2 className="popup__title">{props.title}</h2>
           {props.children} 
        <button type="submit" className="popup__submit popup__profile_submit" >
          {props.submitName}
        </button>
      </div>
    </form>
  );
}

export default PopupWithForm;
