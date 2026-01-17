import { useState, useEffect } from 'react';
import './MatchupsTab.css';
import { charactersData } from '../data/charactersData';

function MatchupsTab({ tabData, currentCharacter }) {
  const [selectedChampion, setSelectedChampion] = useState(null);
  const [videoTitles, setVideoTitles] = useState({});

  // Get all available champions from charactersData
  const champions = charactersData.map(char => ({
    id: char.id,
    name: char.name,
    image: `./champion-pics/head-zoom/${char.name.toLowerCase()}1.png`
  }));

  // Filter out the current character
  const opponents = champions.filter(champ => champ.name !== currentCharacter);

  // Get matchup data from tabData
  const matchupData = tabData.matchups || {};

  useEffect(() => {
    const fetchVideoTitles = async () => {
      if (!matchupData) return;

      const titlePromises = [];
      const titleMap = {};

      Object.values(matchupData).forEach(matchup => {
        if (matchup.videos) {
          matchup.videos.forEach(video => {
            if (!titleMap[video.id]) {
              titleMap[video.id] = null;
              titlePromises.push(
                fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${video.id}&format=json`)
                  .then(res => res.json())
                  .then(data => {
                    titleMap[video.id] = data.title;
                  })
                  .catch(() => {
                    titleMap[video.id] = 'Video';
                  })
              );
            }
          });
        }
      });

      await Promise.all(titlePromises);
      setVideoTitles(titleMap);
    };

    fetchVideoTitles();
  }, [matchupData]);

  const getMatchupInfo = (championName) => {
    return matchupData[championName] || {
      difficulty: 'Unknown',
      difficultyClass: 'medium',
      tips: ['Matchup information coming soon!'],
      keyPoints: ['General tips: Play smart and adapt to their playstyle']
    };
  };

  const handleChampionClick = (champion) => {
    setSelectedChampion(champion);
  };

  return (
    <div className="matchups-tab">
      {tabData.description && (
        <div className="matchups-description">
          <p>{tabData.description}</p>
        </div>
      )}

      {/* Champion Selection Row */}
      <div className="champions-row">
        {opponents.map((champion) => (
          <div
            key={champion.id}
            className={`champion-portrait ${selectedChampion?.name === champion.name ? 'selected' : ''}`}
            onClick={() => handleChampionClick(champion)}
          >
            <img src={champion.image} alt={champion.name} />
            <span className="champion-name">{champion.name}</span>
          </div>
        ))}
      </div>

      {/* Matchup Details */}
      {selectedChampion && (
        <div className="matchup-details">
          <div className="matchup-header">
            <img 
              src={selectedChampion.image} 
              alt={selectedChampion.name} 
              className="matchup-champion-image"
            />
            <div className="matchup-title">
              <h2>{currentCharacter} vs {selectedChampion.name}</h2>
              <span className={`difficulty ${getMatchupInfo(selectedChampion.name).difficultyClass}`}>
                Difficulty: {getMatchupInfo(selectedChampion.name).difficulty}
              </span>
            </div>
          </div>

          <div className="matchup-content">
            <div className="matchup-overview">
              {getMatchupInfo(selectedChampion.name).overview?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="matchup-section">
              <h3>Key Points</h3>
              <ul>
                {getMatchupInfo(selectedChampion.name).keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            {getMatchupInfo(selectedChampion.name).videos && getMatchupInfo(selectedChampion.name).videos.length > 0 && (
              <div className="matchup-section matchup-videos">
                <h3>Related Videos</h3>
                <div className="video-list">
                  {getMatchupInfo(selectedChampion.name).videos.map((video, index) => (
                    <div key={index} className="video-item">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={videoTitles[video.id] || 'Loading...'}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <p className="video-title">{videoTitles[video.id] || 'Loading...'}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {!selectedChampion && (
        <div className="no-selection">
          <p>Click on a champion above to see detailed matchup information</p>
        </div>
      )}
    </div>
  );
}

export default MatchupsTab
