export const ekko = {// Ekko Data Starts Here
    name: 'Ekko',
    heroImageOffset: { desktop: -73, mobile: -20 }, // Vertical offset in px for hero banner image (negative = up, positive = down)
    tabs: [
      {
        id: 'key_moves',
        title: 'Key Moves',
        description: [
          "Ekko has a versatile moveset that can be used creatively both in offense and defense.",
          "Ekko's S1 (Timewinder) is the best projectile in the game. It controls space for a long time and leads to easy combo conversions on hit. You can also hit your own (or your opponent's) Timewinder with Ekko's heavy moves to throw it at your opponent. ",
          "All of his S2 moves leave a clone behind, which later can be reactivated to rewind Ekko's position to the clone's location and attack. By charging the initial S2 moves, you leave behind a volatile clone, which gives you more control to your follow up after rewinding.",
          "Overall, his normals are very solid, with a special mention to his 5M, which has great range and speed.",
        ],
        moves: [
          { numericNotation: 'S2, 2S2 and j.S2', notation: 'blabla', notationImage: '/key-moves-notation/ekko/ekko1.png', description: 'Replay is a core mechanic in most of his combos and a tool for being safe in neutral', video: 'videos/ekko/key-moves/ekko-key1.mp4' },
          { numericNotation: '5M', notation: 'blabla', notationImage: '/key-moves-notation/ekko/ekko2.png', description: 'One of the best 5Ms in the game. Reaches far and fast', video: 'videos/ekko/key-moves/ekko-key2.mp4' },
          { numericNotation: 'S1 and 2S1', notation: 'blabla', notationImage: '/key-moves-notation/ekko/ekko3.png', description: 'Timewinder is an important option for covering the screen on the ground or against jump ins. Remember you can hit your timewinder with Ekko\'s heavy moves to throw it at your opponent.', video: 'videos/ekko/key-moves/ekko-key3.mp4' },
          { numericNotation: 'j.66', notation: 'blabla', notationImage: '/key-moves-notation/ekko/ekko4.png', description: 'Amazing air mobility tool, useful for baiting anti airs and for crossing up at hard to predict angles', video: 'videos/ekko/key-moves/ekko-key4.mp4' },
          { numericNotation: 'j.2H', notation: 'blabla', notationImage: '/key-moves-notation/ekko/ekko5.png', description: 'By itself or with his air dash, this move can be an easy crossup overhead that goes into a full combo', video: 'videos/ekko/key-moves/ekko-key5.mp4' },
        { numericNotation: '6S1', notation: 'blabla', notationImage: '/key-moves-notation/ekko/ekko6.png', description: 'Risky move to use alone, but using it right before tagging out is an easy way to get ekko in with freestyle or just use him as a fake projectile', video: 'videos/ekko/key-moves/ekko-key6.mp4' }
        ]
      },
      {
        id: 'important_solo_combos',
        title: 'Combos',
        //above both tables
        description: [

        ],
        combos: [
          { purpose: 'BnB', numericNotation: 'M H S2 S2 S1+L 2H S1 2S2 [2H] [j.H] j.d.S1 S2 H 2T', notationImage: '/combo-notation/ekko/ekko-combo-1.png', video: 'videos/ekko/combos/ekko-combo-1.mp4' },
          { purpose: 'Corner Combo', numericNotation: 'M H S2 S2 S1+L 66 j.H j.S2 H 2H j.H j.S2', notationImage: '/combo-notation/ekko/ekko-combo-2.png', video: 'videos/ekko/combos/ekko-combo-2.mp4' },
          { purpose: 'Side Swap', numericNotation: 'M H 2H j.M j.H j.S2 66 L M H 2H j.M j.H j.S2', notationImage: '/combo-notation/ekko/ekko-combo-3.png', video: 'videos/ekko/combos/ekko-combo-3.mp4' },
          { purpose: 'Anti Air starter', numericNotation: '2H j.M j.H 66 j.H j.S2 2M 5M 5H 2H j.M j.H j.S2', notationImage: '/combo-notation/ekko/ekko-combo-4.png', video: 'videos/ekko/combos/ekko-combo-4.mp4' },
        ],
        //between combos and enders
        description2: [
        ],
        comboEnders: [
          { purpose: 'Limit Strike into S2 super', numericNotation: 'j.S2 2S1 S2+L', notationImage: '/combo-notation/ekko/combo-enders/ekko-ender1.png', video: 'videos/ekko/combo-enders/ekko-ender1.mp4' },
          { purpose: '6S1 into S2 super', numericNotation: '6S1 S2+L', notationImage: '/combo-notation/ekko/combo-enders/ekko-ender2.png', video: 'videos/ekko/combo-enders/ekko-ender2.mp4' },
          { purpose: 'Tag launcher', numericNotation: '2M M H 2T', notationImage: '/combo-notation/ekko/combo-enders/ekko-ender3.png', video: 'videos/ekko/combo-enders/ekko-ender3.mp4' },
        ],
        //below everything
        description3: [
          'Generally Ekko wants to end his combos in a limit strike, or another way where he can safely set up his S2 super for continued pressure.',
          "His BNB route also naturally leads to a tag launcher (2T) which is a great way to switch to your other character if needed.",
        ],
      },
      {
        id: 'team_synergies',
        title: 'Teams',
        description: '',
        teams: [
          {
            pairing: 'Teemo or Jinx',
            fuseType: 'Double Down',
            explanation: 'Using Teemo\'s or Jinx\'s supers with double down clears the way for Ekko to get in safely',
            videos: [
              { id: 'F3x1-NNy6h4' },
            ]
          },
          {
            pairing: 'Warwick',
            fuseType: '2x Assist',
            explanation: 'Very easy to build full bloodlust for Warwick with timewinder loops',
            videos: [
              { id: 'gCDtZgLubqw' },
              { id: 'EXbUrEpVoRw' }
            ]
          },
          {
            pairing: 'Yasuo',
            fuseType: 'Freestyle',
            explanation: 'Simply the best 2 characters in the game put together as of right now. Not much interesting sinergy but very strong all around',
            videos: [
              { id: '8qmI6OieGnI' }
            ]
          },
        ]
      },
      {
        id: 'matchups',
        title: 'Matchups',
        matchups: {
          'Ahri': {
            difficulty: 'Medium',
            difficultyClass: 'medium',
            overview: [
              'Placeholder overview'
            ],
            keyPoints: [
              'Placeholder keypoint 1',
              'Placeholder keypoint 2',
              'Placeholder keypoint 3',
            ],
            videos: [
              { id: 'F3x1-NNy6h4' },
              { id: 'F3x1-NNy6h4' },
              { id: 'F3x1-NNy6h4' },
              { id: 'F3x1-NNy6h4' },
            ]
          },
          'Blitzcrank': {
            difficulty: 'Medium',
            difficultyClass: 'medium',
            overview: [
              'Placeholder overview'
            ],
            keyPoints: [
              'Placeholder keypoint 1',
              'Placeholder keypoint 2',
              'Placeholder keypoint 3',
            ],
            videos: [
              { id: 'F3x1-NNy6h4' },
              { id: 'F3x1-NNy6h4' },
              { id: 'F3x1-NNy6h4' },
              { id: 'F3x1-NNy6h4' },
            ]
          },
          'Braum': {
            difficulty: 'Hard',
            difficultyClass: 'hard',
            overview: [
              'Placeholder overview'
            ],
            keyPoints: [
              'Placeholder keypoint 1',
              'Placeholder keypoint 2',
              'Placeholder keypoint 3',
            ],
            videos: []
          },
          'Caitlyn': {
            difficulty: 'Hard',
            difficultyClass: 'hard',
            overview: [
              'Placeholder overview'
            ],
            keyPoints: [
              'Placeholder keypoint 1',
              'Placeholder keypoint 2',
              'Placeholder keypoint 3',
            ],
            videos: []
          },
          'Darius': {
            difficulty: 'Medium',
            difficultyClass: 'medium',
            overview: [
              'Placeholder overview'
            ],
            keyPoints: [
              'Placeholder keypoint 1',
              'Placeholder keypoint 2',
              'Placeholder keypoint 3',
            ],
            videos: []
          },
          'Illaoi': {
            difficulty: 'Medium',
            difficultyClass: 'medium',
           overview: [
              'Placeholder overview'
            ],
            keyPoints: [
              'Placeholder keypoint 1',
              'Placeholder keypoint 2',
              'Placeholder keypoint 3',
            ],
            videos: [
              { id: 'illaekko' }
            ]
          },
          'Jinx': {
            difficulty: 'Easy',
            difficultyClass: 'easy',
            overview: [
              'Placeholder overview'
            ],
            keyPoints: [
              'Placeholder keypoint 1',
              'Placeholder keypoint 2',
              'Placeholder keypoint 3',
            ],
            videos: []
          },
          'Teemo': {
            difficulty: 'Easy',
            difficultyClass: 'easy',
            overview: [
              'Placeholder overview'
            ],
            keyPoints: [
              'Placeholder keypoint 1',
              'Placeholder keypoint 2',
              'Placeholder keypoint 3',
            ],
            videos: []
          },
          'Vi': {
            difficulty: 'Hard',
            difficultyClass: 'hard',
            overview: [
              'Placeholder overview'
            ],
            keyPoints: [
              'Placeholder keypoint 1',
              'Placeholder keypoint 2',
              'Placeholder keypoint 3',
            ],
            videos: []
          },
          'Warwick': {
            difficulty: 'Hard',
            difficultyClass: 'hard',
            overview: [
              'Placeholder overview'
            ],
            keyPoints: [
              'Placeholder keypoint 1',
              'Placeholder keypoint 2',
              'Placeholder keypoint 3',
            ],
            videos: []
          },
          'Yasuo': {
            difficulty: 'Medium',
            difficultyClass: 'medium',
            overview: [
              'Placeholder overview'
            ],
            keyPoints: [
              'Placeholder keypoint 1',
              'Placeholder keypoint 2',
              'Placeholder keypoint 3',
            ],
            videos: [
              { id: '8qmI6OieGnI' }
            ]
          }
        }
      },
      {
        id: 'top_players',
        title: 'Top Players',
        players: [
          {
            name: 'SonicFox',
            description: '',
            socials: {
              twitter: 'https://twitter.com/SonicFox',
              youtube: 'https://www.youtube.com/@SonicFox5000',
              twitch: 'http://www.twitch.tv/sonicfox'
            },
            highlights: [
              { id: 'F3x1-NNy6h4' },
              { id: 'GHhFvO0TAW0' },
              { id: 'mR92xVB7sT0' }
            ]
          },
          {
            name: 'Hikari',
            description: '',
            socials: {
              twitter: 'https://x.com/HikariNYC',
              twitch: 'https://t.co/4sYjxDdnAn'
            },
            highlights: [
              { id: 'K6YIcxSAKz8' },
              { id: '6dFSUmYA2Lw' },
              { id: '4fIa3CZNLZI' }
            ]
          },
        ]
      },
      {
        id: 'guides',
        title: 'Guides',
        videos: [
          { 
            id: 'ZP_cp2Jl57k', 
          },
          { 
            id: 'linj99CyhAg', 
          },
          { 
            id: 'zA72QlZbKjY', 
          },
        ],
      },
    ]
  }