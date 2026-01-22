export const caitlyn = {
  name: 'Caitlyn',
  heroImageOffset: { desktop: -60, mobile: -12 },
  tabs: [
    {
      id: 'key_moves',
      title: 'Key Moves',
      description: [],
      moves: [
        { numericNotation: 'S1', notation: 'Piltover Peacemaker', notationImage: '/key-moves-notation/caitlyn/cait1.png', description: 'Long range piercing shot. Excellent for zoning and poke damage.', video: 'videos/caitlyn/cait1.mp4' },
        { numericNotation: '2S1', notation: 'Yordle Snap Trap', notationImage: '/key-moves-notation/caitlyn/cait2.png', description: 'Places a trap that immobilizes opponents who step on it. Great for oki and space control.', video: 'videos/caitlyn/cait2.mp4' },
        { numericNotation: 'S2', notation: '90 Caliber Net', notationImage: '/key-moves-notation/caitlyn/cait3.png', description: 'Fires a net that pushes Caitlyn backwards while slowing the opponent. Combo tool and escape option.', video: 'videos/caitlyn/cait3.mp4' },
        { numericNotation: '5H', notation: 'Headshot', notationImage: '/key-moves-notation/caitlyn/cait4.png', description: 'Empowered shot that deals bonus damage. Builds up with other attacks.', video: 'videos/caitlyn/cait4.mp4' },
        { numericNotation: 'j.S1', notation: 'Air Peacemaker', notationImage: '/key-moves-notation/caitlyn/cait5.png', description: 'Air version of Peacemaker. Controls air space effectively.', video: 'videos/caitlyn/cait5.mp4' },
      ]
    },
    {
      id: 'important_solo_combos',
      title: 'Combos',
      description: [],
      combos: [
        { purpose: 'BnB', numericNotation: 'M H S2 66 M H 2H j.M j.H j.S1', notationImage: '/combo-notation/caitlyn/cait-combo-1.png', video: 'videos/caitlyn/cait-combo-1.mp4' },
        { purpose: 'Trap Confirm', numericNotation: '2S1 S1 66 M H 2H j.M j.H j.S2', notationImage: '/combo-notation/caitlyn/cait-combo-2.png', video: 'videos/caitlyn/cait-combo-2.mp4' },
        { purpose: 'Corner Combo', numericNotation: 'M H S2 M H 2S1 M H 2H j.H j.S1', notationImage: '/combo-notation/caitlyn/cait-combo-3.png', video: 'videos/caitlyn/cait-combo-3.mp4' },
        { purpose: 'Anti Air Starter', numericNotation: '2H j.M j.H 66 j.M j.H j.S1 2T', notationImage: '/combo-notation/caitlyn/cait-combo-4.png', video: 'videos/caitlyn/cait-combo-4.mp4' },
      ],
      comboEnders: [
        { purpose: 'Trap Oki', numericNotation: 'j.H 2S1 2T', notationImage: '/combo-notation/caitlyn/cait-ender-1.png', video: 'videos/caitlyn/cait-ender-1.mp4' },
        { purpose: 'Headshot Finish', numericNotation: 'j.H 5H', notationImage: '/combo-notation/caitlyn/cait-ender-2.png', video: 'videos/caitlyn/cait-ender-2.mp4' },
        { purpose: 'Max Dmg', numericNotation: 'j.H j.S2 TAG', notationImage: '/combo-notation/caitlyn/cait-ender-3.png', video: 'videos/caitlyn/cait-ender-3.mp4' },
      ]
    },
    {
      id: 'team_synergies',
      title: 'Teams',
      description: '',
      teams: [
        {
          pairing: 'Vi',
          fuseType: 'Freestyle',
          explanation: 'Classic Piltover duo. Vi can get in while Caitlyn covers with traps and shots.',
          videos: [
            { id: 'F3x1-NNy6h4' },
          ]
        },
        {
          pairing: 'Teemo',
          fuseType: '2x Assist',
          explanation: 'Double trap team creates a minefield. Opponents can\'t move safely.',
          videos: [
            { id: 'gCDtZgLubqw' },
          ]
        },
      ]
    },
    {
      id: 'matchups',
      title: 'Matchups',
      matchups: {
        'Vi': {
          difficulty: 'Hard',
          difficultyClass: 'hard',
          overview: [
            'Vi\'s gap closers make it difficult to maintain distance. Her ultimate goes through your net.',
            'Pre-place traps to interrupt her Q dash. Save net for after her ultimate lands.'
          ],
          keyPoints: [
            'Her engage is difficult to stop',
            'Traps can interrupt her Q',
            'Ultimate goes through everything',
            'Positioning is critical'
          ],
          videos: []
        },
        'Jinx': {
          difficulty: 'Medium',
          difficultyClass: 'medium',
          overview: [
            'Zoner vs zoner matchup. Both characters want to control space from range.',
            'Your traps give you an edge in controlling ground space. Watch for her rocket poke.'
          ],
          keyPoints: [
            'Similar gameplan - spacing is key',
            'Your traps control ground better',
            'Her rockets have longer range',
            'First hit often wins the exchange'
          ],
          videos: []
        },
      }
    },
    {
      id: 'top_players',
      title: 'Top Players',
      players: [
        {
          name: 'Sharpshooter',
          description: 'Caitlyn main known for perfect trap placement',
          socials: {
            twitter: 'https://twitter.com/sharpshooter',
            twitch: 'https://twitch.tv/sharpshooter'
          },
          highlights: [
            { id: 'F3x1-NNy6h4' },
          ]
        },
      ]
    },
    {
      id: 'guides',
      title: 'Guides',
      videos: [
        { id: 'F3x1-NNy6h4' },
        { id: '8qmI6OieGnI' },
      ],
      textGuides: [
        {
          title: 'Caitlyn Fundamentals Guide',
          author: 'Community',
          sections: [
            {
              heading: 'Overview',
              content: 'Caitlyn is a long-range zoner who controls space with Peacemaker shots and Yordle Snap Traps. Her goal is to keep opponents at her preferred distance while chipping away at their health.'
            },
            {
              heading: 'Gameplan',
              content: 'Set up traps at key positions to limit opponent movement. Use Peacemaker to poke and build Headshot stacks. When they try to approach, use 90 Caliber Net to maintain distance.'
            },
          ],
          tips: [
            'Always have traps on the field for space control',
            'Headshot stacks are valuable - use them wisely',
            '90 Caliber Net is your escape - don\'t waste it',
            'Corner trap setups are devastating'
          ]
        },
      ]
    },
  ]
}
