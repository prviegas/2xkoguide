import { useState, useEffect } from 'react'
import './CharacterGuide.css'

function CharacterGuide({ character, onClose }) {
  const [activeTab, setActiveTab] = useState(0)
  const [videoModal, setVideoModal] = useState({ isOpen: false, videoUrl: '', moveName: '', numericNotation: '' })
  const [youtubeModal, setYoutubeModal] = useState({ isOpen: false, videoId: '', title: '', playerName: '' })
  const [activeHighlights, setActiveHighlights] = useState({})
  const [videoTitles, setVideoTitles] = useState({})

  useEffect(() => {
    setActiveTab(0)
  }, [character])

  useEffect(() => {
    const fetchVideoTitles = async () => {
      if (!character?.tabs) return
      
      const topPlayersTab = character.tabs.find(tab => tab.id === 'top_players')
      if (!topPlayersTab?.players) return

      const titlePromises = []
      const titleMap = {}

      topPlayersTab.players.forEach(player => {
        if (player.highlights) {
          player.highlights.forEach(highlight => {
            if (!titleMap[highlight.id]) {
              titleMap[highlight.id] = null
              titlePromises.push(
                fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${highlight.id}&format=json`)
                  .then(res => res.json())
                  .then(data => {
                    titleMap[highlight.id] = data.title
                  })
                  .catch(() => {
                    titleMap[highlight.id] = highlight.title || 'Video'
                  })
              )
            }
          })
        }
      })

      await Promise.all(titlePromises)
      setVideoTitles(titleMap)
    }

    fetchVideoTitles()
  }, [character, activeTab])

  const openVideoModal = (videoUrl, moveName, numericNotation) => {
    setVideoModal({ isOpen: true, videoUrl, moveName, numericNotation })
  }

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, videoUrl: '', moveName: '', numericNotation: '' })
  }

  const openYoutubeModal = (videoId, title, playerName) => {
    setYoutubeModal({ isOpen: true, videoId, title, playerName })
  }

  const closeYoutubeModal = () => {
    setYoutubeModal({ isOpen: false, videoId: '', title: '', playerName: '' })
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
        ) : currentTab.id === 'top_players' ? (
          <>
            {currentTab.description && <p>{currentTab.description}</p>}
            <div className="players-list">
              {currentTab.players.map((player, index) => (
                <div key={index} className="player-card">
                  <h4>{player.name}</h4>
                  <p>{player.description}</p>
                  <div className="social-links">
                    {player.socials.twitter && (
                      <a href={player.socials.twitter} target="_blank" rel="noopener noreferrer" className="social-link twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                    {player.socials.youtube && (
                      <a href={player.socials.youtube} target="_blank" rel="noopener noreferrer" className="social-link youtube">
                        <i className="fab fa-youtube"></i>
                      </a>
                    )}
                    {player.socials.twitch && (
                      <a href={player.socials.twitch} target="_blank" rel="noopener noreferrer" className="social-link twitch">
                        <i className="fab fa-twitch"></i>
                      </a>
                    )}
                  </div>
                  {player.highlights && player.highlights.length > 0 && (
                    <div className="highlights-section">
                      <h5>Highlights</h5>
                      <div className="featured-video-container">
                        <div 
                          className="featured-video"
                          onClick={() => window.open(`https://www.youtube.com/watch?v=${player.highlights[activeHighlights[index] || 0].id}`, '_blank', 'noopener,noreferrer')}
                        >
                          <img 
                            src={`https://img.youtube.com/vi/${player.highlights[activeHighlights[index] || 0].id}/maxresdefault.jpg`}
                            alt={videoTitles[player.highlights[activeHighlights[index] || 0].id] || player.highlights[activeHighlights[index] || 0].title}
                          />
                          <div className="play-overlay">
                            <i className="fab fa-youtube"></i>
                          </div>
                        </div>
                        <div className="video-title-featured">
                          {videoTitles[player.highlights[activeHighlights[index] || 0].id] || player.highlights[activeHighlights[index] || 0].title || 'Loading...'}
                        </div>
                        {player.highlights.length > 1 && (
                          <div className="video-list">
                            {player.highlights.map((highlight, idx) => (
                              idx !== (activeHighlights[index] || 0) && (
                                <div
                                  key={idx}
                                  className="video-list-item"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (e.target.closest('.video-list-title') || e.target.closest('.video-list-thumbnail')) {
                                      window.open(`https://www.youtube.com/watch?v=${highlight.id}`, '_blank', 'noopener,noreferrer');
                                    } else {
                                      setActiveHighlights({ ...activeHighlights, [index]: idx });
                                    }
                                  }}
                                >
                                  <div className="video-list-thumbnail" onClick={(e) => { e.stopPropagation(); window.open(`https://www.youtube.com/watch?v=${highlight.id}`, '_blank', 'noopener,noreferrer'); }}>
                                    <img 
                                      src={`https://img.youtube.com/vi/${highlight.id}/mqdefault.jpg`}
                                      alt={videoTitles[highlight.id] || 'Video thumbnail'}
                                    />
                                    <div className="play-icon-small">
                                      <i className="fab fa-youtube"></i>
                                    </div>
                                  </div>
                                  <div className="video-list-title" onClick={(e) => { e.stopPropagation(); window.open(`https://www.youtube.com/watch?v=${highlight.id}`, '_blank', 'noopener,noreferrer'); }}>
                                    {videoTitles[highlight.id] || highlight.title || 'Loading...'}
                                  </div>
                                </div>
                              )
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
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

      {youtubeModal.isOpen && (
        <div className="video-modal-overlay" onClick={closeYoutubeModal}>
          <div className="video-modal-content youtube" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal-header">
              <h3>{youtubeModal.playerName} - {youtubeModal.title}</h3>
              <button className="close-button" onClick={closeYoutubeModal}>✕</button>
            </div>
            <div className="youtube-embed-container">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeModal.videoId}?autoplay=1`}
                title={youtubeModal.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CharacterGuide
