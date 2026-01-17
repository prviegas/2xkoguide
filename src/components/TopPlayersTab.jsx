import { useState, useEffect } from 'react'

function TopPlayersTab({ tabData }) {
  const [activeHighlights, setActiveHighlights] = useState({})
  const [videoTitles, setVideoTitles] = useState({})
  const [videoAuthors, setVideoAuthors] = useState({})

  useEffect(() => {
    const fetchVideoData = async () => {
      if (!tabData?.players) return

      const fetchPromises = []
      const titleMap = {}
      const authorMap = {}

      tabData.players.forEach(player => {
        if (player.highlights) {
          player.highlights.forEach(highlight => {
            if (!titleMap[highlight.id]) {
              titleMap[highlight.id] = null
              authorMap[highlight.id] = null
              fetchPromises.push(
                fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${highlight.id}&format=json`)
                  .then(res => res.json())
                  .then(data => {
                    titleMap[highlight.id] = data.title
                    authorMap[highlight.id] = data.author_name
                  })
                  .catch(() => {
                    titleMap[highlight.id] = highlight.title || 'Video'
                    authorMap[highlight.id] = highlight.author || ''
                  })
              )
            }
          })
        }
      })

      await Promise.all(fetchPromises)
      setVideoTitles(titleMap)
      setVideoAuthors(authorMap)
    }

    fetchVideoData()
  }, [tabData])

  return (
    <>
      {tabData.description && <p>{tabData.description}</p>}
      <div className="players-list">
        {tabData.players.map((player, index) => (
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
                  {videoAuthors[player.highlights[activeHighlights[index] || 0].id] && (
                    <div className="video-author-featured">
                      <i className="fas fa-user"></i> {videoAuthors[player.highlights[activeHighlights[index] || 0].id]}
                    </div>
                  )}
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
                              {videoAuthors[highlight.id] && (
                                <span className="video-list-author">
                                  <i className="fas fa-user"></i> {videoAuthors[highlight.id]}
                                </span>
                              )}
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
  )
}

export default TopPlayersTab
