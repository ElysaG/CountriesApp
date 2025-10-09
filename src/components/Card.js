import React from "react";

// Affiche une carte d'un pays avec drapeau, nom, capitale et population
const Card = ({ country }) => {
  return (
    <li className="card">
      <img src={country.flags.png} alt={"drapeau " + country.name.common} />
      <div className="infos">
        <h2>{country.name.common}</h2>
        <h4>{country.capital}</h4>
        <p>Pop. {country.population.toLocaleString()}</p>
      </div>
    </li>
  );
};

export default Card;
