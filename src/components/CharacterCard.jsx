import './CharacterCard.css'

function CharacterCard({ character, onClick }) {
  return (
    <div className="character-card" onClick={() => onClick(character)}>
      <div className="character-icon">
        {character.name[0]}
      </div>
      <h3>{character.name}</h3>
    </div>
  )
}

export default CharacterCard
