import YTVideo from './YTVideo'

function TopPlayersTab({ tabData }) {
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
                <div className="video-guides-list">
                  {player.highlights.map((highlight, idx) => (
                    <YTVideo
                      key={idx}
                      id={highlight.id}
                      fallbackTitle={highlight.title}
                      fallbackAuthor={highlight.author}
                      variant="small"
                      isFirst={idx === 0}
                    />
                  ))}
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
