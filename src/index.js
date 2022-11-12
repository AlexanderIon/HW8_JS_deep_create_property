// import order, { optionAttack } from './functionFoindex.js';

// const obj = {
//   name: 'мечник',
//   health: 10,
//   level: 2,
//   attack: 80,
//   defence: 40,

// };

// const orderSort = ['name', 'attack'];

// Object.defineProperty(obj,'age',{
//   configurable: false,
//   value:'23',
//   writable: false,
//   enumerable: true

// })
// console.log(obj)

// const character = {
//   name: 'Лучник',
//   type: 'Bowman',
//   health: 50,
//   level: 3,
//   attack: 40,
//   defence: 10,
//   special: [
//     {
//       id: 8,
//       name: 'Двойной выстрел',
//       icon: 'http://...',
//       description: 'Двойной выстрел наносит двойной урон',
//     },
//     {
//       id: 9,
//       name: 'Нокаутирующий удар',
//       icon: 'http://...',
//       // <- обратите внимание, описание "засекречено"
//     },
//   ],
// };

// console.log(optionAttack(obj))
// order(obj, orderSort);

// const proxyObj = new Proxy(obj,{
//     get (target, key, reciever){
//         // console.log(target, key,reciever);
//         return target[key]
//     }
// })

// console.log(proxyObj.name, proxyObj.level)
