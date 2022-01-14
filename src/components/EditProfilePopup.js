import React from 'react';
import PopupWithForm from './PopupWithForm'
import {CurrentUserContext} from '../contexts/CurrentUserContext'

const EditProfilePopup = (props) => {
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const currentUser = React.useContext(CurrentUserContext)

  React.useEffect(() => {
    setName(currentUser.name)
    setDescription(currentUser.about)
  }, [currentUser, props.isOpen])

  const nameChangeHandler = e => {
    setName(e.target.value)
  }

  const descriptionChangeHandler = e => {
    setDescription(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.onUpdateUser({
      name,
      about: description
    })
  }


  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      onClose={props.onClose}
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="userName"
        autoComplete="off"
        className="popup__input"
        required
        placeholder="Введите имя"
        minLength="2"
        maxLength="40"
        id="name-input"
        value={name ? name : ""}
        onChange={nameChangeHandler}
      />
      <span className="popup__input-error name-input-error"></span>

      <input
        type="text"
        name="userInfo"
        className="popup__input"
        required
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        id="about-input"
        value={description ? description : ""}
        onChange={descriptionChangeHandler}
      />
      <span className="popup__input-error about-input-error"></span>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
