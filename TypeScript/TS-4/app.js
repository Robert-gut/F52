"use strict";
// console.log('ok');
Object.defineProperty(exports, "__esModule", { value: true });
// interface User{
//   name: String
//   money: Number
// }
// function addMoney(sum: Number, user: User){
//   user.money = user.money + sum
// }
// addMoney(123, {name: 'Ben', money: 100})
//! Визначення змінних
let message = 'hello';
let count = 10;
let like = true;
let nullableValue = null;
let undefinedValue = undefined;
//! Визначення функцій
function add(a, b) {
    return a + b;
}
add(123, 123);
let numbers = add(123, 123);
function showName(name) {
    console.log(name);
}
//! Масиви
const array = [1, 2, 3];
const typleArry = [123, '123', true, [1, 2, 3]];
//! Обєктів
const person = {
    name: 'Alex',
    age: 23
};
//! class
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`hello i'm ${this.name}`);
    }
}
const cat = new Animal('Myrka');
cat.sayHello();
const user = {
    name: 'Alex',
    age: 30,
    email: 'test@gmail.com'
};
////////////////////////////
// let x: number = 1
// if (x > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// switch (x) {
//   case 1:
//     console.log(true);
//     break;
//   default:
//     break;
// }
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }
// for (const key in object) {
//   if (!Object.hasOwn(object, key)) continue;
//   const element = object[key]; 
// }
// for (const element of object) {
// }
//! Модифікатори доступу в class
class Car {
    brand;
    speed;
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    show() {
        return this.brand + this.speed;
    }
}
const bmw = new Car('BMW', 300);
bmw.show();
class SportCar extends Car {
    constructor(brand, speed) {
        super(brand, speed);
    }
}
//# sourceMappingURL=app.js.map