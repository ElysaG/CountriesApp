import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  // useEffect pour récupérer les données des pays depuis l'API au montage du composant
  // data: liste des pays, rangeValue: nombre de pays affichés, selectedRadio: filtre par continent
  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,continents"
      )
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {radios.map((continent) => {
          return (
            <li key={continent}>
              <input
                type="radio"
                name="continentRadio"
                checked={continent === selectedRadio} // pour enlever le check qd on appuie sur le button pour Annuler la recherche
                id={continent}
                onChange={(e) => setSelectedRadio(e.target.id)}
              />
              <label htmlFor={continent}>{continent}</label>
            </li>
          );
        })}
      </ul>
      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>
          Annuler la recherche
        </button>
      )}

      <ul>
        {data
          .filter((country) =>
            country.continents.some((continent) =>
              continent.includes(selectedRadio)
            )
          )
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country, index) => {
            return <Card key={index} country={country} />;
          })}
      </ul>
    </div>
  );
};

export default Countries;
