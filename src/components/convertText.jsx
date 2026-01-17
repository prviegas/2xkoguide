 /* start of file
  File: src/components/convertText.jsx
  Purpose: 
  */
import { useState } from "react";
import { imageMap, stringToArray } from "./convertText.js";
import "./convertText.css";
import "./CharacterCard.jsx";
// Component to render notation input and images

export default function NotationRenderer({ textNotation, character }) {
  const imageNotation = stringToArray(textNotation);

  return (
    <div className="notation">
      {/* TABLE 1 consumes textNotation */}

      {/* TABLE 2 consumes imageNotation */}
      <div className="image-row">
        {imageNotation.map((letter, index) =>
          imageMap[letter] ? (
            <img
              key={index}
              src={imageMap[letter]}
              alt={letter}
              className="mapped-image"
            />
          ) : null
        )}
      </div>
    </div>
  );
}