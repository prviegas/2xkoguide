//Impoprt necessary modules and components
import { useState, useEffect } from 'react'
import './CharacterGuide.css'
import KeyMovesTab from './KeyMovesTab'
import SoloCombosTab from './SoloCombosTab'
import TopPlayersTab from './TopPlayersTab'
import MatchupsTab from './MatchupsTab'
import TeamSynergiesTab from './TeamSynergiesTab'
  /* start of file
  File: src/components/CharacterGuide.jsx
  Purpose: Component to display a character guide with multiple tabs
  Params:
    - character: Object containing character data and tabs
      NOTE: the character object gets its info from Data(folder)/charactersData.js
    - onClose: Function to close the guide
  */
function CharacterGuide({ character, onClose }) {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    setActiveTab(0)
  }, [character])
//checks if NOT character or tabs exist and returns null if so. Safety check. 
  if (!character) return null
  if (!character.tabs || character.tabs.length === 0) return null
//sets current tab based on active tab state
  const currentTab = character.tabs[activeTab] || character.tabs[0]
//Displays the character guide and tabs, getting the name from Data(folder)/charactersData.js
  return (
    <div className="character-guide">
      <div className="guide-header">
        <h2>{character.name} Guide</h2>
        <button className="close-button" onClick={onClose}>✕</button>
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
          <MatchupsTab tabData={currentTab} />
        ) : currentTab.id === 'team_synergies' ? (
          <TeamSynergiesTab tabData={currentTab} />
        ) : (
          <p>{currentTab.content}</p>
        )}
      </div>
    </div>
  )
}
//exports the CharacterGuide on completion
export default CharacterGuide
