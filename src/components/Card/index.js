import React from "react";
import classnames from "classnames";
import cardBack from "../../assets/images/card-back.png";
import "./Card.scss";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={cardBack} alt="Campeonato Brasileiro" />
      </div>
      <div className="card-face card-back-face">
        <img src={card.image} alt={card.type} />
      </div>
    </div>
  );
};

export default Card;