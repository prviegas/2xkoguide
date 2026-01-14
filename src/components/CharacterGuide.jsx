import { useState, useEffect } from 'react'
import './CharacterGuide.css'

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
          <>
            <p>{currentTab.description}</p>
            <table className="moves-table">
              <thead>
                <tr>
                  <th>Numeric Notation</th>
                  <th>2XKO Notation</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {currentTab.moves.map((move, index) => (
                  <tr key={index}>
                    <td className="numeric-notation-cell">{move.numericNotation}</td>
                    <td className="notation-cell">{move.notation}</td>
                    <td className="description-cell">{move.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <p>{currentTab.content}</p>
        )}
      </div>
    </div>
  )
}

export default CharacterGuide
