import { useState } from 'react';
import NotationCheatsheet from './NotationCheatsheet';
import './NotationCheatsheet.css';

function KeyMovesTab({ character, tabData }) {
  const [videoModal, setVideoModal] = useState({ isOpen: false, videoUrl: '', moveName: '', numericNotation: '' })
  const [isCheatsheetOpen, setIsCheatsheetOpen] = useState(false)

  const openVideoModal = (videoUrl, moveName, numericNotation) => {
    setVideoModal({ isOpen: true, videoUrl, moveName, numericNotation })
  }

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, videoUrl: '', moveName: '', numericNotation: '' })
  }

  return (
    <>
      {tabData.description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      
      <div style={{ marginBottom: '15px' }}>
        <button 
          className="notation-help-btn"
          onClick={() => setIsCheatsheetOpen(true)}
          title="Learn numpad notation"
        >
          <i className="fas fa-question-circle"></i> Numeric notation cheatsheet
        </button>
      </div>

      <table className="moves-table">
        <thead>
          <tr>
            <th>
              Numeric Notation{' '}
              <i 
                className="fas fa-question-circle notation-header-icon" 
                onClick={() => setIsCheatsheetOpen(true)}
                title="Learn numpad notation"
              ></i>
            </th>
            <th>2XKO Notation</th>
            <th>Description</th>
            <th>Video</th>
          </tr>
        </thead>
        <tbody>
          {tabData.moves.map((move, index) => (
            <tr key={index}>
              <td className="numeric-notation-cell">{move.numericNotation}</td>
              <td className="notation-cell">
                <img src={`.${move.notationImage}`} alt={move.notation} className="notation-image" />
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

      <NotationCheatsheet 
        isOpen={isCheatsheetOpen}
        onClose={() => setIsCheatsheetOpen(false)}
      />
    </>
  )
}

export default KeyMovesTab
