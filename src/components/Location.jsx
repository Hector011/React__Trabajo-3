import React from "react";
import "./styles/Locations.css";

const Location = ({ location }) => {
  return (
    <div>
      <article className="location__info">
        <div className="location__container">
          <h2 className="text__name">{location?.name}</h2>
          <ul className="location__text">
            <li className="location__li">
              Type: <span className="location__span">{location?.type}</span>
            </li>
            <li className="location__li">
              Dimension:{" "}
              <span className="location__span">{location?.dimension}</span>
            </li>
            <li className="location__li">
              Population:{" "}
              <span className="location__span">
                {location?.residents.length}
              </span>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default Location;
