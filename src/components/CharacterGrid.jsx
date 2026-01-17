import CharacterCard from './CharacterCard'
import './CharacterGrid.css'

function CharacterGrid({ characters, onCharacterClick, selectedCharacter }) {
  return (
    <div className="characters-grid">
      {characters.map(character => (
        <CharacterCard
          key={character.name}
          character={character}
          onClick={onCharacterClick}
          isSelected={selectedCharacter?.name === character.name}
        />
      ))}
    </div>
  )
}

export default CharacterGrid
