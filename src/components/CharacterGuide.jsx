import './CharacterGuide.css'

function CharacterGuide({ character, onClose }) {
  if (!character) return null

  return (
    <div className="character-guide">
      <h2>{character.name} Guide</h2>
      <p>{character.guide}</p>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default CharacterGuide
