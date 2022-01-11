import React from 'react';
import addIcon from '../images/add.svg';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';

const Main = (props) => {
  const currentUser = React.useContext(CurrentUserContext);

  const cadsList = props.cards.map((card) => (
    <Card
      onCardClick={props.onCardClick}
      key={card._id}
      card={card}
      onCardLike={props.onCardLike}
      onCardDelete={props.onCardDelete}
    />
  ));

  return (
    <main className="main">
      <section className="profile">
        <Avatar onClick={props.onEditAvatar} />
        <div className="profile__info">
          <h1 className="profile__title">{currentUser && currentUser.name}</h1>
          <button
            className="profile__edit"
            type="button"
            aria-label="Изменить"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__subtitle">
            {currentUser && currentUser.about}
          </p>
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
