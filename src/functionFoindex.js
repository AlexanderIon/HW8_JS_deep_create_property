export default function order(someObj, someOrder) {
  const needList = [];
  const anyList = [];

  for (const item of Object.keys(someObj)) {
    const itemOflist = {};
    if (someOrder.includes(item)) {
      itemOflist.key = item;
      itemOflist.value = someObj[item];
      needList.push(itemOflist);
    } else {
      itemOflist.key = item;
      itemOflist.value = someObj[item];
      anyList.push(itemOflist);
      anyList.sort((item1, item2) => ((item1.key >= item2.key) ? 1 : -1));
    }
  }
  needList.push(...anyList);
  return needList;
}

export function optionAttack(someCharacter) {
  // console.log(someCharacter)
  const listOfSpecials = Object.create(someCharacter).special;
  for (const item in listOfSpecials) {
    if (!Object.keys(listOfSpecials[item]).includes('description')) {
      listOfSpecials[item].description = 'Описание не доступно';
      // Object.defineProperty(listOfSpecials[item],'description ',{
      //   configurable: false,
      //   value: 'Описание не доступно',
      //   writable: false
      // })
    }
  }

  return listOfSpecials;
}
