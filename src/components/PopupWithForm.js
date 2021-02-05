import React from 'react';

function PopupWithForm(props) {

  return (
    <form
      className={`popup popup_type_${props.name} ${props.isOpen}`}
      name={props.name}
      noValidate
      onSubmit={props.handleSubmit}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          aria-label="закрыть попап"
          onClick={props.onClose}
        />
        <h2 className="popup__title">{props.title}</h2>
        <input
          type="text"
          value={props.firstInputValue}
          id="profile-name"
          name="popup__name"
          className="popup__input popup__item_profile_name"
          minLength="2"
          maxLength="40"
          placeholder={props.placeholderName}
          required
          onChange={(e)=>{
           props.handleChange(e);       
          }
          }
          // onChange={props.handleChange}
        />
        <span className="popup__input-error" id="profile-name-error" />
        {props.isSecondInputActive ? (
          <>
            <input
              type="text"
              value={props.secondInputValue}
              id="profile-job"
              name="popup__description"
              className="popup__input popup__item_profile_job"
              minLength="2"
              maxLength="200"
              placeholder={props.placeholderDescription}
              required
            />
            <span className="popup__input-error" id="profile-job-error" />
          </>
        ) : (
          ''
        )}
        <button type="submit" className="popup__submit popup__profile_submit" >
          {props.submitName}
        </button>
      </div>
    </form>
  );
}

export default PopupWithForm;
