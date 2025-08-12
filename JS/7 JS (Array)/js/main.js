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
//   {name: 'Anna'},
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
// const cars = ['Audi', 'MB', 'BMW']
// console.log('✌️cars --->', cars);

//* POP() видаляє елмент з кінеця масива і вертає видалений елемент

// cars.pop();
// console.log('✌️cars --->', cars);

//* SHIFT() видаляє елмент з початку масива і вертає видалений елемент

// cars.shift();
// console.log('✌️cars --->', cars);


//! ////////////////////////////////// 2 day //////////////////////////////////////
//* заміну, видалення, додавання ел в певний індекс

// const cars = ['Porshe', 'MB', 'BMW', 'Skoda', 'Audi', 'Renault']
// console.log('✌️cars --->', cars);
//переприсвоїли
// cars[2] = 'test'
// console.log('✌️cars --->', cars);
//видалення (проблема що при видаленні залишається пустий індекс)
// delete cars[2]
// console.log('✌️cars --->', cars);
// console.log('✌️cars --->', cars[2]);

//! .SPLICE() - видаляти, редагувати і добавляти ел => масив видалених ел
// const cars = ['Porshe', 'MB', 'BMW', 'Skoda', 'Audi', 'Renault']
// console.log('✌️cars --->', cars);

//?1 ВИДАЛЕННЯ ЕЛ (start, к-ть ел)
// cars.splice(3,2)
// console.log('✌️cars --->', cars);

//*return - масив видалених елементів 
// const delCars = cars.splice(3,2)
// console.log('✌️delCars --->', delCars);

//? 2 ЗАМІНА ЕЛ АБО РЕДАГУВАННЯ ЕЛ
// cars.splice(2,1,'Bentley')
// console.log('✌️cars --->', cars);

// cars.splice(3,2, 'Citroen', 'Fiat', 'Peugeot')
// console.log('✌️cars --->', cars);

//? 3 ДОДАВАННЯ НОВОГО ЕЛ В МАСИВ
// cars.splice(2,0,'Mazda')
// console.log('✌️cars --->', cars);

/////////////////////////
// cars.splice(-1,1)//з кінця
// console.log('✌️cars --->', cars);
/////////////////////////

//* 2-а методи копіювання
//!1 SLICE() - копіює весь або частину масива і вертає масив копію
// const cars = ['Porshe', 'MB', 'BMW', 'Skoda', 'Audi', 'Renault']
// console.log('✌️cars --->', cars);

// const copySlice = cars.slice()//1копіюємо весь масив
// const copySlice = cars.slice(0,4)//2копіюємо чатину масива
// console.log('copySlice --->', copySlice);

//!2 .CONCAT() копіювання всього масива з додавання нових ел і вертає новий масив
// const cars = ['Porshe', 'MB', 'BMW', 'Skoda', 'Audi', 'Renault']
// console.log('✌️cars --->', cars);

// const wag = ['Lamborgini', 'Bugatti', 'Seeat']

// const copyConCat = cars.concat('VW','Mazda', wag)
// console.log('✌️copyConCat --->', copyConCat);


// ...............................................................
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const arr3 = [7,8,9]

// const arr = arr1.concat(arr2, arr3)
// console.log('✌️arr --->', arr);

// console.log([...arr1,...arr2,...arr3]);

// ...............................................................

// const myArray = Array.from({ length: 1000 }, () => Math.random());

// function data(arr, count) {
//   let minArr = []
//   const allArrays = []
//   for (let i = 0; i < arr.length; i++) {
//     minArr.push(arr[i])
//     if(minArr.length === count) {
//       allArrays.push(minArr)
//       minArr = []
//     }
//   }
//   return allArrays;
// }

// console.log(data(myArray, 50));

// ...............................................................


//! ///////////////////////////// day 3 /////////////////////////////

//? ПОШУК ЕЛЕМЕНТІВ В МАСИВІ 

// const cars = ['Porshe', 'MB', 'BMW', 'Skoda', 'Audi', 'Renault']
// console.log('✌️cars --->', cars);

//! 1 .INDEXOF() - вертє перший знайдений ел його індекс або -1 якщо нічого не знайдено


// console.log(cars.indexOf('Ferarri'));//-1
// console.log(cars.indexOf('MB'));//1
// console.log(cars.indexOf('Audi'));//1

// console.log(cars.indexOf('BMW', 3));//-1

//* .LASTINDEXOF() - ПРАЦЮЄ ЯК INDEXOF() АЛЕ ШУКАЄ З КІНЦЯ
// console.log(cars.lastIndexOf('BMW'));

//! 2 .INCLUDES() - вертає true якщо ел знайдений і false якщо ні 

// console.log(cars.includes('MB'));//true
// console.log(cars.includes('BMW'));//true
// console.log(cars.includes('Renault'));//true
// console.log(cars.includes('Ferarri'));//false

// console.log(cars.includes('Porshe', 2));//false


//? ПОШУК З СКЛАДНІШИМИ ТИПАМИ АБО З ПЕВНИМИ УМОВАМИ !!!!!!!!!!!!!!

// const cars = [
//   {brand: 'MB', cost: 40000, power: 500, color: 'black'},
//   {brand: 'BMW', cost: 35000, power: 300, color: 'red'},
//   {brand: 'Audi', cost: 27000, power: 240, color: 'grey'},
//   {brand: 'Ford', cost: 10000, power: 178, color: 'darkblue'},
//   {brand: 'Ferarri', cost: 90000, power: 650, color: 'red'}
// ]

//! 1 .FIND() - вертає перший знайдений обєкт або undefined якщо нічого не знайдено

// console.log(cars.find(function(car){
//   return car.cost === 27000
// }));

