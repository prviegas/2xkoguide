import { useState, useEffect } from 'react'
import './CharacterGuide.css'
import KeyMovesTab from './KeyMovesTab'
import TopPlayersTab from './TopPlayersTab'
import MatchupsTab from './MatchupsTab'

function CharacterGuide({ character, onClose }) {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    setActiveTab(0)
  }, [character])

  if (!character) return null
  if (!character.tabs || character.tabs.length === 0) return null

  const currentTab = character.tabs[activeTab] || character.tabs[0]

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
        ) : currentTab.id === 'top_players' ? (
          <TopPlayersTab tabData={currentTab} />
        ) : currentTab.id === 'matchups' ? (
          <MatchupsTab tabData={currentTab} />
        ) : (
          <p>{currentTab.content}</p>
        )}
      </div>
    </div>
  )
}

export default CharacterGuide
