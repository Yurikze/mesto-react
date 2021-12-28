import React from "react";
import removeIcon from '../images/delete-icon.svg'

const Card = ({card, onCardClick})=> {

  function handleClick() {
    onCardClick(card)
  }
  return (
    <li className="places__li">
        <img
          src={removeIcon}
          alt="Удалить"
          className="places__delete-icon"
        />
        <img alt={card.name} className="places__img" src={card.link} onClick={handleClick} />
        <div className="places__meta">
          <h2 className="places__title">{card.name}</h2>
          <div className="places__like-container">
            <button className="places__like-btn" type="button"></button>
            <span className="places__like-count">{card.likes.length}</span>
          </div>
        </div>
      </li>
  )
}
export default Card