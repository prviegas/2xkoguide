import './CharacterCard.css'

function CharacterCard({ character, onClick }) {
  return (
    <div className="character-card" onClick={() => onClick(character)}>
      <div className="character-icon">
        <div>
          <img src={`../../public/champion-pics/${character.name}1.png`} alt={character.name} />
        </div>
      </div>
      <h3>{character.name}</h3>
    </div>
  )
}

export default CharacterCard
