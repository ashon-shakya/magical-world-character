import React from "react";
import "../Character.css";
import harryImage from "../assets/images/harry-potter.png";

const CharacterCard = ({ characters }) => {
    return (
        <div className="character-card">
            <div className="character-card-body">
                <img src={harryImage}></img>
            </div>
        </div>
    );
};

export default CharacterCard;
