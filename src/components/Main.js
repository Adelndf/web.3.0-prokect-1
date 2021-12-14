import React, { useEffect, useState } from "react";
import "./Main.css";
import Instagram from "../images/instagram.png";
import Twettir from "../images/twitter.png";
import More from "../images/more.png";

function Main({ selectedPunk, punkListData }) {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="main__icons">
        <img src={Instagram} alt="Social" />
        <img src={Twettir} alt="Social" />
        <img src={More} alt="Social" />
      </div>
      <div className="main__img">
        <img src={activePunk.image_original_url} alt="PunkImg" />
      </div>
      <div className="main__info">
        <h1 className="main__title">
          <span>.{activePunk.token_id}</span> {activePunk.name}
        </h1>
        <h2 className="main__id">#{activePunk.id}</h2>
        <div className="main__owner">
          <div className="main__ownerImg">
            <img src={activePunk.owner.profile_img_url} alt="ownerImg" />
          </div>
          <div className="main__ownerText">
            <p>{activePunk.owner.address}</p>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/x.3dx/"
              >
                @x.3dx
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
