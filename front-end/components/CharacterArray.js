//Characters referenced from custom-created characters on DnDBeyond (lvl. 5 human race used for standardization)

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
    savingStats: {
      strength: 3,
      dexterity: 7,
      constitution: 1,
      intelligence: -1,
      wisdom: 2,
      charisma: 2
    },
    spellSlots: [4, 2],
    actions: [
      {
        name: 'Longbow Attack',
        type: 'attack ranged',
        description: 'Make a ranged attack using a longbow dealing 1d8 + 4 damage. +9 to hit.',
        hitChance: 9,
        damage: {
          numberOfDice: 1,
          kindOfDice: 8,
          baseDamage: 4
        }
      },
      {
        name: 'Dagger Attack',
        type: 'attack melee',
        description: 'Make a melee attack using a dagger dealing 1d4 + 4 damage. +7 to hit.',
        hitChance: 7,
        damage: {
          numberOfDice: 1,
          kindOfDice: 4,
          baseDamage: 4
        }
      },
      {
        name: 'Handaxe Attack',
        type: 'attack melee',
        description: 'Make a melee attack using a handaxe dealing 1d6 damage. +3 to hit.',
        hitChance: 3,
        damage: {
          numberOfDice: 1,
          kindOfDice: 6,
          baseDamage: 0
        }
      },
      {
        name: 'Cure Wounds',
        description: 'Heal a friendly target for 1d8+2 health points by spending a lvl. one spell slot. If casted at a higher level, add 1d8 healing for each level above first.',
        type: 'spell',
        concentration: false,
        levelChoice: [1, 2],
        healing: {
          numberOfDice: [1, 2],
          kindOfDice: [8, 8],
          baseHealing: [2, 2]
        }
      },
      {
        //Choose a friendly target and change their AC to 16 if it is below 16
        name: 'Bark Skin',
        description: 'Spend a lvl. two spell slot to increase a friendly target\'s AC to 16.',
        type: 'spell',
        levelChoice: [2],
        concentration: true,
        newAC: 16
      }
    ],
    bonusActions: [
      {
        //Mark an enemy. The enemy takes an additional 1d6 damage from weapon attacks made by the character who marked it
        name: 'Hunter\'s Mark',
        type: 'spell',
        description: 'Mark an enemy. Any physical weapon attacks this character makes towards the marked enemy deal an additional 1d6 damage until the spell ends.',
        levelChoice: [1],
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
        description: 'If an incoming attack deals acid, cold, fire, lightning, or thunder damage, you can use your reaction to absorb 1d6 of that damage. Until the start of your next turn, you have resistence to whatever damage type was stored. Your first melee attack on your next turn does 1d6 extra damage for whatever type you stored. If this spell is cast at a higher level than lvl. one, add an additional 1d6 to both the damage absorbed and dealt for each additional level.',
        levelChoice: [1, 2],
        concentration: false,
        absorb: {
          numberOfDice: [1, 2],
          kindOfDice: [6, 6]
        }
      }
    ],
    other: [
      {
        name: 'Extra Attack',
        description: 'You can attack twice whenever you take the attack action on your turn.'
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
    savingStats: {
      strength: 6,
      dexterity: 2,
      constitution: 6,
      intelligence: -1,
      wisdom: 0,
      charisma: 1
    },
    spellSlots: [],
    actions: [
      {
        name: 'Greataxe Attack',
        type: 'attack melee',
        description: 'Make a melee attack using a greataxe dealing 1d12 + 3 damage. +6 to hit.',
        hitChance: 6,
        damage: {
          numberOfDice: 1,
          kindOfDice: 12,
          baseDamage: 3
        }
      },
      {
        name: 'Greatclub Attack',
        type: 'attack melee',
        description: 'Make a melee attack using a greatclub dealing 1d8 + 3 damage. +6 to hit.',
        hitChance: 6,
        damage: {
          numberOfDice: 1,
          kindOfDice: 8,
          baseDamage: 3
        }
      },
      {
        name: 'Javelin Attack',
        type: 'attack ranged',
        description: 'Make a ranged attack using a javelin dealing 1d6 + 3 damage. +6 to hit.',
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
        description: 'If already raging, this character can progress into a frenzied rage. While frenzied, this character can make an extra attack on its bonus action so long as its rage doesn\'t end.'
      }
    ],
    reactions: [
    ],
    other: [
      {
        name: 'Extra Attack',
        description: 'You can attack twice whenever you take the attack action on your turn.'
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
    savingStats: {
      strength: -1,
      dexterity: 2,
      constitution: 0,
      intelligence: 1,
      wisdom: 5,
      charisma: 7
    },
    spellSlots: [0, 0, 2],
    actions: [
      {
        name: 'Sling Attack',
        type: 'attack ranged',
        description: 'Make a ranged attack using a sling dealing 1d4 + 2 damage. +5 to hit.',
        hitChance: 5,
        damage: {
          numberOfDice: 1,
          kindOfDice: 4,
          baseDamage: 2
        }
      },
      {
        name: 'Mace Attack',
        type: 'attack melee',
        description: 'Make a melee attack using a mace dealing 1d6 - 1 damage. +2 to hit.',
        hitChance: 2,
        damage: {
          numberOfDice: 1,
          kindOfDice: 6,
          baseDamage: -1
        }
      },
      {
        name: 'Dagger Attack',
        type: 'attack melee',
        description: 'Make a melee attack using a dagger dealing 1d4+ 2 damage. +5 to hit.',
        hitChance: 5,
        damage: {
          numberOfDice: 1,
          kindOfDice: 4,
          baseDamage: 2
        }
      },
      {
        name: 'Chill Touch',
        type: 'cantrip ranged spell necrotic',
        description: 'Make a ranged spell attack dealing 2d8 necrotic damage. +7 to hit. On successful hit, the target cannot recieve healing until the start of this warlock\'s next turn.',
        hitChance: 7,
        damage: {
          numberOfDice: 2,
          kindOfDice: 8,
          baseDamage: 0
        }
      },
      {
        name: 'Scorching Ray',
        type: 'spell ranged fire',
        description: 'Spend a lvl. three spell slot to attack with four rays of scorching fire at a target dealing 2d6 fire damage. +7 to hit on each ray attack.',
        levelChoice: [3],
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
        type: 'spell melee necrotic',
        description: 'Spend a lvl. three spell slot to make a melee attack dealing 3d6 necrotic damage. +7 to hit. On success, heal for half of the damage dealt. On successive turns, you can choose to recast this spell without expending a spell slot so long as concentration remains unbroken.',
        concentration: true,
        levelChoice: [3],
        hitChance: 7,
        damage: {
          numberOfDice: 3,
          kindOfDice: 6,
          baseDamage: 0
        }
      },
      {
        name: 'Fire Bolt',
        type: 'cantrip spell ranged fire',
        description: 'Make a ranged spell attack dealing 1d10 fire damage. +7 to hit.',
        hitChance: 7,
        damage: {
          numberOfDice: 2,
          kindOfDice: 10,
          baseDamage: 0
        }
      },
      {
        name: 'Eldritch Blast',
        type: 'cantrip ranged spell force',
        description: 'Make a ranged spell attack by creating two beams of crackling energy. Each beam deals 1d10 force damage and has a +7 chance to hit.',
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
        description: 'When you are damaged by an enemy, you can invoke Hellish Rebuke on them. The enemy must make a DC 15 Dexterity Saving Throw Success to take half damage. Deals 4d10 fire damage.',
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
    armour: 14,
    health: 33,
    initiative: 3,
    description: 'Rogues rely on skill, stealth, and their foes\’ vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party.',
    image: './images/Rogue.png',
    baseStats: {
      strength: 9,
      dexterity: 17,
      constitution: 13,
      intelligence: 16,
      wisdom: 11,
      charisma: 14
    },
    savingStats: {
      strength: -1,
      dexterity: 6,
      constitution: 1,
      intelligence: 6,
      wisdom: 0,
      charisma: 2
    },
    spellSlots: [],
    actions: [
      {
        name: 'Rapier Attack',
        type: 'attack melee',
        description: 'Make a melee attack using a rapier dealing 1d8 + 3 damage. +6 to hit.',
        hitChance: 6,
        damage: {
          numberOfDice: 1,
          kindOfDice: 8,
          baseDamage: 3
        }
      },
      {
        name: 'Shortbow Attack',
        type: 'attack ranged',
        description: 'Make a ranged attack using a shortbow dealing 1d6 + 3 damage. +6 to hit.',
        hitChance: 6,
        damage: {
          numberOfDice: 1,
          kindOfDice: 6,
          baseDamage: 3
        }
      },
      {
        name: 'Dagger Attack',
        type: 'attack melee',
        description: 'Make a melee attack using a dagger dealing 1d4 + 3 damage. +6 to hit.',
        hitChance: 6,
        damage: {
          numberOfDice: 1,
          kindOfDice: 4,
          baseDamage: 3
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
        name: 'Uncanny Dodge',
        description: 'When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack\’s damage against you.'
      }
    ],
    other: [
      {
        name: 'Sneak Attack',
        description: 'Once per turn, deal an extra 3d6 damage to a target you hit with a finesse or ranged weapon if you have advantage on the attack roll or if the target is within melee distance.',
        damage: {
          numberOfDice: 3,
          kindOfDice: 6
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
    armour: 17,
    health: 44,
    initiative: 3,
    description: 'Questing knights, conquering overlords, royal champions, elite foot soldiers, hardened mercenaries, and bandit kings—fighters all share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. And they are well acquainted with death, both meting it out and staring it defiantly in the face.',
    image: './images/Fighter.png',
    baseStats: {
      strength: 17,
      dexterity: 16,
      constitution: 14,
      intelligence: 11,
      wisdom: 13,
      charisma: 9
    },
    savingStats: {
      strength: 6,
      dexterity: 3,
      constitution: 5,
      intelligence: 0,
      wisdom: 1,
      charisma: -1
    },
    spellSlots: [],
    actions: [
      {
        name: 'Flail Attack',
        type: 'attack melee',
        description: 'Make a melee attack using a flail dealing 1d8 + 3 damage. +6 to hit.',
        hitChance: 6,
        damage: {
          numberOfDice: 1,
          kindOfDice: 8,
          baseDamage: 3
        }
      },
      {
        name: 'Scimitar Attack',
        type: 'attack melee',
        description: 'Make a melee attack using a schimitar dealing 1d6 + 3 damage. +6 to hit.',
        hitChance: 6,
        damage: {
          numberOfDice: 1,
          kindOfDice: 6,
          baseDamage: 3
        }
      },
      {
        name: 'Crossbow Attack',
        type: 'attack ranged',
        description: 'Make a ranged attack using a crossbow dealing 1d8 + 3 damage. +6 to hit.',
        hitChance: 6,
        damage: {
          numberOfDice: 1,
          kindOfDice: 8,
          baseDamage: 3
        }
      }
    ],
    bonusActions: [
      {
        name: 'Two-Weapon Fighting',
        description: 'When you take an action to use a light melee weapon attack, you can make another attack using your bonus action with a different light melee weapon.'
      },
      {
        name: 'Second Wind',
        description: 'Once per combat, you can use a bonus action to regain 1d10 + 5 health.',
        healing: {
          numberOfDice: 1,
          kindOfDice: 10,
          baseHealing: 5
        }
      }
    ],
    reactions: [],
    other: [
      {
        name: 'Action Surge',
        description: 'Once per combat, you can take one additional action.'
      },
      {
        name: 'Extra Attack',
        description: 'You can attack twice whenever you take the attack action on your turn.'
      },
      {
        name: 'Improved Critical',
        description: 'Your weapon attacks score a critical hit on a roll of 19 or 20.'
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
    armour: 15,
    health: 38,
    initiative: 3,
    description: 'Monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.',
    image: './images/Monk.png',
    baseStats: {
      strength: 9,
      dexterity: 17,
      constitution: 15,
      intelligence: 13,
      wisdom: 15,
      charisma: 11
    },
    savingStats: {
      strength: 2,
      dexterity: 6,
      constitution: 2,
      intelligence: 1,
      wisdom: 2,
      charisma: 0
    },
    spellSlots: [],
    kiPoints: 5,
    actions: [
      {
        name: 'Sickle Attack',
        type: 'attack melee',
        description: 'Make a melee attack using a sickle dealing 1d6 + 3 damage. +6 to hit.',
        hitChance: 6,
        damage: {
          numberOfDice: 1,
          kindOfDice: 6,
          baseDamage: 3
        }
      },
      {
        name: 'Light Hammer Attack',
        type: 'attack melee',
        description: 'Make a melee attack using a light hammer dealing 1d6 + 3 damage. +6 to hit.',
        hitChance: 6,
        damage: {
          numberOfDice: 1,
          kindOfDice: 6,
          baseDamage: 3
        }
      },
      {
        name: 'Unarmed Strike',
        type: 'attack melee',
        description: 'Make a melee attack using your fist dealing 1d6 + 3 damage. +6 to hit.',
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
        name: 'Unarmed Strike',
        type: 'attack melee',
        description: 'Make a melee attack using your fist dealing 1d6 + 3 damage. +6 to hit.',
        hitChance: 6,
        damage: {
          numberOfDice: 1,
          kindOfDice: 6,
          baseDamage: 3
        }
      },
      {
        name: 'Flurry of Blows',
        description: 'Spend one ki point to make two unarmed strikes.'
      },
      {
        name: 'Patient Defense',
        description: 'Spend one ki point to Dodge. When Dodge is used, all attacks against you are at disadvantage until the start of your next turn.'
      }
    ],
    reactions: [
      {
        name: 'Deflect Missiles',
        description: 'Once per round, if a ranged missile attack is made towards you, roll a d10 and add your dexterity modifier(+3) and monk level(+5) to the roll. This number is the amount of damage reduced from the attack. If the attack damage is reduced to 0, you have the option to spend a ki point to use the Deflect Missiles Attack.',
        damageReduction: {
          numberOfDice: 1,
          kindOfDice: 10,
          baseReduction: 8
        }
      },
      {
        name: 'Deflect Missiles Attack',
        description: 'If the damage of the incoming missile damage was reduced to 0 during the Deflect Missiles reaction, you can choose to spend one ki point to make a ranged attack dealing 1d6 + 3 damage towards an enemy using the missile you caught.',
        damage: {
          numberOfDice: 1,
          kindOfDice: 6,
          baseDamage: 3
        }
      }
    ],
    other: [
      {
        name: 'Open Hand Technique',
        description: 'Whenever you hit with one of your Flurry of Blows attacks, the hit target cannot use a reaction until the end of your next turn.'
      },
      {
        name: 'Stunning Strike',
        description: 'When you hit with a melee weapon attack, you can spend one ki point to stun the target if it fails a constitution saving throw of DC13.'
      }
    ]
  }
];

export default characters;