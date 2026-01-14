import { useState, useEffect } from 'react'
import './CharacterGuide.css'

function CharacterGuide({ character, onClose }) {
  const [activeTab, setActiveTab] = useState(0)
  const [videoModal, setVideoModal] = useState({ isOpen: false, videoUrl: '', moveName: '', numericNotation: '' })

  useEffect(() => {
    setActiveTab(0)
  }, [character])

  const openVideoModal = (videoUrl, moveName, numericNotation) => {
    setVideoModal({ isOpen: true, videoUrl, moveName, numericNotation })
  }

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, videoUrl: '', moveName: '', numericNotation: '' })
  }

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
            {currentTab.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <table className="moves-table">
              <thead>
                <tr>
                  <th>Numeric Notation</th>
                  <th>2XKO Notation</th>
                  <th>Description</th>
                  <th>Video</th>
                </tr>
              </thead>
              <tbody>
                {currentTab.moves.map((move, index) => (
                  <tr key={index}>
                    <td className="numeric-notation-cell">{move.numericNotation}</td>
                    <td className="notation-cell">
                      <img src={move.notationImage} alt={move.notation} className="notation-image" />
                    </td>
                    <td className="description-cell">{move.description}</td>
                    <td className="video-cell">
                      <button 
                        className="video-icon-btn"
                        onClick={() => openVideoModal(move.video, move.notation, move.numericNotation)}
                        title="View move demonstration"
                      >
                        <i className="fas fa-play-circle"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <p>{currentTab.content}</p>
        )}
      </div>

      {videoModal.isOpen && (
        <div className="video-modal-overlay" onClick={closeVideoModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal-header">
              <h3>{character.name} - {videoModal.numericNotation}</h3>
              <button className="close-button" onClick={closeVideoModal}>✕</button>
            </div>
            <video 
              controls 
              autoPlay 
              loop
              className="video-player"
              key={videoModal.videoUrl}
            >
              <source src={videoModal.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  )
}

export default CharacterGuide
