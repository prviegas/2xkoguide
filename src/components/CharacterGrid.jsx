import CharacterCard from './CharacterCard'
import './CharacterGrid.css'

function CharacterGrid({ characters, onCharacterClick, selectedCharacter }) {
  return (
    <div className="characters-grid">
      {characters.map(character => (
        <CharacterCard
          key={character.id}
          character={character}
          onClick={onCharacterClick}
          isSelected={selectedCharacter?.id === character.id}
        />
      ))}
    </div>
  )
}

export default CharacterGrid
