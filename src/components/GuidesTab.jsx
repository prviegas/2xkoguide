import { useState, useEffect } from 'react'
import './GuidesTab.css'

function GuidesTab({ tabData }) {
  const [videoTitles, setVideoTitles] = useState({})
  const [videoAuthors, setVideoAuthors] = useState({})

  useEffect(() => {
    const fetchVideoData = async () => {
      if (!tabData?.videos) return

      const fetchPromises = []
      const titleMap = {}
      const authorMap = {}

      tabData.videos.forEach(video => {
        if (!titleMap[video.id]) {
          titleMap[video.id] = null
          authorMap[video.id] = null
          fetchPromises.push(
            fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${video.id}&format=json`)
              .then(res => res.json())
              .then(data => {
                titleMap[video.id] = data.title
                authorMap[video.id] = data.author_name
              })
              .catch(() => {
                titleMap[video.id] = video.title || 'Video'
                authorMap[video.id] = video.author || ''
              })
          )
        }
      })

      await Promise.all(fetchPromises)
      setVideoTitles(titleMap)
      setVideoAuthors(authorMap)
    }

    fetchVideoData()
  }, [tabData])

  if (!tabData) {
    return <p>No guides available.</p>
  }

  if (tabData.content) {
    return <p>{tabData.content}</p>
  }

  const videos = Array.isArray(tabData.videos) ? tabData.videos : []

  return (
    <div className="guides-tab">
      {tabData.description && <p className="guides-description">{tabData.description}</p>}
      
      {/* Video Guides Section */}
      {videos.length > 0 && (
        <div className="video-guides-section">
          <h4><i className="fab fa-youtube"></i> Video Guides</h4>
          <div className="video-guides-grid">
            {videos.map((video, idx) => (
              <div
                key={idx}
                className="video-guide-card"
                onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank', 'noopener,noreferrer')}
              >
                <div className="video-guide-thumbnail">
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={videoTitles[video.id] || video.title}
                    onError={(e) => {
                      e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
                    }}
                  />
                  <div className="video-guide-play-icon">
                    <i className="fab fa-youtube"></i>
                  </div>
                </div>
                <div className="video-guide-info">
                  <span className="video-guide-title">
                    {videoTitles[video.id] || video.title || 'Loading...'}
                  </span>
                  {videoAuthors[video.id] && (
                    <span className="video-guide-author">
                      <i className="fas fa-user"></i> {videoAuthors[video.id]}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {videos.length === 0 && (
        <p>No guides available for this character yet.</p>
      )}
    </div>
  )
}

export default GuidesTab
