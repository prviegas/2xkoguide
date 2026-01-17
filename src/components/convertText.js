  /* start of file
  File: src/components/convertText.js
  Purpose: To convert the text numeric notation into clean images for display
  */
 // imageMap.js

export const imageMap = {
  1: '/rawNotation/1.png',
  2: '/rawNotation/2.png',
  3: '/rawNotation/3.png',
  4: '/rawNotation/4.png',
  6: '/rawNotation/6.png',
  7: '/rawNotation/7.png',
  8: '/rawNotation/8.png',
  9: '/rawNotation/9.png',
  L: '/rawNotation/L.png',
  M: '/rawNotation/M.png',
  H: '/rawNotation/H.png',
  S1: '/rawNotation/S1.png',
  S2: '/rawNotation/S2.png',
  T: '/rawNotation/T.png',
};
//Function to convert string to array, for image conversion 1 by 1
export function stringToArray(input) {
  const clean = input.toUpperCase().replace(/\s+/g, "");

  // Supports: "L, M, H" AND "LMH" formats
  return clean.includes(",") ? clean.split(",") : clean.split("");
}
