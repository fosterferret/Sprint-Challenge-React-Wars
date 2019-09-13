import React from "react";
import styled from "styled-components";

const Character = ({
    name,
    height,
    hairColor,
    skinColor,
    mass,
    birthYear,
    gender
  }) => {
    return (
      <StyledCharacter className="character-container">
        <div>
          <h2>{name.toUpperCase()}</h2>
          <p>
            <strong>Mass:</strong> {mass === "unknown"? "N/A" : `${mass} Kg`}
          </p>
          <p>
            <strong>Gender:</strong> {gender.toUpperCase()}
          </p>
          <p>
            <strong>Birth Year:</strong> {birthYear.toUpperCase()}
          </p>
          <p>
            <strong>Skin Color:</strong> {skinColor.toUpperCase()}
          </p>
          <p>
            <strong>Hair Color:</strong> {hairColor.toUpperCase()}
          </p>
          <p>
            <strong>Height:</strong> {height.toUpperCase()}cm
          </p>
        </div>
        <div className="logo-container">
          <img
            className="card-logo"
            src={require("./logo.png")}
            alt="star-wars-logo"
          ></img>
        </div>
      </StyledCharacter>
    );
  };
  
  export default Character;