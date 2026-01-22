//Impoprt necessary modules and components
import { useState, useEffect, forwardRef } from 'react'
import './CharacterGuide.css'
import KeyMovesTab from './KeyMovesTab'
import SoloCombosTab from './SoloCombosTab'
import TopPlayersTab from './TopPlayersTab'
import MatchupsTab from './MatchupsTab'
import TeamSynergiesTab from './TeamSynergiesTab'
import GuidesTab from './GuidesTab'
  /* start of file
  File: src/components/CharacterGuide.jsx
  Purpose: Component to display a character guide with multiple tabs
  Params:
    - character: Object containing character data and tabs
      NOTE: the character object gets its info from Data(folder)/charactersData.js
    - onClose: Function to close the guide
  */

// Helper function to get the appropriate hero image offset based on screen width
const getHeroImageOffset = (heroImageOffset, isMobile) => {
  if (typeof heroImageOffset === 'object' && heroImageOffset !== null) {
    return isMobile ? (heroImageOffset.mobile ?? 0) : (heroImageOffset.desktop ?? 0)
  }
  // Fallback for legacy single value format
  return heroImageOffset || 0
}

const CharacterGuide = forwardRef(({ character, onClose }, ref) => {
  const [activeTab, setActiveTab] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800)

  useEffect(() => {
    setActiveTab(0)
  }, [character])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
//checks if NOT character or tabs exist and returns null if so. Safety check. 
  if (!character) return null
  if (!character.tabs || character.tabs.length === 0) return null
//sets current tab based on active tab state
  const currentTab = character.tabs[activeTab] || character.tabs[0]
//Displays the character guide and tabs, getting the name from Data(folder)/charactersData.js
  return (
    <div ref={ref} className="character-guide">
      <div className="hero-banner">
        <div className="hero-image-container">
          <img 
            key={character.name}
            src={`./champion-pics/${character.name.toLowerCase()}2.png`} 
            alt={character.name}
            className="hero-character-image"
            style={{ objectPosition: `center ${getHeroImageOffset(character.heroImageOffset, isMobile)}px` }}
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h2>{character.name.toUpperCase()}</h2>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>
      </div>

      <div className="tabs">
        {character.tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <h3>{currentTab.title}</h3>
        {currentTab.id === 'key_moves' ? (
          <KeyMovesTab character={character} tabData={currentTab} />
        ) : currentTab.id === 'important_solo_combos' ? (
          <SoloCombosTab character={character} tabData={currentTab} />
        ) : currentTab.id === 'top_players' ? (
          <TopPlayersTab tabData={currentTab} />
        ) : currentTab.id === 'matchups' ? (
          <MatchupsTab tabData={currentTab} currentCharacter={character.name} />
        ) : currentTab.id === 'team_synergies' ? (
          <TeamSynergiesTab tabData={currentTab} />
        ) : currentTab.id === 'guides' ? (
          <GuidesTab tabData={currentTab} />
        ) : (
          <p>{currentTab.content}</p>
        )}
      </div>
    </div>
  )
})
//exports the CharacterGuide on completion
export default CharacterGuide
