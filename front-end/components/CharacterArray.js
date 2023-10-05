//Characters referenced from lvl. 5 custom-created characters on DnDBeyond

const characters = [
  {
    id: '0',
    inFriendlyParty: false,
    inEnemyTeam: false,
    showModal: false,
    name: 'Ranger',
    cssName: 'ranger',
    cssBorderColor: '#295e21',
    armour: 15,
    health: 39,
    initiative: 4,
    description: 'Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.',
    image: './images/Ranger.png',
    baseStats: {
      strength: 11,
      dexterity: 18,
      constitution: 13,
      intelligence: 9,
      wisdom: 14,
      charisma: 15
    },
    spellSlots: {
      levelOne: 4,
      levelTwo: 2
    },
    actions: [
      {
        name: 'Longbow',
        type: 'attack',
        hitChance: 9,
        damage: {
          numberOfDice: 1,
          kindOfDice: 8,
          baseDamage: 4
        }
      },
      {
        name: 'Dagger',
        type: 'attack',
        hitChance: 7,
        damage: {
          numberOfDice: 1,
          kindOfDice: 4,
          baseDamage: 4
        }
      },
      {
        name: 'Handaxe',
        type: 'attack',
        hitChance: 3,
        damage: {
          numberOfDice: 1,
          kindOfDice: 6,
          baseDamage: 0
        }
      },
      {
        name: 'Cure Wounds',
        type: 'spell',
        concentration: false,
        healing: {
          numberOfDice: 1,
          kindOfDice: 8,
          baseHealing: 2
        }
      }, 
      {
        //Choose a friendly target and change their AC to 16 if it is below 16
        name: 'Bark Skin',
        type: 'spell',
        concentration: true,
        newAC: '16'
      }
    ],
    bonusActions: [
      {
        //Mark an enemy. The enemy takes an additional 1d6 damage from weapon attacks made by the character who marked it
        name: 'Hunter\'s Mark',
        type: 'spell',
        concentration: true,
        damage: {
          numberOfDice: 1,
          kindOfDice: 6
        }
      }
    ],
    reactions: [
      {
        //If the incoming damage is acid, cold, fire, lightning, or thunder damage, absorb 1d6 of the damage and store it. 
        //Until the start of your next turn, you have resistence to whatever damage type was stored. 
        //Your first melee attack this turn does 1d6 extra damage for whatever type you stored
        name: 'Absorb Elements',
        type: 'spell',
        concentration: false,
        absorb: {
          numberOfDice: 1,
          kindOfDice: 6
        }
      }
    ],
    other: [
      {
        name: 'Extra Attack',
        description: 'When an attack with a weapon is made, make an extra attack.'
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
    armour: 15,
    health: 55,
    initiative: 2,
    description: 'Barbarians, different as they might be, are defined by their rage: unbridled, unquenchable, and unthinking fury. More than a mere emotion, their anger is the ferocity of a cornered predator, the unrelenting assault of a storm, the churning turmoil of the sea. For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.',
    image: './images/Barbarian.png',
    baseStats: {
      strength: 17,
      dexterity: 14,
      constitution: 16,
      intelligence: 9,
      wisdom: 11,
      charisma: 13
    },
    spellSlots: {},
    actions: [
      {
        name: 'Greataxe',
        type: 'attack',
        hitChance: 6,
        damage: {
          numberOfDice: 1,
          kindOfDice: 12,
          baseDamage: 3
        }
      },
      {
        name: 'Greatclub',
        type: 'attack',
        hitChance: 6,
        damage: {
          numberOfDice: 1,
          kindOfDice: 8,
          baseDamage: 3
        }
      },
      {
        name: 'Javelin',
        type: 'attack',
        hitChance: 6,
        damage: {
          numberOfDice: 1,
          kindOfDice: 6,
          baseDamage: 3
        }
      }
    ],
    bonusActions: [
      {
        name: 'Rage',
        type: 'self-buff',
        description: 'Choose to enter a rage. While raging, deal an extra +2 melee damage and gain resistance to physical attacks. The rage ends at the end of this character\'s turn if this character has not made an attack or taken damage since the start of its last turn.',
      },
      {
        name: 'Frenzied Rage',
        type: 'self-buff',
        description: 'If already raging, this character can progress into a frenzied rage. While frenzied, this character can make an extra attack on it\'s bonus action so long as it\'s rage doesn\'t end.'
      }
    ],
    reactions: [
    ],
    other: [
      {
        name: 'Extra Attack',
        description: 'When an attack with a weapon is made, make an extra attack.'
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
    armour: 13,
    health: 28,
    initiative: 2,
    description: 'Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular. Drawing on the ancient knowledge of beings such as fey nobles, demons, devils, hags, and alien entities of the Far Realm, warlocks piece together arcane secrets to bolster their own power.',
    image: './images/Warlock.png',
    baseStats: {
      strength: 9,
      dexterity: 14,
      constitution: 11,
      intelligence: 13,
      wisdom: 15,
      charisma: 18
    },
    spellSlots: {
      levelOne: 0,
      levelTwo: 0,
      levelThree: 2
    },
    actions: [
      {
        name: 'Sling',
        type: 'attack',
        hitChance: 5,
        damage: {
          numberOfDice: 1,
          kindOfDice: 4,
          baseDamage: 2
        }
      },
      {
        name: 'Mace',
        type: 'attack',
        hitChance: 2,
        damage: {
          numberOfDice: 1,
          kindOfDice: 6,
          baseDamage: -1
        }
      },
      {
        name: 'Dagger',
        type: 'attack',
        hitChance: 5,
        damage: {
          numberOfDice: 1,
          kindOfDice: 4,
          baseDamage: 2
        }
      },
      {
        name: 'Chill Touch',
        type: 'cantrip',
        description: 'The target that is hit cannot recieve healing until the start of this character\'s next turn.',
        hitChance: 7,
        damage: {
          numberOfDice: 2,
          kindOfDice: 8,
          baseDamage: 0
        }
      },
      {
        name: 'Scorching Ray',
        type: 'spell',
        description: 'When cast at third level, fire four rays of scorching fire at the target. Each hit results in 2d6 fire damage.',
        hitChance: 7,
        timesFired: 4,
        damage: {
          numberOfDice: 2,
          kindOfDice: 6,
          baseDamage: 0
        }
      },
      {
        name: 'Vampiric Touch',
        type: 'spell',
        description: 'On successful hit, half of the necrotic damage dealt is returned to the user as healing.',
        hitChance: 7,
        damage: {
          numberOfDice: 3,
          kindOfDice: 6,
          baseDamage: 0
        }
      },
      {
        name: 'Fire Bolt',
        type: 'cantrip',
        hitChance: 7,
        damage: {
          numberOfDice: 2,
          kindOfDice: 10,
          baseDamage: 0
        }
      },
      {
        name: 'Eldritch Blast',
        type: 'cantrip',
        description: 'Attack with two beams of force damage either at the same target or two different targets.',
        hitChance: 7,
        timesFired: 2,
        damage: {
          numberOfDice: 1,
          kindOfDice: 10,
          baseDamage: 0
        }
      }
    ],
    bonusActions: [
      {
        name: 'Two-Weapon Fighting',
        description: 'When you take an action to use a light melee weapon attack, you can make another attack using your bonus action with a different light melee weapon.'
      }
    ],
    reactions: [
      {
        name: 'Hellish Rebuke',
        type: 'spell',
        description: 'When you are damaged by an enemy, you can invoke Hellish Rebuke on them. The enemy must make a DC 15 Dexterity Saving Throw to take half damage. Deals 4d10 fire damage.',
        saveType: 'dexterity',
        saveDC: 15,
        saveBenefit: 'halved',
        damage: {
          numberOfDice: 4,
          kindOfDice: 10,
          baseDamage: 0
        }
      }
    ],
    other: [
      {
        name: 'Dark One\'s Blessing',
        description: 'When you reduce a hostile creature to 0 health, gain 9 temporary health.'
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
        type: 'attack',
        name: 'Bow Attack',
        hitChance: 5,
        damage: {
          numberOfDice: 2,
          kindOfDice: 6,
          baseDamage: 3
        }
      }
    ],
    bonusActions: [
      {
        type: 'attack',
        name: 'Dagger Attack',
        hitChance: 2,
        damage: {
          numberOfDice: 2,
          kindOfDice: 4,
          baseDamage: 2
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
        type: 'attack',
        name: 'Bow Attack',
        hitChance: 5,
        damage: {
          numberOfDice: 2,
          kindOfDice: 6,
          baseDamage: 3
        }
      }
    ],
    bonusActions: [
      {
        type: 'attack',
        name: 'Dagger Attack',
        hitChance: 2,
        damage: {
          numberOfDice: 2,
          kindOfDice: 4,
          baseDamage: 2
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
        type: 'attack',
        name: 'Bow Attack',
        hitChance: 5,
        damage: {
          numberOfDice: 2,
          kindOfDice: 6,
          baseDamage: 3
        }
      }
    ],
    bonusActions: [
      {
        type: 'attack',
        name: 'Dagger Attack',
        hitChance: 2,
        damage: {
          numberOfDice: 2,
          kindOfDice: 4,
          baseDamage: 2
        }
      }
    ]
  }
];

export default characters;