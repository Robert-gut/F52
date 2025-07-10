//? Arrays (Масви)

//! Створити масив

// const array = new Array()
// const array1 = []

//! Синтаксис  
// const arrNumbers = [1, 2, 3,]

//! Наповнення масивів (type)

// const arrType = [
//   1,
//   'str',
//   true,
//   null,
//   undefined,
//   function(){
//     return 1
//   },
//   [1,2,3],
//   {name: 'Anna'}
// ]
// console.log('✌️arrType --->', arrType);

//! Як отримати якесь значення з масива (ІНДЕКСАМ)

// console.log(arrType[0]);
// console.log(arrType[1]);
// console.log(arrType[2]);
// console.log(arrType[3]);
// console.log(arrType[4]);
// console.log(arrType[5]());
// console.log(arrType[6][2]);
// console.log(arrType[7].name);

// console.log(arrType[8]);//undefained

//! Довжина масива (length)

// console.log(arrType.length);

//////////////////////////////////////////////////////////////////////////////////////
// function name(start, end) {
//   let endArr = end
//   if(end >= arrType.length){
//     endArr = arrType.length
//   }

//   for (let i = start; i < arrType.length; i++) {
//     console.log(arrType[i]);
//     if(endArr === i)return
//   }
// }

// name(2,1000)
//////////////////////////////////////////////////////////////////////////////////////

// const matrix = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9],
// ]

// matrix[1][2]

//! копіювання масивів !!!!!!!!!! (2 name на 1 оригінальний масив)

// const arr = [1,2,3]
// console.log('✌️arr --->', arr);

// const newArr = arr
// console.log('✌️newArr --->', newArr);

// newArr[0] = 999

// console.log('✌️arr --->', arr);
// console.log('✌️newArr --->', newArr);

//! Редагування значень масива

// const arr = [1,2,3]
// console.log('✌️arr --->', arr);

// arr[1] = '2'
// arr[2] = 'test'
// arr[0] = true
// console.log('✌️arr --->', arr);

//! нове значення

// arr[3] = 'newElArr'
// console.log('✌️arr --->', arr);

// arr[arr.length] = 'test2'
// console.log('✌️arr --->', arr);


//? МЕТОДИ МАСИВІВ

//!  ............................. що таке МЕТОД ...........................
// function returnOne(params) {//!функція
//   return 1//!функція
// }//!функція

// const obj = {//!метод
//   retutnOne: function(params) {//!метод
//     return 1//!метод
//   }//!метод
// }//!метод

// returnOne()//!функція
// obj.retutnOne()//!метод
//!  ............................. що таке МЕТОД ...........................

//! ДОБАВЛЯННЯ ЕЛЕМЕНТІВ В МАСИВ
// const cars = ['Audi', 'MB', 'BMW']
// console.log('✌️cars --->', cars);

//* PUSH() добавляє елмент в кінець масива і вертає нову довжину масива

// cars.push('VW')
// console.log('✌️cars --->', cars);

//* UNSHIFT() добавляє елмент в початок масива і вертає нову довжину масива

// cars.unshift('Opel')
// console.log('✌️cars --->', cars);

//! ВИДАЛЕННЯ ЕЛЕМЕНТІВ В МАСИВІ
const cars = ['Audi', 'MB', 'BMW']
console.log('✌️cars --->', cars);

//* POP() видаляє елмент з кінеця масива і вертає видалений елемент

cars.pop();
console.log('✌️cars --->', cars);

//* SHIFT() видаляє елмент з початку масива і вертає видалений елемент

cars.shift();
console.log('✌️cars --->', cars);