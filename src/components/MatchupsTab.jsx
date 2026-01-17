import { useState } from 'react';
import './MatchupsTab.css';
import { charactersData } from '../data/charactersData';
import YTVideo from './YTVideo';

function MatchupsTab({ tabData, currentCharacter }) {
  const [selectedChampion, setSelectedChampion] = useState(null);

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
                <div className="video-guides-grid">
                  {getMatchupInfo(selectedChampion.name).videos.map((video, index) => (
                    <YTVideo
                      key={index}
                      id={video.id}
                      fallbackTitle={video.title}
                      fallbackAuthor={video.author}
                    />
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
