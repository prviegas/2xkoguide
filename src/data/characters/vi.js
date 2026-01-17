export const vi = {
  name: 'Vi',
  heroImageOffset: -145, // Vertical offset in px for hero banner image (negative = up, positive = down)
  tabs: [
    {
      id: 'key_moves',
      title: 'Key Moves',
      description: [
        'Vi is an aggressive diver who excels at picking off priority targets.',
        'Her ultimate provides reliable engage.',
        'Great for players who enjoy straightforward, impactful plays and diving backlines.'
      ],
      moves: [
        { numericNotation: '5P', notation: 'Passive', notationImage: '/key-moves-notation/vi/vi-passive.png', description: 'Blast Shield - Periodically gain shield', video: '/videos/vi-passive.mp4' },
        { numericNotation: '236P', notation: 'Q', notationImage: '/key-moves-notation/vi/vi-q.png', description: 'Vault Breaker - Charge and dash punch that knocks back', video: '/videos/vi-q.mp4' },
        { numericNotation: '214P', notation: 'W', notationImage: '/key-moves-notation/vi/vi-w.png', description: 'Denting Blows - Every third hit deals % health damage', video: '/videos/vi-w.mp4' },
        { numericNotation: '623P', notation: 'E', notationImage: '/key-moves-notation/vi/vi-e.png', description: 'Excessive Force - Empowered punches that hit in line', video: '/videos/vi-e.mp4' },
        { numericNotation: '632146P', notation: 'R', notationImage: '/key-moves-notation/vi/vi-r.png', description: 'Assault and Battery - Unstoppable charge that knocks up target', video: '/videos/vi-r.mp4' }
      ]
    },
    {
      id: 'optimal_punish_starts',
      title: 'Optimal Punish Starts',
      content: 'Passive: Blast Shield - Periodically gain shield. Q: Vault Breaker - Charge and dash punch that knocks back. W: Denting Blows - Every third hit deals % health damage. E: Excessive Force - Empowered punches that hit in line. Ultimate: Assault and Battery - Unstoppable charge that knocks up target.'
    },
    {
      id: 'important_solo_combos',
      title: 'Important Solo Combos',
      content: 'Engage: R → Auto → E → Q (charged). Burst: Q (full charge) → Auto → E → Auto → E. Peel: Q to interrupt → E → Auto. Chase: R → Auto until Q ready → Q. Quick Trade: Q (partial) → Auto → E → disengage.'
    },
    {
      id: 'team_synergies',
      title: 'Team Synergies/Suggestions',
      content: 'Target high-value enemies with ultimate. Proc W passive consistently. Use Q as follow-up or escape. Save E for damage or waveclear. Coordinate dives with team.'
    },
    {
      id: 'matchups',
      title: 'Matchups',
      matchups: {
        'Ahri': {
          difficulty: 'Medium',
          difficultyClass: 'medium',
          overview: [
            'This matchup is relatively even. Your ultimate is point-and-click so she can\'t dodge it, but she can escape after your initial combo with Spirit Rush.',
            'The key is committing when her dashes are down or used. Track her Spirit Rush cooldown. Once you land R, she\'s locked down, but you need follow-up damage to kill her. Your Q can be dodged with her mobility. Wait for her to waste dashes before engaging.'
          ],
          keyPoints: [
            'Your R is unavoidable, but she can escape after',
            'Track her Spirit Rush cooldown',
            'She can dodge your Q easily',
            'Need follow-up damage to secure kill'
          ],
          videos: []
        },
        'Braum': {
          difficulty: 'Medium',
          difficultyClass: 'medium',
          overview: [
            'Braum is tankier than you\'d like, and his peel makes reaching his backline difficult. Both of you are engage champions, so it\'s about who commits better.',
            'Your ultimate goes through his shield, which is good. Focus on diving his carries rather than fighting him. His passive stun can lock you down if you\'re not careful. Use your Q to close gaps he creates with Stand Behind Me.'
          ],
          keyPoints: [
            'Your R goes through his shield',
            'He\'s too tanky to focus',
            'His passive can lock you down',
            'Dive his carries instead'
          ],
          videos: []
        },
        'Darius': {
          difficulty: 'Hard',
          difficultyClass: 'hard',
          overview: [
            'Darius is a bad target for your ultimate. He\'s tanky and wants you in melee range where he excels. Diving him often results in you dying to his stacked passive.',
            'Only engage on him if he\'s isolated and low. His pull and W slow keep you in range for his passive stacks. Your % health damage from W helps but isn\'t enough. Dive his backline instead. If forced to fight him, burst and get out before he stacks passive.'
          ],
          keyPoints: [
            'Bad target - tanky and wants melee range',
            'His passive kills you in extended fights',
            'Dive his backline instead',
            'Only fight him if he\'s isolated and low'
          ],
          videos: []
        },
        'Ekko': {
          difficulty: 'Medium',
          difficultyClass: 'medium',
          overview: [
            'Ekko is a good target for your ultimate since he\'s squishy, but his ultimate can reset the entire fight. Time your engage carefully.',
            'Track his Chronobreak cooldown before committing. Once you R him, burst him down quickly before he can escape. Your Q can catch him mid-dash. If he uses his ultimate, you\'ve wasted your cooldowns. Try to force his R before your team fight commitment.'
          ],
          keyPoints: [
            'Good target but his R resets fights',
            'Track his ultimate cooldown',
            'Burst him quickly after R',
            'Your Q can catch his dashes'
          ],
          videos: []
        },
        'Illaoi': {
          difficulty: 'Hard',
          difficultyClass: 'hard',
          overview: [
            'Don\'t engage on Illaoi in her tentacle zones. She wants you to dive her so she can ultimate and kill you with tentacle slams.',
            'Only fight her away from tentacles and when her ultimate is down. Your dive plays into her fantasy. Dive her carries instead. If you must fight her, short trade with Q and get out before she can retaliate. Never fight in her ultimate.'
          ],
          keyPoints: [
            'She wants you to dive her',
            'Never fight in tentacle zones',
            'Never fight in her ultimate',
            'Dive her carries instead'
          ],
          videos: []
        },
        'Jinx': {
          difficulty: 'Easy',
          difficultyClass: 'easy',
          overview: [
            'Jinx is one of your ideal targets. She has no mobility and once you press R, she\'s locked down and dead.',
            'Your ultimate is point-and-click so she can\'t escape. Watch for her Flame Chompers and avoid them before engaging. Burst her quickly with your full combo. She\'s squishy and has no defensive tools. This matchup heavily favors you.'
          ],
          keyPoints: [
            'Ideal target - no mobility',
            'Your R locks her down completely',
            'Watch for traps before engaging',
            'She has no defensive tools'
          ],
          videos: []
        },
        'Yasuo': {
          difficulty: 'Medium',
          difficultyClass: 'medium',
          overview: [
            'Yasuo can be tricky due to his Wind Wall blocking your Q, but your ultimate goes through it. His mobility makes him slippery.',
            'Don\'t waste your Q into his Wind Wall. Use your ultimate to catch him, then use Q after the wall expires. His mobility makes him hard to corner. Time your engage when he\'s used dashes on minions. Your lockdown with R and passive keeps him from escaping.'
          ],
          keyPoints: [
            'Wind Wall blocks Q but not R',
            'Don\'t waste Q into his wall',
            'His mobility makes him slippery',
            'Engage when he\'s used dashes'
          ],
          videos: []
        }
      }
    }
  ]
};
