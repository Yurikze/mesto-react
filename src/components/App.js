import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext, user } from '../contexts/CurrentUserContext';
import EditAvatarPopup from './EditAvatarPopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState(user);

  React.useEffect(() => {
    async function fetchUserData() {
      const userData = await api.getUserInfo();
      setCurrentUser(userData);
    }
    try {
      fetchUserData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleUpdateUser = (userData) => {
    api
      .updateUserInfo(userData)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateAvatar = ({ avatar }) => {
    api
      .updateAvatar(avatar)
      .then((res) => {
        setCurrentUser(user => {
          return {
            ...user,
            avatar: res.avatar
          }
        })
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

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
    setIsDeletePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
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
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
