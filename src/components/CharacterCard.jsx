import './CharacterCard.css'

function CharacterCard({ character, onClick, image, isSelected }) {
  return (
    <div className={`character-card ${isSelected ? 'selected' : ''}`} onClick={() => onClick(character)}>
      <div className="character-icon">
        <div>
          <img src={`./champion-pics/low-res/${character.name.toLowerCase()}1.png`} alt={character.name} />
        </div>
      </div>
      <h3>{character.name}</h3>
    </div>
  )
}

export default CharacterCard
