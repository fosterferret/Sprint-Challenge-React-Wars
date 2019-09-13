import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
display: flex;
flex-direction: column;
  text-align: center;
  margin: 20px 20px;
  width: 500px;
  height: 510px;
  background: linear-gradient(315deg, #f1dfd1 15%, #f6f0ea 95%), url(./bb8.png);
  border-radius: 5px;
  box-shadow: 15px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  transition: 0.4s;
  padding: 20px;

  h2 {
    margin: 12px auto;
    font-size: 2.8rem;
  }

  .logo-container {
    margin: auto 0px;
    margin-bottom: 0px;
  }
`;

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