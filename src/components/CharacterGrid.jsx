import CharacterCard from './CharacterCard'
import './CharacterGrid.css'
import ahriImage from '../../public/champion-pics/ahri1.png'
import braumImage from '../../public/champion-pics/braum1.png'
import dariusImage from '../../public/champion-pics/darius1.png'
import ekkoImage from '../../public/champion-pics/ekko1.png'
import illaoiImage from '../../public/champion-pics/illaoi1.png'
import jinxImage from '../../public/champion-pics/jinx1.png'
import viImage from '../../public/champion-pics/vi1.png'
import yasuoImage from '../../public/champion-pics/yasuo1.png'


function CharacterGrid({ characters, onCharacterClick }) {
  const getCharacterImage = (name) => {
    switch (name.toLowerCase()) {
      case 'ahri':
        return ahriImage
      case 'braum':
        return braumImage
      case 'darius':
        return dariusImage
      case 'ekko':
        return ekkoImage
      case 'illaoi':
        return illaoiImage
      case 'jinx':
        return jinxImage
      case 'vi':
        return viImage
      case 'yasuo':
        return yasuoImage
      default:
        return null
    }
  }

  return (
    <div className="characters-grid">
      {characters.map(character => (
        <CharacterCard
          key={character.id}
          character={character}
          onClick={onCharacterClick}
          image={getCharacterImage(character.name)}
        />
      ))}
    </div>
  )
}

export default CharacterGrid
