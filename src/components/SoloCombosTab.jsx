import { useState } from 'react';
import NotationCheatsheet from './NotationCheatsheet';
import './NotationCheatsheet.css';
import './convertText.css';
import './convertText.jsx';

function SoloCombosTab({ character, tabData }) {
  const [videoModal, setVideoModal] = useState({ isOpen: false, videoUrl: '', moveName: '', numericNotation: '' })
  const [isCheatsheetOpen, setIsCheatsheetOpen] = useState(false)

  const openVideoModal = (videoUrl, moveName, numericNotation) => {
    setVideoModal({ isOpen: true, videoUrl, moveName, numericNotation })
  }

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, videoUrl: '', moveName: '', numericNotation: '' })
  }

  // Handle missing or malformed data
  if (!tabData) {
    return <p>No combo data available.</p>
  }

  if (tabData.content) {
    return <p>{tabData.content}</p>
  }

  const description = Array.isArray(tabData.description) ? tabData.description : []
  const description2 = Array.isArray(tabData.description2) ? tabData.description2 : []
  const description3 = Array.isArray(tabData.description3) ? tabData.description3 : []
  const combos = Array.isArray(tabData.combos) ? tabData.combos : []
  const comboEnders = Array.isArray(tabData.comboEnders) ? tabData.comboEnders : []

  return (
    <>
      {description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      
      <div className="notation-btn-wrapper">
        <button 
          className="notation-help-btn"
          onClick={() => setIsCheatsheetOpen(true)}
          title="Learn numpad notation"
        >
          <i className="fas fa-question-circle"></i> Numeric notation cheatsheet
        </button>
      </div>

      {combos.length === 0 ? (
        <p>No combos available for this character yet.</p>
      ) : (
        <table className="moves-table solo-combos-table">
          <thead>
            <tr>
              <th>Purpose</th>
              <th>
                Numeric Notation{' '}
                <i 
                  className="fas fa-question-circle notation-header-icon" 
                  onClick={() => setIsCheatsheetOpen(true)}
                  title="Learn numpad notation"
                ></i>
              </th>
              <th>2XKO Notation</th>
              <th>Video</th>
            </tr>
          </thead>
          <tbody>
            {combos.map((combo, index) => (
            <tr key={index}>
              <td className="description-cell">{combo.purpose || 'General combo'}</td>              
              <td className="numeric-notation-cell">{combo.numericNotation}</td>
              <td className="notation-cell">
                {/* //converted image hereish */}
                {/* <NotationRenderer character={character}></NotationRenderer> */}
                <img src={`.${combo.notationImage}`} alt={combo.notation} className="notation-image" />
              </td>
              <td className="video-cell">
                <button 
                  className="video-icon-btn"
                  onClick={() => openVideoModal(combo.video, combo.notation, combo.numericNotation)}
                  title="View combo demonstration"
                >
                  <i className="fas fa-play-circle"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}

      {description2.length > 0 && (
        <div className="combo-description-section">
          {description2.map((paragraph, index) => (
            <p key={`desc2-${index}`}>{paragraph}</p>
          ))}
        </div>
      )}

      {comboEnders.length > 0 && (
        <>
          <h3 className="combo-enders-heading">Combo Enders</h3>
          <table className="moves-table solo-combos-table">
            <thead>
              <tr>
                <th>Purpose</th>
                <th>
                  Numeric Notation{' '}
                  <i 
                    className="fas fa-question-circle notation-header-icon" 
                    onClick={() => setIsCheatsheetOpen(true)}
                    title="Learn numpad notation"
                  ></i>
                </th>
                <th>2XKO Notation</th>
                <th>Video</th>
              </tr>
            </thead>
            <tbody>
              {comboEnders.map((combo, index) => (
              <tr key={index}>
                <td className="description-cell">{combo.purpose || 'General ender'}</td>              
                <td className="numeric-notation-cell">{combo.numericNotation}</td>
                <td className="notation-cell">
                  <img src={`.${combo.notationImage}`} alt={combo.notation} className="notation-image" />
                </td>
                <td className="video-cell">
                  <button 
                    className="video-icon-btn"
                    onClick={() => openVideoModal(combo.video, combo.notation, combo.numericNotation)}
                    title="View combo demonstration"
                  >
                    <i className="fas fa-play-circle"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </>
      )}

      {description3.length > 0 && (
        <div className="combo-description-section">
          {description3.map((paragraph, index) => (
            <p key={`desc3-${index}`}>{paragraph}</p>
          ))}
        </div>
      )}

      {videoModal.isOpen && (
        <div className="video-modal-overlay" onClick={closeVideoModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal-header">
              <h3><span>{videoModal.numericNotation}</span></h3>
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

export default SoloCombosTab
