export const yasuo = {
  name: 'Yasuo',
  heroImageOffset: -365, // Vertical offset in px for hero banner image (negative = up, positive = down)
  tabs: [
    {
      id: 'key_moves',
      title: 'Key Moves',
      description: [
        'Yasuo is a high-skill skirmisher who flows through combat with dashes and windwalls.',
        'He scales incredibly well and rewards mastery.',
        'Best for players who enjoy mechanical expression and outplay potential.'
      ],
      moves: [
        { numericNotation: '5P', notation: 'Passive', notationImage: '/key-moves-notation/yasuo/yasuo-passive.png', description: 'Way of the Wanderer - Shield from movement, doubled crit chance', video: '/videos/yasuo-passive.mp4' },
        { numericNotation: '236P', notation: 'Q', notationImage: '/key-moves-notation/yasuo/yasuo-q.png', description: 'Steel Tempest - Thrust that becomes tornado on third cast', video: '/videos/yasuo-q.mp4' },
        { numericNotation: '214P', notation: 'W', notationImage: '/key-moves-notation/yasuo/yasuo-w.png', description: 'Wind Wall - Blocks projectiles', video: '/videos/yasuo-w.mp4' },
        { numericNotation: '623P', notation: 'E', notationImage: '/key-moves-notation/yasuo/yasuo-e.png', description: 'Sweeping Blade - Dash through units', video: '/videos/yasuo-e.mp4' },
        { numericNotation: '632146P', notation: 'R', notationImage: '/key-moves-notation/yasuo/yasuo-r.png', description: 'Last Breath - Blinks to airborne enemies and slashes', video: '/videos/yasuo-r.mp4' }
      ]
    },
    {
      id: 'important_solo_combos',
      title: 'Combos',
      content: 'Basic: E → Q → E. Airblade: E → Q (tornado) → R → Q. Keyblade: E → Q → Flash → R. Beyblade: E in circles → Q spam → Tornado. Poke: E (in) → Q → E (out).'
    },
    {
      id: 'team_synergies',
      title: 'Teams',
      content: 'Stack Q while farming. Use E for mobility and positioning. Wind Wall key abilities. Ultimate on any airborne target. Build flow for shield before trades.'
    },
    {
      id: 'matchups',
      title: 'Matchups',
      matchups: {
        'Ahri': {
          difficulty: 'Easy',
          difficultyClass: 'easy',
          overview: [
            'Yasuo has a favorable matchup against Ahri. Your Wind Wall completely negates her Charm and Orb of Deception, removing her main damage and crowd control tools.',
            'Time your Wind Wall to block her E and Q. Your mobility with Sweeping Blade makes you hard for her to hit. You can dash through her skill shots. All-in her when her abilities are on cooldown. Your passive shield absorbs her poke. Pressure her aggressively.'
          ],
          keyPoints: [
            'Wind Wall blocks her Q and E',
            'Your mobility makes you hard to hit',
            'Passive shield absorbs her poke',
            'All-in when her abilities are down'
          ],
          videos: []
        },
        'Braum': {
          difficulty: 'Medium',
          difficultyClass: 'medium',
          overview: [
            'This is an interesting defensive standoff. Both of you have tools to block projectiles and protect your team, but his crowd control can shut you down.',
            'Your Wind Wall matches his Unbreakable. Avoid getting hit by his passive stacks - they lead to a devastating stun. Your mobility helps you avoid his Q. Don\'t try to 1v1 him - he\'s too tanky. Focus on his backline instead.'
          ],
          keyPoints: [
            'Both have defensive tools',
            'Avoid his passive stun',
            'He\'s too tanky to focus',
            'Dive his backline instead'
          ],
          videos: []
        },
        'Darius': {
          difficulty: 'Easy',
          difficultyClass: 'easy',
          overview: [
            'Yasuo excels against Darius thanks to superior mobility. You can dash around him, poke with Q, and avoid his abilities with proper movement.',
            'Use minions to dash in and out. Dodge his Q outer ring and his pull. Never fight him in extended trades when he has passive stacks. Your Wind Wall doesn\'t help much since his abilities are melee, but your mobility is enough. Kite him with dash patterns.'
          ],
          keyPoints: [
            'Your mobility counters his immobility',
            'Dash in and out using minions',
            'Dodge his Q outer ring',
            'Don\'t fight with his passive stacked'
          ],
          videos: []
        },
        'Ekko': {
          difficulty: 'Medium',
          difficultyClass: 'medium',
          overview: [
            'This is a skill-based matchup between two mobile champions. Both have strong mobility, burst damage, and outplay potential.',
            'Your Wind Wall can block his Timewinder. Dash through his abilities to dodge them. Both of you can outplay each other - it comes down to who executes better. His ultimate can reset bad trades. Stack your Q while farming, then look for tornado knockup for R engage.'
          ],
          keyPoints: [
            'Skill-based matchup with high outplay potential',
            'Wind Wall blocks his Q',
            'Dash through his abilities',
            'His R can reset bad trades'
          ],
          videos: [
            { id: '8qmI6OieGnI' }
          ]
        },
        'Illaoi': {
          difficulty: 'Easy',
          difficultyClass: 'easy',
          overview: [
            'Yasuo does very well against Illaoi. Your mobility makes it nearly impossible for her to hit you with Test of Spirit or tentacle slams.',
            'Dash through minions to dodge her abilities. Your Wind Wall doesn\'t block her abilities since they\'re not projectiles, but your mobility is enough. Never fight in her ultimate. Poke her down from safety. Fight away from her tentacle zones.'
          ],
          keyPoints: [
            'Your mobility makes you very hard to hit',
            'Dash through minions to dodge',
            'Never fight in her R',
            'Fight away from tentacle zones'
          ],
          videos: []
        },
        'Jinx': {
          difficulty: 'Easy',
          difficultyClass: 'easy',
          overview: [
            'Jinx is an easy target for Yasuo. Your Wind Wall blocks her Zap and ultimate, and she has no mobility to escape your all-ins.',
            'Use Wind Wall to block her W and R. Dash through minions to close the gap. Once you\'re on top of her, she\'s dead. Watch for her Flame Chompers when diving. Stack Q using minions, then tornado into ultimate on her. This matchup heavily favors you.'
          ],
          keyPoints: [
            'Wind Wall blocks her W and R',
            'She has no mobility to escape',
            'Watch for traps when diving',
            'Stack Q then tornado + R her'
          ],
          videos: []
        },
        'Vi': {
          difficulty: 'Hard',
          difficultyClass: 'hard',
          overview: [
            'Vi is difficult for Yasuo because her ultimate is point-and-click and unavoidable. Wind Wall doesn\'t block it, and once she commits, you\'re locked down.',
            'Position carefully to avoid her R range. Your mobility doesn\'t help against targeted CC. Build defensively if she\'s targeting you. Try to bait her ultimate on someone else. If she does R you, hope your team can peel and kill her quickly.'
          ],
          keyPoints: [
            'Her R is unavoidable point-and-click',
            'Wind Wall doesn\'t block her R',
            'Position to stay out of her range',
            'Build defensively if she targets you'
          ],
          videos: []
        }
      }
    }
  ]
};
