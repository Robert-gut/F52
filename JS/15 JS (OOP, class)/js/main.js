// //? OOP class

// class Dog{

//   constructor(name, breed, age){
//     this.name = name
//     this.breed = breed
//     this.age = age
//   }

//   showInfo(){
//     return `Name: ${this.name}, breed: ${this.breed} and age: ${this.age}`
//   }
// }

// // const Bob = new Dog('Bob', 'Taxa', 3)
// // const Jack = new Dog('Jack', 'Shepherd', 6)
// // console.log('✌️Jack --->', Jack);
// // console.log('✌️Bob --->', Bob);

// // console.log('✌️Jack --->', Jack.name);
// // console.log('✌️Jack --->', Jack.age);
// // console.log('✌️Jack --->', Jack.breed);

// // console.log(Bob.showInfo());
// // console.log(Jack.showInfo());

// class HunterDog extends Dog{
//   constructor(name, breed, age, power){
//     super(name,breed,age)
//     // this.name = name
//     // this.breed = breed
//     // this.age = age
//     this.power = power
//   }

//   plusPower(hp){
//     this.power += hp
//   }
//   minusPower(hp){
//     this.power -= hp
//   }

//   showInfo(){
//     return super.showInfo() + ` power: ${this.power}`
//   }

// }

// const Rex = new HunterDog('Rex', 'Bulldog', 4, 100)
// console.log('✌️Rex --->', Rex);
// console.log(Rex.showInfo());

// Rex.plusPower(50)
// console.log(Rex.showInfo());

// Rex.minusPower(129)
// console.log(Rex.showInfo());


// class Cat extends Dog {
//   constructor(name, breed, age, color){
//     super(name,breed,age)
//     this.color = color
//     this.lives = 9
//   }
//   showInfo(){
//     return super.showInfo() + ` color: ${this.color} lives: ${this.lives}`
//   }

//   minusLives(){
//     if(this.lives === 0){
//       return 'error'
//     }
//     this.lives--
//   }

// }

// const Murchik = new Cat('Murchik', 'Bobtail', 2, 'black')
// console.log('✌️Murchik --->', Murchik);

// console.log(Murchik.showInfo());
// Murchik.minusLives()
// Murchik.minusLives()
// Murchik.minusLives()
// Murchik.minusLives()
// Murchik.minusLives()
// Murchik.minusLives()
// Murchik.minusLives()
// Murchik.minusLives()
// Murchik.minusLives()
// Murchik.minusLives()
// Murchik.minusLives()
// Murchik.minusLives()
// console.log(Murchik.showInfo());

//! ////////////////////////////////////////////// day 2

//! 1 Інкапсуляція - приховування полів або методів від прямого впливу


// class Person {
//   #name;
//   #age;
//   static country = 'UK';

//   constructor(name, age){
//     this.#name = name
//     this.#age = age
//   }

//   updateAge(newAge){
//     if(typeof newAge !== 'number'){
//       console.log('type Error');
//       return
//     }
//     if(newAge < this.#age){
//       console.log('Error number');
//     }else{
//       this.#age = newAge
//     }
//   }

//   #date(){
//     return new Date().getFullYear() - this.#age
//   }

//   showAllInfo(){
//     return {
//       name: this.#name.toUpperCase(),
//       age: `${this.#age} (${this.#date()})`,
//       country: Person.country
//     }
//   }
// }


// const user = new Person('Anna', 25)
// console.log('✌️user --->', user);
// console.log('✌️countryr --->', Person.country);
// console.log('✌️user --->', user.country);//err

// user.#age = 24//error
// console.log('✌️user --->', user.#name);//error
// console.log('✌️user --->', user.#age);//error

// user.updateAge(24)
// user.updateAge('26')
// user.updateAge(true)
// console.log('✌️user --->', user);

// user.#date()//errr
// console.log(user.showAllInfo());


//!2 Поліморфізм дозволяє використовувати один метод для різних класів


// class Shape {
//   constructor() {
//     this.type = 'Shape'
//   }

//   printType(){
//     return `This is a ${this.type}`
//   }
// }

// class Circle extends Shape{
//   constructor(radius){
//     super()
//     this.type = 'Circle'
//     this.radius = radius
//   }

//   printType(){
//     return `${super.printType()} readius ${this.radius}`
//   }
// }

// class Rectangle extends Shape {
//   constructor(width, height){
//     super()
//     this.type = 'Rectangle'
//     this.width = width
//     this.height = height
//   }

//   printType(){
//     return `${super.printType()} ${this.width} X ${this.height}`
//   }
// }

// const genericShape = new Shape()
// const circle = new Circle(5)
// const rectangle = new Rectangle(2,4)

// console.log(genericShape.printType());
// console.log(circle.printType());
// console.log(rectangle.printType());

//! 3 Наслідування - дозволяє брати властивості і методи попередніх класів


// class Animal {
//   constructor(name, type, age, color){
//     this.name = name
//     this.type = type
//     this.age = age
//     this.color = color
//   }

//   showAllInfo(){
//     for (const el in this) {
//       console.log(`${el}: ${this[el]}`);
//     }
//   }
// }


// class Vertebrates extends Animal{
//   backbone = true
//   constructor(name, type, age, color,bloodType){
//     super(name, type, age, color)
//     this.bloodType = bloodType
//     this.backbone = true
//   }
// }

// class Invertebrates extends Animal{
//   backbone = false
// }


// class Fish extends Vertebrates{
//   constructor(name, type, age, color,bloodType,scales){
//     super(name, type, age, color ,bloodType)
//     this.scales = scales  
//   }
// }

// class Catfish extends Fish{
//   constructor(name, type, age, color, bloodType, scales){
//     super(name, type, age, color, bloodType, scales)
//   }
// }

// const test = new Catfish('Catfish', 'test', 10, 'black', 'cold', true)
// console.log('✌️test --->', test);

// test.showAllInfo()

//! 4 Абстракці - що вся логіка схована в класі а взаємодія з обєктом виключно через інтерфейси

// class Test{
//   #name
//   constructor(name){
//     this.#name = name
//   }

//   create(key, val){
//     this[key] = val
//   }

//   delete(key){
//     delete this[key]
//   }
  
//   show(key){
//     return this[key]
//   }

//   update(key, val){
//     this[key] = val
//   }

// }


// const test = new Test('test')
// console.log('✌️test --->', test);

// test.create('testCreat', true)
// test.create('testCreat2', true)
// console.log('✌️test --->', test);

// test.delete('testCreat')
// console.log('✌️test --->', test);

// console.log(test.show('testCreat2'));

// test.update('testCreat2', false)
// console.log('✌️test --->', test);



//! GET SET

class Rectangle{
  constructor(width, height){
    this._width = width
    this._height = height
  }

  get width(){
    return this._width
  }

  set width(value){
    this._width = value
  }

  get height(){
    return this._height
  }

  set height(value){
    this._height = value
  }
  
}


const rectangle = new Rectangle(20, 30)
console.log('✌️rectangle --->', rectangle);

rectangle.width = 50
console.log(rectangle.width);

rectangle.height = 60
console.log(rectangle.height);
console.log('✌️rectangle --->', rectangle);

