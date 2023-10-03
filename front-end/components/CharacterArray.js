const characters = [
  {
    id: '0',
    inFriendlyParty: false,
    inEnemyTeam: false,
    showModal: false,
    name: 'Ranger',
    cssName: 'ranger',
    cssBorderColor: '#295e21',
    weapon: 'Bow',
    armour: 14,
    health: 12,
    description: 'Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.',
    image: './images/Ranger.png',
    baseStats: {
      strength: 10,
      dexterity: 15,
      constitution: 12,
      intelligence: 9,
      wisdom: 11,
      charisma: 10
    },
    actions: [
      {
        attack: {
          name: "Bow Attack",
          hitChance: 5,
          damage: {
            numberOfDice: 2,
            kindOfDice: 6,
            baseDamage: 3
          }
        }
      }
    ],
    bonusActions: [
      {
        attack: {
          name: "Dagger Attack",
          hitChance: 2,
          damage: {
            numberOfDice: 2,
            kindOfDice: 4,
            baseDamage: 2
          }
        }
      }
    ]
  },
  {
    id: '1',
    inFriendlyParty: false,
    inEnemyTeam: false,
    showModal: false,
    name: 'Barbarian',
    cssName: 'barbarian',
    cssBorderColor: '#9c2129',
    weapon: 'Great Axe',
    armour: 16,
    health: 20,
    description: 'Barbarians, different as they might be, are defined by their rage: unbridled, unquenchable, and unthinking fury. More than a mere emotion, their anger is the ferocity of a cornered predator, the unrelenting assault of a storm, the churning turmoil of the sea. For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.',
    image: './images/Barbarian.png',
    baseStats: {
      strength: 16,
      dexterity: 10,
      constitution: 14,
      intelligence: 8,
      wisdom: 10,
      charisma: 11
    },
    actions: [
      {
        attack: {
          name: "Axe Attack",
          hitChance: 6,
          damage: {
            numberOfDice: 2,
            kindOfDice: 8,
            baseDamage: 4
          }
        }
      }
    ],
    bonusActions: [
      {
        attack: {
          name: "Dagger Attack",
          hitChance: 2,
          damage: {
            numberOfDice: 2,
            kindOfDice: 4,
            baseDamage: 2
          }
        }
      }
    ]
  },
  {
    id: '2',
    inFriendlyParty: false,
    inEnemyTeam: false,
    showModal: false,
    name: 'Warlock',
    cssName: 'warlock',
    cssBorderColor: '#7019a3',
    weapon: 'Wand',
    armour: 12,
    health: 10,
    description: 'Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular. Drawing on the ancient knowledge of beings such as fey nobles, demons, devils, hags, and alien entities of the Far Realm, warlocks piece together arcane secrets to bolster their own power.',
    image: './images/Warlock.png',
    baseStats: {
      strength: 8,
      dexterity: 10,
      constitution: 10,
      intelligence: 13,
      wisdom: 16,
      charisma: 12
    },
    actions: [
      {
        attack: {
          name: "Spell Attack",
          hitChance: 5,
          damage: {
            numberOfDice: 2,
            kindOfDice: 10,
            baseDamage: 0
          }
        }
      }
    ],
    bonusActions: [
      {
        attack: {
          name: "Dagger Attack",
          hitChance: 2,
          damage: {
            numberOfDice: 2,
            kindOfDice: 4,
            baseDamage: 2
          }
        }
      }
    ]
  },
  {
    id: '3',
    inFriendlyParty: false,
    inEnemyTeam: false,
    showModal: false,
    name: 'Rogue',
    cssName: 'rogue',
    cssBorderColor: '#000000',
    weapon: 'Dagger',
    armour: 12,
    health: 10,
    description: 'Rogues rely on skill, stealth, and their foes\’ vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party.',
    image: './images/Rogue.png',
    baseStats: {
      strength: 8,
      dexterity: 10,
      constitution: 10,
      intelligence: 13,
      wisdom: 16,
      charisma: 12
    },
    actions: [
      {
        attack: {
          name: "Spell Attack",
          hitChance: 5,
          damage: {
            numberOfDice: 2,
            kindOfDice: 10,
            baseDamage: 0
          }
        }
      }
    ],
    bonusActions: [
      {
        attack: {
          name: "Dagger Attack",
          hitChance: 2,
          damage: {
            numberOfDice: 2,
            kindOfDice: 4,
            baseDamage: 2
          }
        }
      }
    ]
  },
  {
    id: '4',
    inFriendlyParty: false,
    inEnemyTeam: false,
    showModal: false,
    name: 'Fighter',
    cssName: 'fighter',
    cssBorderColor: '#0e6ba2',
    weapon: 'Wand',
    armour: 12,
    health: 10,
    description: 'Questing knights, conquering overlords, royal champions, elite foot soldiers, hardened mercenaries, and bandit kings—fighters all share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. And they are well acquainted with death, both meting it out and staring it defiantly in the face.',
    image: './images/Fighter.png',
    baseStats: {
      strength: 8,
      dexterity: 10,
      constitution: 10,
      intelligence: 13,
      wisdom: 16,
      charisma: 12
    },
    actions: [
      {
        attack: {
          name: "Spell Attack",
          hitChance: 5,
          damage: {
            numberOfDice: 2,
            kindOfDice: 10,
            baseDamage: 0
          }
        }
      }
    ],
    bonusActions: [
      {
        attack: {
          name: "Dagger Attack",
          hitChance: 2,
          damage: {
            numberOfDice: 2,
            kindOfDice: 4,
            baseDamage: 2
          }
        }
      }
    ]
  },
  {
    id: '5',
    inFriendlyParty: false,
    inEnemyTeam: false,
    showModal: false,
    name: 'Monk',
    cssName: 'monk',
    cssBorderColor: '#e6de65',
    weapon: 'Wand',
    armour: 12,
    health: 10,
    description: 'Monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.',
    image: './images/Monk.png',
    baseStats: {
      strength: 8,
      dexterity: 10,
      constitution: 10,
      intelligence: 13,
      wisdom: 16,
      charisma: 12
    },
    actions: [
      {
        attack: {
          name: "Spell Attack",
          hitChance: 5,
          damage: {
            numberOfDice: 2,
            kindOfDice: 10,
            baseDamage: 0
          }
        }
      }
    ],
    bonusActions: [
      {
        attack: {
          name: "Dagger Attack",
          hitChance: 2,
          damage: {
            numberOfDice: 2,
            kindOfDice: 4,
            baseDamage: 2
          }
        }
      }
    ]
  }
];

export default characters;