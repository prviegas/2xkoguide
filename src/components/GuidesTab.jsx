import './GuidesTab.css'
import YTVideo from './YTVideo'

function GuidesTab({ tabData }) {
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
              <YTVideo 
                key={idx}
                id={video.id}
                fallbackTitle={video.title}
                fallbackAuthor={video.author}
              />
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
