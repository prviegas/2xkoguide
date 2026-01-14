import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import CharacterGrid from './components/CharacterGrid'
import CharacterGuide from './components/CharacterGuide'
import { charactersData } from './data/charactersData'
import logo from './img/2XKO-Outline-logo-external.png'
import ImpoprtantMessageBar from './components/ImpoprtantMessageBar'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  const filteredCharacters = charactersData.filter(char =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character)
    setSearchTerm('')
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    setSelectedCharacter(null)
  }

  const handleCloseGuide = () => {
    setSelectedCharacter(null)
  }

  return (
    <div className="app">
      {<ImpoprtantMessageBar/>}
      <div className="logo-container">
        <img src={logo} alt="2XKO Logo" className="logo" />
      </div>
      <h1>Character Guide</h1>
      
      <SearchBar value={searchTerm} onChange={handleSearch} />
      
      <CharacterGrid 
        characters={filteredCharacters} 
        onCharacterClick={handleCharacterClick} 
      />

      <CharacterGuide 
        character={selectedCharacter} 
        onClose={handleCloseGuide} 
      />
    </div>
  )
}

export default App
