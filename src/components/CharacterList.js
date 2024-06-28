// src/components/CharacterList.js
import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters }) => {
    const handleCharacterClick = (character) => {
        console.log(character);
    };

    return (
        <div>
            {characters.length > 0 ? (
                characters.map((character) => (
                    <div
                        key={character.name}
                        onClick={() => {
                            handleCharacterClick(character);
                        }}
                    >
                        <CharacterCard />

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
