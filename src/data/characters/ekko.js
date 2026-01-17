export const ekko = {// Ekko Data Starts Here
    name: 'Ekko',
    heroImageOffset: -73, // Vertical offset in px for hero banner image (negative = up, positive = down)
    tabs: [
      {
        id: 'key_moves',
        title: 'Key Moves',
        description: [
         
        ],
        moves: [
          { numericNotation: 'S2, 2S2 and j.S2', notation: 'blabla', notationImage: '/key-moves-notation/ekko/ekko1.png', description: 'Rewind is a core mechanic in most of his combos and a tool for being safe in neutral', video: 'videos/ekko/illaekko.mp4' },
          { numericNotation: '5M', notation: 'blabla', notationImage: '/key-moves-notation/ekko/ekko2.png', description: 'One of the best 5Ms in the game. Reaches far and fast', video: 'videos/ekko/illaekko.mp4' },
          { numericNotation: 'S1 and 2S1', notation: 'blabla', notationImage: '/key-moves-notation/ekko/ekko3.png', description: 'Timewinder is an important option for covering the screen on the ground or against jump ins. Remember you can hit your timewinder with Ekko\'s heavy moves to throw it at your opponent.', video: 'videos/ekko/illaekko.mp4' },
          { numericNotation: 'j.66', notation: 'blabla', notationImage: '/key-moves-notation/ekko/ekko4.png', description: 'Amazing air mobility tool, useful for baiting anti airs and for crossing up at hard to predict angles', video: 'videos/ekko/illaekko.mp4' },
          { numericNotation: 'j.2H', notation: 'blabla', notationImage: '/key-moves-notation/ekko/ekko5.png', description: 'By itself or with his air dash, this move can be an easy crossup overhead that goes into a full combo', video: 'videos/ekko/illaekko.mp4' },
        { numericNotation: '6S1', notation: 'blabla', notationImage: '/key-moves-notation/ekko/ekko6.png', description: 'Risky move to use alone, but using it right before tagging out is an easy way to get ekko in with freestyle or just use him as a fake projectile', video: 'videos/ekko/illaekko.mp4' }
        ]
      },
      {
        id: 'optimal_punish_starts',
        title: 'Optimal Punish Starts',
        content: 'Passive: Z-Drive Resonance - Third hit deals bonus damage and grants movement speed. Q: Timewinder - Throws device that slows and returns. W: Parallel Convergence - Creates zone that slows and stuns enemies. E: Phase Dive - Dash and blink strike. Ultimate: Chronobreak - Returns to past position, healing and damaging.'
      },
      {
        id: 'important_solo_combos',
        title: 'Important Solo Combos',
        description: [

        ],
        combos: [
          { purpose: 'BnB', numericNotation: 'M H S2 S2 S1+L 2H S1 2S2 [2H] [j.H] j.d.S1 S2 H 2T', notationImage: '/combo-notation/ekko/ekko-combo-1.png', video: 'videos/ekko/ekko-combo-1.mp4' },
          { purpose: 'Corner Combo', numericNotation: 'M H S2 S2 S1+L 66 j.H j.S2 H 2H j.H j.S2', notationImage: '/combo-notation/ekko/ekko-combo-2.png', video: 'videos/ekko/ekko-combo-2.mp4' },
          { purpose: 'Side Swap', numericNotation: 'M H 2H j.M j.H j.S2 66 L M H 2H j.M j.H j.S2', notationImage: '/combo-notation/ekko/ekko-combo-3.png', video: 'videos/ekko/ekko-combo-3.mp4' },
          { purpose: 'Anti Air starter', numericNotation: '2H j.M j.H 66 j.H j.S2 2M 5M 5H 2H j.M j.H j.S2', notationImage: '/combo-notation/ekko/ekko-combo-4.png', video: 'videos/ekko/ekko-combo-4.mp4' },
        ]
      },
      {
        id: 'team_synergies',
        title: 'Team Synergies/Suggestions',
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
              'This matchup is all about mobility versus mobility. Both Ekko and Ahri have strong movement options and burst damage, making it a skill-based matchup where positioning and timing are crucial.',
              'The key to winning this matchup is respecting Ahri\'s Charm (E) while looking for opportunities to punish her cooldowns. Use your Parallel Convergence (W) to zone her during Spirit Rush, and remember that your ultimate can dodge her charm if timed correctly. Play around her charm cooldown and you\'ll find openings to land your burst combo.'
            ],
            keyPoints: [
              'Mobility vs Mobility matchup - whoever controls tempo wins',
              'Whoever lands CC first usually wins the trade',
              'Play around her charm cooldown window',
              'Respect her burst damage when her passive is stacked'
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
              'Braum is a challenging matchup for Ekko due to his defensive capabilities and crowd control. His shield can block your Timewinder projectiles, and his passive stacks can lead to devastating stuns.',
              'The key to this matchup is patience and positioning. Bait out his shield before committing with your full combo, and use your mobility to reposition around his shield angle. Avoid extended trades when his passive stacks are on you, and look for opportunities to catch him when he\'s separated from his team.'
            ],
            keyPoints: [
              'Tank matchup - very hard to burst down',
              'His shield negates most of your poke damage',
              'Avoid fighting with passive stacks on you',
              'Best to catch him isolated from his team'
            ],
            videos: []
          },
          'Darius': {
            difficulty: 'Medium',
            difficultyClass: 'medium',
            overview: [
              'Ekko has the advantage in this matchup thanks to his superior range and mobility. The key is maintaining distance to avoid Darius\' pull (E) and the outer ring of his Q, which deal the most damage.',
              'Use Phase Dive (E) to kite him effectively and never let him stack his passive bleed on you. If you make a mistake and take a bad trade, your ultimate is perfect for resetting the situation. Poke him down from distance and use your mobility to avoid his skillshots while chipping away at his health.'
            ],
            keyPoints: [
              'Range and mobility advantage is key to winning',
              'Never fight in melee range with his passive stacked',
              'Poke him down safely from distance',
              'Your ultimate can undo bad trades'
            ],
            videos: []
          },
          'Illaoi': {
            difficulty: 'Medium',
            difficultyClass: 'medium',
            overview: [
              'This is a favorable matchup for Ekko as your mobility counters Illaoi\'s immobile, area-control playstyle. The most important thing is dodging her Test of Spirit (E) - if she misses this ability, she becomes much less threatening.',
              'Use your superior mobility to avoid her tentacle slams and never fight when she uses her ultimate. Your W can zone her and force her to respect your space. Employ hit-and-run tactics, darting in for damage and getting out before she can retaliate. Never stand near her tentacles as they provide most of her damage and healing.'
            ],
            keyPoints: [
              'Mobility vs Immobile matchup heavily favors Ekko',
              'Dodging her E makes her much less threatening',
              'Never stand near multiple tentacles',
              'Hit and run tactics are extremely effective'
            ],
            videos: [
              { id: 'illaekko' }
            ]
          },
          'Jinx': {
            difficulty: 'Easy',
            difficultyClass: 'easy',
            overview: [
              'This is one of Ekko\'s easiest matchups. Jinx lacks mobility and escape tools, making her an ideal target for your assassination combo. Your E and R combo can easily close the gap and eliminate her.',
              'The only thing to watch out for is her flame chompers (E) when you\'re diving - try to bait them out first or dash around them. She has high damage output if left unchecked, but your burst damage can eliminate her before she has time to kite. This matchup heavily favors aggressive play from Ekko.'
            ],
            keyPoints: [
              'Very favorable matchup for Ekko',
              'She completely lacks escape tools',
              'Your assassination combo works perfectly on her',
              'Watch for her traps when diving'
            ],
            videos: []
          },
          'Vi': {
            difficulty: 'Hard',
            difficultyClass: 'hard',
            overview: [
              'Vi is a difficult matchup for Ekko because of her targeted ultimate that can lock you down. Once she commits to you, it\'s very difficult to escape her engage pattern and follow-up damage.',
              'The best strategy is to save your ultimate for after she engages on you, allowing you to return to your previous position and undo the damage. Your W can interrupt her Q dash if placed well and predicted correctly. Don\'t try to trade when her passive shield is up, and play around her ultimate cooldown. Positioning is crucial in this matchup.'
            ],
            keyPoints: [
              'She can lock you down with targeted CC',
              'Very difficult to escape once she commits',
              'Save your R for after her engage',
              'Play around her ultimate cooldown'
            ],
            videos: []
          },
          'Yasuo': {
            difficulty: 'Medium',
            difficultyClass: 'medium',
            overview: [
              'This is a skill-based matchup where both champions have significant outplay potential. Yasuo\'s Wind Wall can block your Timewinder (Q), so timing and ability management are crucial.',
              'Try to bait out his Wind Wall before committing your important abilities, and save your Q for after his wall expires. Your W stun can interrupt his dash patterns if you predict his movement correctly. Whoever controls the tempo of the fight typically wins. Your ultimate can negate his all-in attempts, giving you a defensive option when he commits.'
            ],
            keyPoints: [
              'Even skill matchup - both have outplay potential',
              'Wind Wall timing is absolutely crucial',
              'Whoever controls tempo wins the trades',
              'Your ultimate negates his all-in attempts'
            ],
            videos: [
              { id: '8qmI6OieGnI' }
            ]
          }
        }
      },
      {
        id: 'top_players',
        title: 'Top Players to Watch',
        description: 'Learn from the best Ekko players in the competitive scene.',
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
          {
            name: 'Player3',
            description: 'description',
            socials: {
              twitter: 'https://x.com/HikariNYC',
              youtube: 'https://youtube.com/@player3',
              twitch: 'https://twitch.tv/player3',
            }
          }
        ]
      },
    ]
  }