// src/App.js
import React, { useState } from "react";
import CharacterInput from "./components/CharacterInput";
import CharacterList from "./components/CharacterList";
import "./App.css";

const characters = [
    { name: "Harry Potter", house: "Gryffindor" },
    { name: "Hermione Granger", house: "Gryffindor" },
    { name: "Ron Weasley", house: "Gryffindor" },
    { name: "Draco Malfoy", house: "Slytherin" },
    // Add more characters as needed
];

function App() {
    const [filteredCharacters, setFilteredCharacters] = useState(characters);

    const handleSearch = (query) => {
        const filtered = characters.filter((character) =>
            character.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCharacters(filtered);
    };

    return (
        <div className="App">
            <h1>Magical World Characters</h1>
            <CharacterInput onSearch={handleSearch} />
            <CharacterList characters={filteredCharacters} />
        </div>
    );
}

export default App;
