import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Avatar = (props) => {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className="profile__ava-container" onClick={props.onClick}>
      <img
        src={currentUser && currentUser.avatar}
        alt="Аватар профиля"
        className="profile__avatar"
      />
    </div>
  );
};

export default Avatar;
