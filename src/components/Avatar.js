import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Avatar = (props) => {
  const [avatar, setAvatar] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setAvatar(currentUser.avatar)
  }, [currentUser])

  return (
    <div className="profile__ava-container" onClick={props.onClick}>
      <img
        src={avatar}
        alt="Аватар профиля"
        className="profile__avatar"
      />
    </div>
  );
};

export default Avatar;
