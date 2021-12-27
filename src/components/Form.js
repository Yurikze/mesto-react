import React from 'react';

const Form = ({ name, children, buttonText }) => {
  return (
    <form className="popup__form" name={name}>
      {children}
      <button type="submit" className="popup__submit">
        {buttonText}
      </button>
    </form>
  );
};

export default Form;
