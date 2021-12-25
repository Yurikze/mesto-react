import React from 'react';
import Popup from './Popup';

const PopupWithForm = (props) => {
  return (
    <Popup isOpen={props.isOpen} name={props.name} onClose={props.onClose}>
      <div className="popup__content">
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name}>
          {props.children}
          <button type="submit" className="popup__submit">
            {props.buttonText}
          </button>
        </form>
      </div>
    </Popup>
  );
};

export default PopupWithForm;
