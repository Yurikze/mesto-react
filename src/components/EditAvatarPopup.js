import React from 'react';
import PopupWithForm from './PopupWithForm';

const EditAvatarPopup = (props) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.value = '';
  }, [props.isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  };

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Обновить"
      onSubmit={handleSubmit}
    >
      <input
        ref={inputRef}
        type="url"
        name="avaUrl"
        className="popup__input"
        required
        placeholder="Ссылка на картинку"
        id="ava-url-input"
      />
      <span className="popup__input-error ava-url-input-error"></span>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
