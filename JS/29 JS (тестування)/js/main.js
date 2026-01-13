//! 1 тестування простих матиматичних функцій

// function add(a,b){
//   return a + b
// }


// console.assert(add(5,5) === 10, 'Тест 1 провалений 5 + 5 має бути 10(number)')
// console.assert(add(-1, 5) === 4, 'Тест 2 провалений(number)')
// console.assert(add(0, 0) === 0, 'Тест 3 провалений(number)')
// console.assert(add(1.5, 2.5) === 4, 'Тест 5 провалений (number)')

//! 2 тестування fn яка працює з string

// function greet(name) {
//   return `Привіт, ${name}!`
// }

// console.assert(greet('Іван') === `Привіт, Іван!`, 'Тест 1 провалений(string)')
// console.assert(greet('') === `Привіт, !`, 'Тест 2 провалений(string)')
// console.assert(greet(' ') === `Привіт,  !`, 'Тест 3 провалений(string)')

//! 3 тестування fn з масивами

function findMax(arr){
  if(!arr || arr.length === 0){
    return undefined
  }

  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if(arr[i] > max){
      max = arr[i]
    }
  }
  return max
}

console.assert(findMax([1,2,3]) === 3, 'Тест 1 провалений (array)')
console.assert(findMax([]) === undefined, 'Тест 2 провалений (array)')
console.assert(findMax() === undefined, 'Тест 3 провалений (array)')
console.assert(findMax([-1,-2,-3]) === -1, 'Тест 4 провалений (array)')

//! 3 тестування fn з обєктами

function createUser(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: `${firstName} ${lastName}`
  }
}

const user1 = createUser('Іван', 'Ярмолюк')

console.assert(user1.firstName === 'Іван', 'Тест 1 провалений (object)')
console.assert(user1.lastName === 'Ярмолюк', 'Тест 2 провалений (object)')
console.assert(user1.fullName === 'Іван Ярмолюк', 'Тест 3 провалений (object)')

//! 4 тестування fn з умовними операторами

function isEven(num){
  if(typeof num !== 'number' || !Number.isInteger(num)){
    return null
  }
  return num % 2 === 0
}

console.assert(isEven(4) === true, 'Тест 1 провалений (оператори)')
console.assert(isEven(7) === false, 'Тест 2 провалений (оператори)')
console.assert(isEven(0) === true, 'Тест 3 провалений (оператори)')
console.assert(isEven(3.14) === null, 'Тест 4 провалений (оператори)')
console.assert(isEven('hello') === null, 'Тест 5 провалений (оператори)')


////////////////////////////////////////////////////////////////////////////////////


function describe(description, fn){
  console.log(description);
  fn()
}

function it(message, fn){
  try {
    fn()
    console.log(`✅ ${message}`);
  } catch (error) {
    console.error(`❌ ${message}: ${error}`)
  }
}

function expect(actual){
  return {
    toBe: (expected) => {
      if(actual !== expected){
        throw new Error(`Очікувалося ${expected}, отримали ${actual}`)
      }
    },
    toEqual: (expected) => {
      if(JSON.stringify(actual) !== JSON.stringify(expected)){
        throw new Error(`Очікувалося ${JSON.stringify(expected)}, отримали ${JSON.stringify(actual)}`)
      }
    }
  }
}


function add(a,b){
  return a + b
}


describe('Функція <<<add>>>', () => {
  it('Повинна повернути суму двох позитивних чисел', ()=>{
    expect(add(5,5)).toBe(10)
  })
  it('Повинна працювати з позитивними і відємними числами', ()=>{
    expect(add(-1,5)).toBe(5)
  })
  it('Повинна повернути число 0', ()=>{
    expect(add(0,0)).toBe(0)
  })
})




function greet(name) {
  return `Привіт, ${name}!`
}

describe('Функція <<<greet>>>', () => {
  it('Повернути правельне привітання з іменем', () => {
    expect(greet('Іван')).toBe('Привіт, Іван!')
  })
  it('Повернути правельне привітання з прожнім іменем', () => {
    expect(greet()).toBe('Привіт, Іван!')
  })
})

[1,2,3].filter((el, index, arr)=> {})