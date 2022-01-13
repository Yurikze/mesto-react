import React from 'react';
import PopupWithForm from './PopupWithForm';

const RemovePlacePopup = (props) => {

  const handleSubmit = e => {
    e.preventDefault()
    props.onDeleteCard(props.card)
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="delete"
      onClose={props.onClose}
      isOpen={props.isOpen}
      buttonText="Да"
      onSubmit={handleSubmit}
    ></PopupWithForm>
  );
};

export default RemovePlacePopup;
