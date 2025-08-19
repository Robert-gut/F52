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

//! методи обєктів і this

// const car = {
//   brand: 'BMW',
//   model: 'm5',
//   age: 5,
//   color: 'black',
//   power: 550,
//   cost: 50000,
//   interior: 'yellow',
//   showInfo: function(){
//     console.log(`${this.brand} ${this.model} ${this.color}`);
//   }
// }
// console.log('✌️car --->', car);

// car.showInfo()

//////////////////////////////////////////////////////////////////

// const cars = [
//   {
//     brand: 'BMW',
//     model: 'm3',
//     age: 5,
//     color: 'black',
//     power: 550,
//     cost: 50000,
//     interior: 'yellow',
//     showInfo: function(){
//       console.log(`${this.brand} ${this.model} ${this.color}`);
//     }
//   },
//   {
//     brand: 'BMW',
//     model: 'm4',
//     age: 5,
//     color: 'black',
//     power: 550,
//     cost: 50000,
//     interior: 'yellow',
//     showInfo: function(){
//       console.log(`${this.brand} ${this.model} ${this.color}`);
//     }
//   },
//   {
//     brand: 'BMW',
//     model: 'm5',
//     age: 5,
//     color: 'black',
//     power: 550,
//     cost: 50000,
//     interior: 'yellow',
//     showInfo: function(){
//       console.log(`${this.brand} ${this.model} ${this.color}`);
//     }
//   }
// ]

// cars.forEach(car => {
//   console.log(car);
//   car.showInfo()
// })

////////////////////////////////////////////////////////////////// 2 /////////////////////////////////////////

//? методи і копіювання обєктів

// const car = {
//   brand: 'MB',
//   model: 'gla',
//   maxSpead: 300
// }

// const newCar = car

// newCar.maxSpead = 100
// console.log('✌️car --->', car);
// console.log('✌️newCar --->', newCar);
//* не працює

//! 1 object.assign()

// const car = {
//   brand: 'MB',
//   model: 'gla',
//   maxSpead: 300
// }

// const newCar = Object.assign({}, car)

// newCar.maxSpead = 100
// console.log('✌️car --->', car);
// console.log('✌️newCar --->', newCar);

//! 2 (...)

// const car = {
//   brand: 'MB',
//   model: 'gla',
//   maxSpead: 300
// }

// const newCar = {...car}

// newCar.maxSpead = 100
// console.log('✌️car --->', car);
// console.log('✌️newCar --->', newCar);

//! ВЕЛИКИЙ МІНУ ЦІХ 2 ВАРІАНТІВ
// 1
// const car = {
//   brand: 'MB',
//   model: 'gla',
//   maxSpead: {
//     km: 300,
//     ml: 188
//   }
// }


// const newCar = Object.assign({}, car)

// newCar.maxSpead.km = 100
// newCar.maxSpead.ml = 60
// console.log('✌️car --->', car.maxSpead);
// console.log('✌️newCar --->', newCar.maxSpead);

// 2
// const car = {
//   brand: 'MB',
//   model: 'gla',
//   maxSpead: {
//     km: 300,
//     ml: 188
//   }
// }

// const newCar = {...car}

// newCar.maxSpead.km = 100
// newCar.maxSpead.ml = 60
// console.log('✌️car --->', car.maxSpead);
// console.log('✌️newCar --->', newCar.maxSpead);

//! глибока вкладинісьть

// const car = {
//   brand: 'MB',
//   model: 'gla',
//   maxSpead: {
//     km: 300,
//     ml: 188
//   },
//   productionYear: new Date('2019-05-12')
// }

// const newCarJson = JSON.stringify(car)
// console.log('✌️car --->', car);
// console.log('✌️newCarJson --->', newCarJson);

// const newCar = JSON.parse(newCarJson)
// console.log('✌️newCar --->', newCar);

//* скороточена запис

// const newCar = JSON.parse(JSON.stringify(car))

// newCar.maxSpead.km = 100
// newCar.maxSpead.ml = 60
// console.log('✌️car --->', car.maxSpead);
// console.log('✌️newCar --->', newCar.maxSpead);

//! з чим погано працює JSON

// const car = {
//   brand: 'MB',
//   model: 'gla',
//   maxSpead: {
//     km: 300,
//     ml: 188
//   },
//   productionYear: new Date('2019-05-12'),
//   showInfo: function(){
//     console.log(`${this.brand} ${this.model}`);
//   }
// }

// const newCar = JSON.parse(JSON.stringify(car))

// console.log('✌️car --->', car.productionYear.getFullYear());
// console.log('✌️newCar --->', newCar.productionYear);
// car.showInfo();
// newCar.showInfo();


//! structuredClone()

// const car = {
//   brand: 'MB',
//   model: 'gla',
//   maxSpead: {
//     km: 300,
//     ml: 188
//   },
//   productionYear: new Date('2019-05-12'),
// }

// const newCar = structuredClone(car)

// console.log('✌️car --->', car.productionYear.getFullYear());
// console.log('✌️newCar --->', newCar.productionYear.getFullYear());

//? методи OBJECT

//! Object.keys() - вертає масив стрінгів а саме клюжчів обєкта

const car = {
  brand: 'BMW',
  model: 'm5',
  age: 5,
  color: 'black',
  power: 550,
  cost: 50000,
  interior: 'yellow',
}

const objKeys = Object.keys(car)
console.log('✌️objKeys --->', objKeys);

//! Object.values() - вертає масив всіх value

const objValues = Object.values(car)
console.log('✌️objValues --->', objValues);

//! Object.entries() - вертає масив масивів з ключом і значенням

const objEnries = Object.entries(car)
console.log('✌️objEnries --->', objEnries);

objEnries.forEach(el => console.log(el[0] + '=>' + el[1]))

//! Object.defineProperty() - для добавляння нової властивості в обєкт

const obj = Object.defineProperty(car, 'clearance', {
  value: 35,
  enumerable: true
})
console.log('✌️obj --->', obj);


