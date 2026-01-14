export const charactersData = [
  {
    id: 1,
    name: 'Ahri',
    tabs: [
      {
        id: 'key_moves',
        title: 'Key Moves',
        description: [
          'Ahri is a versatile mage assassin who excels at controlling space and punishing mistakes.',
          'Her charm ability can turn the tide of battle, while her mobility allows for aggressive plays and safe escapes.',
          'Best suited for players who enjoy mind games and positioning.'
        ],
        moves: [
          { numericNotation: '5P', notation: 'Passive', description: 'Essence Theft - Gain bonus damage after landing abilities', video: '/videos/ahri-passive.mp4' },
          { numericNotation: '236P', notation: 'Q', description: 'Orb of Deception - Throws an orb that damages on the way out and back', video: '/videos/ahri-q.mp4' },
          { numericNotation: '214P', notation: 'W', description: 'Fox-Fire - Summons flames that target nearby enemies', video: '/videos/ahri-w.mp4' },
          { numericNotation: '623P', notation: 'E', description: 'Charm - Skillshot that charms and damages the first enemy hit', video: '/videos/ahri-e.mp4' },
          { numericNotation: '632146P', notation: 'R', description: 'Spirit Rush - Dash multiple times with increased mobility', video: '/videos/ahri-r.mp4' }
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

    ]
  },
  {
    id: 2,
    name: 'Braum',
    tabs: [
      {
        id: 'key_moves',
        title: 'Key Moves',
        description: [
          'Braum is a defensive tank who protects his team with his shield and crowd control.',
          'He excels at peeling for allies and setting up engagements.',
          'Best for players who enjoy supportive play and controlling enemy aggression.'
        ],
        moves: [
          { numericNotation: '5P', notation: 'Passive', description: 'Concussive Blows - Attacks apply stacks, stunning at 4 stacks', video: '/videos/braum-passive.mp4' },
          { numericNotation: '236P', notation: 'Q', description: "Winter's Bite - Projectile that slows and applies passive", video: '/videos/braum-q.mp4' },
          { numericNotation: '214P', notation: 'W', description: 'Stand Behind Me - Dash to ally, granting armor', video: '/videos/braum-w.mp4' },
          { numericNotation: '623P', notation: 'E', description: 'Unbreakable - Shield that blocks projectiles', video: '/videos/braum-e.mp4' },
          { numericNotation: '632146P', notation: 'R', description: 'Glacial Fissure - Line knockup that creates a slow field', video: '/videos/braum-r.mp4' }
        ]
      },
      {
        id: 'optimal_punish_starts',
        title: 'Optimal Punish Starts',
        content: 'Passive: Concussive Blows - Attacks apply stacks, stunning at 4 stacks. Q: Winter\'s Bite - Projectile that slows and applies passive. W: Stand Behind Me - Dash to ally, granting armor. E: Unbreakable - Shield that blocks projectiles. Ultimate: Glacial Fissure - Line knockup that creates a slow field.'
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
        content: 'Strong Against: Projectile-heavy teams, dive compositions. Weak Against: Area denial, percent health damage. Tips: Angle shield to protect multiple allies. Track enemy cooldowns for optimal shield timing. Use terrain to funnel enemies.'
      }
    ]
  },
  {
    id: 3,
    name: 'Darius',
    tabs: [
      {
        id: 'key_moves',
        title: 'Key Moves',
        description: [
          'Darius is a juggernaut who dominates close-range combat through sustained damage and executions.',
          'He becomes increasingly dangerous as fights continue.',
          'Perfect for players who enjoy aggressive, in-your-face combat.'
        ],
        moves: [
          { numericNotation: '5P', notation: 'Passive', description: 'Hemorrhage - Bleeds enemies, gaining bonus AD at 5 stacks', video: '/videos/darius-passive.mp4' },
          { numericNotation: '236P', notation: 'Q', description: 'Decimate - Swing axe in circle, heal from blade hits', video: '/videos/darius-q.mp4' },
          { numericNotation: '214P', notation: 'W', description: 'Crippling Strike - Empowered attack that slows', video: '/videos/darius-w.mp4' },
          { numericNotation: '623P', notation: 'E', description: 'Apprehend - Pull enemies and gain armor pen', video: '/videos/darius-e.mp4' },
          { numericNotation: '632146P', notation: 'R', description: 'Noxian Guillotine - Execute that resets on kill', video: '/videos/darius-r.mp4' }
        ]
      },
      {
        id: 'optimal_punish_starts',
        title: 'Optimal Punish Starts',
        content: 'Passive: Hemorrhage - Bleeds enemies, gaining bonus AD at 5 stacks. Q: Decimate - Swing axe in circle, heal from blade hits. W: Crippling Strike - Empowered attack that slows. E: Apprehend - Pull enemies and gain armor pen. Ultimate: Noxian Guillotine - Execute that resets on kill.'
      },
      {
        id: 'important_solo_combos',
        title: 'Important Solo Combos',
        content: 'All-in: E → W → Auto → Q (blade) → R. Stack Building: Auto → W → Auto → Q → Auto. Reset Chain: R → R → R on multiple low enemies. Zone Control: Q spam to keep enemies at bay. Trade: E → W → Auto → disengage.'
      },
      {
        id: 'team_synergies',
        title: 'Team Synergies/Suggestions',
        content: 'Build passive stacks before committing ultimate. Position Q for blade hits. Use pull to catch fleeing enemies or interrupt dashes. Save ultimate for executes or high-value targets. Play aggressively once stacked.'
      },
      {
        id: 'matchups',
        title: 'Matchups',
        content: 'Strong Against: Squishy melee, low mobility. Weak Against: Ranged kiting, high mobility. Tips: Use ghost/flash for gap closing. Punish enemy cooldowns. Be patient in stacking passive. Respect disengage tools.'
      }
    ]
  },
  {
    id: 4,
    name: 'Ekko',
    tabs: [
      {
        id: 'key_moves',
        title: 'Key Moves',
        description: [
         
        ],
        moves: [
          { numericNotation: 'S2, 2S2 and j.S2', notation: 'blabla', description: 'Rewind is a core mechanic in most of his combos and a tool for being safe in neutral', video: '../../public/videos/ekko/illaekko.mp4' },
          { numericNotation: '5M', notation: 'blabla', description: 'One of the best 5Ms in the game. Reaches far and fast', video: '/videos/ekko-q.mp4' },
          { numericNotation: 'S1 and 2S1', notation: 'blabla', description: 'Timewinder is an important option for covering the screen on the ground or against jump ins. Remember you can hit your timewinder with Ekko\'s heavy moves to throw it at your opponent.', video: '/videos/ekko-w.mp4' },
          { numericNotation: 'Air dash', notation: 'blabla', description: 'Amazing air mobility tool, useful for baiting anti airs and for crossing up at hard to predict angles', video: '/videos/ekko-e.mp4' },
          { numericNotation: 'j.2H', notation: 'blabla', description: 'By itself or with his air dash, this move can be an easy crossup overhead that goes into a full combo', video: '/videos/ekko-r.mp4' },
        { numericNotation: 'j.6S1', notation: 'blabla', description: 'Risky move to use alone, but using it right before tagging out is an easy way to get ekko in with freestyle or just use him as a fake projectile', video: '/videos/ekko-special.mp4' }
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
        content: 'Burst: E → Auto → Q → Auto → Proc Passive. Zone Setup: W → E in → Q → R out. Poke: Q → E (if safe) → Auto. All-in: W → Wait → E → Auto → Q → Auto → R. Chase: E → Q forward → Auto for slow.'
      },
      {
        id: 'team_synergies',
        title: 'Team Synergies/Suggestions',
        content: 'Track your ghost position for ultimate timing. Use W preemptively for zone control. Proc passive for movement speed in skirmishes. Play around cooldowns aggressively. Use ultimate for resets or escapes.'
      },
      {
        id: 'matchups',
        title: 'Matchups',
        content: 'Strong Against: Squishy burst mages, immobile targets. Weak Against: Tanks, sustained damage. Tips: Ultimate is both offensive and defensive. Bait abilities before committing. Use mobility to dodge skillshots. Time W for maximum impact.'
      }
    ]
  },
  {
    id: 5,
    name: 'Illaoi',
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
          { numericNotation: '5P', notation: 'Passive', description: 'Prophet of an Elder God - Tentacles spawn near Illaoi', video: '/videos/illaoi-passive.mp4' },
          { numericNotation: '236P', notation: 'Q', description: 'Tentacle Smash - Slams tentacle in direction', video: '/videos/illaoi-q.mp4' },
          { numericNotation: '214P', notation: 'W', description: 'Harsh Lesson - Leap to target, nearby tentacles slam', video: '/videos/illaoi-w.mp4' },
          { numericNotation: '623P', notation: 'E', description: 'Test of Spirit - Pulls enemy spirit, tentacles hit both', video: '/videos/illaoi-e.mp4' },
          { numericNotation: '632146P', notation: 'R', description: 'Leap of Faith - Slams ground, summons tentacles', video: '/videos/illaoi-r.mp4' }
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
        content: 'Strong Against: Melee divers, grouped enemies. Weak Against: Ranged poke, mobile champions. Tips: Don\'t chase, make them come to you. Bait enemies into tentacle zones. Ultimate timing is crucial. Respect enemy mobility.'
      }
    ]
  },
  {
    id: 6,
    name: 'Jinx',
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
          { numericNotation: '5P', notation: 'Passive', description: 'Get Excited! - Gain massive movement speed on takedown', video: '/videos/jinx-passive.mp4' },
          { numericNotation: '236P', notation: 'Q', description: 'Switcheroo! - Toggle between Pow-Pow (attack speed) and Fishbones (range/AoE)', video: '/videos/jinx-q.mp4' },
          { numericNotation: '214P', notation: 'W', description: 'Zap! - Long-range skillshot that slows', video: '/videos/jinx-w.mp4' },
          { numericNotation: '623P', notation: 'E', description: 'Flame Chompers! - Deploy traps that snare', video: '/videos/jinx-e.mp4' },
          { numericNotation: '632146P', notation: 'R', description: 'Super Mega Death Rocket! - Global execute', video: '/videos/jinx-r.mp4' }
        ]
      },
      {
        id: 'optimal_punish_starts',
        title: 'Optimal Punish Starts',
        content: 'Passive: Get Excited! - Gain massive movement speed on takedown. Q: Switcheroo! - Toggle between Pow-Pow (attack speed) and Fishbones (range/AoE). W: Zap! - Long-range skillshot that slows. E: Flame Chompers! - Deploy traps that snare. Ultimate: Super Mega Death Rocket! - Global execute.'
      },
      {
        id: 'important_solo_combos',
        title: 'Important Solo Combos',
        content: 'Poke: Fishbones → W for long-range harass. Trap Setup: E forward → Fishbones AoE. Execution: W → R on low target. All-in: E between → Pow-Pow autos → W. Cleanup: Get Excited → Fishbones for safe damage.'
      },
      {
        id: 'team_synergies',
        title: 'Team Synergies/Suggestions',
        content: 'Maintain maximum range with Fishbones. Switch to Pow-Pow for DPS on tanks. Use traps to control space and peel. Ultimate for long-range executes. Play aggressively when excited.'
      },
      {
        id: 'matchups',
        title: 'Matchups',
        content: 'Strong Against: Short-range teams, grouped enemies. Weak Against: Dive assassins, gap closers. Tips: Position behind frontline. Use traps defensively. Fishbones for sieging. Time excitement resets carefully.'
      }
    ]
  },
  {
    id: 7,
    name: 'Vi',
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
          { numericNotation: '5P', notation: 'Passive', description: 'Blast Shield - Periodically gain shield', video: '/videos/vi-passive.mp4' },
          { numericNotation: '236P', notation: 'Q', description: 'Vault Breaker - Charge and dash punch that knocks back', video: '/videos/vi-q.mp4' },
          { numericNotation: '214P', notation: 'W', description: 'Denting Blows - Every third hit deals % health damage', video: '/videos/vi-w.mp4' },
          { numericNotation: '623P', notation: 'E', description: 'Excessive Force - Empowered punches that hit in line', video: '/videos/vi-e.mp4' },
          { numericNotation: '632146P', notation: 'R', description: 'Assault and Battery - Unstoppable charge that knocks up target', video: '/videos/vi-r.mp4' }
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
        content: 'Strong Against: Immobile carries, squishy mages. Weak Against: Tanks, heavy peel. Tips: Track enemy escapes before ulting. Use terrain with Q. Respect crowd control. Build according to enemy team.'
      }
    ]
  },
  {
    id: 8,
    name: 'Yasuo',
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
          { numericNotation: '5P', notation: 'Passive', description: 'Way of the Wanderer - Shield from movement, doubled crit chance', video: '/videos/yasuo-passive.mp4' },
          { numericNotation: '236P', notation: 'Q', description: 'Steel Tempest - Thrust that becomes tornado on third cast', video: '/videos/yasuo-q.mp4' },
          { numericNotation: '214P', notation: 'W', description: 'Wind Wall - Blocks projectiles', video: '/videos/yasuo-w.mp4' },
          { numericNotation: '623P', notation: 'E', description: 'Sweeping Blade - Dash through units', video: '/videos/yasuo-e.mp4' },
          { numericNotation: '632146P', notation: 'R', description: 'Last Breath - Blinks to airborne enemies and slashes', video: '/videos/yasuo-r.mp4' }
        ]
      },
      {
        id: 'optimal_punish_starts',
        title: 'Optimal Punish Starts',
        content: 'Passive: Way of the Wanderer - Shield from movement, doubled crit chance. Q: Steel Tempest - Thrust that becomes tornado on third cast. W: Wind Wall - Blocks projectiles. E: Sweeping Blade - Dash through units. Ultimate: Last Breath - Blinks to airborne enemies and slashes.'
      },
      {
        id: 'important_solo_combos',
        title: 'Important Solo Combos',
        content: 'Basic: E → Q → E. Airblade: E → Q (tornado) → R → Q. Keyblade: E → Q → Flash → R. Beyblade: E in circles → Q spam → Tornado. Poke: E (in) → Q → E (out).'
      },
      {
        id: 'team_synergies',
        title: 'Team Synergies/Suggestions',
        content: 'Stack Q while farming. Use E for mobility and positioning. Wind Wall key abilities. Ultimate on any airborne target. Build flow for shield before trades.'
      },
      {
        id: 'matchups',
        title: 'Matchups',
        content: 'Strong Against: Projectile-based champions, squishies. Weak Against: Point-and-click CC, hard engage. Tips: Track E cooldowns per target. Master Q timing. Wind Wall defensively first. Practice dash patterns.'
      }
    ]
  }
]
