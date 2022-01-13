import React from 'react';
import {LoadingContext} from '../contexts/LoadingContext'
import Loader from './Loader/Loader'

const Form = ({ name, children, buttonText, onSubmit }) => {
  const isLoading = React.useContext(LoadingContext)
  return (
    <form className="popup__form" name={name} onSubmit={onSubmit}>
      {children}
      <button type="submit" className="popup__submit">
        {isLoading ? <Loader /> : buttonText}
      </button>
    </form>
  );
};

export default Form;
