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
        matchups: {
          'Ahri': {
            difficulty: 'Hard',
            difficultyClass: 'hard',
            overview: [
              'Ahri is a difficult matchup for Darius due to her superior range and mobility. She can kite you effectively and has the tools to escape your all-in attempts.',
              'Your only chance is catching her with your pull when her Spirit Rush is down. Ghost or Flash is almost mandatory in this matchup. Try to bait out her dashes before committing your pull. If she wastes mobility, that\'s your window to engage.'
            ],
            keyPoints: [
              'She can kite you easily with range and mobility',
              'Need Ghost/Flash to have any chance',
              'Only engage when her R is down',
              'She can interrupt your Q with Charm'
            ],
            videos: []
          },
          'Braum': {
            difficulty: 'Medium',
            difficultyClass: 'medium',
            overview: [
              'Braum is tankier than you\'d like, but not impossible. His shield doesn\'t help against your melee attacks, so once you\'re in range, you can stack your passive effectively.',
              'The challenge is his crowd control can interrupt your Decimate, and his team protection makes it hard to reach his backline. Focus on stacking your passive on him first, then look for his teammates. Don\'t let him stun you with his passive.'
            ],
            keyPoints: [
              'His shield doesn\'t block melee attacks',
              'His CC can interrupt your Q',
              'Stack passive on him, then reach backline',
              'Avoid getting stunned by his passive'
            ],
            videos: []
          },
          'Ekko': {
            difficulty: 'Hard',
            difficultyClass: 'hard',
            overview: [
              'Ekko has all the tools to make your life miserable. His mobility, range, and ultimate make it nearly impossible to catch him and keep him in melee range long enough to kill.',
              'This matchup requires patience and Ghost/Flash. Try to bait his Phase Dive before using your pull. If he uses his ultimate, all your passive stacks disappear. Fight near walls to limit his escape angles. You need him to make a mistake to win.'
            ],
            keyPoints: [
              'His mobility and ultimate counter you hard',
              'Need him to make mistakes to win',
              'Fight near walls to limit escapes',
              'His R resets the fight completely'
            ],
            videos: []
          },
          'Illaoi': {
            difficulty: 'Medium',
            difficultyClass: 'medium',
            overview: [
              'This is a juggernaut vs juggernaut matchup that depends on who gets their setup first. Both champions excel at extended fights in specific zones.',
              'Dodge her Test of Spirit - if she lands it, the trade heavily favors her. Never fight in her ultimate. Instead, pull her away from her tentacles and fight in open space. Your passive stacks beat her in sustained damage if you avoid her tentacles.'
            ],
            keyPoints: [
              'Juggernaut vs juggernaut - positioning matters',
              'Dodge her E or lose the trade',
              'Never fight in her R',
              'Pull her away from tentacles'
            ],
            videos: []
          },
          'Jinx': {
            difficulty: 'Easy',
            difficultyClass: 'easy',
            overview: [
              'Jinx is an ideal target for Darius. She has no mobility and once you close the gap, she\'s done for. Your passive stacks ramp up quickly on her.',
              'The challenge is reaching her through her team and traps. Use Ghost/Flash to close the gap. Once you\'re on top of her, she\'s dead. Watch for her Flame Chompers when you\'re chasing. Focus her in team fights as a priority target.'
            ],
            keyPoints: [
              'Perfect target - no mobility',
              'Need Ghost/Flash to reach her',
              'Watch for her traps when chasing',
              'Once on top of her, she\'s dead'
            ],
            videos: []
          },
          'Vi': {
            difficulty: 'Easy',
            difficultyClass: 'easy',
            overview: [
              'Vi engages into you, which is exactly what you want as Darius. When she commits with her ultimate, she\'s stuck in melee range where you excel.',
              'Let her engage on you or your team, then counter-engage with your pull and start stacking passive. Your W empowered auto plus E pull keeps her in range. Once you get 5 stacks, you win the extended trade. Her % health damage is annoying but manageable.'
            ],
            keyPoints: [
              'She engages into your ideal range',
              'Let her engage then counter',
              'Your stacked passive wins extended trades',
              'E pull keeps her from escaping'
            ],
            videos: []
          },
          'Yasuo': {
            difficulty: 'Hard',
            difficultyClass: 'hard',
            overview: [
              'Yasuo\'s mobility with Sweeping Blade makes him very difficult for Darius. He can dash in and out, poking you while avoiding extended trades where your passive would win.',
              'Try to fight when there are fewer minions for him to dash through. Your pull can catch him mid-dash if timed well. His Wind Wall doesn\'t block your abilities since they\'re all melee, but his mobility is the real problem. Need Ghost/Flash and patience.'
            ],
            keyPoints: [
              'His dash spam makes him hard to catch',
              'Fight when fewer minions available',
              'E can catch him mid-dash',
              'Wind Wall doesn\'t stop your melee abilities'
            ],
            videos: []
          }
        }
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
  },// Yasuo Data Ends Here
]//end of file
