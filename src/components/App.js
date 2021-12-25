import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleRemoveCardClick = () => {
    setIsDeletePopupOpen(true)
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <ImagePopup
        isOpen={isImagePopupOpen}
        card={selectedCard}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Обновить"
      >
        <input
          type="url"
          name="avaUrl"
          className="popup__input"
          required
          placeholder="Ссылка на картинку"
          id="ava-url-input"
        />
        <span className="popup__input-error ava-url-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Редактировать профиль"
        name="avatar"
        onClose={closeAllPopups}
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
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
        />
        <span className="popup__input-error about-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="avatar"
        onClose={closeAllPopups}
        buttonText="Добавить"
        isOpen={isAddPlacePopupOpen}
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
        />
        <span className="popup__input-error place-name-input-error"></span>

        <input
          type="url"
          name="subtitle"
          className="popup__input"
          required
          placeholder="Ссылка на картинку"
          id="url-input"
        />
      </PopupWithForm>
      <PopupWithForm
        title="Вы уверены?"
        name="delete"
        onClose={closeAllPopups}
        isOpen={isDeletePopupOpen}
        buttonText="Да"
      ></PopupWithForm>
    </div>
  );
}

export default App;
