const characters = [
  {
    name: 'Hunter',
    weapon: 'Bow',
    armour: 14,
    health: 12,
    description: 'This character is sick!!',
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
    name: 'Barbarian',
    weapon: 'Great Axe',
    armour: 16,
    health: 20,
    description: 'This character is sick!!',
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
    name: 'Sorcerer',
    weapon: 'Wand',
    armour: 12,
    health: 10,
    description: 'This character is sick!!',
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
    name: 'Sorcerer',
    weapon: 'Wand',
    armour: 12,
    health: 10,
    description: 'This character is sick!!',
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
    name: 'Sorcerer',
    weapon: 'Wand',
    armour: 12,
    health: 10,
    description: 'This character is sick!!',
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
    name: 'Sorcerer',
    weapon: 'Wand',
    armour: 12,
    health: 10,
    description: 'This character is sick!!',
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