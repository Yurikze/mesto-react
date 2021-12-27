import React from 'react';
import Popup from './Popup';
import Form from './Form';

const PopupWithForm = (props) => {
  return (
    <Popup isOpen={props.isOpen} name={props.name} onClose={props.onClose}>
      <div className="popup__content">
        <h2 className="popup__title">{props.title}</h2>
        <Form name={props.name} buttonText={props.buttonText}>
          {props.children}
        </Form>
      </div>
    </Popup>
  );
};

export default PopupWithForm;
