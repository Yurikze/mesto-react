import React from 'react';

const Form = ({ name, children, buttonText, onSubmit }) => {
  return (
    <form className="popup__form" name={name} onSubmit={onSubmit}>
      {children}
      <button type="submit" className="popup__submit">
        {buttonText}
      </button>
    </form>
  );
};

export default Form;
