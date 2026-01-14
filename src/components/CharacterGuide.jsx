import { useState } from 'react'
import './CharacterGuide.css'

function CharacterGuide({ character, onClose }) {
  const [activeTab, setActiveTab] = useState(0)

  if (!character) return null

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
        <h3>{character.tabs[activeTab].title}</h3>
        <p>{character.tabs[activeTab].content}</p>
      </div>
    </div>
  )
}

export default CharacterGuide
