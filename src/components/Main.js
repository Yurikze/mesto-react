import React from 'react';
import api from '../utils/api';
import addIcon from '../images/add.svg';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Main = (props) => {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext)

  React.useEffect(() => {
    const fetchCards = async () => {
      const res = await api.getInitialCards();
      setCards(res);
    };
    try {
      fetchCards();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id)
    api.likeCard(card._id, isLiked).then(newCard => {
      setCards(state => state.map(c => c._id === card._id ? newCard : c))
      console.log(newCard)
    })
  }

  const cadsList = cards.map((card) => (
    <Card onCardClick={props.onCardClick} key={card._id} card={card} onCardLike={handleCardLike} />
  ));

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__ava-container" onClick={props.onEditAvatar}>
          <img
            src={currentUser && currentUser.avatar}
            alt="Аватар профиля"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser && currentUser.name}</h1>
          <button
            className="profile__edit"
            type="button"
            aria-label="Изменить"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__subtitle">{currentUser && currentUser.about}</p>
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
