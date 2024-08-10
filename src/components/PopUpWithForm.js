import React from "react";

export default function PopUpWithForm({
  open,
  handleClose,
  classId,
  title,
  children,
  onSubmit,
  buttonTitle,
}) {
  return (
    <div className={`popup ${classId} ${open ? "popup_opened" : ""}`}>
      <form className="popup__form popup__form_profile" onSubmit={onSubmit}>
        <fieldset className="popup__info">
          <button className="popup__close" onClick={handleClose}></button>
          <h3 className="popup__title">{title}</h3>
          {children}
          <button type="submit" className="popup__button">
            {buttonTitle}
          </button>
        </fieldset>
      </form>
    </div>
  );
}
