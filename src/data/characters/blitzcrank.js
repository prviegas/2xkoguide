export const blitzcrank = {
  name: 'Blitzcrank',
  heroImageOffset: { desktop: -296, mobile: -100 },
  tabs: [
    {
      id: 'key_moves',
      title: 'Key Moves',
      description: [],
      moves: [
        { numericNotation: 'S1', notation: 'Rocket Grab', notationImage: '/key-moves-notation/blitzcrank/blitz1.png', description: 'Long range hook that pulls opponents towards you. Core neutral tool and combo starter.', video: 'videos/blitzcrank/blitz1.mp4' },
        { numericNotation: '5H', notation: 'Power Fist', notationImage: '/key-moves-notation/blitzcrank/blitz2.png', description: 'Overhead punch that causes a ground bounce. Great for combo extensions.', video: 'videos/blitzcrank/blitz2.mp4' },
        { numericNotation: '2S1', notation: 'Low Grab', notationImage: '/key-moves-notation/blitzcrank/blitz3.png', description: 'Low hitting hook variant. Catches opponents trying to jump over regular grabs.', video: 'videos/blitzcrank/blitz3.mp4' },
        { numericNotation: 'S2', notation: 'Overdrive', notationImage: '/key-moves-notation/blitzcrank/blitz4.png', description: 'Speed boost that enhances movement and combo potential for a short duration.', video: 'videos/blitzcrank/blitz4.mp4' },
        { numericNotation: '6H', notation: 'Static Field', notationImage: '/key-moves-notation/blitzcrank/blitz5.png', description: 'AOE burst around Blitzcrank. Good for pressure and catching jumps.', video: 'videos/blitzcrank/blitz5.mp4' },
      ]
    },
    {
      id: 'important_solo_combos',
      title: 'Combos',
      description: [],
      combos: [
        { purpose: 'BnB', numericNotation: 'S1 5M 5H 2H j.M j.H j.S2', notationImage: '/combo-notation/blitzcrank/blitz-combo-1.png', video: 'videos/blitzcrank/blitz-combo-1.mp4' },
        { purpose: 'Corner Combo', numericNotation: 'S1 5M 5H S2 5M 5H 2H j.M j.H 2T', notationImage: '/combo-notation/blitzcrank/blitz-combo-2.png', video: 'videos/blitzcrank/blitz-combo-2.mp4' },
        { purpose: 'Overdrive Extension', numericNotation: 'S1 S2 66 5M 5H 66 5M 5H 2H j.H j.S2', notationImage: '/combo-notation/blitzcrank/blitz-combo-3.png', video: 'videos/blitzcrank/blitz-combo-3.mp4' },
        { purpose: 'Anti Air Starter', numericNotation: '2H j.M j.H 66 j.M j.H j.S2 2T', notationImage: '/combo-notation/blitzcrank/blitz-combo-4.png', video: 'videos/blitzcrank/blitz-combo-4.mp4' },
      ],
      comboEnders: [
        { purpose: 'Oki', numericNotation: 'j.H j.S2 2T', notationImage: '/combo-notation/blitzcrank/blitz-ender-1.png', video: 'videos/blitzcrank/blitz-ender-1.mp4' },
        { purpose: 'Limit Strike', numericNotation: 'H 2H j.M j.H j.S2', notationImage: '/combo-notation/blitzcrank/blitz-ender-2.png', video: 'videos/blitzcrank/blitz-ender-2.mp4' },
        { purpose: 'Max Dmg', numericNotation: '6H TAG', notationImage: '/combo-notation/blitzcrank/blitz-ender-3.png', video: 'videos/blitzcrank/blitz-ender-3.mp4' },
      ]
    },
    {
      id: 'team_synergies',
      title: 'Teams',
      description: '',
      teams: [
        {
          pairing: 'Yasuo',
          fuseType: 'Freestyle',
          explanation: 'Rocket Grab into Yasuo combos creates devastating damage. Easy confirms off grabs.',
          videos: [
            { id: 'F3x1-NNy6h4' },
          ]
        },
        {
          pairing: 'Jinx',
          fuseType: '2x Assist',
          explanation: 'Blitzcrank grab sets up perfect Jinx super confirms. Great zoning team.',
          videos: [
            { id: 'gCDtZgLubqw' },
          ]
        },
      ]
    },
    {
      id: 'matchups',
      title: 'Matchups',
      matchups: {
        'Ahri': {
          difficulty: 'Hard',
          difficultyClass: 'hard',
          overview: [
            'Ahri\'s mobility makes it very difficult to land hooks. Her Spirit Rush can easily dodge your Rocket Grab attempts.',
            'Focus on baiting out her dashes before committing to hooks. Use Static Field to catch her when she dashes in.'
          ],
          keyPoints: [
            'Difficult to land hooks due to her mobility',
            'Bait her dashes before throwing grabs',
            'Static Field catches aggressive dash-ins',
            'Patience is key in this matchup'
          ],
          videos: []
        },
        'Darius': {
          difficulty: 'Easy',
          difficultyClass: 'easy',
          overview: [
            'Darius lacks mobility to avoid your hooks consistently. Once grabbed, he takes full damage.',
            'Keep distance and fish for hooks. Your grab range outranges his pull.'
          ],
          keyPoints: [
            'Your range advantage is massive',
            'He cannot escape your hooks easily',
            'Avoid melee range at all costs',
            'Full combo every successful grab'
          ],
          videos: []
        },
      }
    },
    {
      id: 'top_players',
      title: 'Top Players',
      players: [
        {
          name: 'HookMaster',
          description: 'Known for incredible hook accuracy',
          socials: {
            twitter: 'https://twitter.com/hookmaster',
            twitch: 'https://twitch.tv/hookmaster'
          },
          highlights: [
            { id: 'F3x1-NNy6h4' },
          ]
        },
      ]
    },
    {
      id: 'guides',
      title: 'Guides',
      videos: [
        { id: 'F3x1-NNy6h4' },
        { id: '8qmI6OieGnI' },
      ],
      textGuides: [
        {
          title: 'Blitzcrank Fundamentals Guide',
          author: 'Community',
          sections: [
            {
              heading: 'Overview',
              content: 'Blitzcrank is a grappler character focused on landing his signature Rocket Grab to start combos. His gameplay revolves around conditioning opponents and finding openings for devastating hooks.'
            },
            {
              heading: 'Gameplan',
              content: 'Control neutral with the threat of your grab. Use movement and feints to make your hooks unpredictable. Once you land a grab, convert into maximum damage combos.'
            },
          ],
          tips: [
            'Mix up your grab timing to stay unpredictable',
            'Overdrive extends your combo potential significantly',
            'Static Field is great for catching jump-ins',
            'Your grab has incredible range - use it'
          ]
        },
      ]
    },
  ]
}
