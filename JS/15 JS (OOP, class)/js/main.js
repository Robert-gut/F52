//? OOP class

class Dog{

  constructor(name, breed, age){
    this.name = name
    this.breed = breed
    this.age = age
  }

  showInfo(){
    return `Name: ${this.name}, breed: ${this.breed} and age: ${this.age}`
  }
}

// const Bob = new Dog('Bob', 'Taxa', 3)
// const Jack = new Dog('Jack', 'Shepherd', 6)
// console.log('✌️Jack --->', Jack);
// console.log('✌️Bob --->', Bob);

// console.log('✌️Jack --->', Jack.name);
// console.log('✌️Jack --->', Jack.age);
// console.log('✌️Jack --->', Jack.breed);

// console.log(Bob.showInfo());
// console.log(Jack.showInfo());

class HunterDog extends Dog{
  constructor(name, breed, age, power){
    super(name,breed,age)
    // this.name = name
    // this.breed = breed
    // this.age = age
    this.power = power
  }

  plusPower(hp){
    this.power += hp
  }
  minusPower(hp){
    this.power -= hp
  }

  showInfo(){
    return super.showInfo() + ` power: ${this.power}`
  }

}

const Rex = new HunterDog('Rex', 'Bulldog', 4, 100)
console.log('✌️Rex --->', Rex);
console.log(Rex.showInfo());

Rex.plusPower(50)
console.log(Rex.showInfo());

Rex.minusPower(129)
console.log(Rex.showInfo());


class Cat extends Dog {
  constructor(name, breed, age, color){
    super(name,breed,age)
    this.color = color
    this.lives = 9
  }
  showInfo(){
    return super.showInfo() + ` color: ${this.color} lives: ${this.lives}`
  }

  minusLives(){
    if(this.lives === 0){
      return 'error'
    }
    this.lives--
  }

}

const Murchik = new Cat('Murchik', 'Bobtail', 2, 'black')
console.log('✌️Murchik --->', Murchik);

console.log(Murchik.showInfo());
Murchik.minusLives()
Murchik.minusLives()
Murchik.minusLives()
Murchik.minusLives()
Murchik.minusLives()
Murchik.minusLives()
Murchik.minusLives()
Murchik.minusLives()
Murchik.minusLives()
Murchik.minusLives()
Murchik.minusLives()
Murchik.minusLives()
console.log(Murchik.showInfo());

