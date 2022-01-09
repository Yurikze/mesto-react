import React from 'react';

const Popup = (props) => {
  React.useEffect(() => {
    const closeByEsc = (e) => {
      if (!props.isOpen) return;
      if (e.key === 'Escape') {
        props.onClose();
      }
    };
    document.addEventListener('keydown', closeByEsc);
    return () => {
      document.removeEventListener('keydown', closeByEsc);
    };
  }, [props]);

  const handleOverlayClose = (e) => {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  };

  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen && 'popup_is-visible'
      }`}
      onClick={handleOverlayClose}
    >
      {props.children}
    </div>
  );
};

export default Popup;
