//! Set , Map


//? Set

// ! 1 зберігає унікальні значення
// ! 2 не має ключів
// ! 3 має свої методи

// const mySet = new Set()
// console.log('✌️mySet --->', mySet);

//! add() - додавання нових значень до set

// mySet.add('apple')
// mySet.add('orange')
// mySet.add('apple')// буде проігноровано

// console.log('✌️mySet --->', mySet);


//! size - це властивість яка вказує к-ть ел в set

// console.log(mySet.size);

//! has() - перевірка на значення

// console.log(mySet.has('test'));
// console.log(mySet.has('apple'));

//* Інтерації по set

//! 1 for...of

// for (const element of mySet) {
//   console.log(element);
// }

//! 2 forEach()

// mySet.forEach(el => {
//   console.log(el);
// })

/////////////////////////////////////////

//! delete() - використовується для видалення ел з set

// mySet.delete('apple')

// console.log('✌️mySet --->', mySet);


//! clear() - використовується видаляє всі ел в set

// mySet.clear()

// console.log('✌️mySet --->', mySet);

//! values() - він потрібний для отримання ітератора які містить всі значення

// const myValues = mySet.values()
// console.log('✌️myValues --->', myValues);

// for (const value of myValues) {
//   console.log(value);
// }

//! перетворення set => array

// const myArray = [...mySet]

// console.log('✌️myArray --->', myArray);


/////////////////////////////////////////////////////////////////////


// const array = [1, 1, 1, 2, 2, 3, 3, 3]

// function test(arr){
//   const set = new Set()
//   arr.forEach(el => set.add(el))
//   return [...set]
// }

// console.log(test(array));


//? Map

const myMap = new Map()
console.log('✌️myMap --->', myMap);

//* методи:

//! set() - добавляння нових пар (ключ значення)

myMap.set('name', 'John Black')
myMap.set('age', 30)
myMap.set('city', 'Kyiv')
myMap.set('city', 'Lviv')
myMap.set(1111, 'Lviv')
console.log('✌️myMap --->', myMap);

//! size властивість яка вказує к-ть

console.log(myMap.size);

//! get() - отримання значення за ключем

console.log(myMap.get('name'));
console.log(myMap.get(1111));
console.log(myMap.get('test'));

//! has() - перевірка чи є в Map даний ключ

// console.log(myMap.has('age'));
// console.log(myMap.has('test'));

//! delete() - для видалення 

// myMap.delete(1111)

// console.log('✌️myMap --->', myMap);

//! clear() - видаляє все

// myMap.clear()

// console.log('✌️myMap --->', myMap);


//? Інтерації

//! keys() - вертає всі ключи

for (const key of myMap.keys()) {
  console.log(key);
}

//! values() - вертає всі values

for (const value of myMap.values()) {
  console.log(value);
}

//! entries() - вертає всі ключи values

for (const [key, value] of myMap.entries()) {
  console.log(`${key}: ${value}`);
}


//! forEach()

myMap.forEach((value,key,map) => {
  console.log(`Key: ${key}, Value: ${value}`);
})



//! перетворення map => object
const obj = {}
myMap.forEach((val, key) => obj[key] = val)
console.log('✌️obj --->', obj);