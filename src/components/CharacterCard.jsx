import './CharacterCard.css'

function CharacterCard({ character, onClick, image }) {
  return (
    <div className="character-card" onClick={() => onClick(character)}>
      <div className="character-icon">
        <div>
          <img src={image} alt={character.name} />
        </div>
      </div>
      <h3>{character.name}</h3>
    </div>
  )
}

export default CharacterCard
