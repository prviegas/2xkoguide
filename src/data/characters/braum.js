export const braum = {
  name: 'Braum',
  heroImageOffset: -82, // Vertical offset in px for hero banner image (negative = up, positive = down)
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
      id: 'important_solo_combos',
      title: 'Important Solo Combos',
      content: 'Engage: Q → Auto → W (to ally) → E (block retaliation). Peel: E (block) → Q → Auto until stun. Ultimate Setup: R → Q → Auto for extended CC. Team Support: W to endangered ally → E to block. Counter: Time E to block key abilities.'
    },
    {
      id: 'team_synergies',
      title: 'Team Synergies/Suggestions',
      content: 'Position between enemies and your team. Use shield to block critical abilities. Stack passive on priority targets for team follow-up. Save dash for emergency peels or engages. Communicate ultimate usage for team coordination.'
    },
    {
      id: 'matchups',
      title: 'Matchups',
      matchups: {
        'Ahri': {
          difficulty: 'Easy',
          difficultyClass: 'easy',
          overview: [
            'Braum has the tools to shut down Ahri effectively. Your Unbreakable shield can block both her Orb of Deception and Charm, removing her main damage and crowd control options.',
            'Position your shield to protect yourself and allies from her burst combo. Your passive stun can lock her down if she gets too close. The key is timing your shield correctly and protecting your team from her assassination attempts.'
          ],
          keyPoints: [
            'Your shield completely negates her Q and E',
            'Passive stun can lock her down',
            'Protect your backline from her dives',
            'Time shield for her key abilities'
          ],
          videos: []
        },
        'Darius': {
          difficulty: 'Medium',
          difficultyClass: 'medium',
          overview: [
            'This matchup comes down to whether you can peel for your team before Darius stacks his passive. Your shield doesn\'t help much against his sustained melee damage.',
            'Use your Q to slow him and allow your team to kite. Your passive stun is valuable for stopping his rampage. Save your ultimate to knock him up during critical moments. Don\'t try to 1v1 him when he has passive stacks.'
          ],
          keyPoints: [
            'Your shield doesn\'t help vs melee damage',
            'Use Q slow to enable team kiting',
            'Passive stun is valuable for stopping him',
            'Save R for critical moments'
          ],
          videos: []
        },
        'Ekko': {
          difficulty: 'Hard',
          difficultyClass: 'hard',
          overview: [
            'Ekko\'s mobility and burst damage make this challenging for Braum. While you can block his Timewinder, his blink and multiple dashes make it hard to lock him down.',
            'Focus on protecting your backline from his assassination attempts. Your shield angle is crucial - position it to block his Q while staying close to allies. Your passive can set up kills if you catch him, but his ultimate allows him to escape bad situations.'
          ],
          keyPoints: [
            'His mobility makes him hard to catch',
            'Focus on protecting your carries',
            'Shield angle is crucial',
            'His R lets him escape bad trades'
          ],
          videos: []
        },
        'Illaoi': {
          difficulty: 'Easy',
          difficultyClass: 'easy',
          overview: [
            'Braum does well against Illaoi. Your mobility with Stand Behind Me helps your team avoid her tentacle slams, and your shield can block her Test of Spirit.',
            'Use your shield to block her E, preventing her from pulling spirits. Your ultimate can interrupt her Test of Spirit and zone her. Help your team disengage when she uses her ultimate. Your passive and crowd control prevent her from freely setting up.'
          ],
          keyPoints: [
            'Shield blocks her E spirit pull',
            'W dash helps team avoid tentacles',
            'R interrupts her setup',
            'Help team disengage from her ultimate'
          ],
          videos: []
        },
        'Jinx': {
          difficulty: 'Easy',
          difficultyClass: 'easy',
          overview: [
            'Braum excels at protecting Jinx or fighting against her. If she\'s your ally, you provide perfect peel. If she\'s your enemy, she has no way to deal with your engage and shield.',
            'When fighting against Jinx, your shield blocks her Zap and reduces her poke significantly. Your engage tools can reach her despite her range, and she has no escape from your passive stun chain.'
          ],
          keyPoints: [
            'Shield blocks her W poke',
            'She has no escape from your stun',
            'Easy to reach with W and R',
            'Perfect peel if she\'s your ally'
          ],
          videos: []
        },
        'Vi': {
          difficulty: 'Medium',
          difficultyClass: 'medium',
          overview: [
            'Both champions are engage tanks, making this a skill matchup about who engages better. Vi\'s ultimate goes through your shield, but you can protect your carries from her follow-up.',
            'You can\'t stop her ultimate, but you can shield the damage from her Q and E. Position to bodyblock for your carries after she commits. Your passive can help chain CC her after her engage. Time your shield for her E punches.'
          ],
          keyPoints: [
            'Her R goes through your shield',
            'Shield her Q and E follow-up',
            'Position to bodyblock for carries',
            'Chain CC with your passive'
          ],
          videos: []
        },
        'Yasuo': {
          difficulty: 'Medium',
          difficultyClass: 'medium',
          overview: [
            'Interesting matchup where both champions have defensive tools. Your shield and his Wind Wall create a strategic standoff, while your stun can interrupt his aggressive dashes.',
            'Your shield blocks his Q poke, but he can dash around to reposition. Your passive stun is excellent for stopping his dash chains. Protect your team from his tornado knockups, and save your ultimate to peel him off your carries.'
          ],
          keyPoints: [
            'Shield blocks his Q projectiles',
            'Passive stun stops his dash chains',
            'Protect team from his knockups',
            'Both have strong defensive tools'
          ],
          videos: []
        }
      }
    }
  ]
};
