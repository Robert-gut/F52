// console.log('ok');


// interface User{
//   name: String
//   money: Number
// }

// function addMoney(sum: Number, user: User){
//   user.money = user.money + sum
// }

// addMoney(123, {name: 'Ben', money: 100})

//! Визначення змінних

let message: string = 'hello'
let count: number = 10
let like: boolean = true
let nullableValue: null = null
let undefinedValue: undefined = undefined

//! Визначення функцій

function add(a: number, b: number):number{
  return a + b
}

add(123, 123)

let numbers: number = add(123, 123)

function showName(name:string):void{
  console.log(name); 
}

//! Масиви

const array: number[] = [1,2,3]
const typleArry: [number,string,boolean, number[]] = [123, '123', true, [1,2,3]]


//! Обєктів

const person: {name: string, age: number} = {
  name: 'Alex',
  age: 23
} 

//! class

class Animal{
  name: string

  constructor(name: string) {
    this.name = name
  }

  sayHello(): void{
    console.log(`hello i'm ${this.name}`);
  }
}

const cat = new Animal('Myrka')
cat.sayHello()

//! interface

interface IPerson{
  name: string,
  age: number,
  email?: string
}

const user: IPerson = {
  name: 'Alex',
  age: 30,
  email: 'test@gmail.com'
}

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

class Car{
  private brand: string
  protected speed: number
  constructor(brand: string, speed: number) {
   this.brand = brand 
   this.speed = speed
  }
  show(){
    return this.brand + this.speed
  }
}

const bmw = new Car('BMW', 300)
bmw.show()

class SportCar extends Car{
  constructor(brand:string, speed: number){
    super(brand,speed)
  }

}