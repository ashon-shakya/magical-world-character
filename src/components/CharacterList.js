// src/components/CharacterList.js
import React from 'react';

const CharacterList = ({ characters }) => {
  return (
    <div>
      {characters.length > 0 ? (
        characters.map((character) => (
          <div key={character.name}>
            <h2>{character.name}</h2>
            <p>{character.house}</p>
          </div>
        ))
      ) : (
        <p>No characters found</p>
      )}
    </div>
  );
};

export default CharacterList;
