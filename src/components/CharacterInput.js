// src/components/CharacterInput.js
import React, { useState } from "react";

const CharacterInput = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for a character"
                value={inputValue}
                onChange={handleChange}
            />
        </div>
    );
};

export default CharacterInput;
