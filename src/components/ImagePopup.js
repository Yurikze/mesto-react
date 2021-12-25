import React from 'react';
import Popup from './Popup';

const ImagePopup = ({isOpen, onClose, card}) => {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className="popup-image__content">
        <button
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть"
          data-delete
          onClick={onClose}
        ></button>
        <img
          src={card ? card.link : ''}
          alt={card ? card.name : ''}
          className="popup-image__img"
        />
        <p className="popup-image__subtitle">
          {card ? card.name : ''}
        </p>
      </div>
    </Popup>
  );
};

export default ImagePopup;
