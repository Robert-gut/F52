//? OBJECT 

//! Створення обєкта

// const obj1 = new Object()
// const obj2 = {}

// console.log('✌️obj1 --->', obj1);
// console.log('✌️obj2 --->', obj2);


//! Синтаксис обєктів

// const objName = {
//   key: value,
//   key: value,
//   key: value,
//   key: value,
//   key: value,
//   key: value,
//   key: value,
//   key: value,
//   key: value,
// }

// const car = {
//   brand: 'BMW',
//   model: 'm5',
//   age: 5,
//   color: 'black',
//   power: 550,
//   cost: 50000,
//   interior: 'yellow',
// }
// console.log('✌️car --->', car);
//! прочітати значення з обєкта

//1
// console.log(car.brand);
// console.log(car.model);
// console.log(`${car.brand} ${car.model} ${car.color} ${car.power}`);


// //2
// const test = 'brand'
// console.log(car['brand']);
// console.log(car[test]);

//! що ми можемо вложувати в обєкт

// const obj = {
//   str: 'string string',//властивостями обєкта
//   number: 1234567890,//властивостями обєкта
//   boolean: true,//властивостями обєкта
//   null: null,//властивостями обєкта
//   undefined: undefined,//властивостями обєкта
//   array: [1,2,3],//властивостями обєкта
//   object: {brand: 'BMW'},//властивостями обєкта
//   function: function () {console.log('function in object')}// методом обєкта
// }

// console.log(obj.str);
// console.log(obj.array[2]);
// console.log(obj.object.brand);
// obj.function()


//! МОДИФІКУВАННЯ ОБЄКТІВ

// const car = {
//   brand: 'BMW',
//   model: 'm5',
//   age: 5,
//   color: 'black',
//   power: 550,
//   cost: 50000,
//   interior: 'yellow',
// }
// console.log('✌️car --->', car);

//? 1 +++ дОДАВАННЯ НОВИХ ВЛАСТИВОСТЕЙ

// car.maxSpead = 340
// console.log('✌️car --->', car);

//? 2 --- ВИДАЛЕННЯ ВЛАСТИВОСТЕЙ З ОБЄКТА

// delete car.color
// console.log('✌️car --->', car);

//? 3 РЕДАГУВАННЯ ВЛАСТИВОСТЕЙ ОБЄКТА

// car.power = 740
// console.log('✌️car --->', car);


//!  КОПІЮВАННЯ ОБЄКТА

// const car = {
//   brand: 'BMW',
//   model: 'm5',
//   age: 5,
//   color: 'black',
//   power: 550,
//   cost: 50000,
//   interior: 'yellow',
// }
// console.log('✌️car --->', car);

// const newCar = car
// console.log('✌️newCar --->', newCar);

// newCar.age = 10

// console.log('✌️car --->', car);
// console.log('✌️newCar --->', newCar);


//! assign() - копіювання обєктів

// const car = {
//   brand: 'BMW',
//   model: 'm5',
//   age: 5,
//   color: 'black',
//   power: 550,
//   cost: 50000,
//   interior: 'yellow',
// }
// console.log('✌️car --->', car);

// const newCar = Object.assign({}, car)
// console.log('✌️newCar --->', newCar);

// newCar.age = 10

// console.log('✌️car --->', car);
// console.log('✌️newCar --->', newCar);


////////////////////////////////////////////////////////////////////////////////////////////////////

// const obj1 = {a: 1, b: 2}
// const obj2 = {b: 3, c: 4}
// const obj3 = {c: 5, d: 6}

// const newObject = Object.assign({}, obj1, obj2, obj3,)
// console.log('✌️newObject --->', newObject);

// ! ПЕРЕВІРКА НА ІСНУВАННЯ ПЕВНОГО КЛЮЧА В ОБЄКТІ АБО ОПЕРАТОР 'IN'


// const car = {
//   brand: 'BMW',
//   model: 'm5',
//   age: 5,
//   color: 'black',
//   power: 550,
//   cost: 50000,
//   interior: 'yellow',
// }
// console.log('✌️car --->', car);

// if('cost' in car){
//   console.log(car.cost);
// }

//! for in

// for (const key in car) {
//   console.log(`${key.toUpperCase()} => ${car[key]}`); 
// }