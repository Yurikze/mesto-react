import React from 'react';

const ImagePopup = (props) => {
  return (
    <div className={`popup popup-image ${props.isOpen && 'popup_is-visible'}`}>
      <div className="popup-image__content">
        <button
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть"
          data-delete
          onClick={props.onClose}
        ></button>
        <img src={props.card ? props.card.link : ''} alt="" className="popup-image__img" />
        <p className="popup-image__subtitle">{props.card ? props.card.name : ''}</p>
      </div>
    </div>
  );
};

export default ImagePopup;
