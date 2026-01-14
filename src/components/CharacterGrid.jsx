import CharacterCard from './CharacterCard'
import './CharacterGrid.css'

function CharacterGrid({ characters, onCharacterClick }) {
  return (
    <div className="characters-grid">
      {characters.map(character => (
        <CharacterCard
          key={character.id}
          character={character}
          onClick={onCharacterClick}
        />
      ))}
    </div>
  )
}

export default CharacterGrid
