import { useState, useEffect } from 'react'

function YTVideo({ id, fallbackTitle, fallbackAuthor }) {
  const [title, setTitle] = useState(fallbackTitle || 'Loading...')
  const [author, setAuthor] = useState(fallbackAuthor || '')

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const res = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`)
        const data = await res.json()
        setTitle(data.title)
        setAuthor(data.author_name)
      } catch {
        setTitle(fallbackTitle || 'Video')
        setAuthor(fallbackAuthor || '')
      }
    }

    fetchVideoData()
  }, [id, fallbackTitle, fallbackAuthor])

  const handleClick = () => {
    window.open(`https://www.youtube.com/watch?v=${id}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="video-guide-card" onClick={handleClick}>
      <div className="video-guide-thumbnail">
        <img 
          src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
          alt={title}
          onError={(e) => {
            e.target.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`
          }}
        />
        <div className="video-guide-play-icon">
          <i className="fab fa-youtube"></i>
        </div>
      </div>
      <div className="video-guide-info">
        <span className="video-guide-title">{title}</span>
        {author && (
          <span className="video-guide-author">
            <i className="fas fa-user"></i> {author}
          </span>
        )}
      </div>
    </div>
  )
}

export default YTVideo
