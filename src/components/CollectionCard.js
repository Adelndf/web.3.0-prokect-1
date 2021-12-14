import React from "react";
import "./CollectionCard.css";
import Weth from "../images/weth.png";

function CollectionCard({ id, img, title, serNum, traits, prop }) {
  return (
    <div className="CollectionCard">
      <img src={img} alt="Punk-Img" />
      <div className="CollectionCard__info">
        <div className="CollectionCard__header">
          <h2 className="CollectionCard__index">.#{id}</h2>
          <h2 className="CollectionCard__title">
            {title} <span>#{serNum}</span>
          </h2>
        </div>
        <div className="CollectionCard__props">
          <h3>Properties:</h3>
          <p>{prop ? prop : "none"}</p>
        </div>
        <div className="CollectionCard__price">
          <img src={Weth} alt="Crypto" className="CollectionCard__priceImg" />
          <p className="CollectionCard__priceNum">{traits}</p>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
