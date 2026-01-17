export const ahri = {
  name: 'Ahri',
  tabs: [
    {
      title: 'Key Moves',
      description: [
        'Ahri is a versatile mage assassin who excels at controlling space and punishing mistakes.',
        'Her charm ability can turn the tide of battle, while her mobility allows for aggressive plays and safe escapes.',
        'Best suited for players who enjoy mind games and positioning.'
      ],
      moves: [
        { numericNotation: '5P', notation: 'Passive', notationImage: '/key-moves-notation/ahri/ahri-passive.png', description: 'Essence Theft - Gain bonus damage after landing abilities', video: '/videos/ahri-passive.mp4' },
        { numericNotation: '236P', notation: 'Q', notationImage: '/key-moves-notation/ahri/ahri-q.png', description: 'Orb of Deception - Throws an orb that damages on the way out and back', video: '/videos/ahri-q.mp4' },
        { numericNotation: '214P', notation: 'W', notationImage: '/key-moves-notation/ahri/ahri-w.png', description: 'Fox-Fire - Summons flames that target nearby enemies', video: '/videos/ahri-w.mp4' },
        { numericNotation: '623P', notation: 'E', notationImage: '/key-moves-notation/ahri/ahri-e.png', description: 'Charm - Skillshot that charms and damages the first enemy hit', video: '/videos/ahri-e.mp4' },
        { numericNotation: '632146P', notation: 'R', notationImage: '/key-moves-notation/ahri/ahri-r.png', description: 'Spirit Rush - Dash multiple times with increased mobility', video: '/videos/ahri-r.mp4' }
      ]
    },
    {
      id: 'optimal_punish_starts',
      title: 'Optimal Punish Starts',
      content: 'Passive: Essence Theft - Gain bonus damage after landing abilities. Q: Orb of Deception - Throws an orb that damages on the way out and back. W: Fox-Fire - Summons flames that target nearby enemies. E: Charm - Skillshot that charms and damages the first enemy hit. Ultimate: Spirit Rush - Dash multiple times with increased mobility.'
    },
    {
      id: 'important_solo_combos',
      title: 'Important Solo Combos',
      content: 'Basic Combo: E → Q → W for confirmed damage. Advanced: R → E → Q → W → R for aggressive all-in. Escape: R → R → R to reposition safely. Poke: Q → W from safe distance. Team Fight: Position for multi-target Q, save E for priority targets.'
    },
    {
      id: 'team_synergies',
      title: 'Team Synergies/Suggestions',
      content: 'Focus on landing charm to set up combos. Use your mobility to control positioning and spacing. Play around your cooldowns and look for picks. In team fights, wait for opportunities rather than engaging first. Practice movement patterns to maximize orb damage.'
    },
    {
      id: 'matchups',
      title: 'Matchups',
      matchups: {
        'Braum': {
          difficulty: 'Hard',
          difficultyClass: 'hard',
          overview: [
            'Braum presents a significant challenge for Ahri. His Unbreakable shield can block your Orb of Deception and Charm, negating your primary trading tools and pick potential.',
            'The matchup requires patience and positioning. Try to bait out his shield before using your key abilities, or angle your skillshots to hit around his shield. Your mobility with Spirit Rush can help you reposition, but be wary of his crowd control chain if you get too close.'
          ],
          keyPoints: [
            'His shield blocks your Q and E completely',
            'Wait for shield to go down before committing abilities',
            'Avoid extended trades when his passive stacks are on you',
            'Use Spirit Rush to reposition around his shield angle'
          ],
          videos: []
        },
        'Darius': {
          difficulty: 'Medium',
          difficultyClass: 'medium',
          overview: [
            'This matchup favors Ahri due to her range and mobility advantages. The key is never letting Darius get close enough to pull you or land his Q outer ring.',
            'Your Charm can interrupt his Decimate and prevent him from healing. Use your mobility to kite him and poke from safe distance. If he manages to get close, Spirit Rush away immediately. Never fight him when he has full passive stacks.'
          ],
          keyPoints: [
            'Maintain distance and use range advantage',
            'Charm cancels his Q animation',
            'Spirit Rush away if he gets close',
            'Never fight with 5 bleed stacks'
          ],
          videos: []
        },
        'Ekko': {
          difficulty: 'Medium',
          difficultyClass: 'medium',
          overview: [
            'This is a pure skill matchup between two mobile burst mages. Both champions have strong mobility, burst damage, and crowd control, making every exchange matter.',
            'Landing your Charm is crucial for confirming your combo. His ultimate can reset bad trades, so try to force it out before committing to an all-in. Your Spirit Rush gives you more mobility charges, which can be an advantage in extended fights.'
          ],
          keyPoints: [
            'Skill-based matchup, both have similar tools',
            'Landing CC first is crucial',
            'Track his ultimate cooldown before all-ins',
            'Your R gives more mobility charges than his E'
          ],
          videos: []
        },
        'Illaoi': {
          difficulty: 'Easy',
          difficultyClass: 'easy',
          overview: [
            'Ahri excels against Illaoi thanks to superior mobility and range. Illaoi is immobile and struggles to land her abilities on a mobile target like Ahri.',
            'The main danger is her Test of Spirit (E). Dodge this ability and she becomes much less threatening. Use your dashes to avoid tentacle slams and never fight her in her ultimate. Poke her down from range and use your mobility to dodge her telegraphed abilities.'
          ],
          keyPoints: [
            'Heavy mobility advantage in your favor',
            'Dodge her E and she has no threat',
            'Stay away from tentacles',
            'Never fight in her ultimate'
          ],
          videos: []
        },
        'Jinx': {
          difficulty: 'Easy',
          difficultyClass: 'easy',
          overview: [
            'This is a very favorable matchup for Ahri. Jinx has no mobility and weak self-peel, making her an easy target for your assassination combo.',
            'Your Charm into full combo can eliminate her quickly. Watch out for her Flame Chompers when diving, but otherwise this matchup is straightforward. Her only defense is positioning and team protection.'
          ],
          keyPoints: [
            'Very favorable - she has no escape',
            'E + Q + W combo can kill her easily',
            'Watch for trap placement when diving',
            'Focus her in team fights'
          ],
          videos: []
        },
        'Vi': {
          difficulty: 'Hard',
          difficultyClass: 'hard',
          overview: [
            'Vi\'s point-and-click ultimate makes this a difficult matchup. Once she commits her R to you, there\'s no outplaying it with Charm or dashes.',
            'Position carefully and respect her engage range. Your Spirit Rush can help you escape after her initial combo, but the lockdown is unavoidable. Try to poke her down before she can commit to an all-in, and stay near your team for peel.'
          ],
          keyPoints: [
            'Her ultimate cannot be dodged',
            'Position defensively and respect her range',
            'Use Spirit Rush after her combo to escape',
            'Poke before she can engage'
          ],
          videos: []
        },
        'Yasuo': {
          difficulty: 'Hard',
          difficultyClass: 'hard',
          overview: [
            'Yasuo is one of Ahri\'s hardest matchups due to his Wind Wall completely negating your Charm and Orb. Without these abilities, your damage and pick potential are severely limited.',
            'Bait out his Wind Wall before using your important abilities. Track the wall cooldown carefully. His mobility with Sweeping Blade can make him hard to hit, and his passive shield absorbs poke. Look for opportunities when he\'s used E on minions and has fewer dash targets.'
          ],
          keyPoints: [
            'Wind Wall blocks your Q and E',
            'Bait wall before using key abilities',
            'His mobility makes him hard to hit',
            'Wait for him to use E on minions'
          ],
          videos: []
        }
      }
    }
  ]
};
