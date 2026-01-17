export const jinx = {
  name: 'Jinx',
  heroImageOffset: -164, // Vertical offset in px for hero banner image (negative = up, positive = down)
  tabs: [
    {
      id: 'key_moves',
      title: 'Key Moves',
      description: [
        'Jinx is a hyperactive marksman who excels at ranged combat and area control.',
        'Her excitement mechanic makes her deadly when scoring takedowns.',
        'Perfect for players who love chaotic, explosive gameplay.'
      ],
      moves: [
        { numericNotation: '5P', notation: 'Passive', notationImage: '/key-moves-notation/jinx/jinx-passive.png', description: 'Get Excited! - Gain massive movement speed on takedown', video: '/videos/jinx-passive.mp4' },
        { numericNotation: '236P', notation: 'Q', notationImage: '/key-moves-notation/jinx/jinx-q.png', description: 'Switcheroo! - Toggle between Pow-Pow (attack speed) and Fishbones (range/AoE)', video: '/videos/jinx-q.mp4' },
        { numericNotation: '214P', notation: 'W', notationImage: '/key-moves-notation/jinx/jinx-w.png', description: 'Zap! - Long-range skillshot that slows', video: '/videos/jinx-w.mp4' },
        { numericNotation: '623P', notation: 'E', notationImage: '/key-moves-notation/jinx/jinx-e.png', description: 'Flame Chompers! - Deploy traps that snare', video: '/videos/jinx-e.mp4' },
        { numericNotation: '632146P', notation: 'R', notationImage: '/key-moves-notation/jinx/jinx-r.png', description: 'Super Mega Death Rocket! - Global execute', video: '/videos/jinx-r.mp4' }
      ]
    },
    {
      id: 'important_solo_combos',
      title: 'Combos',
      content: 'Poke: Fishbones → W for long-range harass. Trap Setup: E forward → Fishbones AoE. Execution: W → R on low target. All-in: E between → Pow-Pow autos → W. Cleanup: Get Excited → Fishbones for safe damage.'
    },
    {
      id: 'team_synergies',
      title: 'Teams',
      content: 'Maintain maximum range with Fishbones. Switch to Pow-Pow for DPS on tanks. Use traps to control space and peel. Ultimate for long-range executes. Play aggressively when excited.'
    },
    {
      id: 'matchups',
      title: 'Matchups',
      matchups: {
        'Ahri': {
          difficulty: 'Hard',
          difficultyClass: 'hard',
          overview: [
            'Ahri is a nightmare for Jinx. Her mobility and burst combo can delete you instantly, and you have no escape tools to avoid her Spirit Rush assassination.',
            'Your only defense is positioning and trap placement. Place Flame Chompers between you and her expected dash paths. Stay behind your frontline and hope they can peel her off. If she lands Charm, you\'re dead. Use your range advantage to poke before fights start.'
          ],
          keyPoints: [
            'She can assassinate you easily',
            'You have no escape from her dives',
            'Place traps defensively between you and her',
            'Rely on team peel to survive'
          ],
          videos: []
        },
        'Braum': {
          difficulty: 'Hard',
          difficultyClass: 'hard',
          overview: [
            'Braum is difficult whether he\'s protecting his team or diving yours. His shield blocks your Zap and reduces your poke damage significantly.',
            'Try to poke around his shield angle. His Stand Behind Me lets him reach you quickly, and his passive stun chain can lock you down. Place traps to slow his engage. Focus other targets when his shield is up. Your team needs to peel him off you.'
          ],
          keyPoints: [
            'His shield negates your poke',
            'He can reach you quickly with W',
            'His passive stun locks you down',
            'Poke around his shield angle'
          ],
          videos: []
        },
        'Darius': {
          difficulty: 'Hard',
          difficultyClass: 'hard',
          overview: [
            'If Darius reaches you, you\'re dead. That\'s the simple truth of this matchup. Your entire job is maintaining maximum distance and kiting with Fishbones.',
            'Place traps between you and him to slow his approach. Use your W to slow him from distance. If he uses Ghost or Flash, retreat immediately. Your team needs to peel him off. Never let him stack passive on you. Position very carefully in team fights.'
          ],
          keyPoints: [
            'If he reaches you, you die',
            'Maintain maximum distance always',
            'Place traps to slow his advance',
            'Your team must peel him off'
          ],
          videos: []
        },
        'Ekko': {
          difficulty: 'Hard',
          difficultyClass: 'hard',
          overview: [
            'Ekko is another mobile assassin who can delete you. His Phase Dive and ultimate make him very difficult to pin down, and once he\'s on you, you\'re in serious trouble.',
            'Place traps where you predict he\'ll dash to. Use your W to slow him from distance. Stay behind your frontline at all times. If he commits his ultimate, that\'s your window to damage him. You need team peel to survive his assassination attempts.'
          ],
          keyPoints: [
            'Mobile assassin that can delete you',
            'Place traps on predicted dash paths',
            'Stay behind frontline always',
            'Need team peel to survive'
          ],
          videos: []
        },
        'Illaoi': {
          difficulty: 'Easy',
          difficultyClass: 'easy',
          overview: [
            'Jinx does very well against Illaoi. You can outrange all her abilities with Fishbones and poke her down safely while staying away from her tentacles.',
            'Just dodge her Test of Spirit (E) and you\'re golden. Never fight near her tentacles or in her ultimate. Use Fishbones to poke from maximum range. If she uses Flash + E to reach you, use your traps and kite back. This matchup heavily favors you.'
          ],
          keyPoints: [
            'You outrange all her abilities',
            'Dodge her E and you\'re safe',
            'Never fight near tentacles',
            'Poke from max range with Fishbones'
          ],
          videos: []
        },
        'Vi': {
          difficulty: 'Hard',
          difficultyClass: 'hard',
          overview: [
            'Vi\'s point-and-click ultimate is a death sentence for Jinx. Once she presses R on you, there\'s no escape and you\'re taking the full combo.',
            'Your only counterplay is positioning to avoid being in her R range. Place traps between you and her to slow her approach. Stay behind your team. If she commits ultimate on you, pray your team can peel and kill her before she kills you. Build defensively if needed.'
          ],
          keyPoints: [
            'Her R is unavoidable point-and-click CC',
            'Position to stay out of her R range',
            'Place traps to slow her approach',
            'Hope for team peel when she dives'
          ],
          videos: []
        },
        'Yasuo': {
          difficulty: 'Medium',
          difficultyClass: 'medium',
          overview: [
            'Yasuo is challenging due to his Wind Wall blocking your Zap and Super Mega Death Rocket, plus his mobility makes him hard to pin down.',
            'Don\'t use your R when his Wind Wall is up. Bait the wall first with Zap or wait for it to expire. Place traps to limit his dash paths. Use Pow-Pow when he\'s forced into melee range. Switch to Fishbones to poke when he\'s dashing through minions.'
          ],
          keyPoints: [
            'Wind Wall blocks your W and R',
            'Bait wall before using important abilities',
            'Place traps to limit his dashes',
            'His mobility makes him hard to hit'
          ],
          videos: []
        }
      }
    }
  ]
};
