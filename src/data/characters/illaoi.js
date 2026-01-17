export const illaoi = {
  name: 'Illaoi',
  heroImageOffset: -57, // Vertical offset in px for hero banner image (negative = up, positive = down)
  tabs: [
    {
      id: 'key_moves',
      title: 'Key Moves',
      description: [
        'Illaoi is a powerful juggernaut who dominates through zone control and area denial.',
        'She thrives when multiple enemies engage her.',
        'Best for players who enjoy standing their ground and turning ganks into victories.'
      ],
      moves: [
        { numericNotation: '5P', notation: 'Passive', notationImage: '/key-moves-notation/illaoi/illaoi-passive.png', description: 'Prophet of an Elder God - Tentacles spawn near Illaoi', video: '/videos/illaoi-passive.mp4' },
        { numericNotation: '236P', notation: 'Q', notationImage: '/key-moves-notation/illaoi/illaoi-q.png', description: 'Tentacle Smash - Slams tentacle in direction', video: '/videos/illaoi-q.mp4' },
        { numericNotation: '214P', notation: 'W', notationImage: '/key-moves-notation/illaoi/illaoi-w.png', description: 'Harsh Lesson - Leap to target, nearby tentacles slam', video: '/videos/illaoi-w.mp4' },
        { numericNotation: '623P', notation: 'E', notationImage: '/key-moves-notation/illaoi/illaoi-e.png', description: 'Test of Spirit - Pulls enemy spirit, tentacles hit both', video: '/videos/illaoi-e.mp4' },
        { numericNotation: '632146P', notation: 'R', notationImage: '/key-moves-notation/illaoi/illaoi-r.png', description: 'Leap of Faith - Slams ground, summons tentacles', video: '/videos/illaoi-r.mp4' }
      ]
    },
    {
      id: 'optimal_punish_starts',
      title: 'Optimal Punish Starts',
      content: 'Passive: Prophet of an Elder God - Tentacles spawn near Illaoi. Q: Tentacle Smash - Slams tentacle in direction. W: Harsh Lesson - Leap to target, nearby tentacles slam. E: Test of Spirit - Pulls enemy spirit, tentacles hit both. Ultimate: Leap of Faith - Slams ground, summons tentacles.'
    },
    {
      id: 'important_solo_combos',
      title: 'Important Solo Combos',
      content: 'Harass: E → Q → W on spirit. All-in: R → W → Q → E → W. Multiple Enemies: R when grouped → W spam. Spirit Kill: E → Auto → Q → W → Q. Tentacle Rotation: W → Auto → Q → W.'
    },
    {
      id: 'team_synergies',
      title: 'Team Synergies/Suggestions',
      content: 'Control areas with tentacle spawns. Land spirit pulls to win trades. Ultimate when outnumbered for maximum value. Use W to trigger all nearby tentacles. Fight in areas with multiple tentacles.'
    },
    {
      id: 'matchups',
      title: 'Matchups',
      matchups: {
        'Ahri': {
          difficulty: 'Hard',
          difficultyClass: 'hard',
          overview: [
            'Ahri is one of Illaoi\'s worst matchups. Her mobility makes it nearly impossible to land Test of Spirit, and she can dodge your tentacle slams with ease.',
            'This matchup is about patience and setup. Try to force her into areas with multiple tentacles. If she gets greedy for CS, that\'s when you can land E. Save your ultimate for when she commits Spirit Rush, but she can usually dash away before you get value.'
          ],
          keyPoints: [
            'Her mobility makes landing E very difficult',
            'She can dodge tentacle slams easily',
            'Force her into tentacle zones for CS',
            'She usually escapes before you get R value'
          ],
          videos: []
        },
        'Braum': {
          difficulty: 'Hard',
          difficultyClass: 'hard',
          overview: [
            'Braum\'s shield and mobility make him frustrating for Illaoi. He can block your Test of Spirit with Unbreakable, removing your primary trading tool.',
            'Try to bait his shield before using E. His Stand Behind Me helps his team avoid your tentacles. Don\'t waste ultimate on him alone - he\'s too tanky. Focus on landing E when his shield is down and controlling zones his team needs to enter.'
          ],
          keyPoints: [
            'His shield blocks your E',
            'His W helps team avoid tentacles',
            'Don\'t waste R on him alone',
            'Bait shield before using E'
          ],
          videos: []
        },
        'Darius': {
          difficulty: 'Medium',
          difficultyClass: 'medium',
          overview: [
            'This is a juggernaut duel that depends on positioning and tentacle setup. Both of you want extended fights, so it comes down to whose setup is better.',
            'Land your E before he can stack passive. Fight in areas with multiple tentacles. Your ultimate gives you more tentacles, which can outvalue his passive if positioned well. Dodge his Q outer ring. Whoever gets their setup first usually wins.'
          ],
          keyPoints: [
            'Juggernaut duel - setup matters most',
            'Land E before he stacks passive',
            'Fight in tentacle zones',
            'Dodge his Q outer ring'
          ],
          videos: []
        },
        'Ekko': {
          difficulty: 'Hard',
          difficultyClass: 'hard',
          overview: [
            'Ekko\'s mobility is a major problem for Illaoi. He can dodge your abilities easily and poke you down from range while staying safe.',
            'This matchup requires prediction over reaction. Place tentacles where he\'s likely to dash to. If you land E, commit hard immediately before he escapes. His ultimate resets bad trades, so you need to zone him first. Never chase him - make him come to you.'
          ],
          keyPoints: [
            'His mobility makes hitting abilities hard',
            'Predict his dashes, don\'t react',
            'Commit hard if E lands',
            'Never chase him'
          ],
          videos: [
            { id: 'illaekko' }
          ]
        },
        'Jinx': {
          difficulty: 'Hard',
          difficultyClass: 'hard',
          overview: [
            'Jinx can poke you from outside your effective range with Fishbones, making it hard to get value. She has no mobility but her range keeps her safe.',
            'You need to land E to have any threat on her. Use Flash + E if necessary. Her Flame Chompers can stop your engage. Once you get on top of her with ultimate, she dies, but getting there is the challenge. Force her to come to you for objectives.'
          ],
          keyPoints: [
            'She outranges you significantly',
            'Need Flash + E to reach her',
            'Her traps stop your engage',
            'Force her to come to you'
          ],
          videos: []
        },
        'Vi': {
          difficulty: 'Easy',
          difficultyClass: 'easy',
          overview: [
            'Vi engages into you, which is exactly what you want as Illaoi. When she commits with her ultimate, she\'s stuck in your zone where your tentacles can smash her.',
            'Bait her to engage when you\'re in a tentacle zone. Once she commits R, immediately use your ultimate and W to destroy her with tentacle slams. She\'s tanky but your percent health damage and multiple tentacles overwhelm her quickly.'
          ],
          keyPoints: [
            'She engages into your ideal range',
            'Bait her engage in tentacle zones',
            'R immediately when she commits',
            'Your % damage beats her tankiness'
          ],
          videos: []
        },
        'Yasuo': {
          difficulty: 'Hard',
          difficultyClass: 'hard',
          overview: [
            'Yasuo\'s mobility with Sweeping Blade makes him very difficult to hit with your abilities. He can dash around your tentacles and poke safely.',
            'Try to fight when there are fewer minions for him to dash through. His Wind Wall doesn\'t block your abilities since they\'re not projectiles, which is good. Land E when he\'s committed to a dash pattern. Place tentacles to cover multiple dash paths.'
          ],
          keyPoints: [
            'His dashes make him very hard to hit',
            'Wind Wall doesn\'t block your abilities',
            'Fight with fewer minions around',
            'Cover multiple dash paths with tentacles'
          ],
          videos: []
        }
      }
    }
  ]
};
