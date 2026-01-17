/*
 * Character Data - Re-exported from individual character files
 * 
 * Each character data is contained within its own file in the ./characters folder.
 * Each character object has an id, name, and tabs array.
 * Each tab object contains id, title, description, and content or moves array.
 * 
 * Parameters Defined: 
 * id: Unique identifier for the character or tab under the character
 * title: Title of the tab section
 * description: Array of strings providing an overview or key points about the character or tab section. Also describes moves. 
 * numericNotation: Pure string version of the move notation
 * notation: Short notation label for the move 
 * notationImage: 2xKo styled images used to make the notation more visually appealing
 * video: Path to videos
 * content: String content for text-based tabs(placeholder). Can be replaced by correct section: moves, teams, etc
 */

// Re-export everything from the characters folder
export { charactersData, ahri, braum, darius, ekko, illaoi, jinx, vi, yasuo } from './characters/index.js';
