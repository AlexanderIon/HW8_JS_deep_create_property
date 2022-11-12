import order, { optionAttack } from '../functionFoindex.js';

test('test of Order function ', () => {
  const objTest = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,

  };
  const testList = ['name', 'health'];
  const testListOut = [
    { key: 'name', value: 'мечник' },
    { key: 'health', value: 10 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'level', value: 2 },

  ];
  //   const oBjTest = order(objTest, testList);
  // console.log(oBjTest)
  expect(order(objTest, testList)).toEqual(testListOut);
});

test('test option attack', () => {
  const testCharacter1 = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',

      },
    ],
  };
  const testObjOut = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание не доступно',

    },
  ];
  expect(optionAttack(testCharacter1)).toEqual(testObjOut);
});
