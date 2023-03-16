import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/residentInfo.css";

const ResidentInfo = ({ url }) => {
  const [resident, setResident] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setResident(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="card">
      <header className="card__header">
        <div className="img__container">
          <img className="avatar" src={resident?.image} alt="" />
          <div className="circle__container">
            <div className={`card__circle ${resident?.status}`}></div>
            <p className="card__circle-label">{resident?.status}</p>
          </div>
        </div>
      </header>
      <section className="card__body">
        <h3 className="card__name">{resident?.name}</h3>
        <ul className="card__list">
          <hr />
          <li>
            <span className="card__item">Species: </span>
            <span>{resident?.species}</span>
          </li>
          <li>
            <span className="card__item">Origin: </span>
            <span>{resident?.origin.name}</span>
          </li>
          <li>
            <span className="card__item">Episodes where appear: </span>
            <span>{resident?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentInfo;
