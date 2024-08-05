import React from "react";
import UserContext from "./UserContext";

export default function Card({
  name,
  link,
  handleClick,
  handleDeleteCard,
  handleAddlike,
  likes,
  _id,
  owner,
}) {
  const user = React.useContext(UserContext);

  const hasLike = () => {
    return likes.some((like) => like._id === this._user._id);
  };

  const cardOwner = () => {
    return owner._id === user._id;
  };

  const click = () => {
    handleClick({ name, link, _id });
  };

  const deleteCard = () => {
    handleDeleteCard({ _id });
  };

  function handleLike() {
    handleAddlike({ _id }, hasLike());
  }

  return (
    <div className="template" id="template">
      <figure className="elements__card">
        <img
          className="elements__image"
          alt={name}
          src={link}
          onClick={click}
        />
        {cardOwner() && (
          <button
            type="button"
            className="elements__image-delete-btn"
            onClick={deleteCard}
          ></button>
        )}
        <figcaption className="elements__image-description">
          <p className="elements__image-description-title">{name}</p>
          <button
            className={`elements__image-like-btn ${
              hasLike() ? "elements__image-like-btn-active" : ""
            }`}
            type="button"
            onClick={handleLike}
          >
            <p className="elements__counter">{likes.length}</p>
          </button>
        </figcaption>
      </figure>
    </div>
  );
}
