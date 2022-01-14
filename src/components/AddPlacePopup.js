import React from 'react';
import PopupWithForm from './PopupWithForm';

const AddPlacePopup = (props) => {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const linkChangeHandler = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddPlace({
      name,
      link,
    });
  };

  return (
    <PopupWithForm
      title="Новое место"
      name="avatar"
      onClose={props.onClose}
      buttonText="Добавить"
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="title"
        autoComplete="off"
        className="popup__input"
        required
        placeholder="Название"
        minLength="2"
        maxLength="30"
        id="place-name-input"
        value={name}
        onChange={nameChangeHandler}
      />
      <span className="popup__input-error place-name-input-error"></span>

      <input
        type="url"
        name="subtitle"
        className="popup__input"
        required
        placeholder="Ссылка на картинку"
        id="url-input"
        value={link}
        onChange={linkChangeHandler}
      />
      <span className="popup__input-error url-input-error"></span>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
