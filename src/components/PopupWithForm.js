import React from "react";

const PopupWithForm = (props) => {

  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_is-visible'}`}>
        <div className="popup__content">
          <button
            className="popup__close-btn"
            type="button"
            aria-label="Закрыть"
            data-delete
            onClick={props.onClose}
          ></button>
          <h2 className="popup__title">{props.title}</h2>
          <form className="popup__form" name={props.name} noValidate>
            {props.children}

            <button type="submit" className="popup__submit">Сохранить</button>
          </form>
        </div>
      </div>
  )
}

export default PopupWithForm