// console.log(cars.find(car => car.cost === 27000));//скорочена запис
// console.log(cars.find(car => car.brand === 'BMW'));
// console.log(cars.find(car => car.brand.toLowerCase() === 'bmw'));

// console.log(cars.find(car => car.color === 'red' && car.power > 400));
// console.log(cars.find(car => car.color === 'yellow'));//indefined

//! 2 .FINDINDEX() - вертає індекс пешого знайденого елемента

// console.log(cars.findIndex(car => car.color === 'grey'));//2
// console.log(cars.findIndex(car => car.color === 'yellow'));//-1

//! 3 .FILTER() - вертає масив знайдених елементів

// console.log(cars.filter(car => car.color === 'red'));

// console.log(cars.filter(car => car.cost < 30000));
// console.log(cars.filter(car => car.power >= 300));
// console.log(cars.filter(car => car.power >= 300 && car.color === 'red'));

//? СОРТУВАННЯ ЕЛ В МАСИВІ

//! .SORT() - МЕТОД СОРТУВАННЯ і він сортує оригінальний масив


//* STRING
// const cars = ['Porshe', 'MB', 'BMW', 'Skoda', 'Audi', 'Renault']
// console.log('✌️cars --->', cars);

// console.log(cars.sort());

// const test = ['d', 'b', 'a', 'c']
// console.log(test.sort())

//* NUMBER

// const numbers = [4,56,7,54,4,3,32,56,6,1,2,5]

// console.log(numbers.sort());
// console.log(numbers.sort((a,b) => a - b));//1 => 9
// console.log(numbers.sort((a,b) => b - a));//9 => 1

// console.log([...numbers].sort((a,b) => b - a));//9 => 1

// console.log('✌️numbers --->', numbers);


//////////////////////////////////////////////////////////////////////////
// const cars = [
//   {brand: 'MB', cost: 40000, power: 500, color: 'black'},
//   {brand: 'BMW', cost: 35000, power: 300, color: 'red'},
//   {brand: 'Audi', cost: 27000, power: 240, color: 'grey'},
//   {brand: 'Ford', cost: 10000, power: 178, color: 'darkblue'},
//   {brand: 'Ferarri', cost: 90000, power: 650, color: 'red'}
// ]
// console.log('✌️cars --->', cars);

// cars.sort((a,b) => a.cost - b.cost)
// console.log('✌️cars --->', cars);
//////////////////////////////////////////////////////////////////////////

//! .REVERSE() - ВІДЗЕРКАЛЮЄ МАСИВ

// const cars = ['Porshe', 'MB', 'BMW', 'Skoda', 'Audi', 'Renault']
// console.log('✌️cars --->', cars);

// console.log(cars.reverse());

//? МОТОДИ МОДИФІКУВАННЯ


//! .MAP() - ВЕРТАЄ НОВИЙ МАСИВ І ДАЄ МОЖЛИВІСТЬ ЙОГО МОДИФІКУВАТИ

// const cars = ['Porshe', 'MB', 'BMW', 'Skoda', 'Audi', 'Renault']
// console.log('✌️cars --->', cars);

// const newCars = cars.map(car => car.toUpperCase())
// console.log(newCars);

// const carsSmile = cars.map(car => `🚗 ${car.toUpperCase()} 🚗`)
// console.log('✌️carsSmile --->', carsSmile);

// console.log(cars.map((car, index, arr) => `${car} => ${index} => ${arr}`));

//! .SPLIT() - розділяє строку по символу і вертає масив

// const text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nobis facere corrupti recusandae quisquam excepturi facilis illo ipsum ipsa, voluptas animi, non sit deserunt fugit repellat aperiam voluptatum quidem nemo.'

// console.log(text.split('.'));
// console.log(text.split(','));
// console.log(text.split(' '));

// const email = 'superAdmin@gmail.com'
// console.log(email.split('@')[0]);
// console.log(email.split('@')[1]);

//! .JOIN() - РОБИТЬ З МАСИВА STRING

// const arrWords = text.split(' ')
// console.log('✌️arrWords --->', arrWords);

// console.log(arrWords.join());
// console.log(arrWords.join(' '));
// console.log(arrWords.join('+++++'));

//! FOREACH() - ПРОСТО ПРОХОДИТЬСЯ ПО КОЖНОМУ ЕЛЕМЕНТУ МАСИВА ЯК ПРОСТИЙ ЦИКЛ

// const cars = ['Porshe', 'MB', 'BMW', 'Skoda', 'Audi', 'Renault']
// console.log('✌️cars --->', cars);

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// for (const el of cars) {
//   console.log(el);
// }

// cars.forEach((car)=>{
//   console.log(car);
// })

// cars.forEach((item, index, array) => {
//   console.log(`${item} => ${index} => ${array}`);
// })

//! reducer() / reduceRight()

// const numbers = [1,2,3,4,5,55,564,54,87,9898]
// console.log('✌️numbers --->', numbers);

// let suma = 0
// numbers.forEach(el => {
//   suma += el
// })
// console.log('✌️suma --->', suma);


// const reducer = numbers.reduce((prevValue, item, index, arr) => {
//   return prevValue + item
// }, 0)

// console.log('✌️reducer --->', reducer);

//! ПЕРЕВІРКА НА МАСИВ (ТОБТО ЧИ ДАНИЙ ЕЛ Є МАСИВОМ) Array.isArray()


console.log(typeof 12);
console.log(typeof '12');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);


console.log(typeof {name: 'Rober'});
console.log(typeof [1,2,3]);

console.log(Array.isArray([1,2,3]));
console.log(Array.isArray({name: 'Rober'}));
