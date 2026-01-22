export const warwick = {
  name: 'Warwick',
  heroImageOffset: { desktop: -400, mobile: -95 },
  tabs: [
    {
      id: 'key_moves',
      title: 'Key Moves',
      description: [],
      moves: [
        { numericNotation: 'S1', notation: 'Jaws of the Beast', notationImage: '/key-moves-notation/warwick/ww1.png', description: 'Lunging bite that heals Warwick. Hold to follow behind the opponent.', video: 'videos/warwick/ww1.mp4' },
        { numericNotation: 'S2', notation: 'Blood Hunt', notationImage: '/key-moves-notation/warwick/ww2.png', description: 'Activates blood scent, gaining attack speed and movement based on bloodlust stacks.', video: 'videos/warwick/ww2.mp4' },
        { numericNotation: '2S1', notation: 'Primal Howl', notationImage: '/key-moves-notation/warwick/ww3.png', description: 'Damage reduction that ends with a fear. Great defensive option.', video: 'videos/warwick/ww3.mp4' },
        { numericNotation: '6S1', notation: 'Infinite Duress', notationImage: '/key-moves-notation/warwick/ww4.png', description: 'Long range leap that suppresses the opponent. Full combo starter.', video: 'videos/warwick/ww4.mp4' },
        { numericNotation: '5H', notation: 'Savage Claw', notationImage: '/key-moves-notation/warwick/ww5.png', description: 'Heavy claw swipe with great range. Builds bloodlust stacks.', video: 'videos/warwick/ww5.mp4' },
      ]
    },
    {
      id: 'important_solo_combos',
      title: 'Combos',
      description: [],
      combos: [
        { purpose: 'BnB', numericNotation: 'M H S1 66 M H 2H j.M j.H j.S1', notationImage: '/combo-notation/warwick/ww-combo-1.png', video: 'videos/warwick/ww-combo-1.mp4' },
        { purpose: 'Blood Hunt Active', numericNotation: 'S2 L M H S1 66 L M H 2H j.H j.S1', notationImage: '/combo-notation/warwick/ww-combo-2.png', video: 'videos/warwick/ww-combo-2.mp4' },
        { purpose: 'Infinite Duress Starter', numericNotation: '6S1 M H 2H j.M j.H 66 j.H j.S2', notationImage: '/combo-notation/warwick/ww-combo-3.png', video: 'videos/warwick/ww-combo-3.mp4' },
        { purpose: 'Anti Air Starter', numericNotation: '2H j.M j.H S1 66 j.M j.H j.S2', notationImage: '/combo-notation/warwick/ww-combo-4.png', video: 'videos/warwick/ww-combo-4.mp4' },
      ],
      comboEnders: [
        { purpose: 'Healing Oki', numericNotation: 'j.H S1 2T', notationImage: '/combo-notation/warwick/ww-ender-1.png', video: 'videos/warwick/ww-ender-1.mp4' },
        { purpose: 'Fear Setup', numericNotation: 'j.H 2S1 2T', notationImage: '/combo-notation/warwick/ww-ender-2.png', video: 'videos/warwick/ww-ender-2.mp4' },
        { purpose: 'Max Dmg', numericNotation: 'j.H j.S2 TAG', notationImage: '/combo-notation/warwick/ww-ender-3.png', video: 'videos/warwick/ww-ender-3.mp4' },
      ]
    },
    {
      id: 'team_synergies',
      title: 'Teams',
      description: '',
      teams: [
        {
          pairing: 'Ekko',
          fuseType: '2x Assist',
          explanation: 'Ekko timewinder loops build full bloodlust for Warwick easily. Devastating damage.',
          videos: [
            { id: 'gCDtZgLubqw' },
            { id: 'EXbUrEpVoRw' }
          ]
        },
        {
          pairing: 'Darius',
          fuseType: 'Freestyle',
          explanation: 'Double bruiser team with incredible sustain and damage. Very hard to kill.',
          videos: [
            { id: 'F3x1-NNy6h4' },
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
            'Ahri\'s mobility can be tricky but your sustain helps in extended fights.',
            'Use Blood Hunt speed boost to keep up with her dashes. Infinite Duress can catch her post-dash.'
          ],
          keyPoints: [
            'Sustain helps in longer fights',
            'Blood Hunt keeps you mobile',
            'Infinite Duress catches dashes',
            'Fear can interrupt her combos'
          ],
          videos: []
        },
        'Jinx': {
          difficulty: 'Easy',
          difficultyClass: 'easy',
          overview: [
            'Jinx cannot escape once you get in. Infinite Duress closes the gap instantly.',
            'Your sustain lets you absorb her poke while approaching. Once in, she\'s done.'
          ],
          keyPoints: [
            'She cannot escape your engage',
            'Sustain through her poke',
            'Infinite Duress is a free hit',
            'Fear prevents her from fighting back'
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
          name: 'BloodMoon',
          description: 'Warwick specialist with aggressive playstyle',
          socials: {
            twitter: 'https://twitter.com/bloodmoon',
            twitch: 'https://twitch.tv/bloodmoon'
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
          title: 'Warwick Fundamentals Guide',
          author: 'Community',
          sections: [
            {
              heading: 'Overview',
              content: 'Warwick is an aggressive bruiser who excels at chasing down opponents and sustaining through fights. His Bloodlust mechanic rewards landing hits with increased power.'
            },
            {
              heading: 'Gameplan',
              content: 'Build bloodlust stacks with attacks, then activate Blood Hunt to become a terrifying pursuer. Use Jaws of the Beast for sustain and Infinite Duress for gap closing.'
            },
          ],
          tips: [
            'Bloodlust stacks are your power source - build them',
            'Jaws of the Beast heals more at low health',
            'Hold S1 to follow behind opponents',
            'Primal Howl fear sets up free combos'
          ]
        },
      ]
    },
  ]
}
