import React from 'react';
import removeIcon from '../images/delete-icon.svg';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Card = ({ card, onCardClick, onCardLike }) => {

  // const [isLiked, setIsLiked] = React.useState(false)

  const currentUser = React.useContext(CurrentUserContext)

  // React.useEffect(() => {
  //   setIsLiked(() => card.likes.some(i => i._id === currentUser._id))
  // }, [currentUser])

  const isOwn = card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = (
    `card__delete-button ${isOwn ? 'places__delete-icon_visible' : 'places__delete-icon_hidden'}`
  ); 


  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  return (
    <li className="places__li">
      <img src={removeIcon} alt="Удалить" className={cardDeleteButtonClassName} />
      <img
        alt={card.name}
        className="places__img"
        src={card.link}
        onClick={handleClick}
      />
      <div className="places__meta">
        <h2 className="places__title">{card.name}</h2>
        <div className="places__like-container">
          <button
            className="places__like-btn"
            type="button"
            onClick={handleLikeClick}
          ></button>
          <span className="places__like-count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
};
export default Card;
