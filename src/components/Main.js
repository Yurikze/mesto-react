import React from 'react';
import api from '../utils/api';
import addIcon from '../images/add.svg';
import Card from './Card'


const Main = (props) => {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    const fetchUserData = async () => {
      const res = await api.getUserInfo();
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    };
    try {
      fetchUserData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  React.useEffect(() => {
    const fetchCards = async () => {
      const res = await api.getInitialCards()
      setCards(res)
    }
    try {
      fetchCards()
    } catch (error) {
      console.log(error)
    }
  }, [])

  const cadsList = cards.map(card => <Card onCardClick={props.onCardClick} key={card._id} card={card} />)

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__ava-container" onClick={props.onEditAvatar}>
          <img
            src={userAvatar}
            alt="Аватар профиля"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button
            className="profile__edit"
            type="button"
            aria-label="Изменить"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          className="profile__add-btn"
          type="button"
          onClick={props.onAddPlace}
        >
          <img
            src={addIcon}
            alt="Кнопка добавить"
            className="profile__add-icon"
          />
        </button>
      </section>

      <section className="places">
        <ul className="places__list">{cadsList}</ul>
      </section>
    </main>
  );
};

export default Main;
