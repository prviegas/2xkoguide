import YTVideo from './YTVideo'

function TeamSynergiesTab({ tabData }) {

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
                <div className="video-guides-list">
                  {team.videos.map((video, idx) => (
                    <YTVideo
                      key={idx}
                      id={video.id}
                      fallbackTitle={video.title}
                      fallbackAuthor={video.author}
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

export default TeamSynergiesTab
