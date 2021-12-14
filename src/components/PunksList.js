import React from "react";
import CollectionCard from "./CollectionCard";
import "./PunksList.css";

function PunksList({ punkListData, setSelectedPunk }) {
  return (
    <div className="punksList">
      <div className="punksList__Wrapper">
        {punkListData.map((punk) => (
          <div
            key={punk.token_id}
            onClick={() => {
              setSelectedPunk(punk.token_id);
            }}
          >
            <CollectionCard
              id={punk.token_id}
              img={punk.image_original_url}
              title={punk.name}
              serNum={punk.id}
              traits={punk.traits[0]?.value}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PunksList;
