export const charactersData = [
  /* start of file
  Each character data is contained within its own object in this array.
  Each character object has an id, name, and tabs array.
  Each tab object contains id, title, description, and content or moves array.
  Parameters Defined: 
  id: Unique identifier for the character or tab under the character
  title: Title of the tab section
  description: Array of strings providing an overview or key points about the character or tab section. Also describes moves. 
  numericNotation: Pure string version of the move notation
  notation: Short notation label for the move (e.g., 'Q', 'W', 'E', 'R', 'Passive')
  notationImage: 2xKo styled images used to make the notationn more visually appealing
  video: Path to videos
  content: String content for text-based tabs(placeholder). Can be replaced by correct section: moves, teams, etc
  */
  {// Ahri Data Starts Here
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

    ]
  },// Ahri Data Ends Here
  {// Braum Data Starts Here
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
          { numericNotation: '5P', notation: 'Passive', notationImage: '/key-moves-notation/braum/braum-passive.png', description: 'Concussive Blows - Attacks apply stacks, stunning at 4 stacks', video: '/videos/braum-passive.mp4' },
          { numericNotation: '236P', notation: 'Q', notationImage: '/key-moves-notation/braum/braum-q.png', description: "Winter's Bite - Projectile that slows and applies passive", video: '/videos/braum-q.mp4' },
          { numericNotation: '214P', notation: 'W', notationImage: '/key-moves-notation/braum/braum-w.png', description: 'Stand Behind Me - Dash to ally, granting armor', video: '/videos/braum-w.mp4' },
          { numericNotation: '623P', notation: 'E', notationImage: '/key-moves-notation/braum/braum-e.png', description: 'Unbreakable - Shield that blocks projectiles', video: '/videos/braum-e.mp4' },
          { numericNotation: '632146P', notation: 'R', notationImage: '/key-moves-notation/braum/braum-r.png', description: 'Glacial Fissure - Line knockup that creates a slow field', video: '/videos/braum-r.mp4' }
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
  },// Braum Data Ends Here
  {// Darius Data Starts Here
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
          { numericNotation: '5P', notation: 'Passive', notationImage: '/key-moves-notation/darius/darius-passive.png', description: 'Hemorrhage - Bleeds enemies, gaining bonus AD at 5 stacks', video: '/videos/darius-passive.mp4' },
          { numericNotation: '236P', notation: 'Q', notationImage: '/key-moves-notation/darius/darius-q.png', description: 'Decimate - Swing axe in circle, heal from blade hits', video: '/videos/darius-q.mp4' },
          { numericNotation: '214P', notation: 'W', notationImage: '/key-moves-notation/darius/darius-w.png', description: 'Crippling Strike - Empowered attack that slows', video: '/videos/darius-w.mp4' },
          { numericNotation: '623P', notation: 'E', notationImage: '/key-moves-notation/darius/darius-e.png', description: 'Apprehend - Pull enemies and gain armor pen', video: '/videos/darius-e.mp4' },
          { numericNotation: '632146P', notation: 'R', notationImage: '/key-moves-notation/darius/darius-r.png', description: 'Noxian Guillotine - Execute that resets on kill', video: '/videos/darius-r.mp4' }
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
  },// Darius Data Ends Here
  {// Ekko Data Starts Here
    id: 4,
    name: 'Ekko',
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
        description: 'Select a champion below to view matchup details and strategies',
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
  },// Ekko Data Ends Here
  {// Illaoi Data Starts Here
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
        content: 'Strong Against: Melee divers, grouped enemies. Weak Against: Ranged poke, mobile champions. Tips: Don\'t chase, make them come to you. Bait enemies into tentacle zones. Ultimate timing is crucial. Respect enemy mobility.'
      }
    ]
  },// Illaoi Data Ends Here
  {// Jinx Data Starts Here
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
          { numericNotation: '5P', notation: 'Passive', notationImage: '/key-moves-notation/jinx/jinx-passive.png', description: 'Get Excited! - Gain massive movement speed on takedown', video: '/videos/jinx-passive.mp4' },
          { numericNotation: '236P', notation: 'Q', notationImage: '/key-moves-notation/jinx/jinx-q.png', description: 'Switcheroo! - Toggle between Pow-Pow (attack speed) and Fishbones (range/AoE)', video: '/videos/jinx-q.mp4' },
          { numericNotation: '214P', notation: 'W', notationImage: '/key-moves-notation/jinx/jinx-w.png', description: 'Zap! - Long-range skillshot that slows', video: '/videos/jinx-w.mp4' },
          { numericNotation: '623P', notation: 'E', notationImage: '/key-moves-notation/jinx/jinx-e.png', description: 'Flame Chompers! - Deploy traps that snare', video: '/videos/jinx-e.mp4' },
          { numericNotation: '632146P', notation: 'R', notationImage: '/key-moves-notation/jinx/jinx-r.png', description: 'Super Mega Death Rocket! - Global execute', video: '/videos/jinx-r.mp4' }
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
  },// Illaoi Data Ends Here
  {// Vi Data Starts Here
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
        content: 'Strong Against: Immobile carries, squishy mages. Weak Against: Tanks, heavy peel. Tips: Track enemy escapes before ulting. Use terrain with Q. Respect crowd control. Build according to enemy team.'
      }
    ]
  },// Vi Data Ends Here
  {// Yasuo Data Starts Here
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
          { numericNotation: '5P', notation: 'Passive', notationImage: '/key-moves-notation/yasuo/yasuo-passive.png', description: 'Way of the Wanderer - Shield from movement, doubled crit chance', video: '/videos/yasuo-passive.mp4' },
          { numericNotation: '236P', notation: 'Q', notationImage: '/key-moves-notation/yasuo/yasuo-q.png', description: 'Steel Tempest - Thrust that becomes tornado on third cast', video: '/videos/yasuo-q.mp4' },
          { numericNotation: '214P', notation: 'W', notationImage: '/key-moves-notation/yasuo/yasuo-w.png', description: 'Wind Wall - Blocks projectiles', video: '/videos/yasuo-w.mp4' },
          { numericNotation: '623P', notation: 'E', notationImage: '/key-moves-notation/yasuo/yasuo-e.png', description: 'Sweeping Blade - Dash through units', video: '/videos/yasuo-e.mp4' },
          { numericNotation: '632146P', notation: 'R', notationImage: '/key-moves-notation/yasuo/yasuo-r.png', description: 'Last Breath - Blinks to airborne enemies and slashes', video: '/videos/yasuo-r.mp4' }
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
  },// Yasuo Data Ends Here
]//end of file
