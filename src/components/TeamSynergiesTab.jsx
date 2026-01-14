import { useState, useEffect } from 'react'

function TeamSynergiesTab({ tabData }) {
  const [activeVideos, setActiveVideos] = useState({})
  const [videoTitles, setVideoTitles] = useState({})

  useEffect(() => {
    const fetchVideoTitles = async () => {
      if (!tabData?.teams) return

      const titlePromises = []
      const titleMap = {}

      tabData.teams.forEach(team => {
        if (team.videos) {
          team.videos.forEach(video => {
            if (!titleMap[video.id]) {
              titleMap[video.id] = null
              titlePromises.push(
                fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${video.id}&format=json`)
                  .then(res => res.json())
                  .then(data => {
                    titleMap[video.id] = data.title
                  })
                  .catch(() => {
                    titleMap[video.id] = video.title || 'Video'
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
  }, [tabData])

  const getFuseBadgeClass = (fuseType) => {
    const typeMap = {
      'Double Down': 'double-down',
      '2x Assist': 'assist',
      'Juggernaut': 'juggernaut',
      'Sidekick': 'sidekick',
      'Freestyle': 'freestyle'
    }
    return typeMap[fuseType] || ''
  }

  if (tabData.content) {
    return <p>{tabData.content}</p>
  }

  return (
    <>
      {tabData.description && <p>{tabData.description}</p>}
      <div className="teams-list">
        {tabData.teams.map((team, index) => (
          <div key={index} className="team-card">
            <div className="team-header">
              <h4>+ {team.pairing}</h4>
              <span className={`fuse-badge ${getFuseBadgeClass(team.fuseType)}`}>{team.fuseType}</span>
            </div>
            <p className="team-explanation">{team.explanation}</p>
            
            {team.videos && team.videos.length > 0 && (
              <div className="team-videos-section">
                <h5>Video Examples</h5>
                <div className="featured-video-container">
                  <div 
                    className="featured-video"
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${team.videos[activeVideos[index] || 0].id}`, '_blank', 'noopener,noreferrer')}
                  >
                    <img 
                      src={`https://img.youtube.com/vi/${team.videos[activeVideos[index] || 0].id}/maxresdefault.jpg`}
                      alt={videoTitles[team.videos[activeVideos[index] || 0].id] || team.videos[activeVideos[index] || 0].title}
                    />
                    <div className="play-overlay">
                      <i className="fab fa-youtube"></i>
                    </div>
                  </div>
                  <div className="video-title-featured">
                    {videoTitles[team.videos[activeVideos[index] || 0].id] || team.videos[activeVideos[index] || 0].title || 'Loading...'}
                  </div>
                  {team.videos.length > 1 && (
                    <div className="video-list">
                      {team.videos.map((video, idx) => (
                        idx !== (activeVideos[index] || 0) && (
                          <div
                            key={idx}
                            className="video-list-item"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (e.target.closest('.video-list-title') || e.target.closest('.video-list-thumbnail')) {
                                window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank', 'noopener,noreferrer');
                              } else {
                                setActiveVideos({ ...activeVideos, [index]: idx });
                              }
                            }}
                          >
                            <div className="video-list-thumbnail" onClick={(e) => { e.stopPropagation(); window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank', 'noopener,noreferrer'); }}>
                              <img 
                                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                                alt={videoTitles[video.id] || 'Video thumbnail'}
                              />
                              <div className="play-icon-small">
                                <i className="fab fa-youtube"></i>
                              </div>
                            </div>
                            <div className="video-list-title" onClick={(e) => { e.stopPropagation(); window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank', 'noopener,noreferrer'); }}>
                              {videoTitles[video.id] || video.title || 'Loading...'}
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

export default TeamSynergiesTab
