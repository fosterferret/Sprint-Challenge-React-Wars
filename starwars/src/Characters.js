import React from "react";
import Character from "./Character";

const Characters = ({ characters }) => {
    return (
      <div className="characters-container">
        {characters.map((character, index) => {
          return (
            <Character
              key={index}
              name={character.name}
              gender = {character.gender}
              height={character.height}
              mass={character.mass}
              hairColor={character.hair_color}
              skinColor={character.skin_color}
              birthYear={character.birth_year}
            />
          );
        })}
      </div>
    );
  };
  
  export default Characters